
const clientMaster = [
  {
    id: "clientMasterForm",
    columns: [
      {
          id: "clientId",
          inputType: "number",
          type: "input",
        //   field: "primary",
          label: "Client Code",
          align: "center",
          width: 150,
          sort: "num",
          visible: false,
          filter: "#text_filter",
        },
        {
          id: "clientCode",
          inputType: "text",
          type: "input",
          label: "Client Code",
          field:"primary",
          align: "center",
          width: 150,
          sort: "str",
          visible: true,
          filter: "#text_filter",
        },
        {
          id: "clientName",
          inputType: "text",
          type: "input",
          label: "Client Name",
          align: "center",
          width: 150,
          sort: "str",
          visible: true,
          filter: "#text_filter",
          required: true,
        },
        {
          id: "imagePath",
          inputType: "file",
          type: "input",
          label: "Image Path",
          align: "center",
          width: 150,
          sort: "str",
          visible: true,
          filter: "#text_filter",
        },
                {
          id: "clientTypeCode",
          inputType: "text",
          type: "select",
          label: "Client Type",
          align: "center",
          width: 200,
          sort: "str",
          visible: true,
          filter: "#text_filter",
          apiLink: "https://localhost:7241/api/ClientType",
          apiId:"clientTypeCode",
          apiName:"name",
        },
        {
          id: "isActive",
          inputType: "checkbox",
          type: "input",
          label: "Is Active",
          align: "center",
          width: 100,
          sort: "bool",
          visible: false,
        },
        {
          id: "companyId",
          inputType: "number",
          type: "input",
          label: "Company ID",
          align: "center",
          width: 100,
          sort: "num",
          visible: false,
        },
        {
          id: "clientGroupId",
          inputType: "number",
          type: "select",
          label: "Client Group",
          align: "center",
          width: 100,
          sort: "num",
          visible: true,
          filter: "#text_filter",
          apiLink: "https://localhost:7241/api/ClientGroup",
          apiId:"clientGroupId",
          apiName:"clientGroupName",
        },
    ],
  },
];
createForm(clientMaster, "#clientMaster");

const GeneralInformation = [
{
  id: "clientGeneralInfo",
  columns: [
      {
          id: "clientGeneralInfoId",
          inputType: "number",
          type: "input",
          label: "Client General Info ID",
          align: "center",
          width: 150,
          sort: "num",
          visible: false,
        },
        {
          id: "clientId",
            // type: "ed",
            label: "Office Address",
            align: "left",
            width: 150,
            sort: "str",
            visible: false,
            filter: "#text_filter",
          },
          {
            id: "officeAddress",
            inputType: "text",
            type: "input",
            // field:"primary",
            label: "Office Address",
            align: "center",
            width: 150,
            sort: "str",
            visible: true,
            filter: "#text_filter",
          },
        {
          id: "countryCode",
          inputType: "text",
          type: "select",
          label: "Country",
          align: "center",
          width: 150,
          sort: "str",
          visible: true,
          filter: "#text_filter",
          apiLink: "https://localhost:7241/api/Country",
          apiId:"countryCode",
          apiName:"name",
        },
        {
          id: "divisionCode",
          inputType: "text",
          type: "select",
          label: "Division",
          align: "center",
          width: 150,
          sort: "str",
          visible: true,
          filter: "#text_filter",
          apiLink: "https://localhost:7241/api/Division",
          apiId:"divisionCode",
          apiName:"name",
        },
        {
          id: "phoneNumber",
          inputType: "text",
          type: "input",
          label: "Phone Number",
          align: "center",
          width: 150,
          sort: "str",
          visible: true,
          filter: "#text_filter",
        },
        {
          id: "faxNumber",
          inputType: "text",
          type: "input",
          label: "Fax Number",
          align: "center",
          width: 150,
          sort: "str",
          visible: true,
          filter: "#text_filter",
        },
        {
          id: "webAddress",
          inputType: "text",
          type: "input",
          label: "Web Address",
          align: "center",
          width: 150,
          sort: "str",
          visible: true,
          filter: "#text_filter",
        },
        {
          id: "salutationId",
          inputType: "text",
          type: "input",
          label: "Salutation Id",
          align: "center",
          width: 150,
          sort: "num",
          visible: false,
        },
        {
          id: "ownerName",
          inputType: "text",
          type: "input",
          label: "Owner Name",
          align: "center",
          width: 150,
          sort: "str",
          visible: false,
          filter: "#text_filter",
        },
      {
        id: "memorandumArticleOfAssociationAttachment",
        inputType: "text",
        type: "input",
        label: "Memorandum Article Of Association",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      }, 
            {
        id: "memorandumFile",
        inputType: "file",
        type: "input",
        label: "Memorandum File",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
      {
        id: "certificateOfInCorporationAttachment",
        inputType: "text",
        type: "input",
        label: "Certificate Of In Corporation",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
      {
        id: "certificateOfInCorporationFile",
        inputType: "file",
        type: "input",
        label: "Certificate Of InCorporation File",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
      {
        id: "tradeLicense",
        inputType: "text",
        type: "input",
        label: "Trade License",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
          {
        id: "tradeLicenseFile",
        inputType: "file",
        type: "input",
        label: "TradeLicense File",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
      {
        id: "tinCertificate",
        inputType: "text",
        type: "input",
        label: "TIN Certificate",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
            {
        id: "tinCertificateFile",
        inputType: "file",
        type: "input",
        label: "TIN Certificate File",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
      {
        id: "vatRegistrationCertificate",
        inputType: "text",
        type: "input",
        label: "Vat Registration Certificate",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
     {
        id: "vatRegistrationCertificateFile",
        inputType: "file",
        type: "input",
        label: "Vat Registration Certificate File",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
      {
        id: "bankSolvencyCertificate",
        inputType: "text",
        type: "input",
        label: "Bank Solvency Certificate",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
      {
        id: "bankSolvencyCertificateFile",
        inputType: "file",
        type: "input",
        label: "Bank Solvency Certificate File",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
    {
      id: "lastAnnualAuditedReport",
      inputType: "text",
      type: "input",
      label: "Last Annual Audited Report",
      align: "left",
      width: 115,
      sort: "str",
      visible: true,
    },
          {
        id: "lastAnnualAuditedReportFile",
        inputType: "file",
        type: "input",
        label: "Last Annual Audited Report File",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
  ],
},
];
createForm(GeneralInformation, "#GeneralInformation");

const ContactPerson = [
{
id: "client",
columns: [
  {
      id: "contactPersonId",
    inputType: "number",
    type: "input",
    label: "Contact Person ID",
    align: "center",
    width: 150,
    sort: "num",
    visible: false,
  },
  {
    id: "contactPersonName",
    inputType: "text",
    type: "input",
    label: "Contact Person Name",
    align: "center",
    width: 150,
    sort: "str",
    visible: true,
    filter: "#text_filter",
  },
  {
    id: "designation",
    inputType: "text",
    type: "input",
    label: "Designation",
    align: "center",
    width: 150,
    sort: "str",
    visible: true,
    filter: "#text_filter",
  },
  {
    id: "email",
    inputType: "text",
    type: "input",
    label: "Email",
    align: "left",
    width: 200,
    sort: "str",
    visible: true,
  },
  {
    id: "mobileNumber",
    inputType: "text",
    type: "input",
    label: "Mobile Number",
    align: "center",
    width: 150,
    sort: "str",
    visible: true,
    filter: "#text_filter",
  },
   {
    id: "countryCode",
    inputType: "text",
    type: "select",
    label: "Country",
    align: "center",
    width: 150,
    sort: "str",
    visible: true,
    filter: "#text_filter",
    apiLink: "https://localhost:7241/api/Country",
    apiId:"countryCode",
    apiName:"name",
  },
  {
    id: "divisionCode",
    inputType: "text",
    type: "select",
    label: "Division",
    align: "center",
    width: 150,
    sort: "str",
    visible: true,
    filter: "#text_filter",
    apiLink: "https://localhost:7241/api/Division",
    apiId:"divisionCode",
    apiName:"name",
  },
],
},
];
loadTableHeader(ContactPerson, "#ContactPerson");

const ProjectAllowedtoWork = [
{
id: "client",
columns: [
  {
      id: "clientProjectAllowedToWorkId",
    inputType: "number",
    type: "input",
    label: "Allowed Work ID",
    align: "center",
    width: 150,
    sort: "num",
    visible: false,
  },

  {
    id: "projectMasterCode",
    inputType: "text",
    type: "input",
    label: "Project Master Code",
    align: "center",
    width: 150,
    sort: "str",
    visible: true,
    filter: "#text_filter",
  },

  {
    id: "projectAddress",
    inputType: "text",
    type: "input",
    label: "Project Address",
    align: "center",
    width: 150,
    sort: "str",
    visible: true,
    filter: "#text_filter",
  },

  {
    id: "isApproved",
    inputType: "checkbox",
    type: "input",
    label: "Is Approved",
    align: "center",
    width: 100,
    sort: "bool",
    visible: true,
  },
],
},
];
loadTableHeader(ProjectAllowedtoWork, "#ProjectAllowedtoWork");

const PaymentTerms = [
{
  id: "client",
  columns: [
      {
          id: "clientPaymentTermsId",
          inputType: "number",
          type: "input",
          label: "Payment Terms ID",
          align: "center",
          width: 150,
          sort: "num",
          visible: false,
        },
  
        {
          id: "projectId",
          inputType: "number",
          type: "input",
          label: "Project ID",
          align: "center",
          width: 150,
          sort: "num",
          visible: true,
        },
  
        {
          id: "creditlimit",
          inputType: "number",
          type: "input",
          label: "Credit Limit",
          align: "center",
          width: 150,
          sort: "num",
          visible: true,
        },
  
        {
          id: "timeSpan",
          inputType: "number",
          type: "input",
          label: "Time Span",
          align: "center",
          width: 150,
          sort: "num",
          visible: true,
        },
  
        {
          id: "securityMoney",
          inputType: "number",
          type: "input",
          label: "Security Money",
          align: "center",
          width: 150,
          sort: "num",
          visible: true,
        },
  
        {
          id: "isProjectWise",
          inputType: "checkbox",
          type: "input",
          label: "Is ProjectWise",
          align: "center",
          width: 125,
          sort: "str",
          visible: true,
        }
  ],
},
];
loadTableHeader(PaymentTerms, "#PaymentTerms");

//Nav&SideNav load
document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("Nav&SideNav");


  fetch("/Nav&SideNav/nav&SideNav.html")
    .then((response) => response.text())
    .then((data) => {

      navbarContainer.innerHTML = data;
      console.log("html fetch");
      loadmodules();
      loadReports();
    })
    .catch((error) => {
      console.error("Error loading the navbar:", error);
    });
});


// Get all toggle buttons
var toggleButtons = document.querySelectorAll('.toggle-btn');

// Add click event to each toggle button
toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
    // Get the target panel's ID from the data attribute
    var target = this.getAttribute('data-target');
    
    // Get all collapse panels
    var panels = document.querySelectorAll('.collapse');
    
    // Hide all panels
    panels.forEach(function(panel) {
        panel.classList.remove('show');
    });
    
    // Show the selected panel
    document.querySelector(target).classList.add('show');
    });
});

function loadSelectOption(para){
  for(let i = 0; i< para[0].columns.length;i++){
    // let j = 0;
    if(para[0].columns[i].type === "select"){
      console.log("para[0].columns[i].apiLink", para[0].columns[i].apiLink);
      fetch(`${para[0].columns[i].apiLink}`)
      .then(Response => Response.json())
      .then(data => {
        console.log("load the module name ", data);
        var selectOption = document.getElementById(`${para[0].columns[i].id}`);
        // console.log("moduleIdDropdown", moduleIdDropdown);
          data.forEach(function (opt) {
              var option = document.createElement("option");
              let apiid = para[0].columns[i].apiId;
              let apiname = para[0].columns[i].apiName;
              option.value = opt[apiid];
              option.innerText = opt[apiname];
              selectOption.appendChild(option);
          });
      })
    }
  }
}


function createForm( para, div) {
  const formContainer = document.querySelector(div);
  const columns = para[0].columns;

  // Divide the columns into three groups based on visibility
  const visibleColumns = columns.filter((column) => column.visible === true);
  const numVisibleColumns = visibleColumns.length;
  const numColsPerPart = Math.ceil(numVisibleColumns / 3);
  const MainRow = document.createElement("form");//enctype="multipart/form-data"
  MainRow.setAttribute('enctype','multipart/form-data');
  MainRow.id = para[0].id;
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
      label.setAttribute('class','text-wrap');
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
        option1.textContent = "-- Nothing Select --";
        // option1.textContent = "-- Nothing Select --";
        option1.value = 0;
        select.appendChild(option1);

        select.appendChild(option1);

        inputColumn.appendChild(select);
      }
      else if(column.type=="input")
      {
        const input = document.createElement("input");
        if(column.inputType == "number")
        {
          input.type = column.inputType;
        }
        else if(column.inputType == "text")
        {
          input.type = column.inputType;
        }
        else if(column.inputType == "checkbox")
        {
          input.classList.add('form-check-input');
          input.type = column.inputType;
        }
        else if(column.inputType == "file")
        {

          input.type = column.inputType;
        }

        input.id = column.id;
        input.name = column.id;
        input.placeholder = column.label;
        input.classList.add("form-control", "p-0");
        inputColumn.appendChild(input);

      }
      else if(column.type=="textarea")
      {
        const input = document.createElement("textarea");
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
        searchIcon.style.padding = "5px 4px 0px";
        searchIcon.id = "getDetails";
        searchIcon.setAttribute("data-bs-toggle", "modal");
        searchIcon.setAttribute("data-bs-target", "#ShowclientList");        
        inputColumn.appendChild(searchIcon);
      }



      inputRow.appendChild(inputColumn);
      formPart.appendChild(inputRow);
    }

    MainRow.appendChild(formPart);
  }
  formContainer.appendChild(MainRow);

  loadSelectOption(para);
}

function loadTableHeader(para,div){

  var colLength = para[0].columns.length;


  const gridContainer = document.querySelector(`${div}`);

  if(gridContainer.innerHTML != ""){
      gridContainer.innerHTML = "";
  }
  var totalWidth = 0;
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
      // if (i%2 == 0) {
      //   col.style.backgroundColor='gray';
      // }else{
      //   col.style.backgroundColor='white';
      // }
      headerRow.appendChild(col);
      totalWidth = totalWidth + para[0].columns[i].width;
  }
  gridContainer.appendChild(headerRow);
}






//add row start from here for panel 2
var AddRow2 = document.getElementById("AddRow2");

const gridContainerAddRow2 = document.getElementById("gridContainer-data2");
AddRow2.addEventListener("click", function () {
  var datacollength = ProductsServices[0].columns.length;
  const AddheaderRow = document.createElement("div");
  AddheaderRow.classList.add("row", "AddInputRow2");
  AddheaderRow.style.height = "30px";
  for (let i = 0; i < datacollength; i++) {
    if (ProductsServices[0].columns[i].visible != false) {
      if (ProductsServices[0].columns[i].id == "Button") {
        const col = document.createElement("div");
        col.classList.add("col", "grid-item"); //'col',
        col.innerHTML = `<i class="fa-solid fa-magnifying-glass SalesOrderSearchIcon"></i>`;
        col.style.width = `${ProductsServices[0].columns[i].width}px`;
        col.style.border = "1px solid  rgb(175, 200, 221)";
        col.style.height = "30px";
        AddheaderRow.appendChild(col);
      } else {
        const col = document.createElement("input");
        col.classList.add("col-2", "grid-item"); //'col',
        col.setAttribute("type", "text");
        col.name = ProductsServices[0].columns[i].id;
        col.style.border = "1px solid  rgb(175, 200, 221)";
        col.style.width = `${ProductsServices[0].columns[i].width}px`;
        col.style.height = "30px";
        AddheaderRow.appendChild(col);
      }
    }
    gridContainerAddRow2.appendChild(AddheaderRow);
  }
  selectedRow2();
});

function selectedRow2() {
  //selected the row
  var rows = document.querySelectorAll(".AddInputRow2");

  console.log("rows", rows.length);
  for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function () {
      // Remove the selected class from all rows
      for (var j = 0; j < rows.length; j++) {
        rows[j].classList.remove("selected");
        rows[j].style.outline = "None";
      }
      // Add the selected class to the clicked row
      this.classList.add("selected");
      this.style.outline = "1px solid blue";
    });
  }
}

//delete row
var gridContainerInputRow2 = document.getElementById("gridContainer-data2");
var DeleteRow2 = document.getElementById("DeleteRow2");

// Add click event listener to the delete button
DeleteRow2.addEventListener("click", function () {
  var selectedRow = gridContainerInputRow2.querySelector(".selected");

  if (selectedRow) {
    selectedRow.parentNode.removeChild(selectedRow);
  }
});



//add row start from here for panel 3
var AddRow3 = document.getElementById("AddRow3");

const gridContainerAddRow3 = document.getElementById("gridContainer-data3");
AddRow3.addEventListener("click", function () {
  var datacollength = ContactPerson[0].columns.length;
  const AddheaderRow = document.createElement("div");
  AddheaderRow.classList.add("row", "AddInputRow3");
  AddheaderRow.style.height = "30px";
  for (let i = 0; i < datacollength; i++) {

    if (ContactPerson[0].columns[i].visible != false) {
      if (ContactPerson[0].columns[i].id == "Button") {
        const col = document.createElement("div");
 
        col.classList.add("col", "grid-item"); //'col',
        col.innerHTML = `<i class="fa-solid fa-magnifying-glass SalesOrderSearchIcon"></i>`;
        col.style.width = `${ContactPerson[0].columns[i].width}px`;
        col.style.border = "1px solid  rgb(175, 200, 221)";
        col.style.height = "30px";
        AddheaderRow.appendChild(col);
      } else {
        const col = document.createElement("input");

        col.classList.add("col-2", "grid-item"); //'col',
        col.setAttribute("type", "text");
        col.name = ContactPerson[0].columns[i].id;
        col.style.border = "1px solid  rgb(175, 200, 221)";
        col.style.width = `${ContactPerson[0].columns[i].width}px`;
        col.style.height = "30px";
        AddheaderRow.appendChild(col);
      }
    }
    gridContainerAddRow3.appendChild(AddheaderRow);
  }
  selectedRow3();
});

function selectedRow3() {
  //selected the row
  var rows = document.querySelectorAll(".AddInputRow3");

  console.log("rows", rows.length);
  for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function () {
      // Remove the selected class from all rows
      for (var j = 0; j < rows.length; j++) {
        rows[j].classList.remove("selected");

        rows[j].style.outline = "None";
      }
      // Add the selected class to the clicked row
      this.classList.add("selected");
      this.style.outline = "1px solid blue";

    });
  }
}

//delete row
var gridContainerInputRow3 = document.getElementById("gridContainer-data3");
var DeleteRow3 = document.getElementById("DeleteRow3");

// Add click event listener to the delete button
DeleteRow3.addEventListener("click", function () {
  var selectedRow = gridContainerInputRow3.querySelector(".selected");

  if (selectedRow) {
    selectedRow.parentNode.removeChild(selectedRow);
  }
});



//add row start from here for panel 4
var AddRow4 = document.getElementById("AddRow4");

const gridContainerAddRow4 = document.getElementById("gridContainer-data4");
AddRow4.addEventListener("click", function () {
  var datacollength = FactoryDetails[0].columns.length;
  const AddheaderRow = document.createElement("div");
  AddheaderRow.classList.add("row", "AddInputRow4");
  AddheaderRow.style.height = "30px";
  for (let i = 0; i < datacollength; i++) {

    if (FactoryDetails[0].columns[i].visible != false) {
      if (FactoryDetails[0].columns[i].id == "Button") {
        const col = document.createElement("div");

        col.classList.add("col", "grid-item"); //'col',
        col.innerHTML = `<i class="fa-solid fa-magnifying-glass SalesOrderSearchIcon"></i>`;
        col.style.width = `${FactoryDetails[0].columns[i].width}px`;
        col.style.border = "1px solid  rgb(175, 200, 221)";
        col.style.height = "30px";
        AddheaderRow.appendChild(col);
      } else {
        const col = document.createElement("input");

        col.classList.add("col-2", "grid-item"); //'col',
        if(FactoryDetails[0].columns[i].inputType == "text"){
          col.setAttribute("type", "text");
        }else if(FactoryDetails[0].columns[i].inputType == "checkbox"){
          col.setAttribute("type", "checkbox");
        }else if(FactoryDetails[0].columns[i].inputType == "number"){
          col.setAttribute("type", "number");
        }

        col.name = FactoryDetails[0].columns[i].id;
        col.style.border = "1px solid  rgb(175, 200, 221)";
        col.style.width = `${FactoryDetails[0].columns[i].width}px`;
        col.style.height = "30px";
        AddheaderRow.appendChild(col);
      }
    }
    gridContainerAddRow4.appendChild(AddheaderRow);
  }
  selectedRow4();
});

function selectedRow4() {
  //selected the row
  var rows = document.querySelectorAll(".AddInputRow4");

  console.log("rows", rows.length);
  for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function () {
      // Remove the selected class from all rows
      for (var j = 0; j < rows.length; j++) {
        rows[j].classList.remove("selected");

        rows[j].style.outline = "None";
      }
      // Add the selected class to the clicked row
      this.classList.add("selected");
      this.style.outline = "1px solid blue";

    });
  }
}

//delete row
var gridContainerInputRow4 = document.getElementById("gridContainer-data4");
var DeleteRow4 = document.getElementById("DeleteRow4");

// Add click event listener to the delete button
DeleteRow4.addEventListener("click", function () {
  var selectedRow = gridContainerInputRow4.querySelector(".selected");

  if (selectedRow) {
    selectedRow.parentNode.removeChild(selectedRow);
  }
});




//add row start from here for panel 5
var AddRow5 = document.getElementById("AddRow5");

const gridContainerAddRow5 = document.getElementById("gridContainer-data5");
AddRow5.addEventListener("click", function () {
  var datacollength = ProjectAllowedtoWork[0].columns.length;
  const AddheaderRow = document.createElement("div");
  AddheaderRow.classList.add("row", "AddInputRow5");
  AddheaderRow.style.height = "30px";
  for (let i = 0; i < datacollength; i++) {

    if (ProjectAllowedtoWork[0].columns[i].visible != false) {
      if (ProjectAllowedtoWork[0].columns[i].id == "Button") {
        const col = document.createElement("div");

        col.classList.add("col", "grid-item"); //'col',
        col.innerHTML = `<i class="fa-solid fa-magnifying-glass SalesOrderSearchIcon"></i>`;
        col.style.width = `${ProjectAllowedtoWork[0].columns[i].width}px`;
        col.style.border = "1px solid  rgb(175, 200, 221)";
        col.style.height = "30px";
        AddheaderRow.appendChild(col);
      } else {
        const col = document.createElement("input");

        col.classList.add("col-2", "grid-item"); //'col',
        if(ProjectAllowedtoWork[0].columns[i].inputType == "text"){
          col.setAttribute("type", "text");
        }else if(ProjectAllowedtoWork[0].columns[i].inputType == "checkbox"){
          col.setAttribute("type", "checkbox");
        }else if(ProjectAllowedtoWork[0].columns[i].inputType == "number"){
          col.setAttribute("type", "number");
        }
        col.name = ProjectAllowedtoWork[0].columns[i].id;
        col.style.border = "1px solid  rgb(175, 200, 221)";
        col.style.width = `${ProjectAllowedtoWork[0].columns[i].width}px`;
        col.style.height = "30px";
        AddheaderRow.appendChild(col);
      }
    }
    gridContainerAddRow5.appendChild(AddheaderRow);
  }
  selectedRow5();
});

function selectedRow5() {
  //selected the row
  var rows = document.querySelectorAll(".AddInputRow5");

  console.log("rows", rows.length);
  for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function () {
      // Remove the selected class from all rows
      for (var j = 0; j < rows.length; j++) {
        rows[j].classList.remove("selected");

        rows[j].style.outline = "None";
      }
      // Add the selected class to the clicked row
      this.classList.add("selected");
      this.style.outline = "1px solid blue";

    });
  }
}

//delete row
var gridContainerInputRow5 = document.getElementById("gridContainer-data5");
var DeleteRow5 = document.getElementById("DeleteRow5");

// Add click event listener to the delete button
DeleteRow5.addEventListener("click", function () {
  var selectedRow = gridContainerInputRow5.querySelector(".selected");

  if (selectedRow) {
    selectedRow.parentNode.removeChild(selectedRow);
  }
});






//add row start from here for panel 6
var AddRow6 = document.getElementById("AddRow6");
// var gridContainerAddRow=document.getElementById("gridContainer-inputRow");
const gridContainerAddRow6 = document.getElementById("gridContainer-data6");
AddRow6.addEventListener("click", function () {
  var datacollength = PaymentTerms[0].columns.length;
  const AddheaderRow = document.createElement("div");
  AddheaderRow.classList.add("row", "AddInputRow6");
  AddheaderRow.style.height = "30px";
  for (let i = 0; i < datacollength; i++) {

    if (PaymentTerms[0].columns[i].visible != false) {
      if (PaymentTerms[0].columns[i].id == "Button") {
        const col = document.createElement("div");

        col.classList.add("col", "grid-item"); //'col',
        col.innerHTML = `<i class="fa-solid fa-magnifying-glass SalesOrderSearchIcon"></i>`;
        col.style.width = `${PaymentTerms[0].columns[i].width}px`;
        col.style.border = "1px solid  rgb(175, 200, 221)";
        col.style.height = "30px";
        AddheaderRow.appendChild(col);
      } else {
        const col = document.createElement("input");

        col.classList.add("col-2", "grid-item"); //'col',
        if(PaymentTerms[0].columns[i].inputType == "text"){
          col.setAttribute("type", "text");
        }else if(PaymentTerms[0].columns[i].inputType == "checkbox"){
          col.setAttribute("type", "checkbox");
        }else if(PaymentTerms[0].columns[i].inputType == "number"){
          col.setAttribute("type", "number");
        }
        col.name = PaymentTerms[0].columns[i].id;
        col.style.border = "1px solid  rgb(175, 200, 221)";
        col.style.width = `${PaymentTerms[0].columns[i].width}px`;
        col.style.height = "30px";
        AddheaderRow.appendChild(col);
      }
    }
    gridContainerAddRow6.appendChild(AddheaderRow);
  }
  selectedRow6();
});

function selectedRow6() {
  //selected the row
  var rows = document.querySelectorAll(".AddInputRow6");

  console.log("rows", rows.length);
  for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function () {
      // Remove the selected class from all rows
      for (var j = 0; j < rows.length; j++) {
        rows[j].classList.remove("selected");

        rows[j].style.outline = "None";
      }
      // Add the selected class to the clicked row
      this.classList.add("selected");
      this.style.outline = "1px solid blue";

    });
  }
}

//delete row
var gridContainerInputRow6 = document.getElementById("gridContainer-data6");
var DeleteRow6 = document.getElementById("DeleteRow6");

// Add click event listener to the delete button
DeleteRow6.addEventListener("click", function () {
  var selectedRow = gridContainerInputRow6.querySelector(".selected");

  if (selectedRow) {
    selectedRow.parentNode.removeChild(selectedRow);
  }
});

function NewButton(parameter) {

  document.getElementById(`${clientMaster[0].id}`).reset();

  document.getElementById(`${GeneralInformation[0].id}`).reset();


  
  const columns = clientMaster[0].columns;

  columns.forEach(column => {
    const element = document.getElementById(column.id);

    if (element) {

      if (parameter === "new" && column.field === "primary") {
        element.placeholder = "****<<New>>****";
        element.name = column.id;
      }
    }
  });

  document.getElementById("gridContainer-data2").innerHTML = "";
  document.getElementById("gridContainer-data3").innerHTML = "";
  document.getElementById("gridContainer-data4").innerHTML = "";
  document.getElementById("gridContainer-data5").innerHTML = "";
  document.getElementById("gridContainer-data6").innerHTML = "";
  
}





function saveTheData(){

  const clientMasterForm = document.getElementById("clientMasterForm");
  const ClientMaster = new FormData(clientMasterForm);
  
    let file;
  // Update checkbox values to true in the object
  for (let pair of ClientMaster.entries()) {
    const key = pair[0];
    const element = clientMasterForm.elements[key];
    if (element.type === "checkbox") {
      ClientMaster[key] = element.checked; // Update the object property value to true
    } else if (element.type === "file") {
      file = element.files[0];
      ClientMaster[key] = element.files[0]; // Save the selected file
    } else {
      ClientMaster[key] = pair[1]; // For other input types, use the FormData value as-is
    }
  }
  // Get form values
  
  const clientGeneralInfo = document.getElementById("clientGeneralInfo");
  const GeneralInformation = new FormData(clientGeneralInfo);
    //const ProductsServices = panel2Data();
    const ContactPerson = panel3Data();
    //const FactoryDetails = panel4Data();
    const ProjectAllowedtoWork = panel5Data();
    const PaymentTerms = panel6Data();
    const obj = {
  
      clientContactPerson: ContactPerson,
      clientPaymentTerms: PaymentTerms,
      clientProjectAllowedToWork: ProjectAllowedtoWork
    }
    const formData = new FormData();
    //Update checkbox values to true in the object
    for (let pair of ClientMaster.entries()) {
      const key = pair[0];
      const element = clientMasterForm.elements[key];
      formData.append(key, pair[1]); // For other input types, use the FormData value as-is
    }

    let infoname = "clientGeneralInfo.";
    for (let pair of GeneralInformation.entries()) {
      const key = pair[0];
      const element = clientMasterForm.elements[key];
      formData.append(`${infoname}${key}`, pair[1]); // For other input types, use the FormData value as-is
    }
  
    formData.append("data", JSON.stringify(obj));


    for (let pair of formData.entries()) {
    console.log("formdata",pair[0],pair[1]);
    }
  
      const columns = clientMaster[0].columns;
    let primaryfield;
    for (let i = 0; i < columns.length; i++) {
      if (columns[i].field == 'primary') {
        // console.log("element",element);
        primaryfield = document.getElementById(columns[i].id).placeholder;
        break; // Exit the loop when the condition is met
      }
    }
  // let menuId = document.getElementById('MenuName').name;
  console.log("primaryfield",primaryfield);
  if(primaryfield=="****<<New>>****"){
    //Client CREATE
    // Make the Fetch API request
    fetch("https://localhost:7241/api/ClientMain", {
      method: "POST",
      headers: {
        Accept: "*/*",
      },
      body: formData,
    })
    .then((response) => response.json())
    .then((data)=> {
      console.log("response", data);
      alert( data.message);
      NewButton();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    }
    else
    {
        fetch(`https://localhost:7241/api/ClientMain/${primaryfield}`, {
          method: "PUT",
          headers: {
            Accept: "*/*",
          },
          body: formData,
        })
        .then((response) => response.json())
        .then((data)=> {
          console.log("response", data);
          alert( data.message);
          NewButton();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }


function panel2Data(){
const gridData = document.getElementById("gridContainer-data2");
const rows = gridData.getElementsByClassName("row");

const clientsProductsServices = [];

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const columns = row.getElementsByClassName("grid-item");
  const rowData = {};
  for (let j = 0; j < columns.length; j++) {
    const column = columns[j];
    const columnName = column.getAttribute("name");
    if (column.tagName === "INPUT") {
      const columnText = column.value.trim();
      rowData[columnName] = columnText;
    } else if (
      column.tagName === "DIV" &&
      column.children[0].tagName === "SELECT"
    ) {
      const selectElement = column.children[0];
      const selectElementName = selectElement.name;
      const selectedIndex = selectElement.selectedIndex;
      const selectedOption = selectElement.options[selectedIndex];
      const selectedName = selectedOption.textContent;
      rowData[selectElementName] = selectedName; // Use the selected option name as the key
    }
  }
  clientsProductsServices.push(rowData);
}
return clientsProductsServices;

}
function panel3Data(){
const gridData = document.getElementById("gridContainer-data3");
const rows = gridData.getElementsByClassName("row");

const clientsProductsServices = [];

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const columns = row.getElementsByClassName("grid-item");
  const rowData = {};
  for (let j = 0; j < columns.length; j++) {
    const column = columns[j];
    const columnName = column.getAttribute("name");
    if (column.tagName === "INPUT") {
      const columnText = column.value.trim();
      rowData[columnName] = columnText;
    } else if (
      column.tagName === "DIV" &&
      column.children[0].tagName === "SELECT"
    ) {
      const selectElement = column.children[0];
      const selectElementName = selectElement.name;
      const selectedIndex = selectElement.selectedIndex;
      const selectedOption = selectElement.options[selectedIndex];
      const selectedName = selectedOption.textContent;
      rowData[selectElementName] = selectedName; // Use the selected option name as the key
    }
  }
  clientsProductsServices.push(rowData);
}
return clientsProductsServices;

}
function panel4Data(){
const gridData = document.getElementById("gridContainer-data4");
const rows = gridData.getElementsByClassName("row");

const clientsProductsServices = [];

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const columns = row.getElementsByClassName("grid-item");
  const rowData = {};
  for (let j = 0; j < columns.length; j++) {
    const column = columns[j];
    const columnName = column.getAttribute("name");
    if (column.tagName === "INPUT") {
      const columnText = column.type === "checkbox" ? column.checked : column.value.trim();
      rowData[columnName] = columnText;
    }else if (
      column.tagName === "DIV" &&
      column.children[0].tagName === "SELECT"
    ) {
      const selectElement = column.children[0];
      const selectElementName = selectElement.name;
      const selectedIndex = selectElement.selectedIndex;
      const selectedOption = selectElement.options[selectedIndex];
      const selectedName = selectedOption.textContent;
      rowData[selectElementName] = selectedName; // Use the selected option name as the key
    }
  }
  clientsProductsServices.push(rowData);
}
return clientsProductsServices;

}
function panel5Data(){
const gridData = document.getElementById("gridContainer-data5");
const rows = gridData.getElementsByClassName("row");

const clientsProductsServices = [];

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const columns = row.getElementsByClassName("grid-item");
  const rowData = {};
  for (let j = 0; j < columns.length; j++) {
    const column = columns[j];
    const columnName = column.getAttribute("name");
    if (column.tagName === "INPUT") {
      const columnText = column.type === "checkbox" ? column.checked : column.value.trim();
      rowData[columnName] = columnText;
    }else if (
      column.tagName === "DIV" &&
      column.children[0].tagName === "SELECT"
    ) {
      const selectElement = column.children[0];
      const selectElementName = selectElement.name;
      const selectedIndex = selectElement.selectedIndex;
      const selectedOption = selectElement.options[selectedIndex];
      const selectedName = selectedOption.textContent;
      rowData[selectElementName] = selectedName; // Use the selected option name as the key
    }
  }
  clientsProductsServices.push(rowData);
}
return clientsProductsServices;

}
function panel6Data(){
  const gridData = document.getElementById("gridContainer-data6");
  const rows = gridData.getElementsByClassName("row");

  const clientsProductsServices = [];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const columns = row.getElementsByClassName("grid-item");
    const rowData = {};
    for (let j = 0; j < columns.length; j++) {
      const column = columns[j];
      const columnName = column.getAttribute("name");
      if (column.tagName === "INPUT") {
        const columnText = column.type === "checkbox" ? column.checked : column.value.trim();
        rowData[columnName] = columnText;
      }
    }
  clientsProductsServices.push(rowData);
}
return clientsProductsServices;

}

function deleteclient(){
  const columns = clientMaster[0].columns;
  let primaryfield;

  for (let i = 0; i < columns.length; i++) {
    if (columns[i].field == 'primary') {

      primaryfield = document.getElementById(columns[i].id).placeholder;
      break; // Exit the loop when the condition is met
    }
  }
  
    // let menuId = document.getElementById('MenuName').name;
    console.log("primaryfield",primaryfield);


if (primaryfield !== "client Code") {
  fetch(`https://localhost:7241/api/ClientMain/delete/${primaryfield}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    NewButton("new");
    // ShowclientList();
  })
  .catch(error => {
    console.error("Error:", error);
    NewButton("new");
  });
} else {
  alert("Select client For Delete !");
}
}



ShowclientList();
function ShowclientList(){

console.log("ShowclientList");
fetch("https://localhost:7241/api/ClientMain")
.then(response => response.json())
.then(data => {
  console.log("ShowclientList Inside Data");
  const modalBody = document.querySelector("#clientTableBody");
  // Generate HTML for each module
  // <td><img src="${module.logo}" alt="Logo" width="50"></td>
  const moduleHTML = data.map((employee) => {
    return `
      <tr ondblclick="InsertclientDataInTable(this)">
      <td>${employee.clientId}</td>
      <td>${employee.clientCode}</td>
      <td>${employee.clientName}</td>
      </tr>
    `;
  }).join("");

  // Append the generated HTML to the modal body
  modalBody.innerHTML = moduleHTML;
})
.catch(error => console.log(error))
}

function InsertclientDataInTable(){


fetch("https://localhost:7241/api/ClientMain")
.then(response => response.json())
.then(data => {
  console.log("ShowclientList Inside Data");
  const modalBody = document.querySelector("#clientTableBody");
  // Generate HTML for each module
  // <td><img src="${module.logo}" alt="Logo" width="50"></td>
  const moduleHTML = data.map((employee) => {
    return `
      <tr ondblclick="InsertclientDataInTable(this)">
        <td>${employee.clientId}</td>
        <td>${employee.clientCode}</td>
        <td>${employee.clientName}</td>
      </tr>
    `;
  }).join("");

  // Append the generated HTML to the modal body
  modalBody.innerHTML = moduleHTML;
})
.catch(error => console.log(error))

}





function InsertclientDataInTable(row){

  const modal = document.querySelector("#ShowclientList");
  const bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
  let clientid = row.children[0].innerText;
  console.log("clientid",clientid);

  fetch(`https://localhost:7241/api/ClientMain/${clientid}`)
  .then(response => response.json())
  .then(data => {
    console.log("ShowclientList Inside Data",data);
    const GeneralInformationobject = data.clientGeneralInfo || [];
    // const clientsProductsServicesArray = data.clientProductService || [];
    const clientContactPersonArray = data.clientContactPerson || [];
    // const clientFactoryDetailsArray = data.clientFactoryDetails || [];
    const clientProjectAllowedtoWorkArray = data.clientProjectAllowedToWork || [];
    const clientPaymentTermsArray = data.clientPaymentTerms || [];

    // Extract the properties you want to include in the new object
    const propertiesToExtract = [
      "clientId",
      "clientCode",
      "clientName",
      "clientTypeCode",
      "isActive",
      "imagePath",
      "addedBy",
      "dateAdded",
      "addedPC",
      "updatedBy",
      "dateUpdated",
      "updatedPC",
      "clientGroupId",
      "companyId",
    ];

    // Create a new object with the extracted properties
    const extractedDataObject = {};
    propertiesToExtract.forEach(property => {
      extractedDataObject[property] = data[property];
    });

    // Create an array containing the extracted object
    const extractedDataArray = [extractedDataObject];
    const GeneralInformationobjectArray = [GeneralInformationobject];

    // console.log(extractedDataArray);

    insertDatainform(clientMaster, extractedDataArray);
    insertDatainform(GeneralInformation, GeneralInformationobjectArray);
    // InsertclientDetailsDataInTable(ProductsServices, clientsProductsServicesArray,"gridContainer-data2");
    InsertclientDetailsDataInTable(ContactPerson, clientContactPersonArray, "gridContainer-data3");
    // InsertclientDetailsDataInTable(FactoryDetails, clientFactoryDetailsArray, "gridContainer-data4");
    InsertclientDetailsDataInTable(ProjectAllowedtoWork, clientProjectAllowedtoWorkArray ,"gridContainer-data5");
    InsertclientDetailsDataInTable(PaymentTerms, clientPaymentTermsArray, "gridContainer-data6");
  })
  .catch(error => console.log(error))
  
}

function InsertclientDetailsDataInTable(para, data, grid){
    // console.log("tushgadewebnfsd",grid);
    const gridContainerData = document.getElementById(`${grid}`);
    gridContainerData.innerHTML="";
    var datacollength = para[0].columns.length;
    // console.log(datacollength);
    for (let i = 0; i < data.length; i++)
    {
        //console.log(data);
        const row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute("ondblclick", 'insertDatainform(this)');

        // row.style.height='30px';
        for (let j = 0; j < datacollength; j++) {
            //working on sarch icon
                if(para[0].columns[j].id=='Button'){
                    if(para[0].columns[j].visible==true){
                        const col = document.createElement('div');
                        col.classList.add('col-2','grid-item');//'col',
                        col.innerHTML=`<i class="fa-solid fa-magnifying-glass SalesOrderSearchIcon"></i>`;
                        col.style.width= `${para[0].columns[j].width}px`;
                        col.style.border = '1px solid'
                        col.style.height="30px";
                        row.appendChild(col);
                    }
                }
            //console.log("2nd loop");
            for(let k = 0; k < Object.keys(data[0]).length; k++){

                if(para[0].columns[j].id == Object.keys(data[i])[k] && para[0].columns[j].visible!=false)
                {


                        const propertyvalue = Object.keys(data[i])[k];


                        const col = document.createElement("input");
                        // const col = document.createElement('div');
                        if(para[0].columns[j].visible==false){
                          col.style.display='none';
                        }

                        if(para[0].columns[j].inputType == "text"){
                          // col.setAttribute("type", "text");
                          col.setAttribute('type','text');
                          col.id = Object.keys(data[i])[k];
                          col.value=data[i][propertyvalue];
                        }else if(para[0].columns[j].inputType == "checkbox"){
                          // col.setAttribute("type", "checkbox");
                          col.setAttribute('type','checkbox');
                          col.id = Object.keys(data[i])[k];
                          if(data[i][propertyvalue]==true){
                            col.checked=true;
                          }else{
                            col.checked=false;
                          }
                        }else if(para[0].columns[j].inputType == "number"){
                          col.setAttribute("type", "number");
                          // col.setAttribute('type','text');
                          col.id = Object.keys(data[i])[k];
                          col.value=data[i][propertyvalue];
                        }

                        col.style.height = "30px";
                        col.name = Object.keys(data[i])[k];


                        col.classList.add('col-2','grid-item','text-wrap');//'col',
                        col.style.width= `${para[0].columns[j].width}px`;
                        row.appendChild(col);
                        k= datacollength+10;

                }
            }
        }
        gridContainerData.appendChild(row);
    }
}


function insertDatainform(para, rowsValues){
  console.log("rowsValues",rowsValues);
  if(rowsValues.length > 0){
    const columns = para[0].columns;
    let primaryfield;
    for (let i = 0; i < columns.length; i++) {
      // const column = columns[i];
      // const element = document.getElementById(column.field);
      if (columns[i].field == 'primary') {
        // console.log("element",element);
        primaryfield = document.getElementById(columns[i].id);
        console.log("primaryfield",primaryfield);
        break; // Exit the loop when the condition is met
      }
    }
      // console.log("asw");
      for(let i = 0; i< para[0].columns.length;i++){
        // let j = 0;
        if(para[0].columns[i].type === "select" && para[0].columns[i].visible == true){
          let selectOptionId = document.getElementById(`${para[0].columns[i].id}`);
          let optionValue;
          // console.log(Object.keys(rowsValues).length, "Object.keys(rowsValues).length");
          for (let j = 0; j < Object.keys(rowsValues[0]).length; j++) {
            if(para[0].columns[i].id === Object.keys(rowsValues[0])[j]){
              optionValue = rowsValues[0][Object.keys(rowsValues[0])[j]];
              // console.log("optionValue",optionValue);
              break;
            }
          }
          // console.log("module",selectOptionId);
          for (let k = 0; k < selectOptionId.options.length; k++) {
              // console.log("module.options.length",module.options.length);
              // console.log("module.options[i].value === String(ModuleId)",module.options[i].value,"===", String(ModuleId));
              // console.log("module.options.length",module.options.length);
              if (selectOptionId.options[k].value === String(optionValue)) {
                  // console.log("module.options[i].value === String(ModuleId)",module.options[i].value, String(ModuleId));
                  selectOptionId.options[k].selected = true;
                  break; // Optional: If you only have one matching option, you can break the loop
              }
          }
        }else if(para[0].columns[i].type === "input" && para[0].columns[i].visible == true){
          if(para[0].columns[i].inputType === "number"){
            var inputNumber = document.getElementById(`${para[0].columns[i].id}`);
            // let optionValue;
            // console.log(Object.keys(rowsValues).length, "Object.keys(rowsValues).length");
            for (let j = 0; j < Object.keys(rowsValues[0]).length; j++) {
              if(para[0].columns[i].id === Object.keys(rowsValues[0])[j]){
                inputNumber.value = rowsValues[0][Object.keys(rowsValues[0])[j]];
                break;
              }
            }
          }else if(para[0].columns[i].inputType == "text"){
            var inputNumber = document.getElementById(`${para[0].columns[i].id}`);
            // let optionValue;
            // console.log(Object.keys(rowsValues).length, "Object.keys(rowsValues).length");
            for (let j = 0; j < Object.keys(rowsValues[0]).length; j++) {
              if(para[0].columns[i].id === Object.keys(rowsValues[0])[j]){
                inputNumber.value = rowsValues[0][Object.keys(rowsValues[0])[j]];
                if(para[0].columns[i].field === "primary"){
                  let primaryId;
                  for(let z = 0; z < para[0].columns.length; z++){
                    if(para[0].columns[i].label == para[0].columns[z].label){
                      primaryId = para[0].columns[z].id;
                      break;
                    }
                  }
                  for (let y = 0; y < Object.keys(rowsValues[0]).length; y++) {
                    if(primaryId === Object.keys(rowsValues[0])[y]){
                      inputNumber.placeholder = rowsValues[0][Object.keys(rowsValues[0])[y]];
                      break;
                    }
                  }
                }
                break;
              }
            }
          }else if(para[0].columns[i].inputType == "checkbox"){
            // input.classList.add('form-check-input');
            let inputNumber = document.getElementById(`${para[0].columns[i].id}`);
            // let optionValue;
            // console.log(Object.keys(rowsValues).length, "Object.keys(rowsValues).length");
            for (let j = 0; j < Object.keys(rowsValues[0]).length; j++) {
              if(para[0].columns[i].id === Object.keys(rowsValues[0])[j]){
                inputNumber.checked = rowsValues[0][Object.keys(rowsValues[0])[j]];
                break;
              }
            }
          }
      }
    }
  }
}


let buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Remove active class from all buttons
    buttons.forEach(function(btn) {
      btn.classList.remove("active");
      btn.style.backgroundColor = ""; // Reset background color
      btn.style.color = ""; // Reset text color
    });

    // Add active class to the clicked button
    this.classList.add("active");
    this.style.backgroundColor = "green"; // Set background color
    this.style.color = "white"; // Set text color
  });
});


