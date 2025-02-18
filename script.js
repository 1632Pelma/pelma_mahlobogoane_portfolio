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



// Certificate Filtering (this section filters certificates based on the selected category)
const certFilterButtons = document.querySelectorAll(".cert-filter-btn");
const certItems = document.querySelectorAll(".cert-item"); 
if (certFilterButtons.length > 0 && certItems.length > 0) {
    
    certFilterButtons.forEach(button => {
        button.addEventListener("click", function () {
            certFilterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            const category = this.getAttribute("data-category");

            // Show or hide certificate items based on the selected category
            certItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block"; 
                } else {
                    item.style.display = "none"; 
                }
            });
        });
    });
}


    // Lightbox Functionality
    function openLightbox(imageSrc) {
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        if (lightbox && lightboxImg) {
            lightbox.style.display = "flex";
            lightboxImg.src = imageSrc;
            setTimeout(() => lightbox.classList.add("show"), 50);
        }
    }

    function closeLightbox() {
        const lightbox = document.getElementById("lightbox");
        if (lightbox) {
            lightbox.classList.remove("show");
            setTimeout(() => lightbox.style.display = "none", 300);
        }
    }

    document.querySelectorAll(".cert-item img").forEach(img => {
        img.addEventListener("click", function () {
            openLightbox(this.src);
        });
    });

    document.getElementById("lightbox")?.addEventListener("click", function (e) {
        if (e.target !== document.getElementById("lightbox-img")) closeLightbox();
    });

    // Filter Buttons Logic for Projects (same as before)
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            document.querySelectorAll('.project-item').forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });