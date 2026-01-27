import { NavLink } from "react-router-dom";
import { site } from "../content/site";
import { track } from "../lib/analytics";

const base = import.meta.env.BASE_URL;
const logoSrc = `${base}brand/logo-cropped.png`;

function navClass({ isActive }) {
  return [
    "rounded-md px-3 py-2 text-sm font-medium transition",
    isActive ? "bg-blue-100 text-blue-900" : "text-slate-700 hover:bg-slate-100",
  ].join(" ");
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4">
        <NavLink to="/" end className="flex items-center gap-2">
          <img src={logoSrc} alt={site.name} className="h-9 w-auto" />
          <span className="hidden text-sm font-semibold tracking-wide text-slate-900 sm:inline">
            {site.name}
          </span>
        </NavLink>

        <nav className="flex items-center gap-1">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/pricing" className={navClass}>Pricing</NavLink>
          <NavLink to="/gallery" className={navClass}>Gallery</NavLink>

          <NavLink
            to="/contact"
            onClick={() => track("vv_header_schedule_tour_click")}
            className="ml-2 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Schedule a Tour
          </NavLink>
        </nav>
      </div>
    </header>
  );
}