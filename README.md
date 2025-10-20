# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio showcases your skills, projects, and professional information in an elegant and interactive design.

## ✨ Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Mobile-First**: Optimized for mobile devices with hamburger navigation
- **Contact Form**: Functional contact form with validation
- **Smooth Animations**: CSS animations and JavaScript-powered interactions
- **SEO Friendly**: Semantic HTML structure for better search engine optimization

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### Installation
1. Download or clone this repository
2. Open `index.html` in your web browser
3. Customize the content to match your information
4. Deploy to your preferred hosting service

## 🎨 Customization Guide

### 1. Personal Information
Edit the following sections in `index.html`:

#### Hero Section
```html
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">Full Stack Developer & Creative Problem Solver</p>
<p class="hero-description">
    I create innovative digital solutions that make a difference. 
    Passionate about clean code, user experience, and continuous learning.
</p>
```

#### About Section
```html
<p>
    I'm a passionate developer with a love for creating meaningful digital experiences. 
    With a background in both frontend and backend development, I enjoy building 
    applications that solve real-world problems.
</p>
```

#### Contact Information
```html
<span>your.email@example.com</span>
<span>+1 (555) 123-4567</span>
<span>Your City, Country</span>
```

### 2. Skills & Technologies
Modify the skills section to match your expertise:

```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

Available Font Awesome icons for skills:
- `fab fa-html5` - HTML5
- `fab fa-css3-alt` - CSS3
- `fab fa-js-square` - JavaScript
- `fab fa-react` - React
- `fab fa-vuejs` - Vue.js
- `fab fa-node-js` - Node.js
- `fab fa-python` - Python
- `fab fa-php` - PHP
- `fab fa-git-alt` - Git
- `fab fa-docker` - Docker
- `fab fa-aws` - AWS
- `fab fa-figma` - Figma

### 3. Projects
Update the projects section with your actual projects:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">
            <i class="fas fa-project-diagram"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description goes here...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn btn-small">Live Demo</a>
            <a href="#" class="btn btn-small btn-outline">GitHub</a>
        </div>
    </div>
</div>
```

### 4. Social Links
Update your social media links:

```html
<div class="social-links">
    <a href="https://github.com/yourusername" class="social-link"><i class="fab fa-github"></i></a>
    <a href="https://linkedin.com/in/yourusername" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="https://twitter.com/yourusername" class="social-link"><i class="fab fa-twitter"></i></a>
</div>
```

### 5. Styling Customization
Modify `styles.css` to change colors, fonts, and layout:

#### Color Scheme
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #ffd700;
    --text-color: #333;
    --background-color: #ffffff;
}
```

#### Typography
```css
body {
    font-family: 'Inter', sans-serif; /* Change to your preferred font */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 767px and below

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your portfolio will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be deployed instantly
3. Customize the domain name in settings

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Get a custom domain and SSL certificate

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with some limitations)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

If you have any questions or need help customizing your portfolio, please open an issue in this repository.

## 🎯 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Blog section
- [ ] Portfolio filtering
- [ ] Testimonials section
- [ ] Downloadable resume
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Performance optimization

---

**Happy coding! 🚀**

