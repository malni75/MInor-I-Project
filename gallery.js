// Toggle dark mode only when user clicks the button
// toggle dark mode and save to localStorage (same for all pages)
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  // Do not change the button icon — always 🌙
}

// apply saved theme when page loads
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
};


// Lightbox functionality (optional, if used)
function openModal(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightboxImg.src = imgElement.src;
  lightbox.style.display = "flex";
}

function closeModal() {
  document.getElementById("lightbox").style.display = "none";
}
