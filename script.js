document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // You can add your form handling logic here, like sending the form data to a server
    // Example: Fetch API or XMLHttpRequest
    // Then show a success message or handle errors
    alert('Form submitted!');
});