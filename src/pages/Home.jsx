import { Link } from "react-router-dom";

export default function Home() {
  // Works in dev and on GitHub Pages because BASE_URL changes with the build base
  const logoSrc = `${import.meta.env.BASE_URL}brand/logo-cropped.png`;

const heroSrc = `${import.meta.env.BASE_URL}brand/hero.jpg`;
  // Replace later with your real scheduling link (Calendly, form, etc.)
  const tourHref = "#";

  return (
    <section className="mx-auto max-w-5xl px-6">
      {/* vv:home-hero */}
      <section className="mb-10">
        <img
          src={heroSrc}
          alt="The Valor Venue"
          className="h-[420px] w-full rounded-3xl object-cover shadow-sm"
          loading="eager"
          decoding="async"
        />
      </section>

      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center gap-3 py-10">
        {/* Logo image (already includes Ã¢â‚¬Å“THE VALOR VENUEÃ¢â‚¬Â, so do not repeat as text) */}
        <img
          src={logoSrc}
          alt="The Valor Venue"
          className="mx-auto block w-[320px] sm:w-[420px] md:w-[520px] lg:w-[620px] h-auto object-contain select-none"
          loading="eager"
          decoding="async"
        />

        {/* Tagline as real text (bigger + readable) */}
        <p className="mt-1 uppercase tracking-[0.35em] text-base sm:text-lg md:text-xl text-slate-800">
          HONOR THE MOMENT.
        </p>

        {/* Subtext */}
        <p className="mt-0 text-base sm:text-lg text-neutral-700">
          Modern, elegant, and flexible. Up to 120 guests.
        </p>

        {/* CTAs */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={tourHref}
            className="inline-flex items-center justify-center rounded-xl px-7 py-3 font-semibold bg-black text-white shadow-sm"
          >
            Schedule Your Tour
          </a>

          <Link
            to="/pricing"
            className="inline-flex items-center justify-center rounded-xl px-7 py-3 font-semibold border border-neutral-300 text-black bg-white"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
