import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
    const item = "px-3 py-2 rounded-md text-sm font-medium hover:bg-white/60";
    const active = ({ isActive }) => isActive ? item + " bg-white/80" : item;
    return (_jsx("header", { className: "sticky top-0 z-20 bg-white/80 backdrop-blur border-b", children: _jsxs("div", { className: "mx-auto max-w-6xl px-4 h-16 flex items-center justify-between", children: [_jsx(Link, { to: "/", className: "text-xl font-semibold text-blue-600", children: "The Valor Venue" }), _jsxs("nav", { className: "flex gap-1", children: [_jsx(NavLink, { to: "/", className: active, end: true, children: "Home" }), _jsx(NavLink, { to: "/gallery", className: active, children: "Gallery" }), _jsx(NavLink, { to: "/pricing", className: active, children: "Pricing" }), _jsx(NavLink, { to: "/contact", className: "ml-1 bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700", children: "Book a Tour" })] })] }) }));
}
