export const POSITIONING = {
  promise: "Simple pricing, clear inclusions, fast responses, and a smooth event day that ends clean and on time.",
  differentiators: [
    "Published inclusions",
    "Weekday micro-weddings with real logistics support",
    "Transparent corporate dayparts",
    "Visible décor library with flat access"
  ]
}; // Source: pricing playbook v1.0
export type Package = {
  name: string; bestFor: string; hours: string; guests: string; basePrice: string;
};
export const PACKAGES: Package[] = [
  { name: "Venue-Only Half Day", bestFor: "Showers, birthdays, workshops", hours: "5",     guests: "Up to 80",  basePrice: "$2,000–$2,500" },
  { name: "Venue-Only Full Day", bestFor: "Weddings, quince, galas",      hours: "10–12", guests: "Up to 120", basePrice: "$4,500–$5,500" },
  { name: "Micro-Wedding Weekday", bestFor: "Ceremony + mini reception",  hours: "3.5",   guests: "40–60",     basePrice: "$2,400–$3,200" },
  { name: "All-Inclusive Lite",    bestFor: "Easy button weddings",       hours: "8–10",  guests: "100–120",   basePrice: "$5,800–$7,200" },
  { name: "Corporate Daypart",     bestFor: "Meetings, trainings, mixers",hours: "4",     guests: "Up to 120", basePrice: "$1,600–$2,200" }
];

export const WEEKEND_PREMIUM = "Add $300–$800 depending on month.";
export const OVERTIME = "Venue $250 per hour, staff $100 per staffer per hour if staffing is included.";

export const SHORT_DESCRIPTIONS: Record<string,string> = {
  "Venue-Only Half Day": "Space rental for showers, birthdays, workshops, and pop-ups. Includes tables and chairs, layout diagram, AV basics, load-in help, and trash removal.",
  "Venue-Only Full Day": "All-day access for weddings and large celebrations. Adds bridal suite and vendor staging for a calmer timeline.",
  "Micro-Wedding Weekday": "Ceremony plus mini-reception with a coordinator, décor access, mics, music, and livestream station.",
  "All-Inclusive Lite": "Coordinator, décor library Tier 2, AV, flip team, cleaning crew, timeline management, and vendor concierge.",
  "Corporate Daypart": "Defined 4-hour blocks with AV pack, podium, confidence monitor, seating diagram, and water or coffee setup."
};

export const INCLUSIONS = [
  "Tables and chairs",
  "Floor plan",
  "AV basics: 2 wireless mics, Bluetooth, projector, screen",
  "Load-in help",
  "Post-event trash removal",
  "Full Day adds bridal suite and vendor staging",
  "Micro-Wedding and All-Inclusive add décor library and a coordinator",
  "All-Inclusive adds flip team and cleaning crew"
];

export const ADD_ONS = [
  "Décor Library Access: Tier 1 $175, Tier 2 $350",
  "Event Coordinator (if not included): $400 up to 6 hours",
  "Photo Social Package: 60 edited phone clips in 48 hours $250",
  "Aisle + Arch Setup: $150",
  "Kitchen Staging Access: refrigerators, warmer, sinks, 20A circuits $300",
  "Hybrid Meeting Kit: capture device, tripod, tabletop light, cables $150",
  "Tech Check: 30-minute pre-event equipment test $75",
  "Security Deposit: $500 refundable or Damage Waiver: $89 flat"
];

export const BEVERAGES = [
  "Open Bar by Person: set price per guest for beer, wine, and optional spirits tiers",
  "Consumption Bar with Live Tracker: pay only for what is poured, tracked in real time",
  "BYO With ABC Compliance: client-supplied alcohol with our ABC checklist and guidance"
];

export const POLICIES = [
  "Booking deposit: 50 percent at contract. Balance due 14 days before event.",
  "Reschedule safety net: one fee-free reschedule with 60+ days notice.",
  "Cancellations: 60+ days refund less $250 admin, 30–59 days 50 percent refund, under 30 days non-refundable.",
  "Cleanup roles: we handle floors and trash removal. Caterers clear food and bar. Décor items return to the cart."
];
