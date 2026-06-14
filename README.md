# Site vitrine — SARL De Almeida

### 👉 [Voir le site en ligne](https://lda2a.github.io/site-de-almeida/)

Site vitrine de la **SARL De Almeida** (Lecci, Corse-du-Sud), entreprise multi-activités
de l'habitat dirigée par **Nuno de Almeida** :

1. 🏗️ **Maîtrise d'œuvre** — construction, rénovation, extension (32 ans d'expérience, garantie décennale)
2. 📐 **Économiste de la construction** — estimation, analyse de devis, suivi budgétaire
3. 🪟 **De Almeida Menuiseries** — portes, fenêtres, volets, vérandas, carrelage
4. 🏊 **Piscines Ibiza Porto-Vecchio** — magasin franchisé (piscines coques, spas, accessoires)

> Site réalisé par **LDA Consulting** (agence web). LDA Consulting est le prestataire ;
> la SARL De Almeida est le client final. Les deux entités sont distinctes.

## 🧱 Stack

Site statique (HTML / CSS / JS) **empaqueté avec [Vite](https://vitejs.dev/)** —
ce qui le rend déployable directement sur Hostinger (Vite figure parmi les frameworks
pris en charge). Vite ne sert qu'à builder : aucune logique applicative, le site reste
du HTML/CSS/JS pur.

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil — présentation globale + 4 branches |
| `maitrise-oeuvre.html` | Maîtrise d'œuvre |
| `economiste.html` | Économiste de la construction |
| `menuiseries.html` | De Almeida Menuiseries |
| `piscines-ibiza.html` | Piscines Ibiza Porto-Vecchio |
| `contact.html` | Contact + formulaire + carte Google Maps |
| `style.css` | Design (palette méditerranéenne) + responsive |
| `script.js` | Menu mobile, header au scroll, animations, formulaire |
| `logo-menuiseries.svg` | Logo « De Almeida Menuiseries » (créé sur mesure) |
| `public/images/` | Photos (chantiers, réalisations, modèles de piscines) |
| `public/sitemap.xml`, `public/robots.txt` | SEO (copiés tels quels dans le build) |
| `vite.config.js` | Configuration multi-pages (6 points d'entrée HTML) |

> Les fichiers du dossier `public/` sont recopiés à l'identique à la racine du site
> (URL stables `images/…`, `robots.txt`, `sitemap.xml`). Le CSS et le JS sont eux
> regroupés et versionnés (cache-busting) dans `dist/assets/`.

## 💻 Lancer en local

```bash
npm install      # installe Vite (une seule fois)
npm run dev      # serveur de dev avec rechargement à chaud
npm run build    # génère le site final dans dist/
npm run preview  # prévisualise le build de production
```

## 🚀 Déploiement Hostinger

Hostinger détecte le projet **Vite** et exécute automatiquement `npm install`
puis `npm run build`. Réglages attendus :

- **Build command** : `npm run build`
- **Output / publish directory** : `dist`

Aucune autre configuration n'est nécessaire.

## 🔎 SEO

Chaque page dispose de balises `title`/`description`, Open Graph, et de données
structurées **schema.org** (`LocalBusiness` / `Service` / `Store`), optimisées pour les
recherches locales en Corse-du-Sud (Porto-Vecchio, Bonifacio, Figari).

## ⚙️ À personnaliser avant mise en ligne

- **Nom de domaine** : remplacer `https://www.sarl-dealmeida.fr/` (balises canoniques,
  Open Graph, sitemap) par le domaine réel.
- **E-mail du formulaire** : dans `script.js`, l'adresse `contact@sarl-dealmeida.fr`
  (le formulaire ouvre le client mail ; pour un envoi serveur, brancher un service type
  Formspree, Netlify Forms ou un back-end).
- **Réseaux sociaux** : liens Instagram / Facebook Piscines Ibiza déjà intégrés.
- **Photos Instagram/Facebook** : non récupérables automatiquement (comptes protégés) —
  à ajouter manuellement dans `images/` si souhaité.

---

© SARL De Almeida — Site réalisé par LDA Consulting
