# ⚡️ Next.js Starter

A modern ⚛️ **Next.js** starter template using **Turbopack**, **React 19**, and full **TypeScript** + **ESLint/Prettier** support out of the box.

---

## 🚀 Scripts

| Script   | Command         | Description                                 |
| -------- | --------------- | ------------------------------------------- |
| 🛠️ Dev   | `npm run dev`   | Start the development server with Turbopack |
| 🏗️ Build | `npm run build` | Build the application for production        |
| 🚢 Start | `npm run start` | Start the production server                 |

---

## 🧩 Dependencies

### Runtime

- 📦 **Next.js** `15.5.2`
- ⚛️ **React** `19.1.0`
- 🧠 **ReactDOM** `19.1.0`

### Dev Tools

- 🧹 **ESLint** & plugins
- 🎨 **Prettier**
- 🐶 **Husky** + 🧼 **lint-staged**
- 🧪 **TypeScript**

---

## 🧰 Lint-Staged Setup

```json
{
	"*.{js,cjs,mjs,ts,jsx,tsx,vue,json,css,scss,md}": "prettier --write",
	"*.{js,cjs,mjs,ts,jsx,tsx,vue}": "eslint --fix"
}
```
