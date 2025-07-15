# ShopX - EPOS Web App

> This is an educational project created by Neetibut Vasinondha and taught at Generation Thailand Junior Software Developer Bootcamp 2025.

## 📌 Overview

ShopX is a web application designed to provide shopkeepers with a simple, efficient way to browse products, add them to a cart, and complete the checkout process. Built with **Vanilla JavaScript, Tailwind CSS, and Vite**, ShopX focuses on teaching beginners and intermediates learners about **JavaScript Document Object Model (DOM) manipulation, Object-Oriented Programming (OOP), ES6 Modules, and dynamic user interface creation**.

This educational project **does not yet include a backend server or database connection**. Instead, it uses `localStorage` for temporary data persistence, simulating real-world workflow.

---

## 📦 Features

### 🛍️ Product Management

- Browse products dynamically displayed from a catalog.
- Add products to the cart with a single click.
- Supports product categories and descriptions.

### 🛒 Shopping Cart

- Add, remove, and update product quantities.
- Auto-updating total price calculation.
- Cart persistence using `localStorage`.

### ✅ Checkout & Order Processing

- Validated checkout form (Name, Email, Address).
- Dynamic order confirmation.
- Checkout button disabled when cart is empty.

### 📦 Data Storage

- `localStorage` is used for storing:
  - Cart items (temporarily, until checkout).
- This project focuses solely on **front-end functionalities using JavaScript OOP and DOM manipulation**.

### 🌍 Deployment

- Deployed on Vercel for secured and scalable access.

---

## 💻 Technology Stack

| Feature          | Technology                                  |
| ---------------- | ------------------------------------------- |
| Frontend         | HTML, Tailwind CSS, JavaScript (ES Modules) |
| Development Tool | Vite                                        |
| Deployment       | Vercel (via Vite build)                     |

---

Next Features:

- Integrate real-time weather data from external API using Axios.
- Connect MongoDB for persistent storage of orders.
- Data visualization from database.
- Login/Signup with Google OAuth.

---

#### Example of a professional project structure for a small to medium-sized vanilla JS project:

```
my-vanilla-js-project/
├── node_modules/
├── public/
│ ├── index.html (The main entry HTML, Vite injects JS/CSS here)
│ ├── favicon.ico
│ └── images/
│ └── logo.png
├── src/
│ ├── main.js (Main JS entry point, imported by index.html)
│ ├── style.css (Global styles, imported by main.js)
│ ├── assets/
│ │ ├── images/
│ │ │ └── background.jpg
│ │ └── fonts/
│ │ └── OpenSans-Regular.ttf
│ ├── components/
│ │ ├── MyButton/
│ │ │ ├── MyButton.js (JS for the component, exports a class/function)
│ │ │ ├── MyButton.css (Component-specific styles, imported by MyButton.js)
│ │ │ └── MyButton.html (Optional: if using <template> for complex HTML)
│ │ ├── UserCard/
│ │ │ ├── UserCard.js
│ │ │ └── UserCard.css
│ │ └── CommonElement/
│ │ └── CommonElement.js
│ ├── utils/
│ │ ├── api.js (Functions for API interactions)
│ │ ├── helpers.js (Small, reusable utility functions)
│ │ └── validation.js (Form or data validation)
│ ├── services/ (For more complex business logic/data handling)
│ │ ├── authService.js
│ │ └── dataStore.js
│ ├── views/ (If you have distinct "pages" or major sections)
│ │ ├── home.js
│ │ └── about.js
│ └── config/
│ └── settings.js (Application-wide constants, configurations)
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js (Vite configuration)
├── .eslintrc.cjs (ESLint configuration)
├── .prettierrc.cjs (Prettier configuration)
└── jsconfig.json (For VS Code/TypeScript language server, even in JS projects)
```
