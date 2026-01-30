# Notes App - Frontend

## 📋 Overview

A modern, responsive notes management application built with React, Vite, Tailwind CSS, and DaisyUI. Features a beautiful UI with smooth animations and full CRUD functionality.

## ✨ Features

- **📝 Create Notes**: Rich text editor with character count
- **📖 View Notes**: Beautiful card-based layout with responsive grid
- **✏️ Edit Notes**: In-place editing with save/cancel options
- **🗑️ Delete Notes**: Confirmation dialogs for safe deletion
- **🎨 Modern UI**: Gradient backgrounds, smooth transitions, and hover effects
- **📱 Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **🔔 Toast Notifications**: Real-time feedback for all actions
- **⚡ Fast Navigation**: React Router for instant page transitions

## 🛠️ Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.19
- **UI Components**: DaisyUI 4.12.24
- **HTTP Client**: Axios
- **Routing**: React Router 7.13.0
- **Notifications**: React Hot Toast 2.6.0

## 📦 Dependencies

### Production
```json
{
  "react": "^19.2.0",              // UI library
  "react-dom": "^19.2.0",          // React DOM renderer
  "react-router": "^7.13.0",       // Client-side routing
  "axios": "Latest",               // HTTP client for API calls
  "react-hot-toast": "^2.6.0",    // Toast notifications
  "@tailwindcss/vite": "^4.1.18"  // Tailwind CSS plugin
}
```

### Development
```json
{
  "@vitejs/plugin-react": "^5.1.1",  // Vite React plugin
  "tailwindcss": "^3.4.19",           // Utility-first CSS
  "daisyui": "^4.12.24",              // Tailwind component library
  "autoprefixer": "^10.4.23",         // PostCSS plugin
  "postcss": "^8.5.6",                // CSS processor
  "eslint": "^9.39.1",                // Code linting
  "vite": "^7.2.4"                    // Build tool
}
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── pages/
│   │   ├── HomePage.jsx         # Main notes list view
│   │   ├── CreatePage.jsx       # Create new note
│   │   └── NoteDetailPage.jsx   # View/Edit individual note
│   ├── App.jsx                  # Root component with routing
│   ├── main.jsx                 # Application entry point
│   ├── index.css                # Global styles & Tailwind directives
│   └── App.css                  # Component styles
├── public/                      # Static assets
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json
```

## 🎨 Pages

### HomePage
- Displays all notes in a responsive card grid
- Search and filter functionality
- Quick delete with confirmation
- Empty state with call-to-action
- Loading states with spinners

### CreatePage
- Form with title and content fields
- Character count indicators
- Form validation
- Toast notifications on success/error

### NoteDetailPage
- Full note view with metadata
- Toggle between view and edit modes
- Delete confirmation
- Timestamp display (created & updated)

## 🎯 Component Features

### UI Elements
- **Navbar**: Sticky navigation with branding
- **Cards**: Elevated cards with hover effects
- **Buttons**: Primary, error, and ghost variants
- **Forms**: Input fields and textareas with focus states
- **Badges**: Date/time display with icons
- **Loading**: Spinner animations
- **Dividers**: Visual section separators

### Styling Highlights
- Gradient backgrounds (purple to blue)
- Smooth transitions and hover effects
- SVG icons throughout the app
- Responsive grid layouts
- Shadow and depth effects

## ⚙️ Configuration

### Tailwind Config
```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require('daisyui')],
}
```

### API Base URL
The app connects to the backend at `http://localhost:5000/api/notes`

To change this for production, update the axios calls in:
- `src/pages/HomePage.jsx`
- `src/pages/CreatePage.jsx`
- `src/pages/NoteDetailPage.jsx`

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Backend server running on port 5000

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎨 Customization

### Colors
Modify DaisyUI themes in `tailwind.config.js`:
```javascript
daisyui: {
  themes: ["light", "dark", "cupcake"],
}
```

### Fonts
Add custom fonts in `index.css`

### Icons
The app uses Heroicons (SVG). Replace with your preferred icon library.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🐛 Known Issues

- None currently

## 🔮 Future Enhancements

- [ ] Search functionality
- [ ] Note categories/tags
- [ ] Rich text editor
- [ ] Dark mode toggle
- [ ] Export notes
- [ ] Note sharing

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Your Name / GitHub Username

---

**Built with ❤️ using React + Vite + Tailwind CSS + DaisyUI**
