var navbarToggler = document.getElementById("navbar-toggler");
var navbarCollapse = document.getElementById("navbarNav");

navbarCollapse.addEventListener("hidden.bs.collapse", function() {
  navbarToggler.classList.remove("navbar-toggler-open");
});


navbarToggler.addEventListener("click", function() {
  if (navbarCollapse.classList.contains("show")) {
    navbarToggler.classList.remove("navbar-toggler-open");
  } else {
    navbarToggler.classList.add("navbar-toggler-open");
  }
});