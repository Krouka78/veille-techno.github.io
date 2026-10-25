// Collecte automatique de la veille « passkeys » : lit les flux RSS des sources,
// garde les articles qui parlent du sujet et les ajoute à data/articles.json.
// Lancé chaque jour par GitHub Actions (.github/workflows/veille.yml) ; à la main : node scripts/collecte.mjs
import { readFileSync, writeFileSync } from "node:fs";

const SOURCES = JSON.parse(readFileSync(new URL("../data/sources.json", import.meta.url), "utf8"));
const FICHIER = new URL("../data/articles.json", import.meta.url);

// Mots-clés du sujet, cherchés dans le titre et le résumé seulement.
const SUJET =
  /passkeys?|cl[ée]s? d['’]acc[èe]s|\bfido2?\b|webauthn|passwordless|sans mot de passe|password-?less|phishing-resistant|r[ée]sistant[es]? (au|à l['’])\s?hame[çc]onnage|biometric authentication|authentification biom[ée]trique|heartbeat|electrocardiogram|ECG authentication/i;

const decode = (s = "") =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&(amp|lt|gt|quot|apos|nbsp|rsquo|lsquo|hellip|ndash|mdash);/g, (m, e) =>
      ({ amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", rsquo: "’", lsquo: "‘", hellip: "…", ndash: "–", mdash: "—" })[e]
    )
    .replace(/\s+/g, " ")
    .trim();

const tag = (bloc, nom) => {
  const m = bloc.match(new RegExp(`<${nom}[^>]*>([\\s\\S]*?)</${nom}>`, "i"));
  return m ? m[1] : "";
};

function lireFlux(xml, source) {
  const blocs = xml.split(/<item[\s>]|<entry[\s>]/i).slice(1);
  return blocs.map((b) => {
    let lien = decode(tag(b, "link"));
    if (!lien) lien = (b.match(/<link[^>]*href="([^"]+)"/i) || [])[1] || "";
    const date = decode(tag(b, "pubDate") || tag(b, "published") || tag(b, "updated") || tag(b, "dc:date"));
    const resume = decode(tag(b, "description") || tag(b, "summary") || tag(b, "content")).slice(0, 320);
    return {
      titre: decode(tag(b, "title")),
      lien,
      date: date ? new Date(date).toISOString().slice(0, 10) : null,
      resume,
      source: source.nom,
      langue: source.langue,
    };
  });
}

const existants = JSON.parse(readFileSync(FICHIER, "utf8"));
const connus = new Set(existants.articles.map((a) => a.lien));
let ajoutes = 0;

for (const source of SOURCES) {
  try {
    const r = await fetch(source.rss, {
      headers: { "User-Agent": "veille-passkeys (BTS SIO)" },
      signal: AbortSignal.timeout(20000),
    });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const articles = lireFlux(await r.text(), source).filter(
      (a) => a.titre && a.lien && SUJET.test(`${a.titre} ${a.resume}`)
    );
    for (const a of articles) {
      if (connus.has(a.lien)) continue;
      existants.articles.push({ ...a, collecte: new Date().toISOString().slice(0, 10) });
      connus.add(a.lien);
      ajoutes++;
    }
    console.log(`${source.nom} : ${articles.length} article(s) sur le sujet`);
  } catch (e) {
    console.log(`${source.nom} : erreur (${e.message})`);
  }
}

existants.articles.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
existants.miseAJour = new Date().toISOString();
writeFileSync(FICHIER, JSON.stringify(existants, null, 2) + "\n");
console.log(`${ajoutes} nouvel(s) article(s), ${existants.articles.length} au total.`);
