document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for fixed navbar
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight active section in the navbar
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove("active"));
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add("active");
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => observer.observe(section));

    // Sticky navbar effect on scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var reviewsList = document.querySelector('.reviews-list');
    var reviews = document.querySelectorAll('.review');
    
    // Add the scroll-enabled class if there are 6 or more reviews
    if (reviews.length >= 6) {
        reviewsList.classList.add('scroll-enabled');
    }
});
window.addEventListener('load', function () {
    // Select all elements with the class .logo-text
    var textElements = document.querySelectorAll('.logo-text');
    
    // Loop through each text element and add the 'show' class
    textElements.forEach(function (element) {
        element.classList.add('show');
    });
});


document.addEventListener('keydown', function (event) {
    if (
        (event.key === 'F12') || 
        (event.ctrlKey && event.shiftKey && event.key === 'I') || 
        (event.ctrlKey && event.shiftKey && event.key === 'J')
    ) {
        alert('Developer tools are disabled on this page!');
        event.preventDefault();
    }
});

if (typeof console !== "undefined") {
    console.log = function() {}; // Disable log output
    console.warn = function() {}; // Disable warnings
    console.error = function() {}; // Disable error logging
}



document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('contextmenu', function (event) {
      event.preventDefault();  // Prevent right-click on images
      alert('Right-click is disabled on images!');
    });
  });
  