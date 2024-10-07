// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Dynamic actions can be added here, for example, smooth scrolling to sections
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // You can add more interactivity such as validating contact forms or showing modal popups.
});
