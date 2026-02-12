// Get DOM elements
const cmbImage = document.getElementById('cmb-image');
const tooltip = document.getElementById('tooltip');
const pixelCoordsEl = document.getElementById('pixel-coords');
const normCoordsEl = document.getElementById('norm-coords');
const rgbValueEl = document.getElementById('rgb-value');
const pixelCanvas = document.getElementById('pixel-canvas');
const ctx = pixelCanvas.getContext('2d', { willReadFrequently: true });

let imageLoaded = false;

// Initialize canvas once image loads
cmbImage.addEventListener('load', () => {
    pixelCanvas.width = cmbImage.naturalWidth;
    pixelCanvas.height = cmbImage.naturalHeight;
    ctx.drawImage(cmbImage, 0, 0);
    imageLoaded = true;
});

// Handle mouse movement
cmbImage.addEventListener('mousemove', handleMouseInteraction);
cmbImage.addEventListener('click', handleMouseInteraction);

// Hide tooltip when mouse leaves
cmbImage.addEventListener('mouseleave', () => {
    tooltip.classList.remove('visible');
});

function handleMouseInteraction(event) {
    if (!imageLoaded) return;
    
    // Get mouse position relative to image
    const rect = cmbImage.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    // Calculate pixel coordinates in the original image
    const scaleX = cmbImage.naturalWidth / rect.width;
    const scaleY = cmbImage.naturalHeight / rect.height;
    const pixelX = Math.floor(mouseX * scaleX);
    const pixelY = Math.floor(mouseY * scaleY);
    
    // Ensure coordinates are within bounds
    if (pixelX < 0 || pixelX >= cmbImage.naturalWidth || 
        pixelY < 0 || pixelY >= cmbImage.naturalHeight) {
        return;
    }
    
    // Get pixel data from canvas
    const pixelData = ctx.getImageData(pixelX, pixelY, 1, 1).data;
    const r = pixelData[0];
    const g = pixelData[1];
    const b = pixelData[2];
    
    // Calculate normalized coordinates (0-1 range)
    const normX = (pixelX / cmbImage.naturalWidth).toFixed(4);
    const normY = (pixelY / cmbImage.naturalHeight).toFixed(4);
    
    // Update tooltip content
    pixelCoordsEl.textContent = `(${pixelX}, ${pixelY})`;
    normCoordsEl.textContent = `(${normX}, ${normY})`;
    rgbValueEl.textContent = `rgb(${r}, ${g}, ${b})`;
    
    // Position tooltip near cursor
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;
    const offset = 15;
    
    let tooltipX = event.clientX + offset;
    let tooltipY = event.clientY + offset;
    
    // Keep tooltip within viewport
    if (tooltipX + tooltipWidth > window.innerWidth) {
        tooltipX = event.clientX - tooltipWidth - offset;
    }
    
    if (tooltipY + tooltipHeight > window.innerHeight) {
        tooltipY = event.clientY - tooltipHeight - offset;
    }
    
    tooltip.style.left = tooltipX + 'px';
    tooltip.style.top = tooltipY + 'px';
    
    // Show tooltip
    tooltip.classList.add('visible');
}