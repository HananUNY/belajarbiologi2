document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "/navbar.html");
    loadComponent("footer", "/footer.html");
});

async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            const content = await response.text();
            document.getElementById(`${elementId}-placeholder`).innerHTML = content;
            
            // Highlight active link
            if(elementId === 'header') {
                setActiveLink();
            }
        } else {
            console.error(`Error loading ${filePath}: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
    }
}

function setActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === '/index.html')) {
            link.classList.add('active');
            link.style.color = 'var(--primary-color)';
            link.style.fontWeight = '700';
        }
    });
}
