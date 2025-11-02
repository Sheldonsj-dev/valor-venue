import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import Gallery from "./pages/Gallery.jsx";

export default function App() {
  return (
    <div className="min-h-screen text-gray-900">
      <header className="border-b">
        <nav className="mx-auto max-w-6xl flex items-center gap-6 p-4">
          <NavLink to="/" className="font-semibold">Home</NavLink>
          <NavLink to="/pricing" className="font-semibold">Pricing</NavLink>
          <NavLink to="/gallery" className="font-semibold">Gallery</NavLink>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
    </div>
  );
}
