# 🚀 Guide de Déploiement Netlify

## Option 1 : Déploiement Automatique via Git (Recommandé)

### Étape 1 : Créer un dépôt GitHub

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Faire le premier commit
git commit -m "Portfolio professionnel initial"

# Créer la branche main
git branch -M main
```

### Étape 2 : Pousser sur GitHub

1. Allez sur [github.com](https://github.com) et créez un nouveau dépôt
2. Nommez-le `portfolio-hamouda` (ou un autre nom)
3. **N'ajoutez PAS** de README, .gitignore ou licence (on les a déjà)
4. Copiez l'URL du dépôt

```bash
# Ajouter le remote
git remote add origin https://github.com/VOTRE-USERNAME/portfolio-hamouda.git

# Pousser le code
git push -u origin main
```

### Étape 3 : Connecter à Netlify

1. Allez sur [netlify.com](https://netlify.com) et connectez-vous (ou créez un compte)
2. Cliquez sur **"Add new site"** → **"Import an existing project"**
3. Choisissez **GitHub** et autorisez l'accès
4. Sélectionnez votre dépôt `portfolio-hamouda`
5. Netlify détecte automatiquement la configuration grâce à `netlify.toml` ✅
6. Cliquez sur **"Deploy site"**

### ✨ C'est tout ! Votre site sera déployé en 1-2 minutes

Vous obtiendrez une URL comme : `https://random-name-123.netlify.app`

---

## Option 2 : Déploiement Manuel (Rapide)

### Build le projet

```bash
npm run build
```

### Déployer le dossier dist

1. Allez sur [app.netlify.com/drop](https://app.netlify.com/drop)
2. Glissez-déposez le dossier **`dist`** sur la page
3. Votre site est en ligne ! 🎉

**Note** : Avec cette méthode, vous devrez redéployer manuellement à chaque modification.

---

## Option 3 : Via Netlify CLI

### Installation

```bash
# Installer Netlify CLI globalement
npm install -g netlify-cli
```

### Déploiement

```bash
# Se connecter à Netlify
netlify login

# Initialiser le site
netlify init

# Déployer en production
netlify deploy --prod
```

---

## 🎨 Personnaliser l'URL du Site

Par défaut, Netlify donne une URL aléatoire. Pour la changer :

1. Allez dans **Site settings** → **Site details**
2. Cliquez sur **"Change site name"**
3. Choisissez un nom disponible (ex: `hamouda-portfolio`)
4. Votre nouvelle URL : `https://hamouda-portfolio.netlify.app` ✅

---

## 🌐 Ajouter un Domaine Personnalisé

Si vous avez un domaine (ex: `hamouda.dev`) :

1. Dans Netlify, allez sur **Domain management**
2. Cliquez **"Add custom domain"**
3. Entrez votre domaine : `hamouda.dev`
4. Suivez les instructions pour configurer les DNS chez votre registrar
5. Netlify configure automatiquement HTTPS 🔒

---

## 📧 Configurer le Formulaire de Contact

Le formulaire est déjà configuré pour Netlify Forms !

Après le déploiement :

1. Allez dans **Forms** dans votre dashboard Netlify
2. Vous verrez le formulaire "contact"
3. Les soumissions apparaîtront automatiquement ici
4. Vous pouvez configurer des notifications par email

---

## 🔄 Déploiement Automatique

Avec l'Option 1 (Git), chaque fois que vous poussez sur GitHub :

```bash
git add .
git commit -m "Mise à jour du portfolio"
git push
```

→ Netlify redéploie automatiquement ! 🚀

---

## ✅ Checklist Avant Déploiement

- [ ] Mettre à jour vos informations personnelles dans `Hero.jsx` et `Contact.jsx`
- [ ] Remplacer les liens GitHub/LinkedIn par les vôtres
- [ ] Ajouter vos vrais projets dans `Projects.jsx`
- [ ] Modifier l'email de contact
- [ ] Vérifier le contenu de `About.jsx` et `Skills.jsx`
- [ ] Tester localement avec `npm run dev`
- [ ] Build de test avec `npm run build`

---

## 🎯 URL Finale

Après déploiement, partagez votre portfolio :

- **URL Netlify** : `https://votre-site.netlify.app`
- **Domaine personnalisé** : `https://votre-domaine.com` (optionnel)

---

## 🆘 Problèmes Courants

### Le site ne se charge pas
- Vérifiez que `dist` est bien le publish directory
- Assurez-vous que `npm run build` fonctionne localement

### Le formulaire ne fonctionne pas
- Le formulaire ne fonctionne qu'après déploiement sur Netlify (pas en local)
- Vérifiez que `data-netlify="true"` est présent dans `Contact.jsx`

### Les images ne s'affichent pas
- Vérifiez les chemins d'images
- Les images Unsplash fonctionnent sans configuration

---

**Besoin d'aide ?** 
- [Documentation Netlify](https://docs.netlify.com)
- [Support Netlify](https://answers.netlify.com)

---

Bon déploiement ! 🚀✨
