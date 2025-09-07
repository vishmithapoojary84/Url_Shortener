URL Shortener

A simple URL shortening web application built with React (frontend) and Node.js + Express (backend) with MongoDB for storage.

Live Demo: https://url-shortener-frontend-3ly1.onrender.com

Features

User authentication (login/register)

Create and manage short URLs

Track user-specific URLs

Redirect short URLs to original URLs

Tech Stack

Frontend: React, Vite, TailwindCSS, Axios

Backend: Node.js, Express, MongoDB

Authentication: JWT with cookies

Setup

Clone the repo:

git clone https://github.com/vishmithapoojary84/Url_Shortener.git


Install dependencies:

cd FRONTEND
npm install

cd BACKEND
npm install


Create .env files in both frontend and backend with required variables.

Run locally:

# Backend
cd BACKEND
npm run dev

# Frontend
cd FRONTEND
npm run dev

Notes

Only the frontend link is needed to access the app. Backend works automatically via API calls.
