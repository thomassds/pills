# 💊 Pill Reminder

A simple project built with **React + Vite + Tailwind CSS** that helps users remember if they've taken their pill for the day. It uses **Context API with localStorage** to persist data locally and avoid multiple records on the same day.

---

## 🔗 Live Demo

👉 [Click here to access the live app](https://pills-production.up.railway.app/)

## ✨ Features

- ✅ Beautiful and responsive interface with Tailwind CSS
- 💾 Stores whether the pill has already been taken (locally)
- 📆 Checks if the user has taken their pill **today**
- 🧠 Uses Context API to manage global state
- ⚡️ Optimized performance using `useMemo` and `useEffect`

---

## 📸 Preview

<div align="center">
  <img src="https://github.com/thomassds/pills/blob/main/public/preview.png" alt="preview" width="400"/>
  <img src="https://github.com/thomassds/pills/blob/main/public/preview2.png" alt="preview" width="400"/>
</div>

---

## 🚀 Technologies

- [React](https://reactjs.org)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- Context API
- TypeScript

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/pill-reminder.git

# Enter the project folder
cd pill-reminder

# Install the dependencies
npm install

# Run the project
npm run dev
```

## 🧠 Project Structure

pill-reminder/
├── public/ # Static files
├── src/
│ ├── assets/ # Images
│ ├── context/ # Context API (global state)
│ ├── pages/ # App pages
│ ├── App.tsx # Main component
│ ├── index.css # Global styles + Tailwind
│ └── main.tsx # Entry point
