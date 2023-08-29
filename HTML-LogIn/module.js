//Nav&SideNav load
document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("Nav&SideNav");

  // Fetch the content of navbar.html
  fetch("/Nav&SideNav/nav&SideNav.html")
    .then((response) => response.text())
    .then((data) => {
      // Load the navbar HTML content into the navbarContainer
      navbarContainer.innerHTML = data;
      console.log("html fetch");
      loadmodules();
      loadReports();
    })
    .catch((error) => {
      console.error("Error loading the navbar:", error);
    });
});
