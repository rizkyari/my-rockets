# 🚀 MyRocket

A responsive Vue 3 + Vuetify app that displays rockets using the [SpaceX API](https://github.com/r-spacex/SpaceX-API).

---

## 🌟 Features

- 🚀 View a list of rockets with image, name, and description
- 🔍 Search and filter rockets by status, country, and name
- ➕ Add new rockets (locally)
- ✏️ Edit and 🗑️ delete custom rockets (locally)
- 📄 View detailed info: cost, country, description, image, first flight
- 🌗 Toggle between dark and light themes
- 🔁 Loading, error, and retry UI states
- 🧭 404 not found page
- 📱 Fully responsive design
- 🧠 State management using Pinia
- 🧪 Clean & maintainable codebase using Vue 3 Composition API

---

## 🛠 Tech Stack

- **Vue 3** with Composition API
- **Vuetify 3** for UI components
- **Pinia** for state management
- **Vue Router (auto-routes)** for navigation
- **TypeScript**
- **Vite** as the build tool

---

## 📦 Project Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Folder Structure

```bash
src/
├─ assets/              # Colors, images, constants
├─ components/          # Reusable UI and rocket components
├─ pages/               # Auto-routed views (list, detail, create)
├─ plugins/             # Vuetify, router
├─ router/              # Auto-routing config
├─ services/            # API call functions
├─ store/               # Pinia stores
├─ styles/              # Global styles if any
└─ main.ts              # Entry point
```

## 🧑‍🚀 Author

Developed by Rizky Ari

[Linkedin](https://www.linkedin.com/in/rizkyarihar/) | [GitHub](https://github.com/rizkyari)