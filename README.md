# Elvoin Bakes - Premium Bakery Website

A fully responsive, modern, and animated website for Elvoin Bakes bakery company featuring elegant design, smooth animations, and comprehensive functionality.

## 🎨 Features

### Pages Included
- **Home** (`index.html`) - Hero section with floating animations, stats, and CTA
- **About** (`about.html`) - Company story, mission, vision, and philosophy
- **Services** (`services.html`) - 8 service offerings with interactive process timeline
- **Gallery** (`gallery.html`) - Filterable image gallery with lightbox viewer
- **Testimonials** (`testimonials.html`) - Customer reviews with auto-rotating carousel
- **Order** (`order.html`) - Comprehensive order form with validation
- **Contact** (`contact.html`) - Contact form with embedded map
- **Blog** (`blog.html`) - Blog posts grid with categories

### Design Elements
- Clean minimal white/cream/pink color scheme
- Warm bakery aesthetic with rounded corners
- Premium gradient effects
- Smooth transitions throughout
- High-quality placeholder icons (ready for real images)

### Animations
- ✨ Fade-in on scroll
- 🎈 Floating bakery elements in hero (cupcakes, cookies, cakes)
- 📊 Animated counters (3000+ customers, 1200+ cakes, etc.)
- 🔍 Magnifier hover effects on process steps
- 🖼️ Image zoom on gallery hover
- 💫 Smooth parallax effects
- ✅ Animated checkmarks
- 🌟 Glowing CTA buttons
- 🎠 Auto-rotating testimonials carousel

### Interactive Features
- Responsive mobile navigation with hamburger menu
- Gallery filtering by category (All, Cakes, Cupcakes, Pastries, etc.)
- Lightbox image viewer
- Testimonials carousel with manual/auto navigation
- Form validation and submission handling
- Newsletter subscription
- Smooth scroll navigation
- Hover effects on all interactive elements

### Services Offered
1. Custom Cake Design
2. Pastry & Dessert Catering
3. Wedding Cakes
4. Birthday Cakes
5. Corporate Event Treats
6. Daily Fresh Pastries
7. Cupcake Orders
8. Bread & Artisan Bakes

### 7-Step Ordering Process
1. Customer Inquiry
2. Flavor & Design Consultation
3. Price & Order Confirmation
4. Cake Preparation
5. Decoration & Packaging
6. Pickup or Delivery
7. Enjoy Your Treat

## 🚀 Getting Started

### Installation
1. Download all files to a folder
2. Open `index.html` in a web browser
3. No build process required - pure HTML, CSS, and JavaScript

### File Structure
```
elvoin-bakes/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── gallery.html        # Gallery page
├── testimonials.html   # Testimonials page
├── order.html          # Order form page
├── contact.html        # Contact page
├── blog.html           # Blog page
├── styles.css          # All styling and animations
├── script.js           # All interactive functionality
└── README.md           # Documentation
```

## 🎯 Customization

### Adding Real Images
Replace the `.image-placeholder` divs with actual `<img>` tags:
```html
<!-- Replace this: -->
<div class="image-placeholder"><i class="fas fa-birthday-cake"></i></div>

<!-- With this: -->
<img src="your-image.jpg" alt="Description">
```

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #ff6b9d;    /* Main pink */
    --secondary-color: #ffa07a;  /* Coral */
    --accent-color: #c44569;     /* Dark pink */
    --cream: #fff5f0;            /* Background */
    --light-pink: #ffe4e1;       /* Light accents */
}
```

### Updating Content
- Edit text directly in HTML files
- Update stats in the counter elements (`data-target` attribute)
- Modify form fields in `order.html` and `contact.html`
- Add/remove gallery items in `gallery.html`

### Adding More Services
Copy a `.service-card` div in `services.html` and modify:
```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3>Your Service Name</h3>
    <p>Your service description</p>
    <a href="order.html" class="service-link">Order Now <i class="fas fa-arrow-right"></i></a>
</div>
```

## 📱 Responsive Design
- Desktop: Full layout with all features
- Tablet: Adjusted grid layouts
- Mobile: Hamburger menu, single column layouts

## 🔧 Technologies Used
- HTML5
- CSS3 (Flexbox, Grid, Animations, Gradients)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.4.0 (Icons)

## 🌟 Key Highlights
- **3000+** Happy Customers
- **1200+** Cakes Designed
- **300+** Events Catered
- **8+** Years of Experience

## 📞 Contact Information (Placeholder)
- Phone: +1 (555) 123-4567
- Email: info@elvoinbakes.com
- WhatsApp: +1 (555) 123-4567
- Address: 123 Bakery Street, Sweet City, SC 12345

## 🎨 Color Palette
- Primary Pink: `#ff6b9d`
- Coral: `#ffa07a`
- Accent Pink: `#c44569`
- Cream: `#fff5f0`
- Light Pink: `#ffe4e1`
- Dark: `#2c3e50`
- Gray: `#7f8c8d`

## 📝 Notes
- All forms include basic validation
- Images are represented by placeholders with icons
- Map embed uses a sample Google Maps iframe (update with real location)
- Social media links are placeholder (#) - update with real URLs
- Newsletter and form submissions show alerts (integrate with backend as needed)

## 🚀 Future Enhancements
- Backend integration for forms
- Real image gallery
- Online ordering system with payment
- Customer account system
- Live chat support
- Blog CMS integration
- SEO optimization
- Performance optimization

## 📄 License
This is a custom website design for Elvoin Bakes. All rights reserved.

---

**Created with ❤️ for Elvoin Bakes**
*Fresh • Creative • Delicious*
