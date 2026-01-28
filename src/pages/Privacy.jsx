import policyHtmlRaw from "../content/privacy-policy.html?raw";
import { Link } from "react-router-dom";

function extractBody(html) {
  const m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return (m && m[1]) ? m[1] : html;
}

const css = `
.vv-privacy { --burgundy:#722F37; --gold:#D4AF37; --navy:#1B3A57; --warm-white:#FFFDF9; }
.vv-privacy .vv-box { background: var(--warm-white); }
.vv-privacy .vv-policy h1 { color: var(--burgundy); font-size: 2.2em; text-align:center; margin: 0 0 10px; }
.vv-privacy .vv-policy .subtitle { text-align:center; color: var(--navy); font-size:1.4em; margin: 0 0 30px; }
.vv-privacy .vv-policy .effective-date { text-align:center; color:#666; margin: 0 0 40px; }
.vv-privacy .vv-policy h2 { color: var(--burgundy); font-size:1.4em; margin: 40px 0 15px; border-bottom:2px solid var(--gold); padding-bottom:8px; }
.vv-privacy .vv-policy h3 { color: var(--navy); font-size:1.1em; margin: 25px 0 10px; }
.vv-privacy .vv-policy p { margin: 0 0 15px; line-height: 1.7; color:#333; }
.vv-privacy .vv-policy ul { margin: 0 0 20px; padding-left: 25px; }
.vv-privacy .vv-policy li { margin: 0 0 8px; }
.vv-privacy .vv-policy table { width: 100%; border-collapse: collapse; margin: 20px 0; }
.vv-privacy .vv-policy th, .vv-privacy .vv-policy td { border: 1px solid #ddd; padding: 12px; text-align:left; vertical-align: top; }
.vv-privacy .vv-policy th { background:#f5f5f5; font-weight:700; }
.vv-privacy .vv-policy .contact-info { background:#f9f9f9; padding:20px; border-radius: 8px; margin-top:20px; }
.vv-privacy .vv-policy .contact-info p { margin: 5px 0; }
.vv-privacy .vv-policy .footer { text-align:center; margin-top:50px; padding-top:20px; border-top:1px solid #ddd; color:#666; }
.vv-privacy .vv-policy .footer .brand { color: var(--burgundy); font-style: italic; }
@media (max-width: 600px) {
  .vv-privacy .vv-policy h1 { font-size: 1.8em; }
  .vv-privacy .vv-policy table { font-size: 0.92em; }
  .vv-privacy .vv-policy th, .vv-privacy .vv-policy td { padding: 8px; }
}
`;

export default function Privacy() {
  const html = extractBody(policyHtmlRaw);

  return (
    <div className="vv-privacy">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="vv-box mx-auto w-full max-w-5xl px-4 pb-16 pt-10">
        <div className="mb-6 flex items-center justify-between gap-3">
          <Link to="/contact" className="text-sm font-semibold text-slate-700 hover:underline">
            ← Back to Contact
          </Link>
          <Link to="/" className="text-sm font-semibold text-slate-700 hover:underline">
            Home
          </Link>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="vv-policy" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  );
}