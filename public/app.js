const config = window.KARCAST_CONFIG;

const translations = {
  en: {
    skip: "Skip to content",
    menu: "Menu",
    nav: { features: "Features", how: "How It Works", pricing: "Pricing", support: "Support" },
    cta: { play: "Get it on Google Play", soon: "Coming soon on Google Play", how: "How It Works" },
    hero: {
      eyebrow: "Made for compatible car browsers",
      title: "Your Android Auto experience. On your car’s screen.",
      description: "Bring Android Auto from your phone to your compatible car browser, with KarCast’s focus on smooth interaction and straightforward setup.",
      price: "Just AED 5 / month",
      compat: "Requires an Android phone, Android Auto, a compatible car browser, and a Wi-Fi connection path.",
      badge: "Phone to car screen",
      visualTitle: "Simple by design",
      visualBody: "Connect over Wi-Fi and open KarCast in your car browser."
    },
    flow: { phone: "Android phone", wifi: "Wi-Fi connection", screen: "Car browser" },
    what: {
      eyebrow: "What is KarCast?",
      title: "A clear path from your phone to your car browser.",
      body: "KarCast helps bring the Android Auto experience running on your Android phone to a compatible browser on your car screen. It is designed so you can follow a guided setup, connect over Wi-Fi, and open the address shown by the app in the car browser."
    },
    why: {
      eyebrow: "Why KarCast?",
      title: "Focused on the experience that matters in the car.",
      b1: { title: "Performance-focused design", body: "Designed for smooth visuals and responsive interaction on your compatible car screen." },
      b2: { title: "A simple monthly price", body: "Enjoy KarCast for just AED 5 per month." },
      b3: { title: "Clear setup", body: "A guided connection process helps you get started." },
      b4: { title: "A familiar experience", body: "Bring the Android Auto interface and supported apps to your car’s screen." }
    },
    features: {
      eyebrow: "Features",
      title: "Built around familiar Android Auto moments.",
      nav: { title: "Navigation", body: "Use navigation experiences available through Android Auto on your phone and view them on a compatible car browser." },
      music: { title: "Music and podcasts", body: "Bring supported Android Auto media experiences to the car screen while your phone remains the source." },
      aa: { title: "Familiar interface", body: "Keep the Android Auto interface at the center, with setup language that stays clear and practical." }
    },
    how: {
      eyebrow: "How it works",
      title: "Three steps from install to session.",
      s1: { title: "Install KarCast", body: "Download the Android app and complete the initial setup." },
      s2: { title: "Connect your car", body: "Connect the car’s Wi-Fi to the phone’s hotspot." },
      s3: { title: "Open and start", body: "Open the address provided by KarCast in the car’s browser and start the session." }
    },
    demo: {
      eyebrow: "See KarCast in action",
      title: "A real demo belongs here when ready.",
      fallback: "No product demo video is configured yet. This static visual is illustrative and should be replaced with real product media before launch."
    },
    compat: {
      eyebrow: "Compatibility",
      title: "What you need to check before you start.",
      note: "Need help checking a specific setup? Contact support with your phone model, Android version, car model, and KarCast version."
    },
    pricing: {
      eyebrow: "Pricing",
      name: "KarCast Monthly",
      price: "AED 5 / month",
      body: "A simple monthly subscription for your KarCast experience.",
      cta: "Get KarCast on Google Play"
    },
    faq: {
      eyebrow: "FAQ",
      title: "Straight answers before you install.",
      items: [
        ["What is KarCast?", "KarCast brings the Android Auto experience from your Android phone to a compatible browser on your car screen."],
        ["How does it connect to my car?", "After setup, connect your car’s Wi-Fi to your phone’s hotspot, then open the address shown by KarCast in the car browser."],
        ["Which phones and cars are compatible?", "You need an Android phone with Android Auto and a car screen browser that can open the local address provided by the app. Specific tested devices should be added before launch."],
        ["Do I need a hotspot?", "Yes. The current setup instructions require connecting the car’s Wi-Fi to the phone’s hotspot."],
        ["Do I need internet access?", "Some Android Auto apps and services may need internet access from your phone. The website should not promise offline operation."],
        ["How does audio work?", "Audio behavior can depend on your phone, car, Android Auto setup, and browser behavior. Contact support with your specific setup if you need help."],
        ["Does it support iPhone or CarPlay?", "No iPhone or CarPlay support is currently advertised for this website. KarCast is presented as an Android and Android Auto product."],
        ["How much does it cost?", "KarCast Monthly is AED 5 per month."],
        ["How can I get support?", "Email support@karcast.app or use the support form on this page."]
      ]
    },
    support: {
      eyebrow: "Support & Feedback",
      title: "We’re here to help.",
      body: "Need help getting started, have a question, or want to suggest an improvement? Get in touch with the KarCast team.",
      general: "General information",
      tech: "Technical support",
      feedback: "Feedback and suggestions"
    },
    form: {
      name: "Name",
      email: "Email address",
      type: "Message type",
      general: "General inquiry",
      support: "Technical support",
      suggestion: "Feature suggestion",
      experience: "Share an experience",
      phone: "Phone model",
      android: "Android version",
      car: "Car model",
      version: "KarCast version",
      message: "Message",
      note: "Submissions are private by default and are not published as testimonials.",
      submit: "Submit message",
      loading: "Sending message...",
      invalid: "Please complete the required fields.",
      failure: "Email delivery is not configured yet. Please use the direct email links on this page."
    },
    final: {
      title: "Bring KarCast to your car.",
      price: "AED 5 / month.",
      qr: "QR code will appear here after the real Google Play listing URL is configured."
    },
    footer: {
      body: "Bring Android Auto from your phone to a compatible car browser with a clear, focused setup.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      responsyve: "Created by Responsyve",
      disclaimer: "KarCast is an independent product and is not affiliated with or endorsed by Google or Tesla."
    }
  },
  ar: {
    skip: "تجاوز إلى المحتوى",
    menu: "القائمة",
    nav: { features: "المزايا", how: "طريقة العمل", pricing: "السعر", support: "الدعم" },
    cta: { play: "احصل عليه من Google Play", soon: "قريباً على Google Play", how: "طريقة العمل" },
    hero: {
      eyebrow: "مصمم لمتصفحات السيارات المتوافقة",
      title: "تجربة Android Auto. على شاشة سيارتك.",
      description: "انقل Android Auto من هاتفك إلى متصفح سيارتك المتوافق، مع تركيز KarCast على التفاعل السلس والإعداد الواضح.",
      price: "فقط 5 دراهم شهرياً",
      compat: "يتطلب هاتف Android وAndroid Auto ومتصفح سيارة متوافقاً ومسار اتصال Wi‑Fi.",
      badge: "من الهاتف إلى شاشة السيارة",
      visualTitle: "بساطة في التصميم",
      visualBody: "اتصل عبر Wi-Fi وافتح KarCast في متصفح السيارة."
    },
    flow: { phone: "هاتف Android", wifi: "اتصال Wi-Fi", screen: "متصفح السيارة" },
    what: {
      eyebrow: "ما هو KarCast؟",
      title: "مسار واضح من هاتفك إلى متصفح السيارة.",
      body: "يساعد KarCast على عرض تجربة Android Auto العاملة على هاتف Android في متصفح متوافق على شاشة السيارة. صمم ليساعدك على اتباع إعداد موجه، والاتصال عبر Wi‑Fi، وفتح العنوان الذي يظهره التطبيق في متصفح السيارة."
    },
    why: {
      eyebrow: "لماذا KarCast؟",
      title: "تركيز على التجربة المهمة داخل السيارة.",
      b1: { title: "تصميم يركز على الأداء", body: "مصمم لعرض بصري سلس وتفاعل سريع على شاشة سيارتك المتوافقة." },
      b2: { title: "سعر شهري بسيط", body: "استمتع بـ KarCast مقابل 5 دراهم شهرياً فقط." },
      b3: { title: "إعداد واضح", body: "تساعدك عملية اتصال موجهة على البدء." },
      b4: { title: "تجربة مألوفة", body: "انقل واجهة Android Auto والتطبيقات المدعومة إلى شاشة سيارتك." }
    },
    features: {
      eyebrow: "المزايا",
      title: "مصمم حول لحظات Android Auto المألوفة.",
      nav: { title: "الملاحة", body: "استخدم تجارب الملاحة المتاحة عبر Android Auto على هاتفك واعرضها في متصفح سيارة متوافق." },
      music: { title: "الموسيقى والبودكاست", body: "اعرض تجارب الوسائط المدعومة في Android Auto على شاشة السيارة بينما يبقى الهاتف هو المصدر." },
      aa: { title: "واجهة مألوفة", body: "يبقى Android Auto في المركز مع لغة إعداد واضحة وعملية." }
    },
    how: {
      eyebrow: "طريقة العمل",
      title: "ثلاث خطوات من التثبيت إلى بدء الجلسة.",
      s1: { title: "ثبّت KarCast", body: "نزّل تطبيق Android وأكمل الإعداد الأولي." },
      s2: { title: "وصّل سيارتك", body: "وصّل Wi‑Fi السيارة بنقطة اتصال الهاتف." },
      s3: { title: "افتح وابدأ", body: "افتح العنوان الذي يقدمه KarCast في متصفح السيارة وابدأ الجلسة." }
    },
    demo: {
      eyebrow: "شاهد KarCast أثناء العمل",
      title: "مكان عرض المنتج الحقيقي عند توفره.",
      fallback: "لا يوجد فيديو عرض حقيقي مكوّن حالياً. هذه الصورة توضيحية ويجب استبدالها بوسائط حقيقية للمنتج قبل الإطلاق."
    },
    compat: {
      eyebrow: "التوافق",
      title: "ما تحتاج إلى التحقق منه قبل البدء.",
      note: "هل تحتاج إلى مساعدة في إعداد محدد؟ تواصل مع الدعم وأرسل طراز الهاتف وإصدار Android وطراز السيارة وإصدار KarCast."
    },
    pricing: {
      eyebrow: "السعر",
      name: "KarCast الشهري",
      price: "5 دراهم / شهر",
      body: "اشتراك شهري بسيط لتجربة KarCast.",
      cta: "احصل على KarCast من Google Play"
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: "إجابات واضحة قبل التثبيت.",
      items: [
        ["ما هو KarCast؟", "ينقل KarCast تجربة Android Auto من هاتف Android إلى متصفح متوافق على شاشة السيارة."],
        ["كيف يتصل بسيارتي؟", "بعد الإعداد، وصّل Wi‑Fi السيارة بنقطة اتصال الهاتف، ثم افتح العنوان الذي يظهره KarCast في متصفح السيارة."],
        ["ما الهواتف والسيارات المتوافقة؟", "تحتاج إلى هاتف Android مع Android Auto ومتصفح سيارة يمكنه فتح العنوان المحلي الذي يقدمه التطبيق. يجب إضافة الأجهزة المختبرة المحددة قبل الإطلاق."],
        ["هل أحتاج إلى نقطة اتصال؟", "نعم. تعليمات الإعداد الحالية تتطلب توصيل Wi‑Fi السيارة بنقطة اتصال الهاتف."],
        ["هل أحتاج إلى اتصال إنترنت؟", "قد تحتاج بعض تطبيقات وخدمات Android Auto إلى اتصال إنترنت من الهاتف. لا يعد الموقع بتشغيل كامل دون اتصال."],
        ["كيف يعمل الصوت؟", "قد يختلف سلوك الصوت حسب الهاتف والسيارة وإعداد Android Auto وسلوك المتصفح. تواصل مع الدعم إذا احتجت مساعدة لإعدادك."],
        ["هل يدعم iPhone أو CarPlay؟", "لا يتم الإعلان حالياً عن دعم iPhone أو CarPlay في هذا الموقع. يقدم KarCast كمنتج Android وAndroid Auto."],
        ["كم يكلف؟", "اشتراك KarCast الشهري هو 5 دراهم شهرياً."],
        ["كيف أحصل على الدعم؟", "راسل support@karcast.app أو استخدم نموذج الدعم في هذه الصفحة."]
      ]
    },
    support: {
      eyebrow: "الدعم والملاحظات",
      title: "نحن هنا للمساعدة.",
      body: "هل تحتاج إلى مساعدة للبدء، أو لديك سؤال، أو تريد اقتراح تحسين؟ تواصل مع فريق KarCast.",
      general: "معلومات عامة",
      tech: "الدعم الفني",
      feedback: "الملاحظات والاقتراحات"
    },
    form: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      type: "نوع الرسالة",
      general: "استفسار عام",
      support: "دعم فني",
      suggestion: "اقتراح ميزة",
      experience: "مشاركة تجربة",
      phone: "طراز الهاتف",
      android: "إصدار Android",
      car: "طراز السيارة",
      version: "إصدار KarCast",
      message: "الرسالة",
      note: "المشاركات خاصة افتراضياً ولا تنشر كشهادات عملاء.",
      submit: "إرسال الرسالة",
      loading: "جاري إرسال الرسالة...",
      invalid: "يرجى إكمال الحقول المطلوبة.",
      failure: "لم يتم إعداد إرسال البريد بعد. يرجى استخدام روابط البريد المباشرة في هذه الصفحة."
    },
    final: {
      title: "اجلب KarCast إلى سيارتك.",
      price: "5 دراهم / شهر.",
      qr: "سيظهر رمز QR هنا بعد إعداد رابط Google Play الحقيقي."
    },
    footer: {
      body: "انقل Android Auto من هاتفك إلى متصفح سيارة متوافق من خلال إعداد واضح ومركز.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      responsyve: "تم الإنشاء بواسطة Responsyve",
      disclaimer: "KarCast منتج مستقل وغير تابع أو معتمد من Google أو Tesla."
    }
  }
};

function getPathValue(obj, path) {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

function applyTranslations(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.setAttribute("dir", document.documentElement.dir);
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getPathValue(t, node.dataset.i18n);
    if (typeof value === "string") node.textContent = value;
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });
  renderFaq(lang);
  renderCompatibility(lang);
  updateDownloadLinks(lang);
}

function renderFaq(lang) {
  const list = document.querySelector("#faq-list");
  list.innerHTML = "";
  translations[lang].faq.items.forEach(([question, answer], index) => {
    const item = document.createElement("div");
    item.className = "faq-item";
    const button = document.createElement("button");
    button.className = "faq-button";
    button.type = "button";
    button.id = `faq-button-${index}`;
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", `faq-panel-${index}`);
    button.textContent = question;
    const panel = document.createElement("div");
    panel.className = "faq-panel";
    panel.id = `faq-panel-${index}`;
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", button.id);
    panel.hidden = true;
    panel.textContent = answer;
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
    });
    item.append(button, panel);
    list.append(item);
  });
}

function renderCompatibility(lang) {
  const list = document.querySelector("#compat-list");
  list.innerHTML = "";
  config.compatibility[lang].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.append(li);
  });
}

function updateDownloadLinks(lang) {
  const configured = Boolean(config.googlePlayUrl);
  document.querySelectorAll(".download-link").forEach((link) => {
    link.textContent = configured ? translations[lang].cta.play : translations[lang].cta.soon;
    link.classList.toggle("is-disabled", !configured);
    if (configured) {
      link.href = config.googlePlayUrl;
      link.removeAttribute("aria-disabled");
      link.target = "_blank";
      link.rel = "noopener";
    } else {
      link.href = "#support";
      link.setAttribute("aria-disabled", "true");
      link.removeAttribute("target");
      link.removeAttribute("rel");
    }
  });
}

function setMailLinks() {
  const map = {
    general: config.contacts.general,
    support: config.contacts.support,
    feedback: config.contacts.feedback
  };
  document.querySelectorAll("[data-contact]").forEach((link) => {
    const email = map[link.dataset.contact];
    link.href = `mailto:${email}`;
    link.querySelector("span").textContent = email;
  });
  const responsyve = document.querySelector('[href="https://responsyve.co"]');
  if (responsyve) responsyve.href = config.responsyveUrl;
}

function setupMenu() {
  const button = document.querySelector(".menu-button");
  const menu = document.querySelector("#nav-menu");
  button.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("open")) {
      menu.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      button.focus();
    }
  });
}

function setupScrollEffects() {
  const header = document.querySelector(".site-header");
  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 18);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function setupForm() {
  const form = document.querySelector("#contact-form");
  const status = form.querySelector(".form-status");
  const supportFields = form.querySelector(".support-fields");
  const type = form.elements.messageType;

  type.addEventListener("change", () => {
    supportFields.hidden = type.value !== "support";
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const lang = localStorage.getItem("karcast-lang") || "en";
    status.className = "form-status";
    status.textContent = "";
    if (!form.checkValidity()) {
      status.classList.add("error");
      status.textContent = translations[lang].form.invalid;
      form.reportValidity();
      return;
    }
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    status.textContent = translations[lang].form.loading;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.message || translations[lang].form.failure);
      status.classList.add("success");
      status.textContent = result.message;
      form.reset();
      supportFields.hidden = true;
    } catch (error) {
      status.classList.add("error");
      status.textContent = error.message || translations[lang].form.failure;
    } finally {
      button.disabled = false;
    }
  });
}

function setupDemo() {
  if (!config.assets.demoVideo) return;
  const frame = document.querySelector("#demo-frame");
  frame.innerHTML = "";
  const video = document.createElement("video");
  video.src = config.assets.demoVideo;
  video.controls = true;
  video.preload = "metadata";
  video.playsInline = true;
  frame.append(video);
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("karcast-lang");
  const browserLang = navigator.language?.toLowerCase().startsWith("ar") ? "ar" : "en";
  const lang = saved || browserLang;
  document.querySelector("#year").textContent = new Date().getFullYear();
  setMailLinks();
  setupMenu();
  setupForm();
  setupDemo();
  setupScrollEffects();
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem("karcast-lang", button.dataset.lang);
      applyTranslations(button.dataset.lang);
    });
  });
  applyTranslations(lang);
});
