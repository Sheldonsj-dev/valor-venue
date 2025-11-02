import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "@/pages/Home";
import PricingPage from "@/pages/Pricing";
export default function App() {
    return (_jsxs(BrowserRouter, { children: [_jsx("nav", { className: "px-6 md:px-10 py-4 border-b bg-white sticky top-0 z-10", children: _jsxs("ul", { className: "flex gap-6 text-sm", children: [_jsx("li", { children: _jsx(Link, { to: "/", children: "Home" }) }), _jsx("li", { children: _jsx(Link, { to: "/pricing", children: "Pricing" }) })] }) }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/pricing", element: _jsx(PricingPage, {}) })] })] }));
}




