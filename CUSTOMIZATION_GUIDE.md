# 🎨 Guide de Personnalisation du Portfolio

Ce guide vous explique comment personnaliser votre portfolio selon vos besoins.

## 📝 Informations Personnelles

### 1. Section Hero (Page d'accueil)

**Fichier** : `src/components/Hero.jsx`

```jsx
// Modifier ces éléments :
<h1>Votre Nom</h1>
<h2>Votre Titre Professionnel</h2>
<p>Votre description...</p>

// Informations de contact
<Mail> votre@email.com
<Phone> +33 X XX XX XX XX
<MapPin> Votre Localisation

// Liens sociaux
<a href="https://github.com/VOTRE-USERNAME">
<a href="https://linkedin.com/in/VOTRE-PROFIL">
```

### 2. Section Contact

**Fichier** : `src/components/Contact.jsx`

```jsx
// Mettre à jour :
- Email de contact
- Numéro de téléphone
- Liens vers réseaux sociaux
- Localisation
```

## 🎯 Compétences Techniques

**Fichier** : `src/components/Skills.jsx`

### Ajouter une Nouvelle Catégorie

```jsx
const skillCategories = [
  // ... catégories existantes
  {
    title: 'Nouvelle Catégorie',
    icon: VotreIcon, // Importer depuis lucide-react
    skills: [
      { name: 'Compétence 1', level: 90 },
      { name: 'Compétence 2', level: 85 },
    ],
    color: 'blue' // blue, indigo, purple, green, orange, red
  },
];
```

### Modifier une Compétence

Trouvez la compétence dans l'array et changez :
- `name` : Nom de la compétence
- `level` : Niveau de 0 à 100 (%)

### Supprimer une Catégorie

Supprimez simplement l'objet correspondant dans l'array `skillCategories`.

## 💼 Projets

**Fichier** : `src/components/Projects.jsx`

### Ajouter un Nouveau Projet

```jsx
const projects = [
  // ... projets existants
  {
    title: 'Nom du Projet',
    description: 'Description détaillée...',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    image: 'URL_DE_L_IMAGE',
    github: 'https://github.com/vous/projet',
    demo: 'https://demo-url.com',
    color: 'blue'
  },
];
```

### Images de Projets

**Option 1** : Utiliser Unsplash (images placeholder)
```jsx
image: 'https://images.unsplash.com/photo-ID?w=800&h=600&fit=crop'
```

**Option 2** : Utiliser vos propres images
1. Placez l'image dans `public/images/`
2. Référencez-la : `image: '/images/mon-projet.jpg'`

**Option 3** : Utiliser des images depuis `src/assets/`
```jsx
import projectImage from '../assets/projet.jpg'
// ...
image: projectImage
```

## 👤 Section À Propos

**Fichier** : `src/components/About.jsx`

Modifiez :
- Profil professionnel (texte de présentation)
- Expertise technique
- Expérience
- Objectifs

## 🎨 Personnalisation du Design

### Changer les Couleurs Principales

**Méthode 1 : Recherche et remplacement global**

Dans VS Code :
1. Ctrl+Shift+H (Rechercher et Remplacer dans tous les fichiers)
2. Rechercher : `blue-600`
3. Remplacer par : `purple-600` (ou toute autre couleur Tailwind)
4. Remplacer tout

**Méthode 2 : Modifier fichier par fichier**

Couleurs Tailwind disponibles :
- `slate`, `gray`, `zinc`, `neutral`, `stone`
- `red`, `orange`, `amber`, `yellow`
- `lime`, `green`, `emerald`, `teal`, `cyan`
- `sky`, `blue`, `indigo`, `violet`, `purple`
- `fuchsia`, `pink`, `rose`

Niveaux : 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

### Changer les Gradients

Cherchez `bg-gradient-to-` dans les fichiers et modifiez :

```jsx
// Avant
className="bg-gradient-to-br from-blue-50 to-indigo-100"

// Après
className="bg-gradient-to-br from-purple-50 to-pink-100"
```

### Modifier les Espacements

Tailwind utilise une échelle : `1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32...`

```jsx
// Padding
p-6  → p-8  (plus d'espace)
p-6  → p-4  (moins d'espace)

// Margin
mb-4 → mb-8 (plus d'espace en bas)

// Gap (espacement entre éléments)
gap-4 → gap-6
```

## 📱 Menu de Navigation

**Fichier** : `src/components/Navbar.jsx`

### Ajouter un Lien de Navigation

```jsx
const navItems = [
  // ... liens existants
  { name: 'Blog', href: '#blog' },
  { name: 'Services', href: '#services' },
];
```

**Important** : Créez aussi la section correspondante !

### Modifier le Logo/Nom

```jsx
<a href="#home" className="text-2xl font-bold text-blue-600">
  VotreNom
</a>
```

## 🌐 SEO et Meta Tags

**Fichier** : `index.html`

```html
<title>Votre Nom - Votre Titre</title>
<meta name="description" content="Votre description pour les moteurs de recherche" />
<meta name="keywords" content="mots, clés, pertinents" />

<!-- Open Graph pour les réseaux sociaux -->
<meta property="og:title" content="Votre Portfolio" />
<meta property="og:description" content="Description" />
<meta property="og:image" content="URL_IMAGE_PREVIEW" />
```

## 📧 Formulaire de Contact

**Fichier** : `src/components/Contact.jsx`

### Champs du Formulaire

Pour ajouter un champ :

```jsx
<div>
  <label htmlFor="company">Entreprise</label>
  <input
    type="text"
    id="company"
    name="company"
    value={formData.company}
    onChange={handleChange}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg..."
  />
</div>
```

N'oubliez pas d'ajouter le champ dans l'état initial :

```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
  company: '' // ← Nouveau champ
});
```

## 🔤 Polices de Caractères

**Fichier** : `src/index.css`

### Changer la Police

```css
:root {
  font-family: 'Votre Police', system-ui, sans-serif;
}
```

### Ajouter Google Fonts

1. Dans `index.html`, ajoutez dans le `<head>` :

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

2. Dans `src/index.css` :

```css
:root {
  font-family: 'Poppins', system-ui, sans-serif;
}
```

## 🎭 Animations Personnalisées

Pour ajouter des animations custom :

**Fichier** : `src/index.css`

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}
```

Utilisez-la dans vos composants :

```jsx
<div className="animate-fadeInUp">
  Contenu animé
</div>
```

## 📐 Responsive Breakpoints

Tailwind CSS breakpoints :

```jsx
// Mobile-first approach
<div className="
  text-2xl         // Mobile (défaut)
  md:text-4xl      // Tablet (768px+)
  lg:text-5xl      // Desktop (1024px+)
  xl:text-6xl      // Large Desktop (1280px+)
">
```

## 🔧 Configuration Avancée

### Ajouter une Nouvelle Section

1. Créez le composant : `src/components/MaSection.jsx`

```jsx
export default function MaSection() {
  return (
    <section id="ma-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Ma Nouvelle Section
        </h2>
        {/* Votre contenu */}
      </div>
    </section>
  );
}
```

2. Importez dans `src/App.jsx` :

```jsx
import MaSection from './components/MaSection'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MaSection /> {/* ← Nouvelle section */}
      {/* ... autres sections */}
    </div>
  )
}
```

3. Ajoutez le lien dans la navbar (`Navbar.jsx`) :

```jsx
const navItems = [
  // ...
  { name: 'Ma Section', href: '#ma-section' },
];
```

## 🎨 Icônes Lucide React

Explorer les icônes : [lucide.dev](https://lucide.dev)

```jsx
import { IconName } from 'lucide-react'

<IconName size={24} className="text-blue-600" />
```

## 💡 Conseils

- ✅ Testez chaque modification avec `npm run dev`
- ✅ Faites des commits réguliers
- ✅ Gardez une sauvegarde avant les gros changements
- ✅ Testez le responsive sur plusieurs appareils
- ✅ Validez le build avec `npm run build`

## 🆘 Besoin d'Aide ?

- Documentation Tailwind : [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Icônes Lucide : [lucide.dev](https://lucide.dev)
- Composants d'exemple : [tailwindcomponents.com](https://tailwindcomponents.com)

---

Bon développement ! 🚀
