export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="text-center">
        <div className="flex flex-col items-center text-center gap-3">
          <img
            src="/brand/logo.png"
            alt="Valor Venue logo"
            className="mx-auto h-20 w-auto"
            loading="eager"
            decoding="async"
          />
          <p className="text-sm font-medium tracking-[0.22em] uppercase text-neutral-600">
            Honor the moment.
          </p>
        </div>

        <h1 className="mt-10 text-4xl font-semibold tracking-tight">
          The Valor Venue
        </h1>
        <p className="mt-3 text-base text-neutral-700">
          Modern, elegant, and flexible. Up to 120 guests.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <a
            href="#/booking"
            className="inline-flex items-center rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Schedule Your Tour
          </a>
          <a
            href="#/packages"
            className="inline-flex items-center rounded-lg border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
          >
            View Pricing
          </a>
        </div>
      </section>
    </main>
  );
}