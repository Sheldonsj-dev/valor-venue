import { useEffect, useRef, useState } from "react";

const base = import.meta.env.BASE_URL;

const photos = [
  { file: "1.jpg", alt: "The Valor Venue — Gallery photo 1" },
  { file: "2.jpg", alt: "The Valor Venue — Gallery photo 2" },
];

function Tile({ photo, onOpen }) {
  const [broken, setBroken] = useState(false);
  const src = `${base}gallery/${photo.file}`;

  return (
    <button
      type="button"
      onClick={() => (!broken ? onOpen(src, photo.alt) : null)}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-slate-50 text-left shadow-sm"
      aria-label={!broken ? `Open image: ${photo.alt}` : "Image placeholder"}
    >
      {!broken ? (
        <img
          src={src}
          alt={photo.alt}
          className="h-full w-full object-cover transition group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
          onError={() => setBroken(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center px-6 text-center">
          <div>
            <div className="text-sm font-semibold text-slate-900">Gallery photo coming soon</div>
            <div className="mt-1 text-xs text-slate-600">
              Upload <code>public/gallery/{photo.file}</code> to display here.
            </div>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 ring-0 ring-black/10 transition group-hover:ring-2" />
    </button>
  );
}

export default function Gallery() {
  const [active, setActive] = useState(null);
  const closeBtnRef = useRef(null);
  const lastFocusRef = useRef(null);

  function open(src, alt) {
    lastFocusRef.current = document.activeElement;
    setActive({ src, alt });
  }

  function close() {
    setActive(null);
    const el = lastFocusRef.current;
    if (el && typeof el.focus === "function") el.focus();
  }

  useEffect(() => {
    if (!active) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    setTimeout(() => closeBtnRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Gallery</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        A look inside The Valor Venue. Drop images into <code>public/gallery</code> to populate this page.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p) => (
          <Tile key={p.file} photo={p} onOpen={open} />
        ))}
      </div>

      {active ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <div className="text-sm font-semibold text-slate-900">Preview</div>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={close}
                className="rounded-md px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-black"
              >
                Close
              </button>
            </div>

            <img src={active.src} alt={active.alt} className="max-h-[80vh] w-full object-contain" />
            <div className="border-t px-4 py-3 text-sm text-slate-600">{active.alt}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}