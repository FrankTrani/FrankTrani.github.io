// Function to toggle between light and dark mode
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    let newTheme = currentTheme == "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
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
        document.getElementById("yearsProgramming").innerText =
            yearsProgramming;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("switch-theme-btn")
        .addEventListener("click", toggleTheme);

    calculateInfo();
});

const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);
