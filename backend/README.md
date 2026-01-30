# Notes App - Backend API

## 📋 Overview

RESTful API backend for the Notes application built with Node.js, Express, and MongoDB. Provides full CRUD operations for note management with rate limiting and MongoDB Atlas integration.

## 🚀 Features

- **Full CRUD Operations**: Create, Read, Update, and Delete notes
- **MongoDB Integration**: Uses MongoDB Atlas for cloud database storage
- **Rate Limiting**: Upstash Redis-based rate limiting to prevent abuse
- **CORS Enabled**: Configured for frontend communication
- **Environment Variables**: Secure configuration management
- **Error Handling**: Comprehensive error handling across all endpoints

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Rate Limiting**: Upstash Redis
- **Development**: Nodemon for hot reloading

## 📦 Dependencies

```json
{
  "dependencies": {
    "express": "^4.18.2",           // Web framework
    "mongoose": "Latest",            // MongoDB ODM
    "cors": "^2.8.6",                // Enable CORS
    "dotenv": "^17.2.3",             // Environment variables
    "@upstash/ratelimit": "^2.0.5",  // Rate limiting
    "@upstash/redis": "^1.34.9"      // Redis client
  },
  "devDependencies": {
    "nodemon": "^3.1.11"             // Development auto-restart
  }
}
```

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── db.js              # MongoDB connection
│   │   └── upstash.js         # Upstash rate limiter config
│   ├── controllers/
│   │   └── notesController.js # Business logic for notes
│   ├── middleware/
│   │   └── ratelimiter.js     # Rate limiting middleware
│   ├── models/
│   │   └── Note.js            # Mongoose schema
│   ├── routes/
│   │   └── notesRoutes.js     # API route definitions
│   └── server.js              # Express app entry point
├── .env                       # Environment variables
└── package.json
```

## 🔌 API Endpoints

### Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes (sorted by creation date) |
| GET | `/api/notes/:id` | Get a specific note by ID |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note |

### Request/Response Examples

#### Create Note
```bash
POST /api/notes
Content-Type: application/json

{
  "title": "My Note Title",
  "content": "Note content here..."
}
```

#### Response
```json
{
  "message": "Note created successfully"
}
```

#### Get All Notes
```bash
GET /api/notes
```

#### Response
```json
[
  {
    "_id": "6789...",
    "title": "My Note",
    "content": "Content here...",
    "createdAt": "2026-01-30T...",
    "updatedAt": "2026-01-30T..."
  }
]
```

## ⚙️ Environment Variables

Create a `.env` file in the backend directory:

```env
# MongoDB
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# Server
PORT=5000

# Upstash Redis (for rate limiting)
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Upstash Redis account (for rate limiting)

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with required variables (see above)

4. Start the development server:
```bash
npm run dev
```

The server will start on `http://localhost:5000`

### Production

```bash
npm start
```

## 🔐 Middleware

### Rate Limiting

- Implements Upstash Redis-based rate limiting
- Limits: 10 requests per 20 seconds per user
- Returns 429 status code when limit exceeded

### CORS

- Configured to accept requests from `http://localhost:5173`
- Modify in `server.js` for production deployment

## 📝 Database Schema

### Note Model

```javascript
{
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamps: true  // Adds createdAt and updatedAt
}
```

## 🐛 Error Handling

All endpoints include try-catch blocks with appropriate error responses:

- **404**: Resource not found
- **429**: Too many requests (rate limit)
- **500**: Internal server error

## 🔄 Scripts

```bash
# Development with auto-restart
npm run dev

# Production
npm start
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Your Name / GitHub Username

---

**Note**: Make sure to configure your MongoDB Atlas cluster to accept connections from your IP address and set up Upstash Redis for rate limiting functionality.