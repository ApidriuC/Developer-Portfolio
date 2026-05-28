# 💻 Portafolio de Andrés Felipe Londoño Campos

Portafolio personal con un concepto visual **«DevOS»**: el sitio se siente como un **editor de código / terminal**, donde cada sección es una "ventana" distinta (terminal, `README.md`, `git log`, `stack.json`, tarjetas de repos, etc.).

Ingeniero de Sistemas · Desarrollador **Full Stack** (.NET, React, Node) · cursando **Especialización en Seguridad Informática**.

🔗 **Sitio en vivo:** [https://apidriuc.github.io/Developer-Portfolio](https://apidriuc.github.io/Developer-Portfolio/)

![Portafolio — modo oscuro](docs/preview-dark.png)

<p align="center"><em>Tema «DevOS» — modo oscuro (arriba) y modo claro (abajo).</em></p>

![Portafolio — modo claro](docs/preview-light.png)

---

## ✨ Características

- 🎨 **Tema «DevOS»** inspirado en un editor de código (chrome de ventanas, *syntax highlighting* como acentos, fuente monoespaciada).
- 🌗 **Modo claro y oscuro** con paletas distintas, **persistente** (`localStorage` + `prefers-color-scheme`) y sin parpadeo inicial.
- 🌐 **Bilingüe Español / Inglés** con `i18next`, también **persistente**.
- 🧩 **Contenido data-driven**: proyectos, estudios, experiencia, servicios y skills se editan desde archivos en [`src/data/`](src/data) — sin tocar componentes.
- 🔒 **Proyectos públicos vs. privados**: badges de visibilidad y nota de confidencialidad para contribuciones que no pueden exhibirse.
- 📨 Botón **"Solicitar mi hoja de vida"** que abre un correo predefinido.
- ⌨️ Animación de *typing* en la terminal y contadores animados (respetan `prefers-reduced-motion`).
- 📱 Responsive y accesible (roles/labels, navegación por teclado).

---

## 🚀 Tecnologías

<div align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub_Pages-222?style=for-the-badge&logo=github&logoColor=white" />
</div>

---

## 🪟 Secciones (cada una, una "ventana")

| Sección | Concepto |
|---|---|
| 🏠 **Inicio** | Terminal con *typing* (`./whoami --full`) + ventana de imagen de perfil |
| 📊 **Stats** | Salida de `npm run build` con métricas y contadores animados |
| 👤 **Sobre mí** | Archivo `README.md` renderizado (markdown) |
| 🌿 **Trayectoria** | `git log --graph` con la experiencia como commits |
| 🧠 **Servicios** | Tarjetas tipo `function()` con las áreas de especialidad |
| 📦 **Skills** | `stack.json` con *syntax highlighting* + **Educación** como tarjetas |
| 📁 **Proyectos** | Tarjetas tipo repositorio de GitHub (con badge público/privado) |
| 📬 **Contacto** | Terminal con comandos (`./request-cv.sh`, `ls ./social`) |

La navegación es una **barra de estado** superior estilo editor.

---

## 🗂️ Estructura del proyecto

```text
src/
├─ assets/            # Imágenes y logos (webp / svg / png)
├─ components/
│  ├─ common/         # WindowFrame, Typewriter, NavOptions, BgAnimation,
│  │                  # Icon, Form, RequestCvButton, SectionFrame, Notification…
│  └─ sections/       # Hello, Stats, AboutMe, Experience, Services,
│                     # Skills, Projects, ConnectMe
├─ data/              # 🔧 Contenido editable (ver abajo)
├─ hooks/             # useTheme (tema persistente)
├─ locales/           # es.json, en.json, i18n.js
├─ styles/            # main.css (tema DevOS) + tailwindInput.css
└─ types/             # general.ts, props.ts
```

---

## 🔧 Cómo editar el contenido (data-driven)

Todo el contenido vive en [`src/data/`](src/data). Los textos largos se traducen vía claves en [`src/locales/`](src/locales).

| Quiero… | Edito | Detalle |
|---|---|---|
| Añadir un **proyecto** | `data/projects.ts` | `visibility: 'public' \| 'private'`, `link`, `image`, `tags`, `descKey` |
| Añadir un **estudio/certificación** | `data/education.ts` | `kind`, `status: 'done' \| 'in-progress'` (badge "En curso"), `support` |
| Añadir un **empleo** | `data/experience.ts` | `current: true` lo marca como `HEAD -> main` |
| Editar **servicios** | `data/services.ts` | `icon` + claves de título/descripción |
| Editar el **stack** | `data/skills.ts` | tecnología = `{ label, sourceImage, sourceLink }` |
| Editar **redes / email** | `data/socials.ts` | incluye `CONTACT_EMAIL` y `GITHUB_URL` |

> Las métricas de **Stats** (años, proyectos, tecnologías, estudios) se **recalculan solas** a partir de estos archivos.

### 🌐 Traducciones
Para textos nuevos, agrega la misma **clave** en [`src/locales/es.json`](src/locales/es.json) y [`src/locales/en.json`](src/locales/en.json), y referénciala con `t('clave')`.

### 🖼️ Foto de perfil
Reemplaza [`src/assets/me-image-profile.webp`](src/assets/me-image-profile.webp) (conserva el mismo nombre; idealmente `.webp` optimizado).

---

## 🧪 Scripts

```bash
npm run dev       # Servidor de desarrollo (Vite)
npm run build     # Build de producción a /dist
npm run preview   # Previsualiza el build
npm run lint      # ESLint
npm run deploy    # Publica /dist en GitHub Pages (gh-pages)
```

## ▶️ Ejecutar localmente

```bash
git clone https://github.com/ApidriuC/Developer-Portfolio.git
cd Developer-Portfolio
npm install
npm run dev
```

Abre la URL que indica Vite (por defecto `http://localhost:5173/Developer-Portfolio/`).

## 🚢 Despliegue

El sitio se publica en **GitHub Pages**. `npm run deploy` ejecuta el build (`predeploy`) y sube `/dist` con `gh-pages`. La ruta base está configurada en [`vite.config.js`](vite.config.js) (`base: '/Developer-Portfolio/'`).

---

## 📜 Licencia / Uso

Proyecto **personal**. El código puede servirte de referencia o inspiración. Los **textos, imágenes y datos personales** son propiedad de Andrés Felipe Londoño Campos; por favor, no los reutilices tal cual para tu propio portafolio. Si quieres aprovechar la base, ¡escríbeme!

📧 **andresfloncam@gmail.com** · 🐙 [github.com/ApidriuC](https://github.com/ApidriuC)
