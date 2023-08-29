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


  console.log("tushar");
  showInformation();
  //https://localhost:7241/api/User/10tk
  function showInformation(){
    let user = localStorage.getItem("user");
    fetch(`https://localhost:7241/api/User/${user}`)
      .then(response => response.json())
      .then(data =>{
        console.log("tushar in",data);
        document.getElementById("UserCode").innerText = data.userCode;
        document.getElementById("DisplayName").innerText = data.userName;
        document.getElementById("Gmail").innerText = data.email;
        document.getElementById("Company").innerText = data.companyName;
      })
      .catch(Error => console.log(Error))
  }
  
  