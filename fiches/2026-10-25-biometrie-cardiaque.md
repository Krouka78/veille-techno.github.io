# Fiche de veille — Et après les passkeys ? La biométrie cardiaque

| | |
|---|---|
| **Date de la fiche** | 25 octobre 2026 |
| **Sources** | MIT Technology Review (2019), DSIAC — ministère américain de la Défense (2019), Wearable Technologies (2021) |
| **Type** | Prospective |

## 1. Le bracelet Nymi : un cœur certifié FIDO2

- Le bracelet lit l'**électrocardiogramme** (ECG) de la personne qui le porte : chaque cœur a une signature électrique propre.
- Il est **certifié FIDO2** : il peut porter des passkeys.
- Il remplace le code PIN par une **authentification continue** : tant que le bracelet est porté et le cœur reconnu, l'utilisateur reste authentifié ; s'il l'enlève, l'accès est coupé.
- Usage visé : usines et laboratoires, où les salariés portent des gants.
- Source : https://wearable-technologies.com/news/nymi-receives-fido2-biometric-passwordless-certification-for-nymi-band-3-0

> À vérifier régulièrement : je n'ai pas trouvé d'actualité 2025-2026 sur ce produit.

## 2. Le laser « Jetson » du Pentagone

- Prototype développé pour l'**armée américaine** (et non la NASA), présenté en 2019.
- Un laser infrarouge mesure les **vibrations de la peau** dues aux battements du cœur, jusqu'à **200 mètres**.
- Environ **95 %** d'identifications correctes, si la personne reste immobile une trentaine de secondes ; une veste épaisse suffit à bloquer la mesure.
- Sources : https://www.technologyreview.com/2019/06/27/238884/the-pentagon-has-a-laser-that-can-identify-people-from-a-distanceby-their-heartbeat/ · https://dsiac.dtic.mil/articles/dod-builds-jetson-laser-vibrometry-system-to-id-remote-subjects-by-heartbeat/

## Ce qui progresse

Mot de passe → MFA → passkey → **authentification continue** par un signal du corps.

## Les limites

- Les données biométriques sont des **données sensibles** au sens du RGPD.
- L'identification **à distance et à l'insu** de la personne pose une vraie question de vie privée.
