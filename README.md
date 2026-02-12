# CMB Explorer

An interactive exploration tool for understanding the Cosmic Microwave Background and the origins of cosmic structure.

## MVP Stage 1

This is the first minimal working prototype - a static educational website with basic interactivity.

### Features

- **High-resolution CMB visualization**: Displays the full-sky Cosmic Microwave Background image from Planck satellite data
- **Interactive exploration**: Hover or click on the image to see detailed pixel information
- **Real-time data display**: Shows pixel coordinates, normalized coordinates, and RGB values
- **Clean scientific design**: Dark theme optimized for desktop viewing

### How to Use

1. Download a Planck CMB image from an official source such as:
   - https://www.astro4edu.org/zh-hans/resources/media/x356rE38Om43/

2. Place the image in `public/images/` and name it `cmb-planck.jpg`

3. Open `index.html` in a modern web browser

4. Hover over or click on the CMB image to explore pixel-level data

### Technical Details

- **Client-side only**: No server required, runs entirely in the browser
- **Plain HTML/CSS/JavaScript**: No frameworks or dependencies
- **Responsive design**: Adapts to different screen sizes (desktop-first)
- **Accurate data display**: Shows actual pixel RGB values from the image

### Educational Note

The colours in this visualization represent temperature fluctuations in the Cosmic Microwave Background. The specific colour mapping is for visualization purposes and does not represent absolute temperature values.

### Project Structure

```
cmb-explorer/
├── index.html          # Main HTML structure
├── styles.css          # Styling and layout
├── script.js           # Interactive functionality
├── public/
│   └── images/
│       └── cmb-planck.jpg  # CMB image (download separately)
└── README.md
```

### Next Steps

Future stages will add:
- More interactive controls
- Educational annotations
- Comparison tools
- Mobile optimization

---

**License**: MIT (or specify your preferred license)
**Data Source**: ESA Planck Mission
