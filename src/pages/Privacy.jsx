import { useEffect } from "react";
import policyHtml from "../content/privacy-policy.html?raw";

const css = `
/* Scoped styles so we don't affect the rest of the site */
.vv-privacy {
  --burgundy: #722F37;
  --gold: #D4AF37;
  --navy: #1B3A57;
  --warm-white: #FFFDF9;

  font-family: Arial, sans-serif;
  line-height: 1.7;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: var(--warm-white);
}

.vv-privacy h1 {
  color: var(--burgundy);
  font-size: 2.2em;
  text-align: center;
  margin-bottom: 10px;
}

.vv-privacy .subtitle {
  text-align: center;
  color: var(--navy);
  font-size: 1.4em;
  margin-bottom: 30px;
}

.vv-privacy .effective-date {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
}

.vv-privacy h2 {
  color: var(--burgundy);
  font-size: 1.4em;
  margin-top: 40px;
  margin-bottom: 15px;
  border-bottom: 2px solid var(--gold);
  padding-bottom: 8px;
}

.vv-privacy h3 {
  color: var(--navy);
  font-size: 1.1em;
  margin-top: 25px;
  margin-bottom: 10px;
}

.vv-privacy p { margin-bottom: 15px; }
.vv-privacy ul { margin-bottom: 20px; padding-left: 25px; }
.vv-privacy li { margin-bottom: 8px; }

.vv-privacy table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.vv-privacy th, .vv-privacy td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.vv-privacy th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.vv-privacy .contact-info {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.vv-privacy .contact-info p { margin: 5px 0; }

.vv-privacy .footer {
  text-align: center;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  color: #666;
}

.vv-privacy .footer .brand {
  color: var(--burgundy);
  font-style: italic;
}

@media (max-width: 600px) {
  .vv-privacy { padding: 20px 15px; }
  .vv-privacy h1 { font-size: 1.8em; }
  .vv-privacy table { font-size: 0.9em; }
  .vv-privacy th, .vv-privacy td { padding: 8px; }
}
`;

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | The Valor Venue";
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6">
      <style>{css}</style>
      <div
        className="vv-privacy"
        dangerouslySetInnerHTML={{ __html: policyHtml }}
      />
    </div>
  );
}