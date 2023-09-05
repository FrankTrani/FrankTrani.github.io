// Function to toggle between light and dark mode
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");
    const themeIcon = document.getElementById("themeIcon");

    let newTheme = "light";
    if (currentTheme === "dark") {
        newTheme = "light";
        themeIcon.textContent = "🌙"; // Moon for dark mode
    } else {
        newTheme = "dark";
        themeIcon.textContent = "☀️"; // Sun for light mode
    }

    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save the current theme to localStorage
}

// Function to calculate age and years of programming
function calculateInfo() {
    const birthYear = 2006; // Replace with your birth year
    const startYear = 2018; // Replace with the year you started programming

    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    const yearsProgramming = currentYear - startYear;

    // Update the HTML content
    document.getElementById("age").innerText = age;
    document.getElementById("yearsProgramming").innerText = yearsProgramming;
}

// Run the function when the page loads
window.onload = function() {
    calculateInfo();

    // Retrieve saved theme from localStorage or set to dark as default
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.setAttribute("data-theme", savedTheme);

    // Add event listener to the theme toggle button
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
};
