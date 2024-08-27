document.addEventListener('DOMContentLoaded', function() {
    const sections = {
        'about-link': 'about-section',
        'portfolio-link': 'portfolio-section',
        'blog-link': 'blog-section',
        'contact-link': 'contact-section',
        'talk-link': 'lets-talk-section',
        'see-projects': 'projects-section',  // This still refers to the Download CV section
        'hire-me': 'hire-section'
    };

    Object.keys(sections).forEach(function(linkId) {
        const link = document.getElementById(linkId);
        const sectionId = sections[linkId];
        const section = document.getElementById(sectionId);
        const closeButton = section.querySelector('.close-btn');

        // Show the section when the link is clicked
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('body').style.overflow = 'hidden'; // Prevent body scroll
            section.style.display = 'block'; // Show the section
        });

        // Close the section when the close button is clicked
        closeButton.addEventListener('click', function() {
            section.style.display = 'none'; // Hide the section
            document.querySelector('body').style.overflow = 'auto'; // Allow body scroll
        });

        window.addEventListener('click', function(event) {
            if (event.target === section) {
                section.style.display = 'none'; // Hide the section
                document.querySelector('body').style.overflow = 'auto'; // Allow body scroll
            }
        });
    });
});


