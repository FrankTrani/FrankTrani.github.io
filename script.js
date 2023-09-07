// Function to toggle between light and dark mode
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");
    const themeIcon = document.getElementById("themeIcon");
    const themeToggle = document.getElementById("themeToggle"); // Assuming your button has this id

    let newTheme = "dark";
    if (currentTheme === "dark") {
        newTheme = "light";
        themeIcon.textContent = "🌙"; // Moon for dark mode
    } else {
        newTheme = "dark";
        themeIcon.textContent = "☀️"; // Sun for light mode
    }

    // Add the spin class to make the button rotate
    themeToggle.classList.add("spin");

    // Remove the spin class after 1 second (the duration of the spin animation)
    setTimeout(() => {
        themeToggle.classList.remove("spin");
    }, 1000);

    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save the current theme to localStorage
}

function calculateInfo() {
    const birthYear = 2006; // Replace with your birth year
    const startYear = 2018; // Replace with the year you started programming

    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    const yearsProgramming = currentYear - startYear;

    // Update the HTML content
    if (document.getElementById("age")) {
        document.getElementById("age").innerText = age;
    }
    if (document.getElementById("yearsProgramming")) {
        document.getElementById("yearsProgramming").innerText = yearsProgramming;
    }
}

// Run the function when the page loads
window.onload = function() {
    // Calculate info if elements are present
    calculateInfo();

    // Retrieve saved theme from localStorage or set to dark as default
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.setAttribute("data-theme", savedTheme);

    // Add event listener to the theme toggle button
    if (document.getElementById("themeToggle")) {
        document.getElementById("themeToggle").addEventListener("click", toggleTheme);
    }

    // Check if setActiveNavButton is defined before adding event listeners
    if (typeof setActiveNavButton === "function") {
        window.addEventListener("load", setActiveNavButton);
        window.addEventListener("scroll", setActiveNavButton);
    }
};
