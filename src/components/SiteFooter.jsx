import { NavLink } from "react-router-dom";
import { site } from "../content/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2">
        <div>
          <div className="text-sm font-semibold text-slate-900">{site.name}</div>
          <p className="mt-2 max-w-sm text-sm text-slate-600">{site.summary}</p>

          <div className="mt-4 flex flex-wrap gap-3">
            <NavLink className="text-sm text-slate-700 underline-offset-4 hover:underline" to="/pricing">Pricing</NavLink>
            <NavLink className="text-sm text-slate-700 underline-offset-4 hover:underline" to="/gallery">Gallery</NavLink>
            <NavLink className="text-sm text-slate-700 underline-offset-4 hover:underline" to="/contact">Contact</NavLink>
          </div>
        </div>

        <div className="text-sm text-slate-700">
          <div className="font-semibold text-slate-900">Contact</div>

          <div className="mt-2 space-y-1">
            {site.contact.email ? (
              <div>
                Email:{" "}
                <a className="underline-offset-4 hover:underline" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
              </div>
            ) : null}

            {site.contact.phone ? <div>Phone: {site.contact.phone}</div> : null}

            {site.tourUrl ? (
              <div className="pt-2">
                <a
                  className="inline-flex rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
                  href={site.tourUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Schedule Online
                </a>
              </div>
            ) : (
              <div className="pt-2 text-slate-500">
                Tip: add a Calendly link in <code>src/content/site.js</code> for instant scheduling.
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-slate-500">
        Â© {year} {site.name}. All rights reserved.
      </div>
      <div className="mt-6 text-xs text-slate-500"><a href="#/privacy" className="hover:underline">Privacy Policy</a></div>
</footer>
  );
}