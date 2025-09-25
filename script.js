document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Basic form submission handling
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // In a real-world scenario, you would send this data to a server
            // using fetch() or an AJAX request.
            // For this example, we'll just show a success message.
            
            formStatus.style.color = 'green';
            formStatus.textContent = 'Thank you for your message! We will get back to you soon.';

            // Reset the form after a short delay
            setTimeout(() => {
                contactForm.reset();
                formStatus.textContent = '';
            }, 3000);
        });
    }
});
