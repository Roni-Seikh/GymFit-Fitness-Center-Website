document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Create Close Button

    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "×";
    closeBtn.classList.add("close-btn");
    navLinks.prepend(closeBtn);

    // Open Menu

    menuToggle.addEventListener("click", function () {
        navLinks.classList.add("active");
    });

    // Close Menu

    closeBtn.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

    // Close Menu on Clicking a 
    
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});
