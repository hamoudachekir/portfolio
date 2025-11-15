# 🎨 Portfolio Professionnel - Hamouda

> Portfolio moderne d'un Ingénieur DevOps & Cloud, développé avec React 19, Vite (Rolldown), et Tailwind CSS 4

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)

## ✨ Aperçu

Portfolio professionnel présentant mes compétences en DevOps, Cloud, et automatisation d'infrastructure. Design moderne, responsive et optimisé pour la performance.

**🌐 Demo Live** : [Votre URL Netlify ici]

## 🚀 Démarrage Rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Ouvre [http://localhost:5173](http://localhost:5173) dans votre navigateur.

### Build de Production

```bash
npm run build
```

### Prévisualiser le Build

```bash
npm run preview
```

## 📦 Déploiement sur Netlify

### ⚡ Méthode Rapide (Recommandée)

1. Push sur GitHub :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/portfolio-hamouda.git
   git push -u origin main
   ```

2. Connectez-vous sur [netlify.com](https://netlify.com)
3. Cliquez "Add new site" → "Import an existing project"
4. Sélectionnez votre repo GitHub
5. Netlify détecte automatiquement la config → Cliquez "Deploy" ✅

**📖 Guide Complet** : Voir [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md)

## 🛠️ Technologies

- **React 19.2** - Dernière version avec concurrent features
- **Vite (Rolldown 7.2.2)** - Build ultra-rapide avec Rust
- **Tailwind CSS 4.1** - Framework CSS moderne utility-first
- **Lucide React** - Icônes SVG modernes et personnalisables
- **Netlify** - Hébergement et déploiement continu

## 📂 Structure du Projet

```
portfolio-hamouda/
├── src/
│   ├── components/           # Composants React
│   │   ├── Navbar.jsx       # Navigation fixe avec menu mobile
│   │   ├── Hero.jsx         # Section d'accueil
│   │   ├── About.jsx        # Présentation professionnelle
│   │   ├── Skills.jsx       # Compétences techniques
│   │   ├── Projects.jsx     # Portfolio de projets
│   │   ├── Contact.jsx      # Formulaire de contact (Netlify Forms)
│   │   └── Footer.jsx       # Pied de page
│   ├── App.jsx              # Composant principal
│   ├── main.jsx             # Point d'entrée
│   └── index.css            # Styles globaux + Tailwind
├── public/
│   └── _redirects           # Configuration SPA pour Netlify
├── netlify.toml             # Configuration Netlify
├── index.html               # Template HTML
└── package.json             # Dépendances

```

## 🎨 Fonctionnalités

- ✅ Design moderne et professionnel
- ✅ 100% Responsive (mobile, tablet, desktop)
- ✅ Navigation fluide avec smooth scroll
- ✅ Animations et transitions élégantes
- ✅ Formulaire de contact fonctionnel (Netlify Forms)
- ✅ Optimisé SEO
- ✅ Performance optimale (Lighthouse > 90)
- ✅ Mode clair avec design moderne

## 🔧 Personnalisation

### Modifier vos Informations

1. **Informations personnelles** : `src/components/Hero.jsx` et `Contact.jsx`
2. **Compétences techniques** : `src/components/Skills.jsx`
3. **Projets** : `src/components/Projects.jsx`
4. **À propos** : `src/components/About.jsx`
5. **Meta tags SEO** : `index.html`

### Changer les Couleurs

Les couleurs principales sont dans les classes Tailwind :
- `blue-600` - Couleur principale
- `indigo-600` - Couleur secondaire

Pour changer globalement, cherchez et remplacez ces classes dans tous les composants.

## 📱 Support Responsive

- 📱 **Mobile** : 320px - 767px
- 💻 **Tablet** : 768px - 1023px
- 🖥️ **Desktop** : 1024px - 1279px
- 🖥️ **Large Desktop** : 1280px+

## 🔐 Formulaire de Contact

Le formulaire de contact utilise **Netlify Forms** :
- Fonctionne automatiquement après déploiement
- Les soumissions apparaissent dans le dashboard Netlify
- Configuration des notifications par email possible
- **Note** : Ne fonctionne pas en local (uniquement après déploiement)

## 📈 Performance

Build optimisé avec :
- Code splitting automatique
- Tree shaking
- Minification CSS/JS
- Optimisation des images
- Lazy loading des composants

## 📝 Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualiser le build
npm run lint     # Linter ESLint
```

## 🤝 Contribution

Ce portfolio est personnel, mais vous pouvez :
- L'utiliser comme template
- Suggérer des améliorations
- Signaler des bugs

## 📄 Licence

MIT License - Libre d'utilisation et de modification

## 🔗 Liens Utiles

- [Documentation React](https://react.dev)
- [Documentation Vite](https://vite.dev)
- [Documentation Tailwind CSS](https://tailwindcss.com)
- [Documentation Netlify](https://docs.netlify.com)
- [Lucide Icons](https://lucide.dev)

## 💬 Contact

**Hamouda** - Ingénieur DevOps & Cloud

- 📧 Email : contact@hamouda.dev
- 💼 LinkedIn : [Votre LinkedIn]
- 🐙 GitHub : [Votre GitHub]

---

Développé avec ❤️ et React + Vite
