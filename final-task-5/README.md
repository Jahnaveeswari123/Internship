# ShopSmart E-Commerce Website

A modern, responsive e-commerce website built with vanilla HTML, CSS, and JavaScript. This project demonstrates best practices in web development, including performance optimization, responsive design, and progressive web app features.

## Features

- 🛍️ Product catalog with dynamic loading
- 🛒 Shopping cart functionality
- 📱 Fully responsive design
- 🌙 Dark mode support
- 🔄 Offline support via Service Worker
- ⚡ Performance optimizations
- 🖨️ Print-friendly styles
- 🎨 Modern UI with smooth animations

## Performance Optimizations

1. **Lazy Loading**
   - Images use the `loading="lazy"` attribute
   - Dynamic content loads as users scroll
   - Intersection Observer for efficient animations

2. **Resource Loading**
   - CSS files are split for better caching
   - JavaScript is deferred
   - Service Worker for offline support

3. **Animations**
   - Hardware-accelerated animations
   - Debounced event handlers
   - Smooth transitions

## Browser Compatibility

Tested and working on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Project Structure

```
├── index.html          # Main HTML file
├── css/
│   ├── style.css      # Main styles
│   └── responsive.css  # Responsive styles
├── js/
│   └── main.js        # JavaScript functionality
├── images/            # Image assets
└── sw.js             # Service Worker
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Open the project in a web server:
   - You can use any local server like Python's `http.server`:
     ```bash
     python -m http.server 8000
     ```
   - Or use VS Code's Live Server extension

3. Access the website:
   - Open `http://localhost:8000` in your browser

## Development

To modify the project:

1. Edit `index.html` for structure changes
2. Modify `css/style.css` and `css/responsive.css` for styling
3. Update `js/main.js` for functionality
4. Add images to the `images/` directory
5. Update service worker cache in `sw.js` when adding new assets

## Best Practices Implemented

- Semantic HTML5 elements
- CSS custom properties for theming
- Mobile-first responsive design
- Progressive enhancement
- Accessible markup
- Performance optimization
- Cross-browser compatibility
- Modern JavaScript features
- Proper error handling
- Clean code structure

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 