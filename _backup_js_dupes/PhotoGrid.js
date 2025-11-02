import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const IMAGES = [
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519223400710-6da9e1b777ea?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
];
export default function PhotoGrid() {
    return (_jsxs("section", { className: "px-6 md:px-10 py-10", children: [_jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-6", children: "Gallery" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4", children: IMAGES.map((src, i) => (_jsx("img", { src: src, alt: "Event photo", className: "rounded-lg object-cover aspect-[4/3]" }, i))) })] }));
}
