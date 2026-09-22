import { useEffect, useRef, useState, type FormEvent } from "react";
import { Bell, Check, ChevronDown, Globe, Info, Map, Monitor, Music, PhoneCall, Smartphone, Wifi } from "lucide-react";
import { copy, type Lang } from "./copy";

const FIT_ITEMS = [
  { key: "android", copy: "c1", Icon: Smartphone },
  { key: "wifi", copy: "c2", Icon: Wifi },
  { key: "browser", copy: "c3", Icon: Monitor },
  { key: "expect", copy: "c4", Icon: Info },
] as const;

const LANG_OPTIONS: { id: Lang; name: string }[] = [
  { id: "en", name: "English" },
  { id: "ar", name: "العربية" },
];

function PlayBadge({
  href,
  type,
  className = "",
  label,
  onClick,
}: {
  href?: string;
  type?: "submit";
  className?: string;
  label: string;
  onClick?: () => void;
}) {
  const inner = (
    <>
      <svg className="play-mark" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#00D4FF" d="M3.2 2.4 13.6 12 3.2 21.6V2.4Z" />
        <path fill="#FFCE00" d="M13.6 12 16.7 8.9 20.8 11.2c.9.5.9 1.9 0 2.4l-4.1 2.3L13.6 12Z" />
        <path fill="#FF3D4C" d="M3.2 21.6 13.6 12l3.1 3.1L3.2 21.6Z" />
        <path fill="#00F076" d="M3.2 2.4 16.7 8.9 13.6 12 3.2 2.4Z" />
      </svg>
      <span className="play-copy">
        <small>{label}</small>
        <strong>Google Play</strong>
      </span>
    </>
  );
  if (type === "submit") {
    return (
      <button type="submit" className={`play-badge ${className}`.trim()} aria-label={`${label} Google Play`}>
        {inner}
      </button>
    );
  }
  return (
    <a
      className={`play-badge ${className}`.trim()}
      href={href ?? "#notify"}
      aria-label={`${label} Google Play`}
      onClick={onClick}
    >
      {inner}
    </a>
  );
}

export function KarCastLanding() {
  const [lang, setLang] = useState<Lang>("en");
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactNote, setContactNote] = useState("");
  const [fit, setFit] = useState<Record<string, boolean>>({});
  const [dockHidden, setDockHidden] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const notifyRef = useRef<HTMLDivElement>(null);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    const el = notifyRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => setDockHidden(Boolean(entries[0]?.isIntersecting)),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!langOpen) return;
    function onDoc(e: MouseEvent) {
      if (!langRef.current?.contains(e.target as Node)) setLangOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLangOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  const fitCount = FIT_ITEMS.filter((item) => fit[item.key]).length;
  const fitMsg =
    fitCount === 0 ? t.fitIdle : fitCount === FIT_ITEMS.length ? t.fitOk : t.fitWarn;
  const fitClass =
    fitCount === 0 ? "" : fitCount === FIT_ITEMS.length ? "ok" : "warn";

  async function onContact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const messageTypes: Record<string, string> = {
      general: "general",
      setup: "support",
      compat: "support",
      feedback: "suggestion",
    };

    setContactNote("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          messageType: messageTypes[String(data.type)] || "general",
          message: data.message,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Unable to send your message.");
      }
      setContactNote(t.contactOk);
      form.reset();
    } catch (error) {
      setContactNote(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please email support@karcast.app.",
      );
    }
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="nav">
        <div className="wrap nav-inner">
          <a className="logo" href="#top">
            <span className="mark" aria-hidden="true">
              K
            </span>
            <span>KarCast</span>
          </a>
          <nav className="links" aria-label="Primary">
            <a href="#how">{t.navHow}</a>
            <a href="#fit">{t.navFit}</a>
            <a href="#session">{t.navSession}</a>
            <a href="#price">{t.navPrice}</a>
            <a href="#help">{t.navHelp}</a>
          </nav>
          <div className="nav-actions">
            <div className={`lang${langOpen ? " is-open" : ""}`} ref={langRef}>
              <button
                type="button"
                className="lang-toggle"
                aria-label={lang === "ar" ? "اللغة" : "Language"}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
              >
                <Globe className="lang-icon" strokeWidth={1.8} aria-hidden="true" />
                <span>{lang === "ar" ? "العربية" : "English"}</span>
                <ChevronDown className="lang-caret" strokeWidth={2} aria-hidden="true" />
              </button>
              <ul
                className="lang-menu"
                role="listbox"
                hidden={!langOpen}
                aria-label={lang === "ar" ? "اللغة" : "Language"}
              >
                {LANG_OPTIONS.map((opt) => (
                  <li key={opt.id} role="none">
                    <button
                      type="button"
                      role="option"
                      aria-selected={lang === opt.id}
                      className={lang === opt.id ? "is-active" : undefined}
                      onClick={() => {
                        setLang(opt.id);
                        setLangOpen(false);
                      }}
                    >
                      <span>{opt.name}</span>
                      {lang === opt.id ? <Check strokeWidth={2.4} aria-hidden="true" /> : null}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <PlayBadge className="play-badge-sm" href="#notify" label={t.playGet} />
            <button
              className="menu"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="sheet"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`sheet${menuOpen ? " is-open" : ""}`} id="sheet" hidden={!menuOpen}>
        <a href="#how" onClick={closeMenu}>
          {t.navHow}
        </a>
        <a href="#fit" onClick={closeMenu}>
          {t.navFit}
        </a>
        <a href="#session" onClick={closeMenu}>
          {t.navSession}
        </a>
        <a href="#price" onClick={closeMenu}>
          {t.navPrice}
        </a>
        <a href="#help" onClick={closeMenu}>
          {t.navHelp}
        </a>
        <PlayBadge href="#notify" label={t.playGet} onClick={closeMenu} />
      </div>

      <main id="main">
        <section className="hero" id="top">
          <figure className="hero-visual">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/hero-bg.jpg?v=9"
              width={1744}
              height={901}
              aria-label="Tesla Model Y cabin at night with Autopilot visualization and Android Auto at app.karcast.app."
            >
              <source src="/videos/hero-bg-fixed-camera-loop.mp4?v=10" type="video/mp4" />
            </video>
            <div className="hero-copy wrap">
              <p className="eyebrow">{t.eyebrow}</p>
              <h1>{t.heroTitle}</h1>
              <p className="lede">{t.heroLede}</p>
              <div className="hero-cta" id="notify" ref={notifyRef}>
                <PlayBadge href="#how" label={t.playGet} />
              </div>
              <ul className="trust">
                <li>{t.trust1}</li>
                <li>{t.trust2}</li>
                <li>{t.trust3}</li>
              </ul>
            </div>
            <figcaption>{t.heroCap}</figcaption>
          </figure>
        </section>

        <section className="section" id="how" data-density="comfortable">
          <div className="wrap cq-page">
            <p className="eyebrow">{t.howEyebrow}</p>
            <h2>{t.howTitle}</h2>
            <p className="section-lede">{t.howLede}</p>
            <ol className="steps cq-cols cq-sm:cols-2 cq-lg:cols-3">
              <li className="card cq-card">
                <div className="step-visual">
                  <img
                    src="/images/step-install.jpg"
                    width={1408}
                    height={1408}
                    alt="Galaxy S26 Ultra showing the KarCast install screen."
                  />
                  <span className="num">01</span>
                </div>
                <div className="step-copy">
                  <h3>{t.s1t}</h3>
                  <p>{t.s1d}</p>
                </div>
              </li>
              <li className="card cq-card">
                <div className="step-visual">
                  <img
                    src="/images/step-wifi.jpg"
                    width={1408}
                    height={1408}
                    alt="Phone hotspot linking to the Tesla Model Y over local Wi-Fi."
                  />
                  <span className="num">02</span>
                </div>
                <div className="step-copy">
                  <h3>{t.s2t}</h3>
                  <p>{t.s2d}</p>
                </div>
              </li>
              <li className="card cq-card">
                <div className="step-visual">
                  <img
                    src="/images/step-car.jpg"
                    width={1408}
                    height={1408}
                    alt="Tesla Model Y browser opening the KarCast address with Android Auto on screen."
                  />
                  <span className="num">03</span>
                </div>
                <div className="step-copy">
                  <h3>{t.s3t}</h3>
                  <p>{t.s3d}</p>
                </div>
              </li>
            </ol>
            <p className="local-note">{t.localNote}</p>
          </div>
        </section>

        <section className="section alt" id="fit" data-intent="trust" data-density="comfortable">
          <div className="wrap cq-page fit-grid cq-split-stack cq-page:split">
            <div>
              <p className="eyebrow">{t.fitEyebrow}</p>
              <h2>{t.fitTitle}</h2>
              <p className="section-lede">{t.fitLede}</p>
            </div>
            <form className="fit card">
              {FIT_ITEMS.map(({ key, copy: copyKey, Icon }) => {
                const on = Boolean(fit[key]);
                return (
                  <label className={`check${on ? " is-on" : ""}`} key={key}>
                    <input
                      type="checkbox"
                      name={key}
                      checked={on}
                      onChange={(e) => setFit((f) => ({ ...f, [key]: e.target.checked }))}
                    />
                    <span className="check-icon" aria-hidden="true">
                      <Icon strokeWidth={1.8} />
                    </span>
                    <span className="check-copy">{t[copyKey]}</span>
                  </label>
                );
              })}
              <p className={`fit-result ${fitClass}`}>{fitMsg}</p>
            </form>
          </div>
        </section>

        <section className="section" id="session">
          <div className="wrap cq-page">
            <p className="eyebrow">{t.sessEyebrow}</p>
            <h2>{t.sessTitle}</h2>
            <div className="features cq-cols cq-sm:cols-2 cq-lg:cols-4">
              <article className="card cq-card">
                <span className="feature-icon" aria-hidden="true">
                  <Map strokeWidth={1.8} />
                </span>
                <h3>{t.f1t}</h3>
                <p>{t.f1d}</p>
              </article>
              <article className="card cq-card">
                <span className="feature-icon" aria-hidden="true">
                  <Music strokeWidth={1.8} />
                </span>
                <h3>{t.f2t}</h3>
                <p>{t.f2d}</p>
              </article>
              <article className="card cq-card">
                <span className="feature-icon" aria-hidden="true">
                  <PhoneCall strokeWidth={1.8} />
                </span>
                <h3>{t.f3t}</h3>
                <p>{t.f3d}</p>
              </article>
              <article className="card cq-card">
                <span className="feature-icon" aria-hidden="true">
                  <Bell strokeWidth={1.8} />
                </span>
                <h3>{t.f4t}</h3>
                <p>{t.f4d}</p>
              </article>
            </div>
            <p className="safety">{t.safety}</p>
          </div>
        </section>

        <section className="section alt" id="price" data-tone="mint" data-featured="" data-intent="market">
          <div className="wrap cq-page price-grid cq-split-stack cq-page:split">
            <article className="price-card">
              <p className="eyebrow">{t.priceEyebrow}</p>
              <h2>{t.priceTitle}</h2>
              <p className="amount">
                <span>AED 5</span> <small>{t.perMonth}</small>
              </p>
              <ul>
                <li>{t.p1}</li>
                <li>{t.p2}</li>
                <li>{t.p3}</li>
                <li>{t.p4}</li>
              </ul>
              <PlayBadge className="play-badge-block" href="#notify" label={t.playGet} />
              <p className="fine">{t.priceFine}</p>
            </article>
            <div>
              <p className="eyebrow">{t.faqEyebrow}</p>
              <h2>{t.faqTitle}</h2>
              <div className="faq">
                <details open>
                  <summary>{t.q1}</summary>
                  <p>{t.a1}</p>
                </details>
                <details>
                  <summary>{t.q2}</summary>
                  <p>{t.a2}</p>
                </details>
                <details>
                  <summary>{t.q3}</summary>
                  <p>{t.a3}</p>
                </details>
                <details>
                  <summary>{t.q4}</summary>
                  <p>{t.a4}</p>
                </details>
                <details>
                  <summary>{t.q5}</summary>
                  <p>{t.a5}</p>
                </details>
                <details>
                  <summary>{t.q6}</summary>
                  <p>{t.a6}</p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="help" data-intent="help" data-density="comfortable">
          <div className="wrap cq-page help-grid cq-split-stack cq-page:split">
            <div>
              <p className="eyebrow">{t.helpEyebrow}</p>
              <h2>{t.helpTitle}</h2>
              <p className="section-lede">{t.helpLede}</p>
              <ul className="mails">
                <li>
                  <span>{t.m1}</span> <a href="mailto:info@karcast.app">info@karcast.app</a>
                </li>
                <li>
                  <span>{t.m2}</span> <a href="mailto:support@karcast.app">support@karcast.app</a>
                </li>
                <li>
                  <span>{t.m3}</span> <a href="mailto:feedback@karcast.app">feedback@karcast.app</a>
                </li>
              </ul>
            </div>
            <form className="card contact" onSubmit={onContact}>
              <label>
                <span>{t.name}</span>
                <input name="name" type="text" required autoComplete="name" />
              </label>
              <label>
                <span>{t.emailLabel}</span>
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label>
                <span>{t.type}</span>
                <select name="type">
                  <option value="general">{t.t1}</option>
                  <option value="setup">{t.t2}</option>
                  <option value="compat">{t.t3}</option>
                  <option value="feedback">{t.t4}</option>
                </select>
              </label>
              <label>
                <span>{t.msg}</span>
                <textarea name="message" rows={4} required />
              </label>
              <button className="btn btn-block" type="submit">
                {t.send}
              </button>
              <p className="form-note">{contactNote}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-cta">
          <h2>{t.footTitle}</h2>
          <p>{t.footPrice}</p>
          <PlayBadge href="#notify" label={t.playGet} />
        </div>
        <div className="wrap footer-row">
          <div>
            <p className="logo small">
              <span className="mark">K</span> KarCast
            </p>
            <p className="legal">{t.tag}</p>
          </div>
          <nav>
            <a href="#how">{t.navHow}</a>
            <a href="#price">{t.navPrice}</a>
            <a href="#help">{t.navHelp}</a>
            <a href="#fit">{t.navFit}</a>
          </nav>
        </div>
        <div className="wrap footer-fine">
          <p>{t.disclaimer}</p>
          <p>© 2026 KarCast</p>
        </div>
      </footer>

      <div className={`dock${dockHidden ? " is-hidden" : ""}`}>
        <span>{t.dockCopy}</span>
        <PlayBadge className="play-badge-sm" href="#notify" label={t.playGet} />
      </div>
    </>
  );
}
