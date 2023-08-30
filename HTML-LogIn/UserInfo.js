
const para = [
  {
    columns: [
      // {
      //   id: "Button",
      //   type: "btn",
      //   label: "...",
      //   align: "left",
      //   width: 40,
      //   sort: "str",
      //   visible: false,
      // },
      //vv3
      {
        id: "UserCode",
        field:"primary",
        inputType: "text",
        type: "input",
        label: "User Code",
        align: "left",
        width: 150,
        sort: "str",
        visible: true,
        filter: "#text_filter",
      },
      {
        id: "UserName",
        inputType: "text",
        type: "input",
        // field:"primary",
        label: "User Name",
        align: "center",
        width: 150,
        sort: "str",
        visible: true,
        filter: "#text_filter",
      },
      {
        id: "Password",
        inputType: "password",
        type: "input",
        label: "Password",
        align: "center",
        width: 150,
        sort: "str",
        visible: true,
        filter: "#text_filter",
      },
      {
        id: "EmployeeId",
        inputType: "number",
        type: "input",
        label: "employee Id",
        align: "center",
        width: 200,
        sort: "str",
        visible: false,
        filter: "#text_filter",
      },
      {
        id: "EmployeeDisplayId",
        field:"halfPrimary",
        inputType: "text",
        type: "input",
        label: "Employee Code",
        align: "center",
        width: 200,
        sort: "str",
        visible: true,
        filter: "#text_filter",
      },
      {
        id: "CompanyName",
        inputType: "text",
        type: "select",
        label: "Company Name",
        align: "center",
        width: 200,
        sort: "str",
        visible: true,
        filter: "#text_filter",
      },
      {
        id: "ModuleName",
        inputType: "text",
        type: "select",
        label: "Module Name",
        align: "center",
        width: 200,
        sort: "str",
        visible: true,
        filter: "#text_filter",
      },
      {
        id: "Email",
        inputType: "text",
        type: "input",
        // field:"primary",
        label: "email",
        align: "center",
        width: 150,
        sort: "str",
        visible: true,
        filter: "#text_filter",
    },
      // {
      //   id: "imageFile",
      //   type: "ed",
      //   label: "image File",
      //   align: "left",
      //   width: 150,
      //   sort: "str",
      //   visible: false,
      //   filter: "#text_filter",
      // },
      {
        id: "IsAdmin",
        inputType: "checkbox",
        type: "input",
        label: "is Admin",
        align: "left",
        width: 125,
        sort: "str",
        visible: true,
      },
      {
        id: "IsAudit",
        inputType: "checkbox",
        type: "input",
        label: "Is Audit",
        align: "left",
        width: 125,
        sort: "str",
        visible: true,
      },
      {
        id: "IsActive",
        inputType: "checkbox",
        type: "input",
        label: "Is Active",
        align: "left",
        width: 125,
        sort: "str",
        visible: true,
      },
      { id: "AddedBy", type: "ed", label: "AddedBy", visible: false },
      { id: "DateAdded", type: "ed", label: "DateAdded", visible: false },
    ],
  },
];


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

createForm();
function createForm() {
  const formContainer = document.querySelector(".AddMenuInputContainer");
  const columns = para[0].columns;

  // Divide the columns into three groups based on visibility
  const visibleColumns = columns.filter((column) => column.visible === true);
  const numVisibleColumns = visibleColumns.length;
  const numColsPerPart = Math.ceil(numVisibleColumns / 3);
  const MainRow = document.createElement("div");
  MainRow.classList.add('row','saleSectionRow','my-3','ms-1');

  // Loop through the visible columns and create input fields for each part
  for (let i = 0; i < 3; i++) {
    const formPart = document.createElement("div");
    formPart.classList.add("col-4");

    for (let j = 0; j < numColsPerPart; j++) {
      const colIndex = i * numColsPerPart + j;
      const column = visibleColumns[colIndex];

      if (!column) break; // Break if no more columns to display

      const inputRow = document.createElement("div");
      inputRow.classList.add("row", "inputRow");
      // inputRow.setAttribute("ondblclick","insertDatainform()");

      const inputColumnLabel = document.createElement("div");
      inputColumnLabel.classList.add("col-4", "AddMenuInputColumn");
      const label = document.createElement("label");
      // label.classList.add("AddMenuIdLabel");
      label.style.fontSize = "13px";
      label.style.fontWeight = "500";
      label.for = column.id;
      label.innerText = column.label;
      inputColumnLabel.appendChild(label);
      inputRow.appendChild(inputColumnLabel);

      const inputColumn = document.createElement("div");
      inputColumn.classList.add("col-7",'d-flex');
      if(column.type=="select"){
        const select = document.createElement("select");
        select.id = column.id;
        select.name = column.id;
        select.placeholder = column.label;
        select.classList.add("form-control", "p-0");
        const option1 = document.createElement("option");
        option1.textContent = "-- Select Module --";
        select.appendChild(option1);
        // const option2 = document.createElement("option");
        // option2.innerHTML = `<input type="text" id="search">`;
        select.appendChild(option1);
        // select.appendChild(option2);
        inputColumn.appendChild(select);
      }else if(column.type=="input"){
        const input = document.createElement("input");
        if(column.inputType == "number"){
          input.type = column.inputType;
        }else if(column.inputType == "text"){
          input.type = column.inputType;
        }else if(column.inputType == "password"){
          input.type = column.inputType;
        }else if(column.inputType == "file"){
          input.type = column.inputType;
        }else if(column.inputType == "checkbox"){
          input.classList.add('form-check-input');
          input.type = column.inputType;
        }
        // input.type = column.type === "ro" ? "text" : "number";
        input.id = column.id;
        input.name = column.id;
        input.placeholder = column.label;
        input.classList.add("form-control", "p-0");
        inputColumn.appendChild(input);
      }

      if (column.field == "primary") {
        const fileIcon = document.createElement("i");
        fileIcon.classList.add("fa-solid", "fa-file", "AddMenuFileIcon");
        fileIcon.setAttribute("onclick","NewButton('new')");
        fileIcon.style.padding="5px 5px";
        inputColumn.appendChild(fileIcon);
        const searchIcon = document.createElement("i");
        searchIcon.classList.add("fa-solid", "fa-magnifying-glass", "AddMenuSearchIcon");
        searchIcon.setAttribute("onclick","searchModule()");
        searchIcon.style.padding="5px 4px 0px";
        searchIcon.id = "getDetails"; // Not sure if you want the same ID for all search icons
        inputColumn.appendChild(searchIcon);
      }else if(column.field == "halfPrimary"){
        const searchIcon = document.createElement("i");
        searchIcon.classList.add("fa-solid", "fa-magnifying-glass", "AddMenuSearchIcon");
        searchIcon.setAttribute("onclick","showemployeeModal()");
        searchIcon.style.padding="5px 4px 0px";
        searchIcon.id = "getDetails"; // Not sure if you want the same ID for all search icons
        inputColumn.appendChild(searchIcon);
      }



      inputRow.appendChild(inputColumn);
      formPart.appendChild(inputRow);
    }

    MainRow.appendChild(formPart);
  }
  formContainer.appendChild(MainRow);
  loadModuleName();
  loadcomapny();
}
function loadModuleName(){
  //get all active module : https://localhost:7241/api/Module
  fetch("https://localhost:7241/api/Module")
      .then(Response => Response.json())
      .then(data => {
          var moduleIdDropdown = document.getElementById("ModuleName");
          data.forEach(function (module) {
              var option = document.createElement("option");
              option.value = module.moduleId;
              option.text = module.moduleName;
              moduleIdDropdown.appendChild(option);
          });
      })
}

function loadcomapny(){
  //get all active module : https://localhost:7241/api/GetAllMenu
  fetch("https://localhost:7241/api/GetCompany")
      .then(Response => Response.json())
      .then(data => {
          var parentIdDropdown = document.getElementById("CompanyName");
          data.forEach(function (parent) {
              var option = document.createElement("option");
              option.value = parent.CompanyId;
              option.text = parent.ShortName;
              parentIdDropdown.appendChild(option);
          });
      })
}




loadTableHeader();
function loadTableHeader(){
  // load grid header
  var colLength = para[0].columns.length;
  // var colLength = para[0].columns.length;

  console.log(colLength);
  const gridContainer = document.getElementById("gridContainer");
  // Clear previous grid
  gridContainer.innerHTML = "";
  var totalWidth = 0;
  for(let a = 0; a < 2; a++){
    if(a==1){
      const headerRow = document.createElement("div");
      headerRow.classList.add("row", "headerRow", "bottomField1stRow");
      headerRow.style.height = "30px";
      for (let i = 0; i < colLength; i++) {
          //console.log("String not contains 'id'.");
          const col = document.createElement("input");
          col.classList.add("col-2", "grid-item",`${para[0].columns[i].id}`);
          // console.log(para[0].columns[i].label);
          col.textContent = para[0].columns[i].label;
          col.style.width = `${para[0].columns[i].width}px`;
          col.style.border = "1px solid  rgb(175, 200, 221)";
          col.style.height = "30px";
          col.style.alignItems = `${para[0].columns[i].align}`;
          if (para[0].columns[i].visible == false) {
            col.style.display='none';
          }
          headerRow.appendChild(col);
          totalWidth = totalWidth + para[0].columns[i].width;
      }
      gridContainer.appendChild(headerRow);
      var tableFooter = document.getElementById("tableFooter");
      var details = document.getElementById("details");
      // details.style.width = `${totalWidth+10}px`;
    
      // var gridContainerData = document.getElementById("gridContainer-data");
      console.log("tableFooter:", totalWidth);
    }else{
      const headerRow = document.createElement("div");
      headerRow.classList.add("row", "headerRow", "bottomField1stRow");
      headerRow.style.height = "30px";
      for (let i = 0; i < colLength; i++) {
          //console.log("String not contains 'id'.");
          const col = document.createElement("div");
          col.classList.add("col-2", "grid-item");
          // console.log(para[0].columns[i].label);
          col.textContent = para[0].columns[i].label;
          col.style.width = `${para[0].columns[i].width}px`;
          col.style.border = "1px solid  rgb(175, 200, 221)";
          col.style.height = "30px";
          col.style.alignItems = `${para[0].columns[i].align}`;
          if (para[0].columns[i].visible == false) {
            col.style.display='none';
          }
          headerRow.appendChild(col);
          totalWidth = totalWidth + para[0].columns[i].width;
      }
      gridContainer.appendChild(headerRow);
      var tableFooter = document.getElementById("tableFooter");
      var details = document.getElementById("details");
      // details.style.width = `${totalWidth+10}px`;
    
      // var gridContainerData = document.getElementById("gridContainer-data");
      console.log("tableFooter:", totalWidth);
    }
  }

}




// Submit form
var form = document.getElementById("saveTheData");
form.addEventListener('click', function(){
  let userCodeplaceholder = document.getElementById('UserCode');
  if(userCodeplaceholder.placeholder != "****<<New>>****"){
    updateModule();
  }else{
  // Get form values
  const userCode = document.getElementById('UserCode').value;
  const userName = document.getElementById('UserName').value;
  const password = document.getElementById('Password').value;
  const email = document.getElementById('Email').value;
  const employeeId = document.getElementById('EmployeeDisplayId').name;
  // const employeeId = document.getElementById('EmployeeId').getAttribute('name');

  const defaultModuleId = document.getElementById('ModuleName').value;
  const defaultCompanyId = document.getElementById('CompanyName').value;
  const isAdmin = document.getElementById('IsAdmin').checked;
  const isActive = document.getElementById('IsActive').checked;
  const isAudit = document.getElementById('IsAudit').checked;

  // Create the user object
  const user = {
    UserCode: userCode,
    UserName: userName,
    Password: password,
    Email: email,
    EmployeeId: employeeId,
    DefaultModuleId: defaultModuleId,
    DefaultCompanyId: defaultCompanyId,
    company_Id: 0,
    IsAdmin: isAdmin,
    IsActive: isActive,
    IsAudit: isAudit
  };
  console.log(user,"ceeate user");

  // // Send POST request to server
  fetch('https://localhost:7241/api/User/CreateUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if(data.message==="User created successfully" || data.message==="User not found"){
        alert(data.message);
        NewButton();
        searchModule();
      }else{
        alert("Fillup the form currectlly for Create New User.");
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
});


function searchModule(){
  //load menu table
fetch("https://localhost:7241/api/UserInfo")
.then(response => response.json())
.then(data => {
  console.log("userinfo", data);
  loadDataInTable(data);
})
.catch(error => console.log(error))
}
function loadDataInTable(data)
{

        //load data work start here
        //console.log("tushgadewebnfsd");
        const gridContainerData = document.getElementById('gridContainer-data');
        gridContainerData.innerHTML="";
        var datacollength = para[0].columns.length;
        //console.log(datacollength);
        for (let i = 0; i < data.length; i++)
        {
            //console.log(data);
            const row = document.createElement('div');
            row.classList.add('row','dataRow');
            row.setAttribute("ondblclick", 'insertDatainform(this)');

            // row.style.height='30px';
            for (let j = 0; j < datacollength; j++) {
                //working on sarch icon
                    // if(para[0].columns[j].id=='Button'){
                    //     if(para[0].columns[j].visible==true){
                    //         const col = document.createElement('div');
                    //         col.classList.add('col-2','grid-item');//'col',
                    //         col.innerHTML=`<i class="fa-solid fa-magnifying-glass SalesOrderSearchIcon"></i>`;
                    //         col.style.width= `${para[0].columns[j].width}px`;
                    //         col.style.border = '1px solid'
                    //         col.style.height="30px";
                    //         row.appendChild(col);
                    //     }
                    // }
                //console.log("2nd loop");
                for(let k = 0; k < datacollength; k++){
                    // console.log("para[0].columns[j]:",para[0].columns[j].id,"==","propertyName:",Object.keys(data[i])[k]);
                    if(para[0].columns[j].id == Object.keys(data[i])[k])
                    {
                        // console.log("match model/key name",para[0].columns[j].id,Object.keys(data[i])[k]);

                            const propertyvalue = Object.keys(data[i])[k];
                            //console.log(Object.keys(data[i])[k],propertyvalue);
                            const col = document.createElement('div');
                            if(para[0].columns[j].visible==false){
                              col.style.display='none';
                            }
                            col.innerText = data[i][propertyvalue];
                            col.id = para[0].columns[j].id;
                            // col.setAttribute('value', `${data[i][propertyvalue]}`);
                            col.classList.add('col-2','grid-item','text-wrap');//'col',
                            // col.name = para[0].columns[j].id;
                            col.style.width= `${para[0].columns[j].width}px`;
                            row.appendChild(col);
                            k= datacollength+10;

                    }
                }
            }
            gridContainerData.appendChild(row);
        }
      }




//add double click data to the form
function insertDatainform(row){
  document.getElementById('UserCode').placeholder = "";
    console.log("asw");
    const UserCode = row.children[0].textContent;
    const UserName = row.children[1].textContent;
    const Password = row.children[2].textContent;
    const EmployeeId = row.children[3].textContent;
    const EmployeeDisplayId = row.children[4].textContent;
    const CompanyName = row.children[5].textContent;
    const ModuleName = row.children[6].textContent;
    const Email = row.children[7].textContent;
    const IsAdmin = row.children[8].textContent;
    const IsAudit = row.children[9].textContent;
    const IsActive = row.children[10].textContent;
    console.log("CompanyName",CompanyName);
    document.getElementById('UserCode').value = UserCode;
    document.getElementById('UserName').value = UserName;
    document.getElementById('Password').value = Password;
    document.getElementById('EmployeeDisplayId').name = EmployeeId;
    document.getElementById('EmployeeDisplayId').value = EmployeeDisplayId;    
    // document.getElementById('CompanyName').value = CompanyName;
    // document.getElementById('ModuleName').name = ModuleName;
    document.getElementById('Email').value = Email;
    document.getElementById('IsAdmin').checked = (IsAdmin.toLowerCase() === "true");
    document.getElementById('IsAudit').checked = (IsAudit.toLowerCase() === "true");
    document.getElementById('IsActive').checked = (IsActive.toLowerCase() === "true");



    let module = document.getElementById('ModuleName');
    console.log("module",module);
    for (let i = 0; i < module.options.length; i++) {
        // console.log("module.options.length",module.options.length);
        console.log("module.options[i].value === String(ModuleId)",module.options[i].value,"===", String(ModuleId));
        // console.log("module.options.length",module.options.length);
        if (module.options[i].innerText === String(ModuleName)) {
            // console.log("module.options[i].value === String(ModuleId)",module.options[i].value, String(ModuleId));
            module.options[i].selected = true;
            break; // Optional: If you only have one matching option, you can break the loop
        }
    }
    let Company = document.getElementById('CompanyName');
    // Loop through the options and set the selected property based on parentId
    for (let i = 0; i < Company.options.length; i++) {
        if (Company.options[i].innerText === String(CompanyName)) {
          Company.options[i].selected = true;
          break; // Optional: If you only have one matching option, you can break the loop
        }
    }
}

function deleteModule(){
  let UserCode = document.getElementById('UserCode').value;
  // console.log("moduleId",moduleId);
  fetch(`https://localhost:7241/api/User/DeleteUser/${UserCode}`,{
    method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if(data.message==="User deleted successfully" || data.message==="User not found"){
        alert(data.message);
        NewButton();
        searchModule();
      }else{
        alert("Fillup the form currectlly for Delete.");
      }
    })
    .catch(error => {
      console.log(error);
      alert("Fillup the form currectlly for Delete.");
    })
}
function updateModule(){
  // Get form values
  const userCode = document.getElementById('UserCode').value;
  const userName = document.getElementById('UserName').value;
  const password = document.getElementById('Password').value;
  const email = document.getElementById('Email').value;
  const employeeId = document.getElementById('EmployeeDisplayId').name;
  // const employeeId = document.getElementById('employeeId').getAttribute('name');

  const defaultModuleId = document.getElementById('ModuleName').value;
  const defaultCompanyId = document.getElementById('CompanyName').value;
  const isAdmin = document.getElementById('IsAdmin').checked;
  const isActive = document.getElementById('IsActive').checked;
  const isAudit = document.getElementById('IsAudit').checked;

  // Create the user object
  const user = {
    userCode: userCode,
    userName: userName,
    password: password,
    email: email,
    employeeId: employeeId,
    defaultModuleId: defaultModuleId,
    defaultCompanyId: defaultCompanyId,
    company_Id: 0,
    isAdmin: isAdmin,
    isActive: isActive,
    isAudit: isAudit
  };
  updatemoduleData(user);

}
function updatemoduleData(user) {
  console.log("Form Data:",user);
  // for (let pair of user.entries()) {
  //     console.log(pair[0] + ": " + pair[1]);
  // }
  // let UserCode = document.getElementById('UserCode').value;
  // console.log("moduleId: ",moduleId);
  fetch('https://localhost:7241/api/User/UpdateUser', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if(data.message==="User updated successfully"){
      alert(data.message);
      NewButton();
      searchModule();
    }else{
      alert("Fillup the form currectlly for Update User.");
    }
  })
  .catch(error => {
    console.error(error);
  });
}

function showemployeeModal(){
  const modal = document.getElementById("employeeInfoModal");
  // console.log("modal",modal);
  // const bootstrapModal = bootstrap.Modal.getInstance(modal);
  // console.log("bootstrapModal",bootstrapModal);
  const bootstrapModal = new bootstrap.Modal(modal);
  bootstrapModal.show();
  getEmployeeInfo();
}

function getEmployeeInfo() {


  fetch("https://localhost:7241/api/Employee")
  .then(response => response.json())
  .then(data => {
    const modalBody = document.querySelector("#employeeTableBody");
    // Generate HTML for each module
    // <td><img src="${module.logo}" alt="Logo" width="50"></td>
    const moduleHTML = data.map((employee) => {
      return `
        <tr class="dataRow" ondblclick="insertEmployeeData(this)">
          <td>${employee.EmployeeId}</td>
          <td>${employee.EmployeeCode}</td>
          <td>${employee.EmployeeSalutation}</td>
          <td id="vendorCode">${employee.UserName}</td>
          <td>${employee.EmployeeIsActive }</td>
          <td>${employee.EmployeeDesignationCode }</td>
          <td>${employee.EmployeeDepartmentCode}</td>
        </tr>
      `;
    }).join("");

    // Append the generated HTML to the modal body
    modalBody.innerHTML = moduleHTML;
  })
  .catch(error => console.log(error))

}

function insertEmployeeData(row){

  const modal = document.getElementById("employeeInfoModal");
  console.log("modal",modal);
  const bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();

  const employeeId = row.children[0].textContent;
  const EmployeeCode = row.children[1].textContent;
  console.log("EmployeeCode",EmployeeCode);
  let EmployeeDisplayId = document.getElementById("EmployeeDisplayId");
  EmployeeDisplayId.name = employeeId;
  EmployeeDisplayId.value = EmployeeCode;
}



function NewButton(parametter){
  document.getElementById('UserCode').value="";
  if(parametter=='new'){
    document.getElementById('UserCode').placeholder = "****<<New>>****";
    }
    document.getElementById('UserName').value = "";
    document.getElementById('Password').value = "";
    // document.getElementById('EmployeeId').name = "";
    document.getElementById('EmployeeDisplayId').value = "";    
    document.getElementById('CompanyName').options[0].selected = true;
    document.getElementById('ModuleName').options[0].selected = true;
    document.getElementById('Email').value = "";
    document.getElementById('IsAdmin').checked = false;
    document.getElementById('IsAudit').checked = false;
    document.getElementById('IsActive').checked = false;
}
  


// search work start here
let searchedkey;
const columns = para[0].columns;
for(let x=1; x<columns.length;x++){
  if (columns[x].field === "primary") {
    searchedkey = document.getElementById(columns[x].id);
    break;
  }
}
searchedkey = document.querySelector(".UserCode");
console.log("searchedVendor",searchedkey);
searchedkey.addEventListener('keyup', ()=>{
  Search(searchedkey);
  console.log("searchedVendor in side keyup",searchedkey);

});


function Search(key){
  let InputValue = String(key.value.toLowerCase());

  let dataRow = document.getElementsByClassName("dataRow");
  console.log("searchedVendor in side search",dataRow);
  for(i=0;i<dataRow.length;i++){
      // console.log("dataRow[i].childNodes[1].innerText",InputValue);
      let idnamevalue = String(dataRow[i].childNodes[1].innerText.toLowerCase());
      // let vendorName = dataRow[i].querySelector("#vendorName").innerText.toLowerCase();
      // let vendorName = dataRow[i].querySelector(".vendorName");
      // let vendorCode = dataRow[i].querySelector(".vendorCode");
      // console.log("searchedVendor in side vendorName",vendorName);

      //interface.innerHTML.toLowerCase().indexOf(interfaceInputValue) != -1
      //vendorName.indexOf(InputValue) != -1 &&
      if( idnamevalue.indexOf(InputValue) != -1){
          dataRow[i].style.display = "flex";
      }else{
          dataRow[i].style.display = "none";
      }
  }
  // console.log(dataRow.length);
}
// search work end here



// search work start here
let searchedVendor = document.getElementById("EmployeeName");
// console.log("searchedVendor",searchedVendor);
searchedVendor.addEventListener('keyup', ()=>{
  Searchemployee();
// console.log("searchedVendor in side keyup",searchedVendor);

});


function Searchemployee(){
  let InputValue = searchedVendor.value.toLowerCase();

  let dataRow = document.getElementsByClassName("dataRow");
  // console.log("searchedVendor in side search",dataRow);
  for(i=0;i<dataRow.length;i++){
      // console.log("dataRow[i].childNodes[1].innerText",InputValue);
      let UserName = dataRow[i].querySelector("#UserName").innerText.toLowerCase();
      // let vendorName = dataRow[i].querySelector(".vendorName");
      // let vendorCode = dataRow[i].querySelector(".vendorCode");
      // console.log("searchedVendor in side vendorName",vendorName);

      //interface.innerHTML.toLowerCase().indexOf(interfaceInputValue) != -1
      //vendorName.indexOf(InputValue) != -1 &&
      if( UserName.indexOf(InputValue) != -1){
          dataRow[i].style.display = "table-row";
      }else{
          dataRow[i].style.display = "none";
      }
  }
  // console.log(dataRow.length);
}
// search work end here

