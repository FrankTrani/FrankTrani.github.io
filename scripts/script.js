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

  // Update Prism.js theme
  document.getElementById("prism-light").disabled = newTheme === "light";
  document.getElementById("prism-dark").disabled = newTheme !== "light";
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

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const fullscreenNav = document.getElementById("fullscreen-nav");

  // Toggle the menu visibility and icon
  hamburgerBtn.addEventListener("click", function () {
    fullscreenNav.classList.toggle("active");
    // Change the button icon based on the menu state
    if (fullscreenNav.classList.contains("active")) {
      hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>'; // X icon
    } else {
      hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>'; // Hamburger icon
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const posts = document.querySelectorAll(".post-name");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    posts.forEach((post) => {
      const title = post.getAttribute("data-title");
      const tags = post.getAttribute("data-tags");

      if (title.includes(query) || tags.includes(query)) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });
  });
});

// Select DOM elements
const uploadInput = document.getElementById("upload-input");
const formatSelect = document.getElementById("format-select");
const convertButton = document.getElementById("convert-btn");
const downloadButton = document.getElementById("download-btn");
const resetButton = document.getElementById("reset-btn");
const previewImage = document.getElementById("preview-image");
const previewSection = document.getElementById("preview-section");

let file = null;

// Event Listeners
uploadInput.addEventListener("change", handleFileUpload);
convertButton.addEventListener("click", convertFile);
downloadButton.addEventListener("click", resetAfterDownload);
resetButton.addEventListener("click", resetConverter);

function handleFileUpload(event) {
  file = event.target.files[0];
  if (file) displayImagePreview(file);
}

// Preview Image Display
function displayImagePreview(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    previewImage.src = e.target.result;
    previewSection.style.display = "block";
    downloadButton.style.display = "none"; // Hide download button until convert is pressed
  };
  reader.readAsDataURL(file);
}

// Conversion Function
function convertFile() {
  if (!file) {
    alert("Please upload an image file to convert.");
    return;
  }

  const fileType = file.type;
  if (fileType === "image/heic") {
    convertHEIC(file);
  } else if (fileType.startsWith("image/")) {
    convertToSelectedFormat(file);
  } else {
    alert("Please select a supported image format.");
  }
}

// Convert HEIC to the Selected Format
function convertHEIC(file) {
  heic2any({ blob: file, toType: "image/jpeg" })
    .then((convertedBlob) => {
      convertBlobToSelectedFormat(convertedBlob);
    })
    .catch((error) => {
      console.error("HEIC conversion error:", error);
      alert("Could not convert HEIC file.");
    });
}

// Convert Other Formats
function convertToSelectedFormat(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    convertDataUrlToFormat(e.target.result);
  };
  reader.readAsDataURL(file);
}

function convertDataUrlToFormat(dataUrl) {
  const img = new Image();
  img.src = dataUrl;

  img.onload = function () {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const selectedFormat = formatSelect.value;
    const convertedDataUrl = canvas.toDataURL(selectedFormat);

    downloadButton.style.display = "inline-block";
    downloadButton.onclick = () => downloadImage(convertedDataUrl, selectedFormat);
  };
}

function convertBlobToSelectedFormat(blob) {
  const reader = new FileReader();
  reader.onload = function (e) {
    convertDataUrlToFormat(e.target.result);
  };
  reader.readAsDataURL(blob);
}

// Download and Reset
function downloadImage(dataUrl, format) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = `converted-image.${format.split("/")[1]}`;
  link.click();
}

function resetAfterDownload() {
  resetConverter();
}

// Reset Converter
function resetConverter() {
  file = null;
  previewImage.src = "";
  previewSection.style.display = "none";
  downloadButton.style.display = "none";
  uploadInput.value = "";
}
