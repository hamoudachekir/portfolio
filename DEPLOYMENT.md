# Portfolio Professionnel - Hamouda

Portfolio professionnel d'un Ingénieur DevOps & Cloud, développé avec React 19, Vite (Rolldown), et Tailwind CSS 4.

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

### Build de production
```bash
npm run build
```

### Prévisualisation du build
```bash
npm run preview
```

## 📦 Déploiement sur Netlify

### Méthode 1 : Via l'interface Netlify (Recommandé)

1. **Créer un compte Netlify** (si ce n'est pas déjà fait)
   - Allez sur [netlify.com](https://netlify.com)
   - Connectez-vous avec GitHub, GitLab ou votre email

2. **Pousser votre code sur GitHub/GitLab**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio professionnel"
   git branch -M main
   git remote add origin <votre-repo-url>
   git push -u origin main
   ```

3. **Connecter à Netlify**
   - Cliquez sur "Add new site" → "Import an existing project"
   - Sélectionnez votre dépôt Git
   - Netlify détectera automatiquement les paramètres grâce à `netlify.toml`
   - Cliquez sur "Deploy site"

4. **Configuration automatique**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20

### Méthode 2 : Via Netlify CLI

```bash
# Installer Netlify CLI globalement
npm install -g netlify-cli

# Se connecter à Netlify
netlify login

# Initialiser le site
netlify init

# Déployer
netlify deploy --prod
```

### Méthode 3 : Déploiement manuel via Drag & Drop

```bash
# Build le projet
npm run build

# Glisser-déposer le dossier 'dist' sur netlify.com/drop
```

## 🌐 Configuration du Domaine

Une fois déployé, vous obtiendrez une URL Netlify (ex: `your-site.netlify.app`).

Pour un domaine personnalisé:
1. Allez dans "Site settings" → "Domain management"
2. Cliquez sur "Add custom domain"
3. Suivez les instructions pour configurer votre DNS

## ✨ Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Navigation fluide avec scroll smooth
- ✅ Section Hero avec présentation
- ✅ Compétences techniques détaillées
- ✅ Portfolio de projets
- ✅ Formulaire de contact (intégré avec Netlify Forms)
- ✅ Animations et transitions
- ✅ Optimisé pour SEO
- ✅ Build ultra-rapide avec Rolldown

## 🛠️ Technologies

- **React 19.2** - Dernière version de React
- **Vite (Rolldown)** - Build tool ultra-rapide
- **Tailwind CSS 4** - Framework CSS utility-first
- **Lucide React** - Icônes modernes
- **Netlify** - Hébergement et déploiement continu

## 📝 Personnalisation

### Modifier vos informations
Éditez les composants dans `src/components/`:
- `Hero.jsx` - Informations de contact et présentation
- `About.jsx` - Profil professionnel
- `Skills.jsx` - Compétences techniques
- `Projects.jsx` - Vos projets
- `Contact.jsx` - Formulaire de contact

### Modifier les couleurs
Les couleurs principales sont définies dans les composants avec Tailwind:
- `blue-600` - Couleur principale
- `indigo-600` - Couleur secondaire

## 🔧 Configuration Netlify Forms

Le formulaire de contact est configuré pour Netlify Forms. Après le déploiement:
1. Allez dans votre dashboard Netlify
2. Cliquez sur "Forms"
3. Vous verrez les soumissions de formulaire

## 📱 Support

Le portfolio est entièrement responsive et optimisé pour:
- 📱 Mobile (320px+)
- 💻 Tablet (768px+)
- 🖥️ Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🎨 Structure du Projet

```
portfolio-hamouda/
├── public/              # Assets statiques
├── src/
│   ├── components/      # Composants React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Composant principal
│   ├── main.jsx        # Point d'entrée
│   └── index.css       # Styles globaux + Tailwind
├── netlify.toml        # Configuration Netlify
├── index.html          # Template HTML
└── package.json        # Dépendances

```

## 🚀 Prochaines Étapes

Après le déploiement:
1. ✅ Personnalisez vos informations (email, téléphone, liens sociaux)
2. ✅ Ajoutez vos vrais projets avec images
3. ✅ Configurez un domaine personnalisé
4. ✅ Activez HTTPS (automatique avec Netlify)
5. ✅ Testez le formulaire de contact
6. ✅ Partagez votre portfolio !

## 📄 Licence

Ce projet est sous licence MIT - vous êtes libre de l'utiliser et le modifier.

---

Développé avec ❤️ et React + Vite
