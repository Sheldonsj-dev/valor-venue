import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Inclusions from "./pages/Inclusions";
import AddOns from "./pages/AddOns";
import Beverages from "./pages/Beverages";
import Policies from "./pages/Policies";

function Nav() {
  const link = "px-3 py-2 rounded-md hover:bg-gray-100";
  const active = "text-blue-600 font-semibold";
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto flex gap-4 p-3">
        <NavLink to="/" className={({isActive}) => `${link} ${isActive ? active : ""}`}>Home</NavLink>
        <NavLink to="/pricing" className={({isActive}) => `${link} ${isActive ? active : ""}`}>Pricing</NavLink>
        <NavLink to="/inclusions" className={({isActive}) => `${link} ${isActive ? active : ""}`}>Inclusions</NavLink>
        <NavLink to="/addons" className={({isActive}) => `${link} ${isActive ? active : ""}`}>Add-ons</NavLink>
        <NavLink to="/beverages" className={({isActive}) => `${link} ${isActive ? active : ""}`}>Beverages</NavLink>
        <NavLink to="/policies" className={({isActive}) => `${link} ${isActive ? active : ""}`}>Policies</NavLink>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <main className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/inclusions" element={<Inclusions />} />
          <Route path="/addons" element={<AddOns />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer className="text-center text-xs text-gray-500 py-8">
        Build: {new Date().toISOString()}
      </footer>
    </HashRouter>
  );
}
