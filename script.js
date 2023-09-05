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
window.onload = calculateInfo;
