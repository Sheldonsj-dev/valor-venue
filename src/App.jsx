import { Navigate, Route, Routes } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";

function NotFound() {
  return (
    <div className="py-16">
      <h1 className="text-3xl font-extrabold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-600">Letâ€™s get you back on track.</p>
      <div className="mt-6">
        <a className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90" href="#/">
          Go to Home
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tour" element={<Navigate to="/contact?intent=tour" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <SiteFooter />
    </div>
  );
}