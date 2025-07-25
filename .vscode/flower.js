document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  if (name && validateEmail(email) && message) {
    document.getElementById("formMessage").textContent = "Thank you for contacting us!";
    this.reset();
  } else {
    document.getElementById("formMessage").textContent = "Please fill out all fields correctly.";
  }
});

function validateEmail(email) {
  const re = /^\S+@\S+\.\S+$/;
  return re.test(email);
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}
