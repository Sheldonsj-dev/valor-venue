import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import Gallery from "./pages/Gallery.jsx";

export default function App() {
  const link = ({ isActive }) =>
    "px-3 py-2 rounded-md " + (isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100");

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-2">
          <NavLink to="/" className={link} end>Home</NavLink>
          <NavLink to="/pricing" className={link}>Pricing</NavLink>
          <NavLink to="/gallery" className={link}>Gallery</NavLink>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
    </div>
  );
}
