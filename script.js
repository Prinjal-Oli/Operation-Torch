// ========================================
// OPERATION TORCH WEBSITE
// INTERACTIVE JAVASCRIPT
// ========================================


// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (event) {

        const targetId = this.getAttribute('href');

        if (targetId.startsWith('#')) {

            event.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });

});


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(section => {

    section.style.opacity = '0';
    section.style.transform = 'translateY(25px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    observer.observe(section);

});


// ========================================
// ACTIVE NAVIGATION
// ========================================

const navLinks = document.querySelectorAll('nav a');

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                const activeLink = document.querySelector(
                    `nav a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add('active');
                }

            }

        });

    },
    {
        threshold: 0.4
    }
);


sections.forEach(section => {
    sectionObserver.observe(section);
});


// ========================================
// FOOTER YEAR
// ========================================

const yearElement = document.querySelector('footer');

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.innerHTML +=
        `<p>© ${currentYear} Operation Torch Resource Project</p>`;

}


// ========================================
// PAGE LOADED MESSAGE
// ========================================

window.addEventListener('load', () => {

    console.log(
        'Operation Torch resource website loaded successfully.'
    );

});
