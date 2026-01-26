export default function BrandMark() {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src="/brand/logo.png"
        alt="The Valor Venue logo"
        className="mx-auto h-64 sm:h-72 md:h-80 w-auto max-w-none"
        loading="eager"
        decoding="async"
      />
      <p className="mt-3 text-lg sm:text-xl font-medium tracking-wide text-white/90">
        Honor the moment.
      </p>
    </div>
  );
}
