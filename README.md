# EduElite - Premium Education Platform

## Overview

EduElite is a modern, premium education platform built with React, Vite, Tailwind CSS, and Framer Motion. It showcases top Indian educational institutions and educators with beautiful animations and a clean UI.

## Features

- 🎨 **Premium Design**: Clean blue/white theme with elegant gradients
- ✨ **Animations**: Smooth transitions and interactions with Framer Motion
- 📱 **Responsive**: Works perfectly on all device sizes
- 🏛️ **Indian Focus**: Showcases top Indian colleges and educators
- 📋 **Multiple Pages**: Home, Colleges, Educators, and Contact pages
- ⚡ **Fast Performance**: Built with Vite for optimal speed

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ansh642/EduElite.git
   cd EduElite
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.jsx    # Navigation bar
│   ├── Footer.jsx    # Page footer
│   ├── EducatorCard.jsx  # Educator profile card
│   └── CollegeCard.jsx   # College/institution card
├── pages/            # Application pages
│   ├── Home.jsx      # Landing page
│   ├── Colleges.jsx  # Colleges showcase
│   ├── Educators.jsx # Educators showcase
│   └── Contact.jsx   # Contact page
├── App.jsx           # Main application router
└── main.jsx          # Application entry point
```

## Technologies Used

- ⚛️ React 18
- 🚀 Vite
- 🎨 Tailwind CSS
- ✨ Framer Motion (for animations)
- 🔄 React Router (for navigation)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

To customize the content:
1. Update the data arrays in each page component
2. Modify the color scheme in `tailwind.config.js`
3. Adjust animations in the Framer Motion components

## License

MIT License - Free for personal and commercial use

---

**Note**: This project uses mock data for demonstration purposes. Replace with real data for production use.