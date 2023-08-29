function loginUser(event) {
  event.preventDefault();

  var userCode = document.getElementById("loginUser").value;
  console.log("userCode", userCode);
  var password = document.getElementById("loginPassword").value;
  console.log("password", password);
  let defaultCompanyId = parseInt(document.getElementById("defaultCompanyId").value);
  console.log("DefaultCompanyId", defaultCompanyId);

  var user = {
    UserCode: userCode,
    Password: password,
    DefaultCompanyId: defaultCompanyId
  };

  // Make a POST request to the login endpoint
  fetch("https://localhost:7241/api/User/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      if (!response.ok) {
        alert("Login failed");
        throw new Error("Login failed");
      }
      return response.json();
    })
    .then(data => {
      console.log("Encrypted User Code:", data.encryptedUserCode);
      localStorage.mytime = Date.now();
      localStorage.user = data.encryptedUserCode;
      localStorage.CompanyId = defaultCompanyId;
      window.location.href = "/HTML-LogIn/module.html";
      clearForm();
    })
    .catch(error => {
      console.error("Error:", error);
    });
}



document.addEventListener('DOMContentLoaded', function() {
  function loadCompany() {
    fetch('https://localhost:7241/api/ActiveCompany')
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error occurred while loading modules.');
        }
      })
      .then(function(data) {
        var selectElement = document.getElementById('defaultCompanyId');
        selectElement.innerHTML = '';

        var defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.text = '--Select Company--';
        selectElement.appendChild(defaultOption);

        data.forEach(function(company) {
          var option = document.createElement('option');
          option.value = company.CompanyId;
          option.text = company.CompanyName;
          selectElement.appendChild(option);
        });
      })
      .catch(function(error) {
        console.log(error.message);
      });
  }
  loadCompany();
});

  
  function redirectToPage(url) {
    setTimeout(function () {
      window.location.href = url;
    }, 1000); // Delay in milliseconds before redirecting (adjust as needed)
  }
  
  
  

  
  // Add event listeners to the login and registration forms
  document.getElementById("loginForm").addEventListener("submit", loginUser);
  // document.getElementById("registrationForm").addEventListener("submit", createUser);
  
var addCols = function (num) {
  for (var i = 1; i <= num; i++) {
    var myCol = $('<div class="col-sm-3 col-md-3 pb-2"></div>');
    var myPanel = $('<div class="card card-outline-info" id="' + i + 'Panel"><div class="card-block"><div class="card-title"><span>Card #' + i + '</span></div><p>Some text in ' + i + '</p><img src="//placehold.it/50/eeeeee" class="rounded rounded-circle"></div></div>');
    myPanel.appendTo(myCol);
    myCol.appendTo('#contentPanel');
  }
};

// if (!localStorage.getItem("mytime")) {
//   window.location.href = "/HTML-LogIn/ptLog.html"; // Redirect to login page
// }else{
//   window.location.href = "/HTML-LogIn/module.html"; // Redirect to login page
// }
// function logOut() {
//   window.location.href = "/HTML-LogIn/ptLog.html";
//   localStorage.removeItem("mytime");
//   // localStorage.removeItem("CompanyId");
//   // localStorage.removeItem("user");
//   // localStorage.removeItem("moduleName");
//   // localStorage.removeItem("moduleId");

// }
