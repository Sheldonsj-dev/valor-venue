import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { site } from "../content/site";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

export default function Contact() {
  const [params] = useSearchParams();
  const pkg = (params.get("pkg") || "").trim();

  const endpoint = (import.meta.env.VITE_FORM_ENDPOINT || "").trim();
  const hasEndpoint =
    endpoint &&
    endpoint.startsWith("https://") &&
    !endpoint.includes("YOUR_FORM_ID");

  const [form, setForm] = useState(() => ({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    package: pkg,
    message: "",
    company: "", // honeypot
  }));

  // Keep form package synced when navigating between pkg links
  useEffect(() => {
    setForm((prev) => ({ ...prev, package: pkg }));
  }, [pkg]);

  const [status, setStatus] = useState({ state: "idle", message: "" });

  const packageLabel = useMemo(() => {
    const p = (form.package || "").toLowerCase();
    if (!p) return "";
    if (p === "weekday") return "Weekday";
    if (p === "weekend") return "Weekend";
    if (p === "premium") return "Premium";
    return form.package;
  }, [form.package]);

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function openMailtoFallback() {
    const to = site.contact.email || "info@thevalorvenue.com";
    const subject = encodeURIComponent(
      `Tour / Availability Request${packageLabel ? ` (${packageLabel})` : ""}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.phone ? `Phone: ${form.phone}` : "",
        form.eventDate ? `Event date: ${form.eventDate}` : "",
        form.guestCount ? `Guest count: ${form.guestCount}` : "",
        form.package ? `Package: ${form.package}` : "",
        "",
        form.message ? `Message:\n${form.message}` : "",
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }

  async function submitToEndpoint() {
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v || ""));

    const res = await fetch(endpoint, {
      method: "POST",
      body: fd,
      headers: { Accept: "application/json" },
    });

    return res.ok;
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "idle", message: "" });

    // Honeypot => pretend success
    if (form.company) {
      setStatus({ state: "success", message: "Thanks! We’ll be in touch soon." });
      return;
    }

    if (!form.name.trim()) {
      setStatus({ state: "error", message: "Please add your name." });
      return;
    }

    if (!isValidEmail(form.email)) {
      setStatus({ state: "error", message: "Please enter a valid email address." });
      return;
    }

    // Preferred path: real endpoint
    if (hasEndpoint) {
      try {
        setStatus({ state: "sending", message: "Sending…" });

        const ok = await submitToEndpoint();
        if (!ok) throw new Error("Endpoint returned non-OK");

        setStatus({ state: "success", message: "Sent! We’ll reach out soon." });
        setForm((prev) => ({
          ...prev,
          name: "",
          email: "",
          phone: "",
          eventDate: "",
          guestCount: "",
          message: "",
          company: "",
        }));
        return;
      } catch {
        setStatus({
          state: "error",
          message:
            "We couldn’t send your request right now. Please use the email option below.",
        });
        return;
      }
    }

    // Fallback: mailto (works even without endpoint)
    openMailtoFallback();
    setStatus({ state: "success", message: "Opening your email app…" });
  }

  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Schedule a Tour
      </h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Tell us a bit about your event and we’ll confirm availability.
        {packageLabel ? ` (Selected package: ${packageLabel})` : ""}
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="hidden">
            <label>
              Company
              <input value={form.company} onChange={(e) => update("company", e.target.value)} />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-900">Name *</span>
              <input
                className="mt-1 w-full rounded-md border px-3 py-2"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Email *</span>
              <input
                className="mt-1 w-full rounded-md border px-3 py-2"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Phone</span>
              <input
                className="mt-1 w-full rounded-md border px-3 py-2"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Event date</span>
              <input
                type="date"
                className="mt-1 w-full rounded-md border px-3 py-2"
                value={form.eventDate}
                onChange={(e) => update("eventDate", e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Guest count</span>
              <input
                className="mt-1 w-full rounded-md border px-3 py-2"
                value={form.guestCount}
                onChange={(e) => update("guestCount", e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Package</span>
              <select
                className="mt-1 w-full rounded-md border px-3 py-2"
                value={form.package}
                onChange={(e) => update("package", e.target.value)}
              >
                <option value="">Not sure yet</option>
                <option value="weekday">Weekday</option>
                <option value="weekend">Weekend</option>
                <option value="premium">Premium</option>
              </select>
            </label>
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-slate-900">Message</span>
            <textarea
              className="mt-1 min-h-28 w-full rounded-md border px-3 py-2"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
            />
          </label>

          <div className="mt-5 flex items-center gap-3">
            <button
              type="submit"
              className="rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-black/90 disabled:opacity-50"
              disabled={status.state === "sending"}
            >
              {status.state === "sending" ? "Sending…" : "Submit request"}
            </button>

            <div aria-live="polite" className="text-sm">
              {status.state === "error" ? (
                <span className="text-red-700">{status.message}</span>
              ) : null}
              {status.state === "success" ? (
                <span className="text-green-700">{status.message}</span>
              ) : null}
            </div>
          </div>

          {!hasEndpoint ? (
            <p className="mt-4 text-xs text-slate-500">
              To enable direct submission (recommended), set{" "}
              <code>VITE_FORM_ENDPOINT</code> in <code>.env.local</code>.
              (You can use Formspree / Getform / Basin.)
            </p>
          ) : null}
        </form>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">Email option</div>
          <p className="mt-2 text-sm text-slate-600">
            Prefer email? Contact us directly:
          </p>

          <div className="mt-3 text-sm text-slate-700">
            <a className="underline-offset-4 hover:underline" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={openMailtoFallback}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Email this request
            </button>
          </div>

          <div className="mt-6 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
            <div className="font-semibold text-slate-900">What happens next?</div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>We confirm availability for your preferred date.</li>
              <li>We schedule a tour time that works for you.</li>
              <li>We help you choose the best package.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}