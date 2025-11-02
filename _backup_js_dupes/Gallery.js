import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515615200917-5cccb4e2d4fe?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496302662116-25c399459b4e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541542684-4a9c38946a26?q=80&w=1200&auto=format&fit=crop",
];
export default function Gallery() {
    return (_jsxs("section", { className: "mx-auto max-w-6xl px-4 py-16", children: [_jsx("h2", { className: "text-3xl font-bold", children: "Gallery" }), _jsx("p", { className: "text-gray-600 mt-2", children: "A peek at the space and layout ideas." }), _jsx("div", { className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: images.map((src, i) => (_jsx("img", { src: src, alt: "The Valor Venue " + (i + 1), className: "rounded-lg border object-cover w-full h-64", loading: "lazy" }, i))) })] }));
}
