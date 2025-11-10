# 🛒 DailyDrop – Full Stack Grocery Delivery Website (React + Node + Express + MongoDB)

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18.0.0-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green?logo=mongodb)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.18.2-lightgrey?logo=express)](https://expressjs.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Image%20Upload-orange?logo=cloudinary)](https://cloudinary.com/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-critical?logo=jsonwebtokens)](https://jwt.io/)
[![Stripe](https://img.shields.io/badge/Stripe-Payment-yellow?logo=stripe)](https://stripe.com/)

**DailyDrop** is a **Full Stack Grocery Delivery Website** built using **React, Node.js, Express, and MongoDB**.
The application allows **users** to browse groceries, manage carts, and place orders, while **sellers/admins** can manage products, stock, and orders.
It includes **JWT authentication**, **Cloudinary image hosting**, and a responsive modern frontend interface.

---

## ✨ Features

### 🛍️ User Portal

- Register and log in securely using JWT
- Browse grocery categories and products
- Add products to cart and manage quantities
- Place orders (COD & Stripe integration)
- View order history
- Responsive and modern UI

### 👨‍💼 Seller/Admin Portal

- Add, update, and delete products
- Manage stock availability
- View all orders and orders by user
- Dashboard with summarized sales and product data
- Upload product images via **Cloudinary**
- Secure authentication and role-based access

---

## 🛠️ Technologies Used

### ⚛️ Frontend

- React.js (Vite)
- Axios (API communication)
- React Router DOM
- Tailwind CSS / Custom CSS
- Framer Motion (animations)

### 🧩 Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (file upload)
- Cloudinary (image hosting)
- JWT (authentication)
- bcrypt (password hashing)
- dotenv (environment configuration)

---

## ⚙️ How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/PrethigahShanmugarajah/DailyDrop.git
cd DailyDrop
```

---

### 2️⃣ Backend Setup

```bash
cd Server
npm install
npm run server
```

> 💡 Ensure your MongoDB database is running (Atlas or local MongoDB).

---

### 3️⃣ Frontend Setup

```bash
cd Client
npm install
npm run dev
```

> Your frontend will start on [http://localhost:5173](http://localhost:5173).

---

## 🔑 Environment Variables Setup

### 📂 Backend `.env`

Create a `.env` file inside the **Server/** directory:

```
MONGODB_URI=
JWT_SECRET=
NODE_ENV=

SELLER_EMAIL=
SELLER_PASSWORD=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

### 📂 Frontend `.env`

Create a `.env` file inside the **Client/** directory:

```
VITE_CURRENCY=
VITE_BACKEND_URL=
```

---

## 🧠 References

This project is based on the YouTube tutorial: **Full Stack Grocery Delivery Website Using MERN Stack**
[https://youtu.be/PaQX0pktLnw?si=bZ-zAtEgmLFj6bq\_](https://youtu.be/PaQX0pktLnw?si=bZ-zAtEgmLFj6bq_)

---

## 📎 Project Link

[GitHub Repository](https://github.com/PrethigahShanmugarajah/DailyDrop.git)

---

## 👨‍💻 Author

**Prethigah Shanmugarajah(2020/2021)**
Department of Software Engineering, Faculty of Computing
Sabaragamuwa University of Sri Lanka

---
