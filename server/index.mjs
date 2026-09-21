import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { createReadStream, existsSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath, parse } from "node:url";

const serverDir = resolve(fileURLToPath(new URL(".", import.meta.url)));
const root = resolve(serverDir, "..");
const publicDir = resolve(root, "dist");
const port = Number(process.env.PORT || 3000);

const contacts = {
  general: "info@karcast.app",
  support: "support@karcast.app",
  suggestion: "feedback@karcast.app",
  experience: "feedback@karcast.app"
};

const limits = {
  name: 80,
  email: 160,
  message: 2500,
  phoneModel: 120,
  androidVersion: 60,
  carModel: 120,
  karcastVersion: 60
};

const submissions = new Map();
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:4173,https://karcast.app")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store"
  });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolveBody, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 12000) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolveBody(body));
    req.on("error", reject);
  });
}

function clean(value, max) {
  return String(value || "").trim().slice(0, max);
}

function validate(payload) {
  const messageType = clean(payload.messageType, 30);
  const data = {
    name: clean(payload.name, limits.name),
    email: clean(payload.email, limits.email),
    messageType,
    message: clean(payload.message, limits.message),
    phoneModel: clean(payload.phoneModel, limits.phoneModel),
    androidVersion: clean(payload.androidVersion, limits.androidVersion),
    carModel: clean(payload.carModel, limits.carModel),
    karcastVersion: clean(payload.karcastVersion, limits.karcastVersion),
    website: clean(payload.website, 200)
  };

  const errors = {};
  if (!data.name) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!contacts[data.messageType]) errors.messageType = "Please choose a message type.";
  if (data.message.length < 10) errors.message = "Please enter at least 10 characters.";
  if (data.website) errors.form = "Submission could not be accepted.";

  return { data, errors };
}

function isRateLimited(req) {
  const ip = req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket.remoteAddress || "unknown";
  const now = Date.now();
  const current = submissions.get(ip) || [];
  const recent = current.filter((time) => now - time < 15 * 60 * 1000);
  recent.push(now);
  submissions.set(ip, recent);
  return recent.length > 5;
}

async function sendEmail(data) {
  const apiKey = process.env.EMAIL_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!apiKey || !from) {
    return { ok: false, code: "not_configured" };
  }

  const recipient = contacts[data.messageType];
  const supportDetails = data.messageType === "support"
    ? `\n\nOptional support details:\nPhone model: ${data.phoneModel || "Not provided"}\nAndroid version: ${data.androidVersion || "Not provided"}\nCar model: ${data.carModel || "Not provided"}\nKarCast version: ${data.karcastVersion || "Not provided"}`
    : "";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: data.email,
      subject: `KarCast ${data.messageType} message from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nType: ${data.messageType}\n\n${data.message}${supportDetails}`
    })
  });

  if (!response.ok) return { ok: false, code: "provider_rejected" };
  return { ok: true };
}

async function handleContact(req, res) {
  const origin = req.headers.origin;
  if (origin && !allowedOrigins.includes(origin)) {
    return sendJson(res, 403, { ok: false, message: "This origin is not allowed." });
  }
  if (isRateLimited(req)) {
    return sendJson(res, 429, { ok: false, message: "Too many messages. Please try again later." });
  }

  try {
    const body = await readBody(req);
    const payload = JSON.parse(body || "{}");
    const { data, errors } = validate(payload);
    if (Object.keys(errors).length) {
      return sendJson(res, 400, { ok: false, errors });
    }

    const result = await sendEmail(data);
    if (!result.ok && result.code === "not_configured") {
      return sendJson(res, 503, {
        ok: false,
        message: "Email delivery is not configured yet. Please use the direct email links on this page."
      });
    }
    if (!result.ok) {
      return sendJson(res, 502, {
        ok: false,
        message: "The email provider did not accept the message. Please try again or use the direct email links."
      });
    }
    sendJson(res, 200, { ok: true, message: "Thanks. Your message has been sent." });
  } catch {
    sendJson(res, 400, { ok: false, message: "We could not read that submission." });
  }
}

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

function serveStatic(req, res) {
  const { pathname } = parse(req.url);
  const requested = pathname === "/" ? "/index.html" : decodeURIComponent(pathname);
  const filePath = normalize(join(publicDir, requested));
  if (!filePath.startsWith(publicDir) || !existsSync(filePath)) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }
  res.writeHead(200, {
    "content-type": mime[extname(filePath)] || "application/octet-stream",
    "x-content-type-options": "nosniff"
  });
  createReadStream(filePath).pipe(res);
}

createServer(async (req, res) => {
  if (req.method === "OPTIONS" && req.url === "/api/contact") {
    res.writeHead(204, {
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type",
      "access-control-max-age": "600"
    });
    res.end();
    return;
  }
  if (req.method === "POST" && req.url === "/api/contact") return handleContact(req, res);
  if (req.method === "GET" || req.method === "HEAD") return serveStatic(req, res);
  res.writeHead(405, { "content-type": "text/plain; charset=utf-8" });
  res.end("Method not allowed");
}).listen(port, "0.0.0.0", () => {
  console.log(`KarCast preview running at http://localhost:${port}`);
  readFile(join(publicDir, "index.html")).catch(() => {
    console.warn(`No built site found in ${publicDir}. Run npm run build for production.`);
  });
});
