document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const modifiedSpan = document.getElementById('last-modified');
    const currentYearSpan = document.getElementById('currentyear');
    const lastModifiedSpan = document.getElementById('lastModified');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Update footer details
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    if (yearSpan) yearSpan.textContent = currentYear;
    if (modifiedSpan) modifiedSpan.textContent = lastModified;
    if (currentYearSpan) currentYearSpan.textContent = currentYear;
    if (lastModifiedSpan) lastModifiedSpan.textContent = `Last Modification: ${lastModified}`;

    // Hamburger menu functionality
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isOpen = navMenu.style.display === 'block';
            navMenu.style.display = isOpen ? 'none' : 'block';
            hamburger.textContent = isOpen ? '☰' : '✖';
        });
    }
});
