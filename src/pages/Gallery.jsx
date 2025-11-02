const modules = import.meta.glob("../assets/gallery/*.{png,jpg,jpeg,gif,webp}", { eager: true });
const IMAGES = Object.values(modules).map((m) => m.default).sort();

export default function Gallery() {
  if (IMAGES.length === 0) {
    return (
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <p>Add images to <code>src/assets/gallery</code> then refresh.</p>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {IMAGES.map((src, i) => (
          <img key={i} src={src} alt={"Gallery " + (i + 1)} className="w-full h-64 object-cover rounded-lg border" />
        ))}
      </div>
    </section>
  );
}
