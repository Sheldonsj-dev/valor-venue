import React from "react";
import { PACKAGES } from "../data/pricing";

export default function PricingTable() {
  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 font-semibold text-gray-700">
          <tr>
            <th className="p-3">Package</th>
            <th>Best For</th>
            <th>Hours</th>
            <th>Guests</th>
            <th>Base Price</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {PACKAGES.map((p) => (
            <tr key={p.name}>
              <td className="p-3 font-medium">{p.name}</td>
              <td>{p.bestFor}</td>
              <td>{p.hours}</td>
              <td>{p.guests}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
