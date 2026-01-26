import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { site } from "../content/site";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

export default function Contact() {
  const [params] = useSearchParams();
  const pkg = (params.get("pkg") || "").trim();

  const [form, setForm] = useState(() => ({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    package: pkg,
    message: "",
    company: "",
  }));

  const [status, setStatus] = useState({ state: "idle", message: "" });

  
  useEffect(() => {
    setForm((prev) => ({ ...prev, package: pkg }));
  }, [pkg]);
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

  function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "idle", message: "" });

    if (form.company) {
      setStatus({ state: "success", message: "Thanks! Weâ€™ll be in touch soon." });
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

    const to = site.contact.email || "info@thevalorvenue.com";
    const subject = encodeURIComponent(`Tour / Availability Request${packageLabel ? ` (${packageLabel})` : ""}`);
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
      ].filter(Boolean).join("\n")
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setStatus({ state: "success", message: "Opening your email appâ€¦" });
  }

  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Schedule a Tour</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Tell us a bit about your event and weâ€™ll confirm availability.
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
              <input className="mt-1 w-full rounded-md border px-3 py-2" value={form.name} onChange={(e) => update("name", e.target.value)} required />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Email *</span>
              <input className="mt-1 w-full rounded-md border px-3 py-2" value={form.email} onChange={(e) => update("email", e.target.value)} required />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Phone</span>
              <input className="mt-1 w-full rounded-md border px-3 py-2" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Event date</span>
              <input type="date" className="mt-1 w-full rounded-md border px-3 py-2" value={form.eventDate} onChange={(e) => update("eventDate", e.target.value)} />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Guest count</span>
              <input className="mt-1 w-full rounded-md border px-3 py-2" value={form.guestCount} onChange={(e) => update("guestCount", e.target.value)} />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Package</span>
              <select className="mt-1 w-full rounded-md border px-3 py-2" value={form.package} onChange={(e) => update("package", e.target.value)}>
                <option value="">Not sure yet</option>
                <option value="weekday">Weekday</option>
                <option value="weekend">Weekend</option>
                <option value="premium">Premium</option>
              </select>
            </label>
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-slate-900">Message</span>
            <textarea className="mt-1 min-h-28 w-full rounded-md border px-3 py-2" value={form.message} onChange={(e) => update("message", e.target.value)} />
          </label>

          <div className="mt-5 flex items-center gap-3">
            <button type="submit" className="rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-black/90">
              Submit request
            </button>
            <div aria-live="polite" className="text-sm">
              {status.state === "error" ? <span className="text-red-700">{status.message}</span> : null}
              {status.state === "success" ? <span className="text-green-700">{status.message}</span> : null}
            </div>
          </div>
        </form>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">Direct contact</div>
          <div className="mt-3 space-y-2 text-sm text-slate-700">
            <div>
              Email:{" "}
              <a className="underline-offset-4 hover:underline" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </div>
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