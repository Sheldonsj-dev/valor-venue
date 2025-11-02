export default function Pricing() {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Pricing</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { name: "Weekday", price: "$950", blurb: "4 hours, chairs and tables" },
          { name: "Weekend", price: "$1,450", blurb: "6 hours, host on site" },
          { name: "Premium", price: "$2,100", blurb: "8 hours, decor kit" },
        ].map(t => (
          <div key={t.name} className="rounded-2xl border p-6 shadow-sm">
            <div className="text-lg font-semibold mb-2">{t.name}</div>
            <div className="text-3xl font-extrabold text-blue-600 mb-2">{t.price}</div>
            <p className="text-gray-600">{t.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
