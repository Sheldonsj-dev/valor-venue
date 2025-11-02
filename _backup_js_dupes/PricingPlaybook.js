import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const PACKAGES = [
    {
        name: "Venue-Only Half Day",
        bestFor: "Showers, birthdays, workshops, pop-ups",
        hours: "5",
        cap: "Up to 80",
        price: ",000�,500",
        blurb: "Space rental for shorter events. Includes tables and chairs, layout diagram, AV basics, load-in help, and trash removal.",
    },
    {
        name: "Venue-Only Full Day",
        bestFor: "Weddings, quince, galas",
        hours: "10�12",
        cap: "Up to 120",
        price: ",500�,500",
        blurb: "All-day access for a calm timeline. Adds bridal suite and vendor staging in addition to the Half Day inclusions.",
    },
    {
        name: "Micro-Wedding Weekday",
        bestFor: "Ceremony + mini reception",
        hours: "3.5",
        cap: "40�60",
        price: ",400�,900",
        blurb: "A beautiful, simple wedding on a weekday. Includes a coordinator, ceremony layout, Tier 1 d�cor access, two mics, Bluetooth music, livestream station, and trash removal.",
    },
    {
        name: "All-Inclusive Lite",
        bestFor: "Easy button weddings",
        hours: "8�10",
        cap: "100�120",
        price: ",800�,200",
        blurb: "Coordinator, Tier 2 d�cor access, AV, flip team, cleaning crew, timeline management, and vendor concierge.",
    },
    {
        name: "Corporate Daypart",
        bestFor: "Meetings, trainings, mixers",
        hours: "4",
        cap: "Up to 120",
        price: ",600�,900",
        blurb: "Defined blocks with AV pack, podium, confidence monitor, seating diagram, and water or coffee setup area. Add an hour as needed.",
    },
];
const ADDONS = [
    { title: "D�cor Library Access", detail: "Tier 1 , Tier 2 " },
    { title: "Event Coordinator", detail: " up to 6 hours if not included" },
    { title: "Photo Social Package", detail: "60 edited phone clips in 48 hours " },
    { title: "Aisle + Arch Setup", detail: " ceremony focal point and styling" },
    { title: "Kitchen Staging Access", detail: "Refrigerators, warmer, sinks, 20A circuits " },
    { title: "Hybrid Meeting Kit", detail: "Capture device, tripod, light, cables " },
    { title: "Tech Check", detail: "30-minute pre-event test " },
    { title: "Security Deposit / Damage Waiver", detail: " refundable or  flat" },
];
export default function PricingPlaybook() {
    return (_jsxs("section", { className: "mx-auto max-w-7xl px-4 py-12", children: [_jsxs("header", { className: "mb-8 text-center", children: [_jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "The Valor Venue Pricing Playbook" }), _jsx("p", { className: "mt-2 text-sm text-gray-600", children: "Clear packages, inclusions, and add-ons so planning is simple." })] }), _jsxs("div", { className: "mb-10", children: [_jsx("h2", { className: "text-xl font-semibold", children: "Packages at a glance" }), _jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Weekend premium: add \uFFFD by month. Overtime:  per venue hour,  per staff hour if staffing is included." }), _jsx("div", { className: "mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: PACKAGES.map((p) => (_jsxs("article", { className: "rounded-2xl border border-gray-200 p-5 shadow-sm", children: [_jsxs("div", { className: "flex items-baseline justify-between", children: [_jsx("h3", { className: "text-lg font-semibold", children: p.name }), _jsx("span", { className: "text-sm font-medium", children: p.price })] }), _jsx("p", { className: "mt-1 text-sm text-gray-600", children: p.bestFor }), _jsxs("dl", { className: "mt-3 grid grid-cols-2 gap-2 text-sm", children: [_jsxs("div", { className: "rounded-lg bg-gray-50 p-2", children: [_jsx("dt", { className: "text-gray-500", children: "Hours" }), _jsx("dd", { className: "font-medium", children: p.hours })] }), _jsxs("div", { className: "rounded-lg bg-gray-50 p-2", children: [_jsx("dt", { className: "text-gray-500", children: "Guest cap" }), _jsx("dd", { className: "font-medium", children: p.cap })] })] }), _jsx("p", { className: "mt-3 text-sm", children: p.blurb }), _jsx("div", { className: "mt-4", children: _jsx("a", { href: "/contact", className: "inline-flex items-center rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black", children: "Check date and get a quote" }) })] }, p.name))) })] }), _jsxs("div", { className: "mb-10", children: [_jsx("h2", { className: "text-xl font-semibold", children: "Inclusions snapshot" }), _jsxs("ul", { className: "mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3", children: [_jsx("li", { className: "rounded-xl bg-gray-50 p-3", children: "Tables and chairs, floor plan, AV basics: two wireless mics, Bluetooth, projector, screen" }), _jsx("li", { className: "rounded-xl bg-gray-50 p-3", children: "Load-in help and post-event trash removal" }), _jsx("li", { className: "rounded-xl bg-gray-50 p-3", children: "Full Day adds bridal suite and vendor staging" }), _jsx("li", { className: "rounded-xl bg-gray-50 p-3", children: "Micro-Wedding adds a coordinator and Tier 1 d\uFFFDcor access" }), _jsx("li", { className: "rounded-xl bg-gray-50 p-3", children: "All-Inclusive adds flip team and cleaning crew" })] }), _jsx("p", { className: "mt-3 text-xs text-gray-600", children: "Cleanup roles: we handle floors and trash removal. Caterers clear food and bar. D\uFFFDcor items return to the cart. COI required for alcohol service and third-party vendors." })] }), _jsxs("div", { className: "mb-10", children: [_jsx("h2", { className: "text-xl font-semibold", children: "Add-ons" }), _jsx("div", { className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: ADDONS.map((a) => (_jsxs("div", { className: "rounded-xl border border-gray-200 p-4", children: [_jsx("h3", { className: "text-sm font-semibold", children: a.title }), _jsx("p", { className: "mt-1 text-sm text-gray-700", children: a.detail })] }, a.title))) })] }), _jsxs("div", { className: "mb-10", children: [_jsx("h2", { className: "text-xl font-semibold", children: "Beverage options" }), _jsxs("ul", { className: "mt-3 list-disc space-y-1 pl-5 text-sm", children: [_jsx("li", { children: "Open Bar by Person. Set price per guest for beer, wine, and optional spirits tiers." }), _jsx("li", { children: "Consumption Bar with Live Tracker. Pay only for what is poured, tracked in real time." }), _jsx("li", { children: "BYO with ABC compliance. Client-supplied alcohol with our ABC checklist and guidance." })] })] }), _jsxs("div", { className: "rounded-2xl bg-gray-900 p-6 text-white", children: [_jsx("h2", { className: "text-xl font-semibold", children: "Ready to hold a date" }), _jsx("p", { className: "mt-1 text-sm text-gray-200", children: "Ask about weekday micro-weddings and corporate dayparts. We reply fast and hold dates for qualified inquiries." }), _jsxs("div", { className: "mt-4 flex flex-wrap gap-3", children: [_jsx("a", { href: "/contact", className: "inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white", children: "Contact us" }), _jsx("a", { href: "/packages", className: "inline-flex items-center rounded-xl border border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white", children: "View packages" })] })] })] }));
}
