// Toggle the Menu
function toggleMenu() {
    const menu = document.getElementById('menu-items');
    menu.classList.toggle('active');
}

// Smooth Scroll for Menu Links
const menuLinks = document.querySelectorAll('.menu-items a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust for nav height
            behavior: 'smooth'
        });
    });
});
