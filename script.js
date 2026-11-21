
// WAIT FOR THE PAGE TO LOAD
document.addEventListener("DOMContentLoaded", function () {

    // 1. CREATE A TIME-BASED GREETING
    const heroContent = document.querySelector(".hero-content");

    const greeting = document.createElement("p");
    greeting.id = "greeting";

    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.textContent = "Good morning! Welcome to my portfolio.";
    } else if (hour < 18) {
        greeting.textContent = "Good afternoon! Welcome to my portfolio.";
    } else {
        greeting.textContent = "Good evening! Welcome to my portfolio.";
    }

    heroContent.prepend(greeting);

    // 2. CREATE A THEME BUTTON
    const navbar = document.querySelector(".navbar");

    const themeButton = document.createElement("button");
    themeButton.textContent = "Switch Theme";
    themeButton.id = "themeButton";

    navbar.appendChild(themeButton);

    // 3. SWITCH BETWEEN DARK AND LIGHT THEMES
    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeButton.textContent = "Dark Mode";
        } else {
            themeButton.textContent = "Light Mode";
        }

    });


    // 4. CONTACT FORM FUNCTIONALITY

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const visitorName = document.getElementById("name").value;

        const response = document.getElementById("formResponse");

        response.textContent =
            "Thank you, " + visitorName +
            "! Your message has been received.";

        contactForm.reset();

    });
s});s