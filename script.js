const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);

function setIcon(theme) {
    let icon;
    if (theme == "light") {
        icon = "☀️";
    } else {
        icon = "🌑";
    }
    document.getElementById("switch-theme-btn").innerText = icon;
}

// Function to toggle between light and dark mode
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    let newTheme = currentTheme == "light" ? "dark" : "light";

    setIcon(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
}

function calculateInfo() {
    const birthYear = 2006;
    const startYear = 2018;

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
    setIcon(savedTheme);
});

$(document).ready(function() {
    $(".trigger").click(function() {
      $(".menu").toggleClass("active"); 
    });
  });