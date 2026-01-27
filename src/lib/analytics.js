const GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID || "").trim();
const DEBUG = String(import.meta.env.VITE_ANALYTICS_DEBUG || "").trim() === "1";

let initialized = false;

function log(...args) {
  if (DEBUG) console.info("[analytics]", ...args);
}

export function initAnalytics() {
  if (initialized) return;
  initialized = true;

  if (typeof window === "undefined") return;
  if (!GA_ID) {
    log("disabled (no VITE_GA_MEASUREMENT_ID)");
    return;
  }

  // Avoid double-injection
  if (document.querySelector(`script[data-ga-id="${GA_ID}"]`)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  // Load gtag.js
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  s.dataset.gaId = GA_ID;
  document.head.appendChild(s);

  // Initialize
  window.gtag("js", new Date());

  // IMPORTANT: send_page_view false so we can control SPA navigation tracking
  window.gtag("config", GA_ID, { send_page_view: false });
  log("initialized", GA_ID);
}

export function track(eventName, params = {}) {
  if (!eventName) return;
  if (typeof window === "undefined") return;

  const payload = { ...params };

  if (window.gtag && GA_ID) {
    window.gtag("event", eventName, payload);
  } else {
    log(eventName, payload);
  }
}

export function pageView(pagePath) {
  if (typeof window === "undefined") return;

  const path =
    pagePath ||
    (window.location?.pathname || "") +
      (window.location?.search || "") +
      (window.location?.hash || "");

  if (window.gtag && GA_ID) {
    window.gtag("event", "page_view", {
      page_path: path,
      page_title: document?.title || "",
    });
  } else {
    log("page_view", path);
  }
}