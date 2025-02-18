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
    document.addEventListener("DOMContentLoaded", function () {
        const chatBubble = document.getElementById("chat-bubble");
        const chatContainer = document.getElementById("chatbot");
        const chatBody = document.getElementById("chat-body");
        const chatInput = document.getElementById("chat-input");
        const chatSend = document.getElementById("chat-send");
        const closeChat = document.getElementById("close-chat");
    
     
        chatBubble.addEventListener("click", () => {
            chatContainer.classList.toggle("open");
        });
    
        closeChat.addEventListener("click", () => {
            chatContainer.classList.remove("open");
        });
    
    
        function addMessage(text, sender) {
            const msgDiv = document.createElement("div");
            msgDiv.className = sender;
            msgDiv.textContent = text;
            chatBody.appendChild(msgDiv);
            chatBody.scrollTop = chatBody.scrollHeight; // Auto scroll to the latest message
        }
    
        function getChatbotResponse(userInput) {
            userInput = userInput.toLowerCase().trim();
        
            const keywords = {
                "hello": "Hi there! How can I help you?",
                "who are you": "I'm Pelma's chatbot, here to assist you with questions about her portfolio!",
                "what is your name": "I'm a simple chatbot designed for Pelma's portfolio.",
                "tell me about pelma": "Pelma is a passionate software developer with experience in web development, Java, Python, and machine learning.",
                "tell me about her skills": "Pelma is skilled in Java, JavaScript, Python, HTML, CSS, PHP, MySQL, and more!",
                "tell me about her projects": "Pelma has worked on web applications, Java projects, and machine learning models. Check out the Portfolio section for more details!",
                "how do i contact pelma": "You can reach Pelma via email at pelmamonere@gmail.com or call +27 71 157 9048.",
                "what experience does pelma have": "Pelma has hands-on experience with web development, software development, and machine learning projects.",
                "tell me about her education": "Pelma holds a diploma in Information Technology from Vaal University of Technology, specializing in Software Development, and is pursuing an Advanced Diploma.",
                "frameworks": "Pelma has worked with frameworks like React, Angular, and Laravel for web development.",
                "Programming languages": "Pelma is proficient in Java, JavaScript, HTML, CSS, PHP, Python, and SQL.",
                "portfolio": "You can explore Pelma's portfolio in the 'Portfolio' section of the website to see her projects.",
                "availability": "Pelma is currently open to freelance projects and job opportunities. Feel free to reach out through the Contact section.",
                "learning": "Pelma is always eager to learn new technologies and stay updated with the latest trends in tech.",
                "location": "Pelma is based in South Africa.",
                "certification": "Pelma has completed several certifications related to software development and machine learning.",
                "bye": "Goodbye! Have a great day!"
            };
    
            
            for (const keyword in keywords) {
                if (userInput.includes(keyword)) {
                    return keywords[keyword];
                }
            }
            return "I'm not sure about that. Try asking about Pelma's skills, projects, or contact info!";
        }
    
        chatSend.addEventListener("click", () => {
            const userText = chatInput.value.trim();
            if (userText) {
                addMessage(userText, "user"); 
                const botResponse = getChatbotResponse(userText);
                setTimeout(() => addMessage(botResponse, "bot"), 500); 
                chatInput.value = ""; // Clear the input field
            }
        });
    
      
        chatInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                chatSend.click();
            }
        });
    });
    