
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
  
  



//dropdown work start
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownToggle.addEventListener('click', function() {
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
});

//dropdown work end

//load all data when page is loaded
// let uniqueUserCodes;
// let uniqueUserNames;
// let uniqueCompanyNames;
let TableDataArray=[];
let AllReportsList=[];
fetch('https://localhost:7241/api/UserPermission')
.then(Response => Response.json())
.then(data =>{
    // uniqueUserCodes = [...new Set(data.map(item => item.userCode))];
    // uniqueUserNames = [...new Set(data.map(item => item.userName))];
    // uniqueCompanyNames = [...new Set(data.map(item => item.companyName))];
    // console.log(uniqueUserNames.length);
    data.forEach((item) => {
        const obj ={ ...item };  //spread operator (...)
        TableDataArray.push(obj);
    });
})
.catch(error => console.log(error))

fetch('https://localhost:7241/api/UserPermission/GetAllReports')
.then(Response => Response.json())
.then(data =>{
    // console.log(uniqueUserNames.length);
    data.forEach((item) => {
        const obj ={ ...item };  //spread operator (...)
        AllReportsList.push(obj);
    });
})
.catch(error => console.log(error))

//load username section work start
// //fetch all user info 
// let AllUserInfoList=[];
// //https://localhost:7241/api/UserPermission/GetAllUserInfo
// fetch('https://localhost:7241/api/UserPermission/GetAllUserInfo')
// .then(Response => Response.json())
// .then(data =>{
//         // //insert the userinfo in the dropdownlist
//         // let username = document.getElementById("username");
//         // for(var i=0; i<data.length;i++){
//         //     let option = document.createElement("div");
//         //     option.setAttribute('class',`${data[i].userName}`);
//         //     option.setAttribute('id',`${data[i].userCode}`);
//         //     option.innerText= data[i].userName};
//         //     option.addEventListener('click', selectusername);
//         //     username.appendChild(option);
//         //}
//     data.forEach((item) => {
//         const obj ={ ...item };  //spread operator (...)
//         AllUserInfoList.push(obj);
//     });
// })
// .catch(error => console.log(error))

// //fetch all user info end
var loadusername = document.getElementById("loadusername");
loadusername.addEventListener('click', function(){


    fetch('https://localhost:7241/api/UserPermission/GetAllUserInfo')
    .then(Response => Response.json())
    .then(data =>{
            //insert the userinfo in the dropdownlist
            let username = document.getElementById("username");
            for(var i=0; i<data.length;i++){
                let option = document.createElement("div");
                option.setAttribute('class',`${data[i].userName}`);
                //option.setAttribute('class',`${data[i].userName}`, 'userNameLists','row');
                option.setAttribute('class','userNameLists');
                option.setAttribute('id',`${data[i].userCode}`);
                option.innerText= data[i].userName;
                option.addEventListener('click', selectusername);
                //option.innerHTML=`<div class="col-4 grid-item text-wrap modules"> ${TableDataArray[i].moduleName} </div>`;
                username.appendChild(option);
            }
        // data.forEach((item) => {
        //     const obj ={ ...item };  //spread operator (...)
        //     AllUserInfoList.push(obj);
        // });
    })
    .catch(error => console.log(error))






    // console.log('AllUserInfoList',AllUserInfoList);
    // //insert the userinfo in the dropdownlist
    // let username = document.getElementById("username");
    // for(var i=0; i<AllUserInfoList.length;i++){
    //     let opt = document.createElement("div");
    //     opt.setAttribute('class',`${AllUserInfoList[i].userName}`);
    //     opt.setAttribute('id',`${AllUserInfoList[i].userCode}`);
    //     opt.innerText= AllUserInfoList[i].userName;
    //     opt.addEventListener('click', selectusername);
    //     username.appendChild(opt);
    // }
    // //insert the userinfo in the dropdownlist
    // let username = document.getElementById("username");
    // for(var i=0; i<data.length;i++){
    //     let option = document.createElement("div");
    //     option.setAttribute('class',`${uniqueUserNames[i]}`);
    //     option.setAttribute('class',`${data.userCode}`);
    //     option.setAttribute('id',`${uniqueUserCodes[i]}`);
    //     option.innerText= uniqueUserNames[i];
    //     option.addEventListener('click', selectusername);
    //     username.appendChild(option);
    // }
    // selectusername();
});
//load username section work end

//selection of name start
function selectusername(event){
    console.log("inside function");

    var innerText = event.target.innerText;
    var id = event.target.id;
    let loadusername = document.getElementById("loadusername");
    loadusername.setAttribute('class',`${id}`);
    loadusername.value = innerText;
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
    let selectionOption = document.getElementById("selectionOption");

        // Remove all child nodes except the first option
    while (selectionOption.childNodes.length > 1) {
        selectionOption.removeChild(selectionOption.lastChild);
    }

    // Create the "Nothing selected" option
    let nothingSelectedOption = document.createElement("option");
    nothingSelectedOption.setAttribute('value', '');
    nothingSelectedOption.innerText = 'Nothing selected';
    selectionOption.appendChild(nothingSelectedOption);


    fetch('https://localhost:7241/api/UserPermission/GetAllCompanyName')
    .then(Response => Response.json())
    .then(data =>{
        //insert the userinfo in the companylist
        for(var i=0; i<data.length;i++){
            let option = document.createElement("option");
            option.setAttribute('class',`${data[i].companyId}`);
            option.innerText= data[i].shortName;
            // option.addEventListener('click', loadTheTableData);
            selectionOption.appendChild(option);
        }
        selectionOption.addEventListener('change', loadTheTableData)
        // data.forEach((item) => {
        //     const obj ={ ...item };  //spread operator (...)
        //     AllUserInfoList.push(obj);
        // });
    })
    .catch(error => console.log(error))



    // for(var i=0; i<uniqueCompanyNames.length;i++){
    //     let option = document.createElement("option");
    //     option.setAttribute('class',`${uniqueCompanyNames[i]}`);
    //     option.innerText= uniqueCompanyNames[i];
    //     // option.addEventListener('click', loadTheTableData);
    //     selectionOption.appendChild(option);
    // }
    // selectionOption.addEventListener('change', loadTheTableData)
}
//selection of name end
let selectedUsernameData = [];
//loading the table data work start here
function loadTheTableData(event){


    var selectedOption = event.target.options[event.target.selectedIndex];
    var className = selectedOption.className;
    let selectionOption = document.getElementById("selectionOption");
    var loadusername = document.getElementById("loadusername");
    let userNameCode = loadusername.className;
    console.log("userNameCode",userNameCode);


    // Set the class name of the selected option as the name property
    selectionOption.name = className;

    // fetch('https://localhost:7241/api/UserPermission')
    // .then(Response => Response.json())
    // .then(data =>{

    //     // let gridContainerData = document.getElementById("gridContainer-data");
    //     // // console.log(TableDataArray);//<div class="row bg-info">
    //     // for(i=0;i<data.length;i++){
    //     //     let headerRow = document.createElement("div");
    //     //     // headerRow.style.height='30px';
    //     //     headerRow.setAttribute('class','row dataRow text-wrap');
    //     //     headerRow.innerHTML = `
    //     //         <div class="col-4 grid-item text-wrap modules"> ${data[i].moduleName} </div>
    //     //         <div id="${data[i].menuId}" class="col-4 grid-item interfaces">  ${data[i].menuName} </div>
    //     //         <div class="col-1 grid-item text-wrap">
    //     //             <div class="form-check d-flex justify-content-center align-items-center">
    //     //                 <input class="form-check-input view" type="checkbox" value="" id="checkbox${i + 1}_1">
    //     //             </div>
    //     //         </div>
    //     //         <div class="col-1 grid-item text-wrap">
    //     //             <div class="form-check d-flex justify-content-center align-items-center">
    //     //                 <input class="form-check-input add" type="checkbox" value="" id="checkbox${i + 1}_2">
    //     //             </div>
    //     //         </div>
    //     //         <div class="col-1 grid-item text-wrap">
    //     //             <div class="form-check d-flex justify-content-center align-items-center">
    //     //                 <input class="form-check-input modify" type="checkbox" value="" id="checkbox${i + 1}_3">
    //     //             </div>
    //     //         </div>
    //     //         <div class="col-1 grid-item text-wrap">
    //     //             <div class="form-check d-flex justify-content-center align-items-center">
    //     //                 <input class="form-check-input delete" type="checkbox" value="" id="checkbox${i + 1}_4">
    //     //             </div>
    //     //         </div>
    //     //     `;
    //     //     gridContainerData.appendChild(headerRow);
    //     // }





    //     // uniqueUserCodes = [...new Set(data.map(item => item.userCode))];
    //     // uniqueUserNames = [...new Set(data.map(item => item.userName))];
    //     // uniqueCompanyNames = [...new Set(data.map(item => item.companyName))];
    //     // console.log(uniqueUserNames.length);
    //     TableDataArray.length= 0;
    //     data.forEach((item) => {
    //         const obj ={ ...item };  //spread operator (...)
    //         TableDataArray.push(obj);
    //     });
    // })
    // .catch(error => console.log(error))


    let data = document.getElementById("gridContainer-data");
    data.innerHTML = "";
    // console.log(TableDataArray);//<div class="row bg-info">
    for(i=0;i<TableDataArray.length;i++){
        let headerRow = document.createElement("div");
        // headerRow.style.height='30px';
        headerRow.setAttribute('class','row dataRow text-wrap');
        headerRow.innerHTML = `
            <div class="col-4 grid-item text-wrap modules"> ${TableDataArray[i].moduleName} </div>
            <div id="${TableDataArray[i].menuId}" class="col-4 grid-item interfaces">  ${TableDataArray[i].menuName} </div>
            <div class="col-1 grid-item text-wrap">
                <div class="form-check d-flex justify-content-center align-items-center">
                    <input class="form-check-input view" type="checkbox" value="" id="checkbox${i + 1}_1">
                </div>
            </div>
            <div class="col-1 grid-item text-wrap">
                <div class="form-check d-flex justify-content-center align-items-center">
                    <input class="form-check-input add" type="checkbox" value="" id="checkbox${i + 1}_2">
                </div>
            </div>
            <div class="col-1 grid-item text-wrap">
                <div class="form-check d-flex justify-content-center align-items-center">
                    <input class="form-check-input modify" type="checkbox" value="" id="checkbox${i + 1}_3">
                </div>
            </div>
            <div class="col-1 grid-item text-wrap">
                <div class="form-check d-flex justify-content-center align-items-center">
                    <input class="form-check-input delete" type="checkbox" value="" id="checkbox${i + 1}_4">
                </div>
            </div>
        `;
        data.appendChild(headerRow);
    }

    let reportsData = document.getElementById("reportsData");
    reportsData.innerHTML = "";
    for(let i=0;i<AllReportsList.length;i++){
        let headerRow = document.createElement("div");
        // headerRow.style.height='30px';
        headerRow.setAttribute('class','row dataRow text-wrap reportDataRow');
        headerRow.innerHTML = `
            <div class="col-3 grid-item text-wrap">
                <div class="form-check d-flex justify-content-center align-items-center">
                    <input class="form-check-input report" type="checkbox" value="" id="checkbox${i + 1}_1">
                </div>
            </div>
            <div id="${AllReportsList[i].reportId}" class="col-9 grid-item reports">  ${AllReportsList[i].displayName} </div>
        `;
        reportsData.appendChild(headerRow);
    }

console.log("userNameCode",userNameCode);
    fetch(`https://localhost:7241/api/UserPermission/GetReportAndMenuByUserCode/${userNameCode}`)
    .then(Response => Response.json())
    .then(data =>{
        console.log("selected username data",data);
        let reportDataRow = document.getElementsByClassName("reportDataRow");
        let dataRow = document.getElementsByClassName("dataRow");
        // console.log("selectedUsernameData.length",selectedUsernameData.length,selectedUsernameData);
        // console.log("reportDataRow.length",reportDataRow.length);


        //add userpermissions start
        for (let i = 0; i < data.length; i++) {

            for (let j = 0; j < reportDataRow.length; j++) {
              const reportId = reportDataRow[j].querySelector('.reports').id;
            //   console.log("not matching",reportId,"==",data[i].reportId);
              if (reportId == data[i].reportId) {
                    const checkbox = reportDataRow[j].querySelector('.form-check-input');
                    checkbox.checked = true;
                }
            }


            // let menuId = data[i].menuId;
            // let canView = data[i].canView;
            // let canAdd = data[i].canAdd;
            // let canModify = data[i].canModify;
            // let canDelete = data[i].canDelete;
            
            for (let j = 0; j < dataRow.length; j++) {
              let menuElement = dataRow[j].querySelector('.interfaces');
              
              if (menuElement) {
                let menuId = menuElement.id;
                // console.log("menuId", menuId);
                // console.log("menuId == data[i].menuId", menuId,"==", data[i].menuId);
                
                if (menuId == data[i].menuId) {
                  const checkboxes = dataRow[j].querySelectorAll('.form-check-input');
              
                  checkboxes[0].checked = data[i].canView;
                  checkboxes[1].checked = data[i].canAdd;
                  checkboxes[2].checked = data[i].canModify;
                  checkboxes[3].checked = data[i].canDelete;
                }
              }
            }
            

            // for (let j = 0; j < checkboxes.length; j++) {
            //     const checkbox = checkboxes[j];
            //     const checkboxId = checkbox.id;

            //     if (checkboxId === `checkbox${j + 1}_1` && checkbox.parentNode.parentNode.parentNode.id === String(menuId)) {
            //     checkbox.checked = canView;
            //     }
            //     if (checkboxId === `checkbox${j + 1}_2` && checkbox.parentNode.parentNode.parentNode.id === String(menuId)) {
            //     checkbox.checked = canAdd;
            //     }
            //     if (checkboxId === `checkbox${j + 1}_3` && checkbox.parentNode.parentNode.parentNode.id === String(menuId)) {
            //     checkbox.checked = canModify;
            //     }
            //     if (checkboxId === `checkbox${j + 1}_4` && checkbox.parentNode.parentNode.parentNode.id === String(menuId)) {
            //     checkbox.checked = canDelete;
            //     }
            // }
        }

        // data.forEach((item) => {
        //     const obj ={ ...item };  //spread operator (...)
        //     selectedUsernameData.push(obj);
        // });
    })
    .catch(error => console.log(error))
    // let reportDataRow = document.getElementsByClassName("reportDataRow");
    // console.log("selectedUsernameData.length",selectedUsernameData.length,selectedUsernameData);
    // console.log("reportDataRow.length",reportDataRow.length);
    // //add userpermissions start
    // for (let i = 0; i < selectedUsernameData.length; i++) {
    //     for (let j = 0; j < reportDataRow.length; j++) {
    //       const reportId = reportDataRow[j].querySelector('.reports').id;
    //       console.log("not matching",reportId === selectedUsernameData[i].reportId);
    //       if (reportId === selectedUsernameData[i].reportId) {
    //             const checkbox = reportDataRow[j].querySelector('.form-check-input');
    //             checkbox.checked = true;
    //         }
    //     }
    // }
}
//loading the table data work end here


//insert permission work start here
let saveTheData = document.getElementById("saveTheData");
saveTheData.addEventListener('click', function(){


    //here in this i am collecting the menu permission data
    let permissionMenuData = [];

    var loadusername = document.getElementById("loadusername");
    var selectionOption = document.getElementById("selectionOption");

    let dataRows = document.getElementsByClassName("dataRow");
    for (let i = 0; i < dataRows.length; i++) {
        let rowData = {};
        let checkboxes = dataRows[i].querySelectorAll('input[type="checkbox"]');
        let hasChecked = false; // Flag to track if any checkbox is checked in the row

        for (let j = 0; j < checkboxes.length; j++) {
            let checkbox = checkboxes[j];
            let checkboxId = checkbox.getAttribute("id");
            if (checkbox.checked) {
                // var selectedCompany = selectionOption.className;
                var selectedCompany = selectionOption.name;
                var selectedUsername = loadusername.className;
                rowData.userCode=selectedUsername;
                let menuIdElement = checkbox.closest('.dataRow').querySelector('.grid-item:nth-child(2)');
                let menuId = menuIdElement.getAttribute("id");
                rowData.menuId = menuId;
                rowData.companyId= selectedCompany;
                // // Add other data properties as needed
                // rowData.moduleName = dataRows[i].querySelector(".grid-item:nth-child(1)").textContent.trim();
                // rowData.menuName = menuIdElement.textContent.trim();



                // Set checkbox values with desired property names
                if (checkboxId === `checkbox${i + 1}_1`) {
                    rowData.canView = true;
                    hasChecked = true; // Set the flag to true if any checkbox is checked
                }
                if (checkboxId === `checkbox${i + 1}_2`) {
                    rowData.canAdd = true;
                    hasChecked = true; // Set the flag to true if any checkbox is checked
                }
                if (checkboxId === `checkbox${i + 1}_3`) {
                    rowData.canModify = true;
                    hasChecked = true; // Set the flag to true if any checkbox is checked
                }
                if (checkboxId === `checkbox${i + 1}_4`) {
                    rowData.canDelete = true;
                    hasChecked = true; // Set the flag to true if any checkbox is checked
                }
                // Set checkbox values
                // var a = rowData[`checkbox${j + 1}`] = true;
                // console.log(a);

            } else {
                // rowData[`checkbox${j + 1}`] = false;
                // Set checkbox values with desired property names
                if (checkboxId === `checkbox${i + 1}_1`) {
                    rowData.canView = false;
                }
                if (checkboxId === `checkbox${i + 1}_2`) {
                    rowData.canAdd = false;
                }
                if (checkboxId === `checkbox${i + 1}_3`) {
                    rowData.canModify = false;
                }
                if (checkboxId === `checkbox${i + 1}_4`) {
                    rowData.canDelete = false;
                }
            }
        }

        if (hasChecked) {
            permissionMenuData.push(rowData);
        }
    }

    console.log("all data for insert", permissionMenuData);
    //Collecting menu permission data end here

    //here in this i am collecting the report permission data
    let permissionReportData = [];

    var loadusername = document.getElementById("loadusername");
    var selectionOption = document.getElementById("selectionOption");

    let reportDataRow = document.getElementsByClassName("reportDataRow");
    for (let i = 0; i < reportDataRow.length; i++) {
        let rowData = {};
        let checkboxes = reportDataRow[i].querySelectorAll('input[type="checkbox"]');
        let hasChecked = false; // Flag to track if any checkbox is checked in the row

        for (let j = 0; j < checkboxes.length; j++) {
            let checkbox = checkboxes[j];
            let checkboxId = checkbox.getAttribute("id");
            if (checkbox.checked) {
                var selectedCompany = selectionOption.name;
                var selectedUsername = loadusername.className;
                rowData.userCode=selectedUsername;
                let menuIdElement = checkbox.closest('.dataRow').querySelector('.grid-item:nth-child(2)');
                let menuId = menuIdElement.getAttribute("id");
                rowData.reportId = menuId;
                rowData.companyId= selectedCompany;

                // Set checkbox values with desired property names
                if (checkboxId === `checkbox${i + 1}_1`) {
                    rowData.canView = true;
                }
                // Set checkbox values
                // var a = rowData[`checkbox${j + 1}`] = true;
                // console.log(a);

                hasChecked = true; // Set the flag to true if any checkbox is checked
            } else {
                // rowData[`checkbox${j + 1}`] = false;
                // Set checkbox values with desired property names
                if (checkboxId === `checkbox${i + 1}_1`) {
                    rowData.canView = false;
                }
            }
        }

        if (hasChecked) {
            permissionReportData.push(rowData);
        }
    }

    console.log("All data for insert", permissionReportData);
    //Collecting the report permission data end here

    let permissionData ={
        userPermissions: permissionMenuData,
        userReportPermissions: permissionReportData
    }
    let count;
    if(permissionMenuData.length==0 && permissionReportData.length==0){
        alert("Permission is not givien");
    }
    else if(permissionMenuData.length>0 && permissionReportData.length==0){
        count = 0;
    }
    else if(permissionMenuData.length==0 && permissionReportData.length>0){
        count = 1;
    }
    else{
        count = 2;
    }
    fetch(`https://localhost:7241/api/UserPermission/InsertUserPermission/${count}`,{
        method: "POST",
        body: JSON.stringify(permissionData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(Response=> Response.json())
    .then(data=>{
        console.log(data);
        alert(" permission is successfully given");
        // window.location.href = "http://127.0.0.1:5500/userPermission.html";
    })
    .catch(error=>{
        console.log(error);
        alert(" permission is successfully given");
        // alert(" insert error", error);
        window.location.href = "http://127.0.0.1:5500/userPermission.html";
    })


    //test perpose insert data is off.
    // fetch('https://localhost:7241/api/UserPermission/userpermissionPOST',{
    //     method: "POST",
    //     body: JSON.stringify(permissionData),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })
    // .then(Response=> Response.json())
    // .then(data=>{
    //     console.log(data);
    //     alert(" permission is successfully given");
    //     window.location.href = "http://127.0.0.1:5500/userPermission.html";
    // })
    // .catch(error=>{
    //     console.log(error);
    //     alert(" permission is successfully given");
    //     window.location.href = "http://127.0.0.1:5500/userPermission.html";
    // })

});


// module and interfaces search work start here
let interfaceInput = document.getElementById("interfaceInput");
let moduleInput = document.getElementById("moduleInput");

moduleInput.addEventListener('keyup', ()=>{
    moduleinterface();
});
interfaceInput.addEventListener('keyup', ()=>{
    moduleinterface();
});


function moduleinterface(){
    let interfaceInputValue = interfaceInput.value.toLowerCase();
    let moduleInputValue = moduleInput.value.toLowerCase();

    let dataRow = document.getElementsByClassName("dataRow");
    for(i=0;i<dataRow.length;i++){
        // console.log(dataRow[i].childNodes[1].innerText);
        let interface = dataRow[i].querySelector(".interfaces");
        let modules = dataRow[i].querySelector(".modules");

        //interface.innerHTML.toLowerCase().indexOf(interfaceInputValue) != -1
        if(interface.innerHTML.toLowerCase().indexOf(interfaceInputValue) != -1 && modules.innerHTML.toLowerCase().indexOf(moduleInputValue) != -1){
            dataRow[i].style.display = "flex";
        }else{
            dataRow[i].style.display = "none";
        }
    }
    // console.log(dataRow.length);
}
// module and interfaces search work end here


// report search work start here
let reportInput = document.getElementById("reportInput");

reportInput.addEventListener('keyup', ()=>{
    searchReport();
});
function searchReport(){
    let reportInputValue = reportInput.value.toLowerCase();

    let reportDataRow = document.getElementsByClassName("reportDataRow");
    for(i=0;i<reportDataRow.length;i++){
        // console.log(dataRow[i].childNodes[1].innerText);
        let report = reportDataRow[i].querySelector(".reports");

        //interface.innerHTML.toLowerCase().indexOf(interfaceInputValue) != -1
        if(report.innerHTML.toLowerCase().indexOf(reportInputValue) != -1){
            reportDataRow[i].style.display = "flex";
        }else{
            reportDataRow[i].style.display = "none";
        }
    }
    // console.log(dataRow.length);
}
// report search work end here

// username search work start here
let searchusername = document.getElementById("usernames");

searchusername.addEventListener('keyup', ()=>{
    searchUserInfo();
    console.log("inside keyup");
});
function searchUserInfo(){
    // console.log("inside searchUserInfo");
    let userNameInputValue = searchusername.value.toLowerCase();
    // console.log(userNameInputValue);
    let userNameDataRow = document.getElementsByClassName("userNameLists");
    // console.log(userNameDataRow);
    for(i=0;i<userNameDataRow.length;i++){
        // console.log(dataRow[i].childNodes[1].innerText);
        let userName = userNameDataRow[i];

        //interface.innerHTML.toLowerCase().indexOf(interfaceInputValue) != -1
        if(userName.innerHTML.toLowerCase().indexOf(userNameInputValue) != -1){
            userNameDataRow[i].style.display = "flex";
        }else{
            userNameDataRow[i].style.display = "none";
        }
    }
    // console.log(dataRow.length);
}
// report search work end here

// select all permission View, add, modefy, delete  start here
let sellectAllView = document.getElementById("sellectAllView");
sellectAllView.addEventListener('change', function() {
    let dataRows = document.getElementsByClassName('dataRow');
    if (this.checked) {
        // Checkbox is checked
        //   console.log("Checkbox is checked view");
        for (let i = 0; i < dataRows.length; i++) {
        let viewCheckbox = dataRows[i].querySelector('.form-check-input.view');
            if (viewCheckbox) {
                viewCheckbox.checked = true;
            }
        }
    } else {
      // Checkbox is unchecked
      console.log("Checkbox is unchecked");
      for (let i = 0; i < dataRows.length; i++) {
        let viewCheckbox = dataRows[i].querySelector('.form-check-input.view');
            if (viewCheckbox) {
                viewCheckbox.checked = false;
            }
        }
    }
  });
  let sellectAllAdd = document.getElementById("sellectAllAdd");
  sellectAllAdd.addEventListener('change', function() {
    let dataRows = document.getElementsByClassName('dataRow');
    if (this.checked) {
        // Checkbox is checked
        //   console.log("Checkbox is checked view");
        for (let i = 0; i < dataRows.length; i++) {
        let viewCheckbox = dataRows[i].querySelector('.form-check-input.add');
            if (viewCheckbox) {
                viewCheckbox.checked = true;
            }
        }
    } else {
      // Checkbox is unchecked
      console.log("Checkbox is unchecked");
      for (let i = 0; i < dataRows.length; i++) {
        let viewCheckbox = dataRows[i].querySelector('.form-check-input.add');
            if (viewCheckbox) {
                viewCheckbox.checked = false;
            }
        }
    }
  });
  let sellectAllModify = document.getElementById("sellectAllModify");
  sellectAllModify.addEventListener('change', function() {
    let dataRows = document.getElementsByClassName('dataRow');
    if (this.checked) {
        // Checkbox is checked
        //   console.log("Checkbox is checked view");
        for (let i = 0; i < dataRows.length; i++) {
        let viewCheckbox = dataRows[i].querySelector('.form-check-input.modify');
            if (viewCheckbox) {
                viewCheckbox.checked = true;
            }
        }
    } else {
      // Checkbox is unchecked
      console.log("Checkbox is unchecked");
      for (let i = 0; i < dataRows.length; i++) {
        let viewCheckbox = dataRows[i].querySelector('.form-check-input.modify');
            if (viewCheckbox) {
                viewCheckbox.checked = false;
            }
        }
    }
  });
  let sellectAllDelete = document.getElementById("sellectAllDelete");
  sellectAllDelete.addEventListener('change', function() {
    let dataRows = document.getElementsByClassName('dataRow');
    if (this.checked) {
        // Checkbox is checked
        //   console.log("Checkbox is checked view");
        for (let i = 0; i < dataRows.length; i++) {
        let viewCheckbox = dataRows[i].querySelector('.form-check-input.delete');
            if (viewCheckbox) {
                viewCheckbox.checked = true;
            }
        }
    } else {
      // Checkbox is unchecked
      console.log("Checkbox is unchecked");
      for (let i = 0; i < dataRows.length; i++) {
        let viewCheckbox = dataRows[i].querySelector('.form-check-input.delete');
            if (viewCheckbox) {
                viewCheckbox.checked = false;
            }
        }
    }
  });
  let sellectAllreports = document.getElementById("sellectAllreports");
  sellectAllreports.addEventListener('change', function() {
    let reportDataRow = document.getElementsByClassName('reportDataRow');
    if (this.checked) {
        // Checkbox is checked
        //   console.log("Checkbox is checked view");
        for (let i = 0; i < reportDataRow.length; i++) {
        let viewCheckbox = reportDataRow[i].querySelector('.form-check-input.report');
            if (viewCheckbox) {
                viewCheckbox.checked = true;
            }
        }
    } else {
      // Checkbox is unchecked
      console.log("Checkbox is unchecked");
      for (let i = 0; i < reportDataRow.length; i++) {
        let viewCheckbox = reportDataRow[i].querySelector('.form-check-input.report');
            if (viewCheckbox) {
                viewCheckbox.checked = false;
            }
        }
    }
  });
// select all permission View, add, modefy, delete  end here



if (!localStorage.getItem("mytime")) {
    window.location.href = "/HTML-LogIn/index.html"; // Redirect to login page
  }
  function logOut() {
    window.location.href = "/HTML-LogIn/index.html";
    localStorage.removeItem("mytime");
  }