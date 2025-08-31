// Portfolio Configuration File
const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Your Name",
        title: "Full Stack Developer & Aspiring Data Analyst",
        description: " I build dynamic web applications and transform data into meaningful insights. Passionate about clean code, user-friendly design, and solving real-world problems through technology and data.",
        email: "haneenghzaly3@gmail.com",
        phone: "+1 (555) 123-4567",
        location: "Your City, Country",

    },

    // About Me
    about: {
        paragraph1: "I'm a passionate developer and aspiring data analyst with a love for creating meaningful digital experiences. With experience in both frontend and backend development, as well as data-driven projects, I enjoy building applications and tools that solve real-world problems and provide actionable insights.",
        paragraph2: "When I'm not coding or analyzing data, you can find me exploring new technologies, or learning about AI and data science trends. I believe in continuous learning, clean code, and creating user-friendly solutions that make a difference."
    },

    // Skills Configuration
    skills: {
        frontend: [
            { icon: "fab fa-html5", name: "HTML5" },
            { icon: "fab fa-css3-alt", name: "CSS3" },
            { icon: "fab fa-js-square", name: "JavaScript" },
            { icon: "fab fa-react", name: "React" }
        ],
        backend: [
            { icon: "fab fa-node-js", name: "Node.js" },
            { icon: "fab fa-python", name: "Python" },
            { icon: "fab fa-php", name: "PHP" },
            { icon: "fas fa-database", name: "SQL" },
            { icon: "fas fa-database", name: "PostgreSQL" }
        ],
        dataScience: [
            { icon: "fas fa-file-excel", name: "Excel" },
            { icon: "fab fa-python", name: "Pandas" },
            { icon: "fab fa-python", name: "NumPy" },
            { icon: "fas fa-chart-bar", name: "Matplotlib" },
            { icon: "fas fa-broom", name: "Data Cleaning" },
            { icon: "fas fa-chart-line", name: "Data Visualization" },
            { icon: "fas fa-chart-pie", name: "Basic Statistics" },
            { icon: "fas fa-book", name: "Jupyter Notebooks" }
        ],
        developmentTools: [
            { icon: "fab fa-git-alt", name: "Git" },
            { icon: "fab fa-docker", name: "Docker" },
            { icon: "fab fa-figma", name: "Figma" }
        ]
    },

    // Projects Configuration
    projects: [
        {
            title: "Office Survival Guide",
            description: "The website provides practical guidance for new employees and interns to navigate their first office experience with confidence. It covers workplace communication, professional email etiquette, and tips for building effective relationships with colleagues. The goal is to help users quickly adapt, avoid common pitfalls, and become reliable and proactive team members.",
            technologies: ["HTML", "CSS", "JavaScript"],
            demoLink: "https://haneen-alghzaly.github.io/office-survival-guide/",
            githubLink: "https://github.com/haneen-alghzaly/office-survival-guide",
            icon: "fas fa-briefcase"
        },
        {
            title: "Dolf-HRMS",
            description: "This project adapts an open-source HRMS to fit the company's specific requirements. It focuses on adding localized features and customizing interfaces to improve workflows in recruitment, employee onboarding, attendance tracking, leave management, payroll, and performance evaluation. The project helps the company streamline HR processes and improve overall organizational efficiency.",
            technologies: ["Django", "Python", "PostgreSQL"],
            demoLink: "https://haneen-alghzaly.github.io/Dolf-HRMS/",
            githubLink: "https://github.com/haneen-alghzaly/Dolf-HRMS",
            icon: "fas fa-users"
        },
        {
            title: "Breast Cancer Recurrence Prediction",
            description: "The application predicts the likelihood of breast cancer recurrence, providing medical professionals with actionable insights for patient care. By analyzing various patient risk factors, the tool assists in informed decision-making for treatment plans. The system aims to improve patient outcomes and supports healthcare providers in managing follow-up care more effectively.",
            technologies: ["React", "Flask", "Python"],
            demoLink: "https://haneen-alghzaly.github.io/Breast-Cancer-Recurrence-Prediction-/",
            githubLink: "https://github.com/haneen-alghzaly/Breast-Cancer-Recurrence-Prediction-",
            icon: "fas fa-heartbeat"
        }
    ],

    // Social Media Links
    social: [
        { platform: "GitHub", url: "https://github.com/yourusername", icon: "fab fa-github" },
        { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "fab fa-linkedin" },
        { platform: "Twitter", url: "https://twitter.com/yourusername", icon: "fab fa-twitter" },
        { platform: "Instagram", url: "https://instagram.com/yourusername", icon: "fab fa-instagram" }
    ],

    // Contact Form Configuration - FULLY WORKING! 🎉
    contact: {
        enabled: true,
        successMessage: "Message sent successfully! I'll get back to you soon.",
        errorMessage: "Please fill in all fields correctly.",
        emailValidation: true,
        emailjs: {
            serviceId: "service_bwepta5",        // ✅ Your actual Service ID
            templateId: "template_ldpslod",      // ✅ Your actual Template ID
            publicKey: "CYHOlTnLambSLMVF-",     // ✅ Your actual Public Key
            toEmail: "haneenghzaly3@gmail.com"
        }
    },

    // Theme Configuration
    theme: {
        primaryColor: "#667eea",
        secondaryColor: "#764ba2",
        accentColor: "#ffd700",
        textColor: "#333",
        backgroundColor: "#ffffff"
    },

    // Animation Configuration
    animations: {
        enabled: true,
        duration: 600,
        delay: 200
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
} else {
    // Browser environment
    window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
