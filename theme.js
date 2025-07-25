function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const btn = document.getElementById("darkModeToggle");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    btn.textContent = "🌞";
  } else {
    localStorage.setItem("theme", "light");
    btn.textContent = "🌙";
  }
}

window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  const btn = document.getElementById("darkModeToggle");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (btn) btn.textContent = "🌞";
  } else {
    if (btn) btn.textContent = "🌙";
  }
};
