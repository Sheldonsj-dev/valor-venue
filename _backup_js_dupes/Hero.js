import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Hero({ imageUrl }) {
    return (_jsx("header", { className: "w-full h-[48vh] md:h-[60vh] bg-center bg-cover flex items-center justify-center text-center", style: { backgroundImage: `url(${imageUrl})` }, role: "img", "aria-label": "Event space hero image", children: _jsxs("div", { className: "bg-white/85 px-6 py-8 md:px-10 md:py-12 rounded-xl shadow", children: [_jsx("h1", { className: "text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900", children: "The Valor Venue" }), _jsx("p", { className: "mt-3 md:mt-4 text-base md:text-lg text-gray-700", children: "Modern, welcoming, and affordable. Book your next celebration with confidence." })] }) }));
}
