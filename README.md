# Veille technologique — La fin des mots de passe : l'adoption des passkeys

**Idrissa MEITE** · BTS SIO option SISR · ENSITECH · en alternance au CHP Sainte-Marie (Osny)

🌐 **Page de veille (mise à jour automatique)** : https://krouka78.github.io/veille-techno.github.io/
🗂️ **Portfolio** : https://portfolio-idrissa-meite.web.app/#veille

---

## Le sujet

Une **passkey** (clé d'accès FIDO2) remplace le mot de passe par une paire de clés cryptographiques : la clé privée reste sur le téléphone ou l'ordinateur et se débloque par l'empreinte, le visage ou un code. Elle **ne peut pas être hameçonnée** et un serveur piraté ne livre aucun mot de passe.

### Problématique

> **Les passkeys sont-elles en train de remplacer les mots de passe ? Suivi de leur adoption et de leurs progrès.**

### Pourquoi ce sujet

- **Il progresse de façon mesurable** : la FIDO Alliance publie chaque année des chiffres officiels, qui permettent de suivre l'évolution dans le temps.
- **Il est lié à mon alternance** : j'ai participé à la mise en place de la **MFA** dans un hôpital privé. En septembre 2026, la CNIL a sanctionné un autre hôpital privé de 500 000 € pour une connexion sans MFA ([fiche](fiches/2026-09-03-sanction-cnil-hopital-prive-loire.md)).
- **Il ouvre sur la suite** : l'authentification continue par biométrie cardiaque ([fiche](fiches/2026-10-25-biometrie-cardiaque.md)).

---

## Frise chronologique

La page de veille présente une **frise de 1961 à aujourd'hui** : un moyen d'authentification par étape, illustré, avec deux repères de progrès — *résiste à l'hameçonnage* et *se passe du mot de passe*. Données et illustrations (SVG dessinés, sans image externe) : [`frise.js`](frise.js).

| Année | Moyen | Résiste à l'hameçonnage | Sans mot de passe |
|---|---|---|---|
| 1961 | Premier mot de passe informatique (CTSS, MIT) | ✗ | ✗ |
| 1979 | Mot de passe haché (Unix) | ✗ | ✗ |
| 1986 | Jeton à code temporaire (RSA SecurID) | ✗ | ✗ |
| 2011 | Double authentification par SMS (Google) | ✗ | ✗ |
| 2013 | Empreinte digitale sur smartphone (Touch ID) | ✗ | ✗ |
| 2014 | Clé de sécurité physique (FIDO U2F) | ✓ | ✗ |
| 2017 | Reconnaissance du visage (Face ID) | ✗ | ✗ |
| 2019 | WebAuthn, standard du W3C | ✓ | en partie |
| 2022 | Passkeys (Apple, Google, Microsoft) | ✓ | ✓ |
| 2023 – 2025 | Sans mot de passe par défaut (Google, Microsoft) | ✓ | ✓ |
| 2026 | Usage de masse : 7 milliards de passkeys | ✓ | ✓ |
| Demain | Biométrie continue par le cœur (Nymi, FIDO2) | ✓ | ✓ |

---

## Indicateurs suivis

| Indicateur | Relevés | Source |
|---|---|---|
| Passkeys utilisées dans le monde | **5 milliards** (mai 2026) → **7 milliards** (oct. 2026) | FIDO Alliance |
| Grands services mesurés par le Passkey Index | **9** (2025) → **15** (2026) | FIDO Alliance |
| Part des connexions réussies faites par passkey | **plus d'un tiers** (oct. 2026) | FIDO Alliance |
| Consommateurs ayant activé une passkey | **75 %** (mai 2026) | FIDO Alliance |
| Organisations qui les déploient pour leurs salariés | **68 %** (mai 2026) | FIDO Alliance |

Données détaillées : [`data/indicateurs.json`](data/indicateurs.json) — à compléter à chaque nouveau rapport.

---

## Méthode

| Étape | Comment |
|---|---|
| **Collecte** | Un script ([`scripts/collecte.mjs`](scripts/collecte.mjs)) lit chaque jour les flux RSS des sources et garde les articles qui parlent du sujet. Il est lancé automatiquement par **GitHub Actions** ([`.github/workflows/veille.yml`](.github/workflows/veille.yml)). |
| **Mots-clés** | passkey, clé d'accès, FIDO2, WebAuthn, passwordless, sans mot de passe, résistant à l'hameçonnage, authentification biométrique |
| **Stockage** | [`data/articles.json`](data/articles.json) : tous les articles retenus, datés, avec leur source |
| **Analyse** | Une **fiche de veille** par actualité importante, dans [`fiches/`](fiches/) |
| **Suivi** | Les indicateurs chiffrés et la chronologie ([`data/chronologie.json`](data/chronologie.json)) |
| **Évaluation des sources** | [`sources.md`](sources.md) et le tableau XLS du portfolio |

---

## Fiches de veille

| Date | Fiche |
|---|---|
| 25/10/2026 | [Et après les passkeys ? La biométrie cardiaque](fiches/2026-10-25-biometrie-cardiaque.md) |
| 15/10/2026 | [Passkey Index 2026 : 7 milliards de passkeys](fiches/2026-10-15-passkey-index-2026.md) |
| 03/09/2026 | [La CNIL sanctionne un hôpital privé faute de MFA](fiches/2026-09-03-sanction-cnil-hopital-prive-loire.md) |
| 07/05/2026 | [State of Passkeys 2026 : grand public et entreprises](fiches/2026-05-07-state-of-passkeys-2026.md) |

---

## Organisation du dépôt

```
├── index.html                 page de veille (GitHub Pages)
├── frise.js                   frise chronologique illustrée
├── README.md                  ce document
├── sources.md                 évaluation des sources
├── data/
│   ├── sources.json           flux RSS suivis
│   ├── articles.json          articles collectés automatiquement
│   ├── indicateurs.json       relevés chiffrés
│   └── chronologie.json       grandes étapes
├── fiches/                    fiches de veille datées
├── scripts/collecte.mjs       collecte RSS (Node.js, sans dépendance)
└── .github/workflows/veille.yml  collecte quotidienne automatique
```
