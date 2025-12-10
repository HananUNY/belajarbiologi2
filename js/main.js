// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme(isChecked) {
    const newTheme = isChecked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Initialize theme attribute immediately to prevent flash
initTheme();

const navbarContent = `
<nav class="container" style="display: flex; justify-content: space-between; align-items: center; height: var(--header-height);">
    <a href="index.html" style="font-size: 1.5rem; font-weight: 800; color: var(--text-color);">
        Belajar<span style="color: var(--primary-color);">Biologi</span>
    </a>
    <div style="display: flex; gap: 25px; font-weight: 500; align-items: center;">
        <a href="index.html">Beranda</a>
        <a href="about.html">Tentang Saya</a>
        <div class="dropdown">
            <a href="media.html" style="padding: 10px 0;">Media <i class="fas fa-caret-down"></i></a>
            <div class="dropdown-content">
                <a href="media.html">Media Pembelajaran</a>
                <a href="https://belajar.biologi.my.id" target="_blank">Lab Digital</a>
            </div>
        </div>
        <a href="teaching.html">Materi</a>
        <a href="publications.html">Publikasi</a>
        <a href="blog.html">Blog</a>
        <a href="contact.html">Kontak</a>
        <div class="theme-switch-wrapper">
            <label class="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox" onchange="toggleTheme(this.checked)" />
                <div class="slider">
                    <i class="fas fa-sun slider-icon"></i>
                    <i class="fas fa-moon slider-icon"></i>
                </div>
            </label>
        </div>
    </div>
</nav>
`;

const footerContent = `
<div class="container">
    <p>&copy; 2025 Belajar Biologi. All rights reserved.</p>
    <div style="margin-top: 10px; display: flex; justify-content: center; gap: 20px;">
        <a href="https://www.linkedin.com/in/hanan-prasetya/" target="_blank">LinkedIn</a>
        <a href="https://scholar.google.com/citations?user=2NspuT8AAAAJ&hl=id&oi=ao" target="_blank">Google Scholar</a>
        <a href="https://instagram.com/hdp_hanan" target="_blank">Instagram</a>
    </div>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
    // Inject Navbar
    const navPlaceholder = document.getElementById("navbar-placeholder");
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navbarContent;
        setActiveLink();
        syncThemeToggle(); // Sync slider AFTER injection
    }

    // Inject Footer
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerContent;
    }
});

function syncThemeToggle() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (toggleSwitch) {
        toggleSwitch.checked = savedTheme === 'dark';
    }
}

function setActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    // Normalize path for comparison (e.g., /index.html -> index.html)
    const pathName = currentPath.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === pathName || (pathName === '' && linkPath === 'index.html')) {
            link.classList.add('active');
            link.style.color = 'var(--primary-color)';
            link.style.fontWeight = '700';
        }
    });
}
