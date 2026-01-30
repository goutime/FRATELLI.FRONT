🛒 App Fratelli – Frontend

Modern React frontend application that consumes a REST API, focused on clean UI, reusable components, and clear separation between presentation and data access.

This project represents a real-world frontend client, communicating with a backend service via HTTP and handling loading states, routing, and user interaction.

🚀 Tech Stack
Core

React 18

JavaScript (ES6+)

Axios – API communication

React Router DOM – Client-side routing

UI & UX

Material UI (MUI) – Components & icons

Bootstrap 5 / React-Bootstrap

Emotion (CSS-in-JS)

React Loading – Loading indicators

React Aria – Accessibility support

Testing & Quality

Testing Library

Web Vitals

🔗 API Consumption

The frontend communicates with a backend API using Axios, following this flow:

UI Component
   ↓
Service / Axios Client
   ↓
REST API (Backend)
   ↓
Response → State Update → UI Render


Centralized HTTP requests

Async/await handling

Loading and error states

Clean separation between UI and data logic

✨ Features

🔐 API-driven data rendering

🔄 Dynamic routing

⏳ Loading indicators

🎨 Responsive and modern UI

♿ Accessibility-aware components

📱 Mobile-friendly design

🧩 Reusable component architecture

📁 Project Structure (Suggested)
src/
├── components/
│   ├── common/
│   └── layout/
├── pages/
├── services/
│   └── api.js
├── hooks/
├── routes/
├── styles/
├── App.js
└── index.js

⚙️ Requirements

Node.js 18+

npm 9+

Backend API running (local or remote)

▶️ Getting Started

Clone the repository

git clone https://github.com/your-username/app-fratelli-frontend.git


Install dependencies

npm install


Configure API base URL
Example (services/api.js):

axios.create({
  baseURL: "http://localhost:8080/api"
});


Start development server

npm start

🧠 Key Concepts Demonstrated

Frontend–backend integration

REST API consumption

State-driven UI rendering

Component-based architecture

Accessibility-first design

Production-ready React setup

📌 Notes

Backend is decoupled from frontend

Easily adaptable to different APIs

Ready for production builds

Scalable structure for growing features

👤 Author

Gonzalo Rodríguez
💻 Software Developer | Frontend & Backend
📧 gnrd.developer@gmail.com

🔗 GitHub | LinkedIn
