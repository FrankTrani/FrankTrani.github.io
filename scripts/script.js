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
    document.getElementById("yearsProgramming").innerText = yearsProgramming;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("switch-theme-btn")
    .addEventListener("click", toggleTheme);

  calculateInfo();
  setIcon(savedTheme);
});


document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const fullscreenNav = document.getElementById('fullscreen-nav');

  // Toggle the menu visibility and icon
  hamburgerBtn.addEventListener('click', function() {
    fullscreenNav.classList.toggle('active');
    // Change the button icon based on the menu state
    if (fullscreenNav.classList.contains('active')) {
      hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>'; // X icon
    } else {
      hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>'; // Hamburger icon
    }
  });
});



