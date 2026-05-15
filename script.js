
document
  .getElementById("loginForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Login Successful!");
});


document
  .getElementById("registerForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Registration Successful!");
});


window.onload = function () {
  console.log("Welcome to PSAU Scholarship Information Portal");
};
