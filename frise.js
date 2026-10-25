// Frise chronologique : les moyens d'authentification, année par année.
// Illustrations dessinées en SVG (aucune image externe) : currentColor = encre, .a = couleur d'accent.
// hameconnage / sansMdp : true = progrès acquis, false = non, "partiel" = en partie.
window.FRISE = [
  {
    annee: "1961",
    moyen: "Le premier mot de passe informatique",
    texte: "Au MIT, le système CTSS partage un ordinateur entre plusieurs utilisateurs : chacun reçoit un mot de passe pour protéger ses fichiers.",
    hameconnage: false, sansMdp: false,
    svg: `<rect x="22" y="12" width="116" height="66" rx="5"/><rect x="30" y="20" width="100" height="50" rx="2" class="f"/>
      <text x="36" y="38">LOGIN: M1416</text><text x="36" y="56">PASSWORD: <tspan class="a">****</tspan></text>
      <path d="M62 78 l-6 10 h48 l-6 -10"/>`,
  },
  {
    annee: "1979",
    moyen: "Le mot de passe haché",
    texte: "Unix ne stocke plus le mot de passe en clair mais son empreinte (hachage) : un fichier volé ne révèle plus directement les mots de passe.",
    hameconnage: false, sansMdp: false,
    svg: `<rect x="10" y="34" width="52" height="22" rx="4"/><text x="16" y="49">soleil75</text>
      <path d="M68 45 h20" class="a"/><path d="M83 40 l6 5 l-6 5" class="a"/>
      <rect x="94" y="34" width="58" height="22" rx="4" class="a"/><text x="99" y="49" class="a">5f4dcc3b…</text>
      <text x="62" y="80" class="p">hachage</text>`,
  },
  {
    annee: "1986",
    moyen: "Le jeton à code temporaire",
    texte: "Les jetons RSA SecurID affichent un code qui change toutes les minutes : un mot de passe volé ne suffit plus, il faut aussi le jeton.",
    hameconnage: false, sansMdp: false,
    svg: `<rect x="38" y="20" width="84" height="48" rx="14"/><rect x="50" y="32" width="60" height="22" rx="3" class="f"/>
      <text x="57" y="48" class="a">482 913</text><circle cx="80" cy="82" r="8"/><path d="M80 68 v6"/>`,
  },
  {
    annee: "2011",
    moyen: "La double authentification par SMS",
    texte: "Google ouvre la validation en deux étapes à tous : après le mot de passe, un code reçu par SMS. Plus sûr, mais un faux site peut encore voler le code.",
    hameconnage: false, sansMdp: false,
    svg: `<rect x="56" y="8" width="48" height="84" rx="8"/><path d="M72 14 h16"/>
      <rect x="62" y="30" width="62" height="28" rx="6" class="a"/><path d="M70 58 l-4 8 l10 -8" class="a"/>
      <text x="67" y="42" class="a">Code :</text><text x="67" y="53" class="a">739104</text>`,
  },
  {
    annee: "2013",
    moyen: "L'empreinte digitale sur smartphone",
    texte: "Touch ID arrive sur l'iPhone 5s : la biométrie devient un geste du quotidien. L'empreinte reste sur le téléphone. La même année, la FIDO Alliance est lancée.",
    hameconnage: false, sansMdp: false,
    svg: `<g class="a"><path d="M80 18 a32 32 0 0 1 32 32"/><path d="M48 50 a32 32 0 0 1 20 -29.6"/>
      <path d="M58 56 a22 22 0 0 1 44 -6 v8"/><path d="M68 62 a12 12 0 0 1 24 -10 v14"/>
      <path d="M80 50 v22"/><path d="M58 64 q2 12 8 18"/><path d="M102 64 q-2 12 -10 20"/><path d="M48 58 q0 12 6 20"/></g>`,
  },
  {
    annee: "2014",
    moyen: "La clé de sécurité physique (FIDO U2F)",
    texte: "Une petite clé USB confirme la connexion : elle vérifie elle-même l'adresse du site, ce qui bloque les faux sites. Première vraie protection contre l'hameçonnage.",
    hameconnage: true, sansMdp: false,
    svg: `<rect x="34" y="34" width="70" height="30" rx="8"/><rect x="104" y="40" width="26" height="18" rx="2"/>
      <path d="M110 46 h4 M120 46 h4" /><circle cx="60" cy="49" r="8" class="a"/><circle cx="60" cy="49" r="3" class="a"/>
      <circle cx="42" cy="49" r="3"/>`,
  },
  {
    annee: "2017",
    moyen: "La reconnaissance du visage",
    texte: "Face ID (iPhone X) : le téléphone se déverrouille d'un regard grâce à une cartographie 3D du visage, calculée et gardée sur l'appareil. Elle déverrouille le téléphone, mais ne protège pas un mot de passe tapé sur un faux site.",
    hameconnage: false, sansMdp: false,
    svg: `<path d="M44 26 v-10 h12 M104 16 h12 v10 M116 74 v10 h-12 M56 84 h-12 v-10" class="a"/>
      <circle cx="68" cy="42" r="3"/><circle cx="92" cy="42" r="3"/><path d="M80 44 v12 h-4"/>
      <path d="M68 66 q12 9 24 0"/>`,
  },
  {
    annee: "2019",
    moyen: "WebAuthn, standard du web",
    texte: "Le W3C publie WebAuthn : tous les navigateurs savent utiliser une clé de sécurité ou la biométrie de l'appareil pour se connecter à un site.",
    hameconnage: true, sansMdp: "partiel",
    svg: `<rect x="18" y="14" width="124" height="72" rx="6"/><path d="M18 28 h124"/>
      <circle cx="27" cy="21" r="2"/><circle cx="35" cy="21" r="2"/><circle cx="43" cy="21" r="2"/>
      <g class="a"><circle cx="64" cy="56" r="11"/><path d="M75 56 h40 M105 56 v9 M113 56 v7"/></g>`,
  },
  {
    annee: "2022",
    moyen: "Les passkeys",
    texte: "Apple, Google et Microsoft s'engagent ensemble, puis les passkeys arrivent sur iPhone : une clé synchronisée entre ses appareils remplace le mot de passe.",
    hameconnage: true, sansMdp: true,
    svg: `<rect x="22" y="22" width="56" height="20" rx="4"/><text x="28" y="36">********</text>
      <path d="M18 18 l64 28" class="x"/>
      <rect x="96" y="10" width="44" height="78" rx="8"/><path d="M110 16 h16"/>
      <g class="a"><circle cx="118" cy="42" r="8"/><path d="M118 50 v18 M118 60 h6 M118 66 h4"/></g>`,
  },
  {
    annee: "2023 – 2025",
    moyen: "Sans mot de passe, par défaut",
    texte: "Google propose la passkey en premier (2023), puis Microsoft crée les nouveaux comptes sans aucun mot de passe (2025) : la passkey devient la norme.",
    hameconnage: true, sansMdp: true,
    svg: `<rect x="40" y="34" width="80" height="34" rx="17" class="a"/><circle cx="103" cy="51" r="12" class="a"/>
      <text x="48" y="56" class="a">ON</text><text x="34" y="86" class="p">sans mot de passe</text>`,
  },
  {
    annee: "2026",
    moyen: "L'usage de masse",
    texte: "7 milliards de passkeys (5 milliards en mai) et plus d'un tiers des connexions réussies. La CNIL sanctionne un hôpital privé qui n'avait pas de MFA.",
    hameconnage: true, sansMdp: true,
    svg: `<path d="M24 84 h112"/><rect x="40" y="52" width="26" height="32" rx="3"/><rect x="88" y="30" width="26" height="54" rx="3" class="a"/>
      <text x="44" y="46" class="p">5 Md</text><text x="92" y="24" class="a">7 Md</text>
      <path d="M66 30 q16 -16 28 -16" class="a"/><path d="M88 12 l6 2 l-4 5" class="a"/>`,
  },
  {
    annee: "Demain",
    moyen: "La biométrie continue (cœur)",
    texte: "Le bracelet Nymi, certifié FIDO2, authentifie en continu grâce à l'électrocardiogramme ; le Pentagone a testé l'identification par le cœur à distance.",
    hameconnage: true, sansMdp: true,
    svg: `<rect x="30" y="30" width="100" height="40" rx="20"/><path d="M38 50 h22 l6 -14 l8 26 l7 -20 l5 8 h36" class="a"/>
      <path d="M72 20 q8 -10 16 0 q8 -10 16 0 q0 10 -16 20 q-16 -10 -16 -20z" class="a" transform="translate(-8 -6) scale(0.9)"/>`,
  },
];
