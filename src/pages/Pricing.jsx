import { Link } from "react-router-dom";
import { TIERS } from "../data/pricing.js";
import { track } from "../lib/analytics";

function tierPkg(name = "") {
  const n = String(name).toLowerCase();
  if (n.includes("weekday")) return "weekday";
  if (n.includes("weekend")) return "weekend";
  if (n.includes("premium")) return "premium";
  return "";
}

export default function Pricing() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-8">Pricing</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {TIERS.map((t) => {
          const pkg = tierPkg(t.name);
          const to = pkg ? `/contact?pkg=${pkg}` : "/contact";

          return (
            <div key={t.name} className="border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{t.name}</h2>
              <p className="text-3xl font-extrabold mb-2">{t.price}</p>
              <p className="text-gray-600 mb-4">{t.subtitle}</p>

              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                {t.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <Link
                to={to}
                onClick={() =>
                  track("vv_pricing_check_availability_click", {
                    pkg: pkg || undefined,
                    tier: t.name,
                  })
                }
                className="mt-5 inline-flex items-center justify-center rounded-xl px-4 py-2 bg-blue-600 text-white"
              >
                Check availability
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}