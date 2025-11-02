import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PricingPage from "./pages/Pricing";

function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Hello from Valor Venue</h1>
      <p className="mt-2 text-gray-700">If you can read this, React mounted successfully.</p>
    </main>
  );
}

export default function App() {
  return (
    <>
      <nav className="px-6 py-4 border-b">
        <ul className="flex gap-6 text-sm">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </>
  );
}
