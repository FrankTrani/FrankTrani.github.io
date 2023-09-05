// Function to toggle between light and dark mode
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");

    if (currentTheme === "dark") {
        body.setAttribute("data-theme", "light");
    } else {
        body.setAttribute("data-theme", "dark");
    }
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
    // Set default theme to light
    document.body.setAttribute("data-theme", "light");

    // Add event listener to the theme toggle button
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
};
