import React from "react";
export function Section({title, children}:{title:string; children:React.ReactNode}) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="space-y-6">{children}</div>
    </section>
  );
}
export function Card({title, children}:{title:string; children:React.ReactNode}) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}
export function Bullets({items}:{items:string[]}) {
  return (
    <ul className="list-disc pl-6 space-y-1">
      {items.map((t, i) => <li key={i}>{t}</li>)}
    </ul>
  );
}
