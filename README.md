# OpenRPG & Darkdom Framework Website

A responsive React.js website showcasing the OpenRPG Core Framework and Darkdom Framework extensions.

## Features

- **Responsive Design**: Built with Tailwind CSS for mobile-first responsive layouts
- **Modern React**: Uses React 18 with hooks and modern JavaScript
- **Performance Focused**: Optimized animations and smooth scrolling
- **Comprehensive Showcase**: Every feature and capability documented

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
OpenRPG/
├── src/
│   ├── App.jsx          # Main React component
│   ├── index.css        # Tailwind CSS styles
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **PostCSS**: CSS processing

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary: Blue shades for OpenRPG branding
- Purple: For Darkdom framework sections
- Dark: Custom dark theme colors

### Content
All content is in the main `App.jsx` component and can be easily modified:
- Hero section with key metrics
- OpenRPG Core features
- Darkdom Framework extensions
- Performance statistics
- Code examples
- Getting started guide

### Animations
Custom animations are defined in Tailwind config:
- `fade-in`: Smooth fade transitions
- `slide-up`: Elements sliding in from bottom
- `float`: Gentle floating animation for icons

## Performance Highlights Showcased

- **50,000+ Monsters**: Real-time AI simulation capability
- **1,000+ Players**: Per area with low latency
- **< 50ms Response Time**: Optimized action processing
- **Engine Agnostic**: Works with any C# game engine

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This website showcases the OpenRPG and Darkdom frameworks. See the respective framework licenses for usage terms.
