/* Table-only component, no external deps */
const ROWS = [
  { name: "Venue-Only Half Day", bestFor: "Showers, birthdays, workshops", hours: "5", guests: "Up to 80", price: "$2,000–$2,500" },
  { name: "Venue-Only Full Day", bestFor: "Weddings, quinceañeras, galas", hours: "10–12", guests: "Up to 120", price: "$4,500–$5,500" },
  { name: "Micro-Wedding Weekday", bestFor: "Ceremony + mini-reception", hours: "3.5", guests: "Up to 50", price: "$1,200–$1,600" },
];

export default function PricingTable() {
  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 font-semibold text-gray-700">
          <tr>
            <th className="p-3 border-b">Package</th>
            <th className="p-3 border-b">Best For</th>
            <th className="p-3 border-b">Hours</th>
            <th className="p-3 border-b">Guests</th>
            <th className="p-3 border-b">Price</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.name} className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border-b">{r.name}</td>
              <td className="p-3 border-b">{r.bestFor}</td>
              <td className="p-3 border-b">{r.hours}</td>
              <td className="p-3 border-b">{r.guests}</td>
              <td className="p-3 border-b">{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
