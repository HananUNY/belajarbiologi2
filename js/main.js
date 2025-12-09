const navbarContent = `
<nav class="container" style="display: flex; justify-content: space-between; align-items: center; height: var(--header-height);">
    <a href="index.html" style="font-size: 1.5rem; font-weight: 800; color: #333;">
        Belajar<span style="color: var(--primary-color);">Biologi</span>
    </a>
    <div style="display: flex; gap: 25px; font-weight: 500;">
        <a href="index.html">Beranda</a>
        <a href="about.html">Tentang Saya</a>
        <a href="media.html">Media</a>
        <a href="teaching.html">Materi</a>
        <a href="publications.html">Publikasi</a>
        <a href="blog.html">Blog</a>
        <a href="contact.html">Kontak</a>
    </div>
</nav>
`;

const footerContent = `
<div class="container">
    <p>&copy; 2025 Guru Biologi Profesional. All rights reserved.</p>
    <div style="margin-top: 10px; display: flex; justify-content: center; gap: 20px;">
        <a href="#">LinkedIn</a>
        <a href="#">Google Scholar</a>
        <a href="#">Instagram</a>
    </div>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
    // Inject Navbar
    const navPlaceholder = document.getElementById("navbar-placeholder");
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navbarContent;
        setActiveLink();
    }

    // Inject Footer
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerContent;
    }
});

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
