// Login Form
document
  .getElementById("loginForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Login Successful!");
});

// Register Form
document
  .getElementById("registerForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Registration Successful!");
});

// Console Welcome Message
window.onload = function () {
  console.log("Welcome to PSAU Scholarship Information Portal");
};