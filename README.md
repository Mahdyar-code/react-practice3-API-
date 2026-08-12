# 🚀 React + Vite + Tailwind CSS + JSON Server

یک پروژه کوچک و کاربردی ساخته‌شده با **React** که از **Vite** برای توسعه سریع، **Tailwind CSS** برای طراحی رابط کاربری و **JSON Server** به‌عنوان یک REST API ساده استفاده می‌کند.

## 🛠️ تکنولوژی‌های استفاده‌شده

* ⚛️ **React** — ساخت رابط کاربری
* ⚡ **Vite** — ابزار Build و Development
* 🎨 **Tailwind CSS** — طراحی و استایل‌دهی
* 🗄️ **JSON Server** — شبیه‌سازی REST API
* 📡 **Fetch API / Axios** — ارتباط با API
* 📦 **npm** — مدیریت پکیج‌ها

## 📂 ساختار کلی پروژه

```text
react-practice3(API)/
├── public/
├── src/
│   ├── assets/font
│   ├── components/navbar
│   ├── pages/
│   ├── App.jsx
|   ├── App.css
|   ├── index.css
│   ├── main.jsx
|   ├── routes.jsx
|   ├── db.json
│   └── ...
├── db.json
├── package.json
├── vite.config.js
└── README.md
```


## ⚙️ نصب و اجرای پروژه

### 1. Clone کردن پروژه

```bash
git clone ...
```

سپس وارد پوشه پروژه شوید:

```bash
cd project-name
```

### 2. نصب Dependencies

```bash
npm install
```

### 3. اجرای JSON Server

اگر JSON Server را در پروژه نصب کرده‌اید، آن را اجرا کنید:

```bash
npx json-server --watch db.json --port 3000
```

API پروژه در آدرس زیر در دسترس خواهد بود:

```text
http://localhost:3000
```

### 4. اجرای React + Vite

در یک Terminal جدید:

```bash
npm run dev
```

سپس آدرس نمایش‌داده‌شده توسط Vite را در مرورگر باز کنید؛ معمولاً:

```text
http://localhost:5173
```



## 🔌 API

این پروژه برای شبیه‌سازی Backend از **JSON Server** استفاده می‌کند.

داده‌ها در فایل زیر ذخیره می‌شوند:

```text
db.json
```



## ✨ قابلیت‌های پروژه

* نمایش اطلاعات از API
* دریافت داده‌ها از JSON Server
* افزودن داده جدید
* ویرایش داده‌ها
* حذف داده‌ها
* طراحی Responsive
* استفاده از Componentهای React
* استفاده از Tailwind CSS برای طراحی رابط کاربری

## 🎯 هدف پروژه

هدف از ساخت این پروژه، تمرین و تقویت مهارت‌های زیر بوده است:

* کار با **React**
* مدیریت Componentها
* کار با **REST API**
* انجام عملیات **CRUD**
* ارتباط Frontend با Backend
* استفاده از **Tailwind CSS**
* کار با **Vite**
* مدیریت داده‌ها با **JSON Server**


## 👨‍💻 Developer

**Mahdyar**

ساخته‌شده با ❤️ و React
