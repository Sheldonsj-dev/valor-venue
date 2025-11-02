export default function Gallery() {
  const images = ["1.jpg","2.jpg","3.jpg"].map(n => `/gallery/${n}`);
  return (
    <section>
      <h1 className="text-4xl font-bold mb-6">Gallery</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src,i) => (
          <div key={i} className="aspect-video bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
            <span className="text-gray-400">Add {src}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
