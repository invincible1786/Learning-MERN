# 📝 MERN Notes App

<div align="center">

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Express](https://img.shields.io/badge/Backend-Express-lightgrey)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-green)

A modern, full-stack notes management application built with the MERN stack.

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [API Documentation](#-api-documentation)

</div>

---

## 📋 Overview

A full-featured notes application that allows users to create, read, update, and delete notes with a beautiful, responsive user interface. Built using MongoDB, Express.js, React, and Node.js (MERN Stack).

## ✨ Features

### Frontend Features
- 🎨 **Modern UI**: Beautiful gradient design with Tailwind CSS and DaisyUI
- 📱 **Responsive**: Works seamlessly on mobile, tablet, and desktop
- ⚡ **Fast Navigation**: Client-side routing with React Router
- 🔔 **Real-time Feedback**: Toast notifications for all actions
- 💾 **CRUD Operations**: Create, view, edit, and delete notes
- 🎯 **User-Friendly**: Intuitive interface with smooth animations
- 📊 **Grid Layout**: Responsive card-based note display
- ✏️ **Inline Editing**: Edit notes directly in the detail view

### Backend Features
- 🔒 **Rate Limiting**: Upstash Redis-based protection against abuse
- 🗄️ **Cloud Database**: MongoDB Atlas integration
- 🔄 **RESTful API**: Well-structured API endpoints
- ⚠️ **Error Handling**: Comprehensive error management
- 🔐 **CORS Enabled**: Secure cross-origin requests
- 📝 **Timestamps**: Automatic created/updated tracking

## 🛠️ Tech Stack

### Frontend
- **React** 19.2.0 - UI library
- **Vite** 7.2.4 - Build tool & dev server
- **React Router** 7.13.0 - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** 3.4.19 - Utility-first CSS framework
- **DaisyUI** 4.12.24 - Tailwind component library
- **React Hot Toast** 2.6.0 - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** 4.18.2 - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Upstash Redis** - Rate limiting
- **CORS** 2.8.6 - Cross-origin resource sharing
- **dotenv** 17.2.3 - Environment variables

### Development Tools
- **Nodemon** - Auto-restart for backend
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
MERN/
├── backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── config/         # Database & external service configs
│   │   │   ├── db.js
│   │   │   └── upstash.js
│   │   ├── controllers/    # Route controllers
│   │   │   └── notesController.js
│   │   ├── middleware/     # Custom middleware
│   │   │   └── ratelimiter.js
│   │   ├── models/         # Mongoose schemas
│   │   │   └── Note.js
│   │   ├── routes/         # API routes
│   │   │   └── notesRoutes.js
│   │   └── server.js       # Express app entry point
│   ├── .env                # Environment variables
│   └── package.json
│
├── frontend/               # React frontend
│   ├── src/
│   │   ├── pages/         # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── CreatePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   ├── App.jsx        # Root component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── public/            # Static assets
│   ├── vite.config.js     # Vite configuration
│   ├── tailwind.config.js # Tailwind configuration
│   └── package.json
│
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **MongoDB Atlas Account** - [Sign up](https://www.mongodb.com/cloud/atlas)
- **Upstash Redis Account** - [Sign up](https://upstash.com/)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/mern-notes-app.git
cd mern-notes-app
```

#### 2. Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
touch .env
```

Add the following to `backend/.env`:

```env
# MongoDB Connection
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/notes?retryWrites=true&w=majority

# Server Configuration
PORT=5000

# Upstash Redis (Rate Limiting)
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

#### 3. Frontend Setup

```bash
# Navigate to frontend (from root)
cd ../frontend

# Install dependencies
npm install
```

### Running the Application

You need to run both backend and frontend servers:

#### Option 1: Run in Separate Terminals

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

#### Option 2: Using Single Command (Optional)

You can install `concurrently` to run both servers with one command:

```bash
# From root directory
npm install -g concurrently

# Add to root package.json
{
  "scripts": {
    "dev": "concurrently \"cd backend && npm run dev\" \"cd frontend && npm run dev\""
  }
}

# Run both servers
npm run dev
```

### Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api/notes
```

### Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|-------------|
| GET | `/api/notes` | Get all notes | - |
| GET | `/api/notes/:id` | Get note by ID | - |
| POST | `/api/notes` | Create new note | `{ title, content }` |
| PUT | `/api/notes/:id` | Update note | `{ title, content }` |
| DELETE | `/api/notes/:id` | Delete note | - |

### Example Requests

#### Create Note
```bash
curl -X POST http://localhost:5000/api/notes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Note",
    "content": "This is the content of my note"
  }'
```

#### Get All Notes
```bash
curl http://localhost:5000/api/notes
```

#### Update Note
```bash
curl -X PUT http://localhost:5000/api/notes/6789abc123 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "content": "Updated content"
  }'
```

#### Delete Note
```bash
curl -X DELETE http://localhost:5000/api/notes/6789abc123
```

## 🗄️ Database Schema

### Note Model

```javascript
{
  _id: ObjectId,
  title: String (required),
  content: String (required),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## 🔐 Environment Variables

### Backend (.env)

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO_URI` | MongoDB connection string | Yes |
| `PORT` | Server port (default: 5000) | No |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis URL | Yes |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis token | Yes |

## 📦 Dependencies Overview

### Backend Dependencies
```json
{
  "express": "Web framework",
  "mongoose": "MongoDB ODM",
  "cors": "CORS middleware",
  "dotenv": "Environment variables",
  "@upstash/ratelimit": "Rate limiting",
  "@upstash/redis": "Redis client",
  "nodemon": "Dev auto-restart"
}
```

### Frontend Dependencies
```json
{
  "react": "UI library",
  "react-router": "Routing",
  "axios": "HTTP client",
  "tailwindcss": "CSS framework",
  "daisyui": "UI components",
  "react-hot-toast": "Notifications",
  "vite": "Build tool"
}
```

## 🎯 Features in Detail

### Rate Limiting
- 10 requests per 20 seconds per IP
- Powered by Upstash Redis
- Returns 429 status when exceeded

### Error Handling
- All endpoints wrapped in try-catch
- Appropriate HTTP status codes
- User-friendly error messages

### UI/UX
- Gradient backgrounds
- Smooth animations
- Loading states
- Confirmation dialogs
- Responsive grid layouts

## 🧪 Testing

```bash
# Backend tests (if implemented)
cd backend
npm test

# Frontend tests (if implemented)
cd frontend
npm test
```

## 🚢 Deployment

### Backend Deployment (e.g., Render, Railway)

1. Set environment variables in hosting platform
2. Update CORS origin to production URL
3. Deploy from main branch

### Frontend Deployment (e.g., Vercel, Netlify)

1. Build the project:
   ```bash
   cd frontend
   npm run build
   ```
2. Update API base URL to production backend
3. Deploy the `dist` folder

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- MongoDB for the amazing database
- Tailwind CSS & DaisyUI for beautiful styling
- Upstash for rate limiting infrastructure
- The MERN stack community

## 📞 Support

If you have any questions or run into issues, please:
- Open an issue on GitHub
- Contact: your.email@example.com

---

<div align="center">

**Built with ❤️ using the MERN Stack**

Made by [Your Name](https://github.com/yourusername) • [⭐ Star this repo](https://github.com/yourusername/mern-notes-app)

</div>
