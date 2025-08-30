# MERN Test V1

A full-stack MERN (MongoDB, Express, React, Node.js) application for product management.

## Features
- Product CRUD (Create, Read, Update, Delete)
- Responsive UI with Chakra UI
- State management with Zustand
- RESTful API with Express & MongoDB
- Vite for fast React development
- Production build served by Express

## Live Demo
Deployed on Render: [https://mern-test-v1.onrender.com/](https://mern-test-v1.onrender.com/)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/danssou/mern-test-v1.git
cd mern-test-v1
```

### 2. Install dependencies
```bash
npm install
cd frontend
npm install
```

### 3. Environment Variables
Create a `.env` file in the root with your MongoDB URI:
```
MONGO_URI=your_mongodb_connection_string
```

### 4. Run in Development
```bash
npm run dev
```
- Backend: http://localhost:5000
- Frontend: http://localhost:5173

### 5. Build for Production
```bash
cd frontend
npm run build
cd ..
npm run start
```
- App will be served at http://localhost:5000

## Folder Structure
```
mern-test-v1/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── src/
│   ├── public/
│   ├── dist/
│   └── package.json
├── package.json
└── README.md
```

## Tech Stack
- **Frontend:** React, Chakra UI, Zustand, Vite
- **Backend:** Express, MongoDB, Mongoose


