
function loadmodules(){
  let user = localStorage.getItem("user");
  fetch(`https://localhost:7241/api/Module/GetUserModuleByUserCode/${user}`)
    .then(response => response.json())
    .then(data => {
      console.log("load module bar data",data);
      localStorage.setItem("moduleId",data[0].ModuleId);
      localStorage.setItem("moduleName",data[0].ModuleName);
      console.log("data");
      // viewnone();
      // setTimeout(displayModules,500, data);
      displayModules(data);
      
        // const cardContainer = document.getElementById('menubar');
  })
    .catch(error => console.error('Error:', error));

}

    
function displayModules(modules) {
    // console.log(modules,"modules");
    const menubar = document.getElementById("menubar");
        menubar.innerHTML="";


        modules.forEach(module => {

          const buttonTag = document.createElement("div");
          buttonTag.style.border = 'none';
          // buttonTag.style.backgroundColor = '#78acba';
          // buttonTag.style.borderRadius = '6px';
          // buttonTag.style.paddingBottom = '6px';
          const spanTag = document.createElement("span");
          
          // Set the onclick event for the spanTag
          spanTag.setAttribute("onclick", `loadmenuByModule('${module.ModuleId}', '${module.ModuleName}', this)`);
          spanTag.setAttribute("id", `${module.ModuleId}`);
          // spanTag.style.width = '85px';
          // spanTag.style.height = '65px';
          spanTag.style.color = '#fff';
          // Add CSS styles for centering the text and adjusting the text size
          spanTag.style.display = 'flex';
          spanTag.style.alignItems = 'center';
          spanTag.style.justifyContent = 'center';
          spanTag.style.paddingBottom = '6px';
          spanTag.style.fontSize = '14px'; // Adjust the font size as needed
          spanTag.style.fontWeight = 'bold'; // Optionally set the font weight
          
          spanTag.innerHTML = `${module.ModuleName}`;
          
          buttonTag.appendChild(spanTag);
          menubar.appendChild(buttonTag);
          document.getElementById("ShowuserName").innerText = modules[0].UserName;
          

      });
      let moduleId = localStorage.getItem("moduleId");
      let user = localStorage.getItem("user");
      let CompanyId = localStorage.getItem("CompanyId");
      viewnone();
      fetchDataAndDisplayMenu(user, moduleId, CompanyId);
    // console.log("modules[o].userName",modules[0].UserName);
    // document.getElementById("userName").innerText = modules[0].userName;

}


function viewnone()
{
    var name = localStorage.getItem("moduleName");
    // let bar = document.getElementById("clickedModuleName");
    // // console.log("bar",bar,"=",name);
    // bar.innerHTML= name;
    // document.getElementById("clickModuleName").innerHTML=ModuleName;

    const menubar = document.getElementById("menubar");
     // Loop through the child elements of menubar
    for (const child of menubar.children) {
      if (child.innerText === name) {
        console.log("=");
        // Change the background color of the matched child element
        // child.style.backgroundColor = "white"; // Set your desired background color here
        child.childNodes[0].style.color = "black";
        // child.childNodes[0].style.backgroundColor = "#7ba1e2"; // Set your desired background color here rgb(62 114 169)
        child.childNodes[0].style.borderBottom = " 4px solid black";
      } else {
        // Reset the background color of other child elements
        // child.childNodes[0].style.backgroundColor = "transparent"; // Set your desired background color here rgb(62 114 169)
        child.childNodes[0].style.borderBottom = "none";
        // child.style.backgroundColor = "#78acba"; // Set the default background color here
        child.childNodes[0].style.color = "white"; // Set your desired color here

      }
    }

}


// document.body.addEventListener('click',()=>{
//   document.getElementById('sidebar').classList.remove('active');
// });
// sidenavbar start
function SidebarButton(){
      document.getElementById('sidebar').classList.toggle('active');
}
// document.getElementById('SidebarButton').addEventListener('click', function() {
//   document.getElementById('sidebar').classList.toggle('active');
// });

// document.getElementById('closeButton').addEventListener('click', function() {
//   document.getElementById('sidebar').classList.remove('active');
// });
//sidenavbar end



function loadmenuByModule(ModuleId, ModuleName, element){
  localStorage.setItem("moduleId",ModuleId);
  localStorage.setItem("moduleName",ModuleName);

  // element.style.color = "#20586d";
  // element.style.fontSize = "15px";
  // font-size: 15px;
  viewnone();
  let moduleId = localStorage.getItem("moduleId");
  let user = localStorage.getItem("user");
  let CompanyId = localStorage.getItem("CompanyId");

  fetchDataAndDisplayMenu(user, moduleId, CompanyId);



// fetch(`https://localhost:7241/api/Menu/GetMenuByUserAndModuleAndCompany/${user}/${ModuleId}/${CompanyId}`)
//   .then(response => response.json())
//   .then(data => {
//     console.log("inside api menu",data);
//     displayMenuList(data);
//     //const cardContainer = document.getElementById('menubar');
//   })
//   .catch(error => console.error('Error:', error));

}

let ModuleId = localStorage.getItem("moduleId");
let userCode = localStorage.getItem("user");
let CompanyId = localStorage.getItem("CompanyId");

fetchDataAndDisplayMenu(userCode, ModuleId, CompanyId);

async function fetchDataAndDisplayMenu(user, ModuleId, CompanyId) {
  try {
    const response = await fetch(`https://localhost:7241/api/Menu/GetMenuByUserAndModuleAndCompany/${user}/${ModuleId}/${CompanyId}`);
    const data = await response.json();
    console.log("inside api menu", data);
    displayMenuList(data);
  } catch (error) {
    // console.error('Error:', error);
  }
}





const resultArraymenu = [];
function displayMenuList(jsonData){
  let loadMenu = document.getElementById("loadMenu");
  loadMenu.innerHTML="";


  const uniqueParentIds = [...new Set(jsonData.map(obj => obj.parentId))];
  console.log("uniqueParentIds",uniqueParentIds);
  resultArraymenu.length = 0;
  let menuItemName = ''

  uniqueParentIds.forEach(parentId => {
  const nestedObjects = jsonData.filter(obj => obj.parentId === parentId);
  jsonData.forEach(function(item){
    if(item.menuId === parentId){
     menuItemName = item.menuName

    }
  })
  resultArraymenu.push({ parentId, menuItemName, nestedObjects });
  });
  console.log(resultArraymenu);

  for (let i = 0; i < jsonData.length; i++) {
    if(jsonData[i].menuId == jsonData[i].parentId)
    {

      const mainDiv = document.createElement("div");
      mainDiv.setAttribute('class', `class-${resultArraymenu[i].parentId.toString()}`);
      mainDiv.style.display="block";
      let childelement;
      if(jsonData[i].navigateUrl!=null){

          childelement = document.createElement("a");
          childelement.setAttribute("href", `${resultArraymenu[i].navigateUrl.toString()}`);
          childelement.setAttribute("target", "_blank");
      }
      else{
        childelement = document.createElement("label");
        childelement.setAttribute("onclick", "childchildmenu(this)");
      }
      childelement.style.display = 'block';
      // childelement.style.backgroundColor = '#c3d8ed';
      childelement.setAttribute('id', resultArraymenu[i].parentId.toString());
      childelement.innerText=resultArraymenu[i].menuItemName;
      mainDiv.appendChild(childelement);
      loadMenu.appendChild(mainDiv);
    }

  }

}

function childchildmenu(element){
  var elementId = element.id;
  var div = document.getElementById(elementId);
  var parentDiv = document.querySelector(`.class-${elementId}`);
  // var parentDiv = div.closest(`.class-${elementId}`);
  console.log("parentDiv.children.length",parentDiv.children.length);
  // var div = document.getElementById(elementId);
  // var parentDiv = div.closest(`.class-${elementId}`);
  // var childDivs = parentDiv ? parentDiv.querySelectorAll(`.class-${elementId}`) : [];
  


  // console.log("parentDiv",parentDiv);
  if(parentDiv.children.length<=1)
  {
    for (let i = 0; i < resultArraymenu.length; i++) {
      if(elementId == resultArraymenu[i].parentId){

        const nestedObjects = resultArraymenu[i].nestedObjects;
        for (let j = 0; j < nestedObjects.length; j++) {

          if(nestedObjects[j].menuId!=nestedObjects[j].parentId){
            const childmainDiv = document.createElement("div");
            childmainDiv.style.display="block";
            childmainDiv.style.margin="10px 0px";
            childmainDiv.setAttribute('class', `class-${nestedObjects[j].menuId.toString()}`);
            let childDiv;
            if(nestedObjects[j].navigateUrl!=null){
  
              childDiv = document.createElement("a");
              // childDiv.setAttribute("href", '#');
              childDiv.setAttribute("href", `${nestedObjects[j].navigateUrl.toString()}`);
              childDiv.setAttribute("target", "_blank");
            }
            else{
              childDiv = document.createElement("div");
              childDiv.setAttribute("onclick", "childchildmenu(this)");
              
            }
            childDiv.setAttribute('id', nestedObjects[j].menuId.toString());
            const menuName = nestedObjects[j].menuName;
            childDiv.innerText = menuName;
            childDiv.style.display = 'block';
            childmainDiv.appendChild(childDiv);
            parentDiv.appendChild(childmainDiv);
  
          }

        }
      }
    }
  }
  else{
    // Get all child div elements
    // const childDivs = div.getElementsByTagName("div");
    var parentDiv = document.querySelector(`.class-${elementId}`);
    console.log("parentDiv", parentDiv);
    // parentDiv.style.backgroundColor = '#c3d8ed';
    // Toggle the display property of child divs
    for (let i = 1; i < parentDiv.children.length; i++) {
      const childDiv = parentDiv.children[i];
      if (childDiv.style.display === 'none') {
        childDiv.style.display = 'block';
      } else {
        childDiv.style.display = 'none';
      }
    }
    
  }

}




// fetch("https://localhost:7241/api/User/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(user)
// })


function loadReports(){
  let user = localStorage.getItem("user");
  //for report data
  fetch(`https://localhost:7241/api/Report/GetReportByUserAndModuleAndCompany/${user}`)
  .then(response => response.json())
  .then(data => {
    console.log("inside report api",data);
    displayReportList(data);
  })
  .catch(error =>{

  }
    // console.error('Error:', error)
  );

}



const resultArrayreport = [];
function displayReportList(jsonData){
  console.log("displayReportList");
  resultArrayreport.length =0;
  let loadMenu = document.getElementById("loadReport");
  loadMenu.innerHTML="";


  const uniqueParentIds = [...new Set(jsonData.map(obj => obj.parentId))];
  let menuItemName = ''

  uniqueParentIds.forEach(parentId => {
  const nestedObjects = jsonData.filter(obj => obj.parentId === parentId);
  jsonData.forEach(function(item){
    if(item.reportId === parentId){
     menuItemName = item.displayName
    }
  })
  resultArrayreport.push({ parentId, menuItemName, nestedObjects });
});

for (let i = 0; i < jsonData.length; i++) {
  if(jsonData[i].reportId == jsonData[i].parentId)
  {

      const mainDiv = document.createElement("div");
      mainDiv.setAttribute('class', `class-${resultArrayreport[i].parentId.toString()}`);
      mainDiv.style.display="block";
      let childelement;
      if(jsonData[i].reportPath!=null){

          childelement = document.createElement("a");
          childelement.setAttribute("href", '#');
          childelement.setAttribute("target", "_blank");

      }
      else{
        childelement = document.createElement("label");
        childelement.setAttribute("onclick", "childchildreport(this)");
      }
      childelement.style.display = 'block';
      childelement.setAttribute('id', resultArrayreport[i].parentId.toString());
      // mainDiv.setAttribute = ('id',`${resultArraymenu[i].parentId}`);
      // mainDiv.onclick = blocknoneReport;
      childelement.innerText=resultArrayreport[i].menuItemName;
      mainDiv.appendChild(childelement);
      loadMenu.appendChild(mainDiv);
  }
}


}

function childchildreport(element){
  var elementId = element.id;
  var div = document.getElementById(elementId);
  var parentDiv = document.querySelector(`.class-${elementId}`);
  if(parentDiv.children.length<=1)
  {
    for (let i = 0; i < resultArrayreport.length; i++) {
      if(elementId == resultArrayreport[i].parentId){

        const nestedObjects = resultArrayreport[i].nestedObjects;
        for (let j = 0; j < nestedObjects.length; j++) {

          if(nestedObjects[j].reportId!=nestedObjects[j].parentId){
            const childmainDiv = document.createElement("div");
            childmainDiv.style.display="block";
            childmainDiv.setAttribute('class', `class-${nestedObjects[j].reportId.toString()}`);
            let childDiv;
            if(nestedObjects[j].reportPath!=null){
  
              childDiv = document.createElement("a");
              childDiv.setAttribute("href", '#');
              childDiv.setAttribute("target", "_blank");

            }
            else{
              childDiv = document.createElement("div");
              childDiv.setAttribute("onclick", "childchildreport(this)");
            }
            childDiv.setAttribute('id', nestedObjects[j].reportId.toString());
            childDiv.innerText = nestedObjects[j].displayName;
            childDiv.style.display = 'block';
            childmainDiv.appendChild(childDiv);
            parentDiv.appendChild(childmainDiv);
          }

        }
      }
    }
  }  else{
    // Get all child div elements
    // const childDivs = div.getElementsByTagName("div");
    var parentDiv = document.querySelector(`.class-${elementId}`);
    console.log("parentDiv", parentDiv);
    
    // Toggle the display property of child divs
    for (let i = 1; i < parentDiv.children.length; i++) {
      const childDiv = parentDiv.children[i];
      if (childDiv.style.display === 'none') {
        childDiv.style.display = 'block';
      } else {
        childDiv.style.display = 'none';
      }
    }
    
  }
}

function blocknoneReport() {
  console.log("blocknoneReport");
  // Get all child div elements
  const childDivs = this.getElementsByTagName("div");

  // Toggle the display property of child divs
  for (let i = 0; i < childDivs.length; i++) {
    const childDiv = childDivs[i];
    if (childDiv.style.display === 'none') {
      childDiv.style.display = 'block';
    } else {
      childDiv.style.display = 'none';
    }
  }
}

function blocknoneReportdata(){
  let loadMenu = document.getElementById("loadReport");
  if (loadMenu.style.display === 'none') {
    loadMenu.style.display = 'block';
  } else {
    loadMenu.style.display = 'none';
  }
  
}

function blocknonemenudata(){
  let loadMenu = document.getElementById("loadMenu");
  if (loadMenu.style.display === 'none') {
    loadMenu.style.display = 'block';
  } else {
    loadMenu.style.display = 'none';
  }
  
}



function showpopup(){
  let showpopup = document.getElementById("showpopup");
  if(showpopup.style.display === 'block'){
    showpopup.style.display = 'none';
  }else{
    showpopup.style.display = 'block';
  }
}




  if (!localStorage.getItem("mytime")) {
      window.location.href = "/HTML-LogIn/ptLog.html"; // Redirect to login page
    }
    function logOut() {
      window.location.href = "/HTML-LogIn/ptLog.html";
      localStorage.removeItem("mytime");
      // localStorage.removeItem("CompanyId");
      // localStorage.removeItem("user");
      // localStorage.removeItem("moduleName");
      // localStorage.removeItem("moduleId");

    }

function updatepassword(){
  let OldPassword = document.getElementById("OldPassword").value;
  let NewPassword = document.getElementById("NewPassword").value;
  let ConfirmPassword = document.getElementById("ConfirmPassword").value;
  let user = localStorage.getItem("user");
   if(NewPassword != ConfirmPassword){
    alert("NewPassword and ConfirmPassword are not matching");
   }
   else{
    var formData = new FormData();
    formData.append('user', user);
    formData.append('OldPassword', OldPassword);
    formData.append('OldPassword', OldPassword);
  
    fetch("https://localhost:7241/api/User/updatePass", {
      method: 'PUT',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert(data.message);
      const modal = document.querySelector("#exampleModal");
      const bootstrapModal = bootstrap.Modal.getInstance(modal);
      bootstrapModal.hide();
      const form = document.getElementById('myForm');
  
      // Reset the form to its initial state
      form.reset();
  
    })
    .catch(error => {
      console.error(error);
    });
   }

}




    
