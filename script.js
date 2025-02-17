document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".navbar nav ul");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }


    window.addEventListener("scroll", function () {
        let navbar = document.querySelector("nav");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Resume Dropdown Logic
    const resumeBtn = document.getElementById("resume-btn");
    const resumeDropdown = document.getElementById("resume-dropdown");
    if (resumeBtn) {
        resumeBtn.addEventListener("click", function (event) {
            event.preventDefault();
            resumeDropdown.style.display = resumeDropdown.style.display === "block" ? "none" : "block";
        });
        document.addEventListener("click", function (event) {
            if (!resumeBtn.contains(event.target) && !resumeDropdown.contains(event.target)) {
                resumeDropdown.style.display = "none";
            }
        });
    }
});