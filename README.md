# Unifide - Civil Engineering & Construction Website

A modern, production-ready React frontend for a corporate Civil Engineering & Construction company website. Built with Vite, React, JavaScript, and TailwindCSS.

## 🚀 Features

- **Modern Design**: Clean geometry, subtle motion, and cyan + white professional color scheme
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion with scroll reveals and parallax effects
- **Component-Based**: Clean, modular architecture for easy maintenance and extension
- **Developer-Friendly**: Well-commented code ready for backend integration

## 🛠️ Tech Stack

- **Framework**: Vite + React (JavaScript)
- **Styling**: TailwindCSS with CSS variables
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: SVG-based custom icons

## 📦 Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── UI/            # Base UI components (Button, Container, SectionTitle)
│   ├── Loader.jsx     # App loader with logo animation
│   ├── Navbar.jsx     # Navigation bar
│   ├── Footer.jsx     # Footer component
│   ├── Hero.jsx       # Hero section
│   ├── About.jsx      # About section
│   ├── ServiceCard.jsx
│   ├── ServicesGrid.jsx
│   ├── ProjectsTimeline.jsx
│   ├── TestimonialsCarousel.jsx
│   └── ContactForm.jsx
├── pages/             # Page components
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── hooks/             # Custom React hooks
│   ├── useInView.js
│   └── useMouseParallax.js
├── styles/            # Global styles
│   └── globals.css
├── App.jsx            # Main app component with routing
└── main.jsx           # Entry point

public/
├── unified-logo.svg   # Company logo
└── index.html         # HTML template
```

## 🎨 Customization

### Replacing the Logo

1. Replace `public/unified-logo.svg` with your logo SVG
2. The logo is used in:
   - Loader component (`src/components/Loader.jsx`)
   - Navbar (`src/components/Navbar.jsx`)
   - Footer (`src/components/Footer.jsx`)
   - Favicon (update `index.html`)

### Adjusting Animation Timing

Animation durations and delays can be adjusted in individual components:

- **Hero Section**: `src/components/Hero.jsx` - Look for `transition` and `duration` props
- **About Section**: `src/components/About.jsx` - Counter animation duration
- **Services Cards**: `src/components/ServicesGrid.jsx` - Stagger delay in `delay` prop
- **Timeline**: `src/components/ProjectsTimeline.jsx` - Scroll reveal timing

### Adding New Projects to Timeline

1. Open `src/components/ProjectsTimeline.jsx`
2. Add new project objects to the `projects` array:
   ```javascript
   {
     year: '2024',
     title: 'Project Name',
     description: 'Project description...',
     image: 'image-key',
   }
   ```
3. The timeline will automatically render all projects

### Theme Colors

Theme colors are defined in:
- `tailwind.config.js` - Tailwind color extensions
- `src/styles/globals.css` - CSS variables

Primary colors:
- Primary: `#00FFFF` (Cyan)
- Background: `#FFFFFF` (White)
- Text: `#1B1B1B` (Dark Gray)
- Accent: `#E5E5E5` (Light Gray)

## 🔧 Configuration

### TailwindCSS

Configuration is in `tailwind.config.js`. Custom colors, fonts, and animations are defined here.

### Vite

Vite configuration is in `vite.config.js`. The dev server runs on port 3000 by default.

### PostCSS

PostCSS configuration is in `postcss.config.js` for TailwindCSS processing.

## 📱 Pages & Routes

- `/` - Home page with all sections
- `/projects` - Full projects timeline
- `/testimonials` - Client testimonials carousel
- `/contact` - Contact form and company information
- `*` - 404 Not Found page

## 🎯 Features Breakdown

### Home Page
- **Hero Section**: Animated text with parallax building image
- **About Section**: Team image with animated counters
- **Services Grid**: 4 interactive service cards with hover effects
- **Projects Timeline Preview**: Vertical timeline with alternating items
- **Testimonials Preview**: Auto-sliding carousel
- **Contact CTA**: Banner leading to contact page

### Projects Page
- Full timeline with vertical cyan line
- Expandable project details
- Smooth scroll reveals

### Testimonials Page
- Full testimonials carousel
- Auto-advancing slides
- Star ratings

### Contact Page
- Contact form with validation
- Submit animation and success toast
- Company address, phone, email
- Map placeholder for integration

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains the production-ready files

3. Deploy to your preferred hosting service (Vercel, Netlify, AWS, etc.)

## 📝 Notes

- All animations use Framer Motion for smooth performance
- Scroll reveals use `react-intersection-observer` for viewport detection
- Parallax effects use custom `useMouseParallax` hook
- Form submissions are currently mocked (ready for backend integration)
- Map placeholder on contact page can be replaced with Google Maps, Mapbox, etc.

## 🤝 Backend Integration

The codebase is structured for easy backend integration:

- Form submissions in `ContactForm.jsx` can be connected to your API
- Project data can be fetched from an API endpoint
- Testimonials can be dynamically loaded
- All components are ready for data fetching with React hooks

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ for Unifide Civil Engineering & Construction**
