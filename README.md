# URL Shortener & QR Generator (MERN Stack)

**Live Demo:** [Click here to visit](https://url-shortener-nof6.onrender.com)

This is a full-stack web application built with the **MERN stack** that allows users to shorten long URLs, manage their links, and generate QR codes for easy sharing. The project focuses on a smooth user experience with a modern frontend and secure backend handling. Users can register, log in, and view all their shortened URLs in a dashboard. Each URL can be easily copied or converted into a QR code for quick access.

---

## Key Features

- **User Authentication**: Secure login and registration using JWT tokens stored in HTTP-only cookies.  
- **URL Shortening**: Generate short URLs for any long link.  
- **Custom Slugs**: Authenticated users can create custom short URLs.  
- **QR Code Generation**: Easily convert short URLs into QR codes.  
- **Dashboard**: View all shortened URLs with copy and QR download options.  
- **Responsive UI**: Built with React, Tailwind CSS, and Framer Motion for animations.  
- **Secure Backend**: Node.js + Express + MongoDB with proper CORS and cookie handling.

---

## Tech Stack

- **Frontend**: React, Tailwind CSS, Framer Motion, TanStack Query  
- **Backend**: Node.js, Express, MongoDB, Mongoose  
- **Other Libraries**: Axios, JWT, cookie-parser, cors  

---

## Installation (Local Development)

1. **Clone the repo**  
```bash
git clone https://github.com/vishmithapoojary84/Url_Shortener.git
cd url_shortner
Backend setup

cd BACKEND
npm install
cp .env.example .env
# Fill in your MongoDB URI and other variables
npm run dev


Frontend setup

cd FRONTEND
npm install
cp .env.example .env
# Add your backend URL in .env
npm run dev

Usage

Open the frontend in your browser (default: http://localhost:5173
)

Register or log in

Enter a URL to shorten

Copy or generate QR code for the short URL

Visit short URLs directly in the browser

