# Nyoota Terrain

L'édition terrain de Nyoota Négo, publiée sur https://terrain.nyoota.fr (V131 · 08/11/2026).

- Ce dépôt est public et ne contient **que du code** : aucun client, aucune note, aucun prix.
- Il contient l'adresse du projet Supabase et sa clé **publique** (« anon »), faite pour être publique.
  La sécurité est dans la base : sans code d'édition valable, elle ne rend rien.
- À l'ouverture, l'application demande le code d'édition qu'Amine a généré. Les données arrivent de la base
  et restent en copie sur le téléphone, pour travailler hors réseau.
- Quand Amine révoque le code, l'application envoie d'abord toutes les notes en attente, puis efface tout.

Ce dossier est fabriqué par `construire_site.js` à partir du Pilotage : ne pas le modifier à la main.
