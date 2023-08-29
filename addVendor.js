
const VendorMaster = [
    {
      id: "VendorMasterForm",
      columns: [
        {
          id: "vendorId",
          // type: "ed",
          label: "Vendor Code",
          align: "left",
          width: 150,
          sort: "str",
          visible: false,
          filter: "#text_filter",
        },
        {
          id: "vendorCode",
          // type: "ed",
          inputType: "text",
          type: "input",
          field:"primary",
          label: "Vendor Code",
          align: "left",
          width: 150,
          sort: "str",
          visible: true,
          filter: "#text_filter",
        },
        {
          id: "vendorName",
          inputType: "text",
          type: "input",
          label: "Vendor Name",
          align: "center",
          width: 150,
          sort: "str",
          visible: true,
          filter: "#text_filter",
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
          id: "remarks",
          inputType: "text",
          type: "textarea",
          label: "Remarks",
          align: "center",
          width: 150,
          sort: "str",
          visible: true,
          filter: "#text_filter",
        },
        // {
        //   // id: "moduleName",
        //   id: "vendorType",
        //   inputType: "text",
        //   type: "select",
        //   label: "Vendor Type",
        //   align: "center",
        //   width: 200,
        //   sort: "str",
        //   visible: true,
        //   filter: "#text_filter",
        //   apiLink: "https://localhost:7241/api/Vendor/VendorType",
        //   apiId:"vendorTypeId",
        //   apiName:"vendorTypeName",
        // },
        {
          // id: "parentName",
          id: "companyId",
          inputType: "text",
          type: "select",
          label: "Company Name",
          align: "center",
          width: 200,
          sort: "str",
          visible: true,
          // filter: "#text_filter",
          apiLink: "https://localhost:7241/api/ActiveCompany",
          apiId:"CompanyId",
          apiName:"ShortName",
        },
        {
          id: "vendorTypeCode",
          inputType: "text",
          type: "input",
          label: "Vendor Type Code",
          align: "left",
          width: 200,
          sort: "str",
          visible: true,
        },
        {
          id: "isActive",
          inputType: "checkbox",
          type: "input",
          label: "Is Active",
          align: "left",
          width: 125,
          sort: "str",
          visible: true,
        },
        // {
        //   id: "seqNo",
        //   inputType: "number",
        //   type: "input",
        //   label: "Seq. No.",
        //   align: "center",
        //   width: 90,
        //   sort: "str",
        //   visible: true,
        // },
        // { id: "AddedBy", type: "ed", label: "AddedBy", visible: false },
        // { id: "DateAdded", type: "ed", label: "DateAdded", visible: false },
      ],
    },
];
createForm(VendorMaster, "#VendorMaster");

const GeneralInformation = [
  {
    id: "GeneralInformationForm",
    columns: [
      {
        id: "vendorGeneralInfoId",
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
        // id: "moduleName",
        id: "countryCode",
        inputType: "text",
        type: "select",
        label: "Country Name",
        align: "center",
        width: 200,
        sort: "str",
        visible: true,
        filter: "#text_filter",
        apiLink: "https://localhost:7241/api/Vendor/VendorCountry",
        apiId:"countryId",
        apiName:"countryName",
      },
      {
        // id: "parentName",
        id: "divisionCode",
        type: "select",
        label: "Division Code",
        align: "center",
        width: 200,
        sort: "str",
        visible: true,
        filter: "#text_filter",
        apiLink: "https://localhost:7241/api/Vendor/VendorDivision",
        apiId:"divisionId",
        apiName:"divisionName",
      },
      {
        id: "phoneNumber",
        inputType: "number",
        type: "input",
        label: "Phone Number",
        align: "left",
        width: 200,
        sort: "str",
        visible: true,
      },
      {
        id: "faxNumber",
        inputType: "text",
        type: "input",
        label: "Fax Number",
        align: "left",
        width: 200,
        sort: "str",
        visible: true,
      },
      {
        id: "webAddress",
        inputType: "text",
        type: "input",
        label: "Web Address",
        align: "left",
        width: 200,
        sort: "str",
        visible: true,
      },
      {
        id: "salutationId",
        inputType: "text",
        type: "select",
        label: "Salutation",
        align: "left",
        width: 80,
        sort: "str",
        visible: true,
        apiLink: "https://localhost:7241/api/Vendor/VendorSalutation",
        apiId:"salutationId",
        apiName:"salutationName",
      },
      {
        id: "ownerName",
        inputType: "text",
        type: "input",
        label: "Owner Name",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
      {
        id: "memorandumArticleOfAssociationAttachment",
        inputType: "text",
        type: "input",
        label: "Memorandum Article Of Association Attachment",
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
        label: "Certificate Of In Corporation Attachment",
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
        id: "tradeLicenseAttachment",
        inputType: "text",
        type: "input",
        label: "TradeLicense Attachment",
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
        id: "tINCertificate",
        inputType: "text",
        type: "input",
        label: "TIN Certificate",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
      {
        id: "tINCertificateAttachment",
        inputType: "text",
        type: "input",
        label: "TIN Certificate Attachment",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
      {
        id: "tINCertificateFile",
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
        id: "vatRegistrationCertificateAttachment",
        inputType: "text",
        type: "input",
        label: "Vat Registration Certificate Attachment",
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
        id: "bankSolvencyCertificateAttachment",
        inputType: "text",
        type: "input",
        label: "Bank Solvency Certificate Attachment",
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
        id: "lastAnnualAuditedReportAttachment",
        inputType: "text",
        type: "input",
        label: "Last Annual Audited Report Attachment",
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
      {
        id: "photoLink",
        inputType: "text",
        type: "input",
        label: "Photo Link",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      }
      // { id: "AddedBy", type: "ed", label: "AddedBy", visible: false },
      // { id: "DateAdded", type: "ed", label: "DateAdded", visible: false },
    ],
  },
];
createForm(GeneralInformation, "#GeneralInformation");

const ProductsServices = [
  {
    id: "vendor",
    columns: [
      {
        id: "vendorProductServiceId",
        // type: "ed",
        label: "Vendor Product Service Id",
        align: "left",
        width: 150,
        sort: "str",
        visible: false,
        filter: "#text_filter",
      },
      {
        id: "groupCode",
        inputType: "number",
        type: "input",
        field:"primary",
        label: "Group Code",
        align: "center",
        width: 150,
        sort: "str",
        visible: true,
        filter: "#text_filter",
      },
      // {
      //   // id: "moduleName",
      //   id: "moduleId",
      //   inputType: "text",
      //   type: "select",
      //   label: "Module Name",
      //   align: "center",
      //   width: 200,
      //   sort: "str",
      //   visible: true,
      //   filter: "#text_filter",
      //   apiLink: "https://localhost:7241/api/Module",
      //   apiId:"moduleId",
      //   apiName:"moduleName",
      // },
      // {
      //   // id: "parentName",
      //   id: "parentId",
      //   type: "select",
      //   label: "Parent Name",
      //   align: "center",
      //   width: 200,
      //   sort: "str",
      //   visible: true,
      //   filter: "#text_filter",
      //   apiLink: "https://localhost:7241/api/GetAllMenu",
      //   apiId:"MenuId",
      //   apiName:"MenuName",
      // },
      {
        id: "serviceCode",
        inputType: "number",
        type: "input",
        label: "Service Code",
        align: "left",
        width: 200,
        sort: "str",
        visible: true,
      }
      // { id: "AddedBy", type: "ed", label: "AddedBy", visible: false },
      // { id: "DateAdded", type: "ed", label: "DateAdded", visible: false },
    ],
  },
];
loadTableHeader(ProductsServices, "#VendorsProductsServices");

const ContactPerson = [
{
  id: "vendor",
  columns: [
    {
      id: "contactPersonId",
      // type: "ed",
      label: "Contact Person Name",
      align: "left",
      width: 150,
      sort: "str",
      visible: false,
      filter: "#text_filter",
    },
    {
      id: "contactPersonName",
      inputType: "text",
      type: "input",
      field:"primary",
      label: "ContactPersonName",
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
      align: "left",
      width: 200,
      sort: "str",
      visible: true,
    },
    {
      id: "email",
      inputType: "email",
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
      align: "left",
      width: 200,
      sort: "str",
      visible: true,
    },
    {
      id: "countryCode",
      inputType: "text",
      type: "input",
      label: "Country Code",
      align: "left",
      width: 180,
      sort: "str",
      visible: true,
    },
    {
      id: "divisionCode",
      inputType: "text",
      type: "input",
      label: "Division Code",
      align: "left",
      width: 115,
      sort: "str",
      visible: true,
    }
    // { id: "AddedBy", type: "ed", label: "AddedBy", visible: false },
    // { id: "DateAdded", type: "ed", label: "DateAdded", visible: false },
  ],
},
];
loadTableHeader(ContactPerson, "#ContactPerson");

const FactoryDetails = [
  {
    id: "vendor",
    columns: [
      {
        id: "factoryId",
        // type: "ed",
        label: "Factory Name",
        align: "left",
        width: 150,
        sort: "str",
        visible: false,
        filter: "#text_filter",
      },
      {
        id: "factoryName",
        inputType: "text",
        type: "input",
        field:"primary",
        label: "Factory Name",
        align: "center",
        width: 150,
        sort: "str",
        visible: true,
        filter: "#text_filter",
      },
      {
        id: "factoryAddress",
        inputType: "text",
        type: "input",
        label: "Factory Address",
        align: "left",
        width: 200,
        sort: "str",
        visible: true,
      },
      {
        id: "isApproved",
        inputType: "checkbox",
        type: "input",
        label: "Is Approved",
        align: "left",
        width: 125,
        sort: "str",
        visible: true,
      }
      // { id: "AddedBy", type: "ed", label: "AddedBy", visible: false },
      // { id: "DateAdded", type: "ed", label: "DateAdded", visible: false },
    ],
  },
];
loadTableHeader(FactoryDetails, "#FactoryDetails");

const ProjectAllowedtoWork = [
{
  id: "vendor",
  columns: [
    {
      id: "vendorProjectAllowedToWorkId",
      // type: "ed",
      label: "ProjectMaster Code",
      align: "left",
      width: 150,
      sort: "str",
      visible: false,
      filter: "#text_filter",
    },
    {
      id: "projectMasterCode",
      inputType: "text",
      type: "input",
      field:"primary",
      label: "ProjectMaster Code",
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
      align: "left",
      width: 200,
      sort: "str",
      visible: true,
    },
    {
      id: "isApproved",
      inputType: "checkbox",
      type: "input",
      label: "Is Approved",
      align: "left",
      width: 125,
      sort: "str",
      visible: true,
    }
    // { id: "AddedBy", type: "ed", label: "AddedBy", visible: false },
    // { id: "DateAdded", type: "ed", label: "DateAdded", visible: false },
  ],
},
];
loadTableHeader(ProjectAllowedtoWork, "#ProjectAllowedtoWork");

const PaymentTerms = [
  {
    id: "vendor",
    columns: [
      {
        id: "vendorPaymentTermsId",
        // type: "ed",
        label: "VendorPaymentTermsId",
        align: "left",
        width: 150,
        sort: "str",
        visible: false,
        filter: "#text_filter",
      },
      {
        id: "creditlimit",
        inputType: "text",
        type: "input",
        field:"primary",
        label: "Creditlimit",
        align: "center",
        width: 150,
        sort: "str",
        visible: true,
        filter: "#text_filter",
      },
      {
        id: "projectId",
        inputType: "text",
        type: "input",
        label: "Project Id",
        align: "left",
        width: 200,
        sort: "str",
        visible: true,
      },
      {
        id: "timeSpan",
        inputType: "text",
        type: "input",
        label: "TimeSpan",
        align: "left",
        width: 200,
        sort: "str",
        visible: true,
      },
      {
        id: "securityMoney",
        inputType: "text",
        type: "input",
        label: "Security Money",
        align: "left",
        width: 200,
        sort: "str",
        visible: true,
      },
      {
        id: "isProjectWise",
        inputType: "checkbox",
        type: "input",
        label: "Is ProjectWise",
        align: "left",
        width: 125,
        sort: "str",
        visible: true,
      }
      // { id: "AddedBy", type: "ed", label: "AddedBy", visible: false },
      // { id: "DateAdded", type: "ed", label: "DateAdded", visible: false },
    ],
  },
];
loadTableHeader(PaymentTerms, "#PaymentTerms");

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
        option1.textContent = "-- Select Option --";
        // option1.textContent = "Default Value";
        // option1.value = 1;
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
          // input.setAttribute('readonly','readonly');
        }else if(column.inputType == "checkbox"){
          input.classList.add('form-check-input');
          input.type = column.inputType;
        }else if(column.inputType == "file"){
          // input.classList.add('form-check-input');
          input.type = column.inputType;
        }

        if(column.field == "primary"){
          input.setAttribute('readonly','readonly');
        }
        // input.type = column.type === "ro" ? "text" : "number";
        input.id = column.id;
        input.name = column.id;
        input.placeholder = column.label;
        input.classList.add("form-control", "p-0");
        inputColumn.appendChild(input);
      }else if(column.type=="textarea"){
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
        searchIcon.setAttribute("data-bs-target", "#ShowVendorList");        
        inputColumn.appendChild(searchIcon);
      }



      inputRow.appendChild(inputColumn);
      formPart.appendChild(inputRow);
    }

    MainRow.appendChild(formPart);
  }
  formContainer.appendChild(MainRow);
  // loadModuleName();
  // loadParentModule();
  loadSelectOption(para);
}

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




function loadTableHeader(para,div){
  // load grid header
  var colLength = para[0].columns.length;
  // var colLength = para[0].columns.length;

  // console.log(colLength);
  const gridContainer = document.querySelector(`${div}`);
  // console.log("gridContainer",gridContainer.innerHTML);
  // Clear previous grid
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
  // var tableFooter = document.getElementById("tableFooter");
  // var details = document.getElementById("details");
  // details.style.width = `${totalWidth+10}px`;

  // var gridContainerData = document.getElementById("gridContainer-data");
  // console.log("tableFooter:", totalWidth);

}






//add row start from here for panel 2
var AddRow2 = document.getElementById("AddRow2");
// var gridContainerAddRow=document.getElementById("gridContainer-inputRow");
const gridContainerAddRow2 = document.getElementById("gridContainer-data2");
AddRow2.addEventListener("click", function () {
  var datacollength = ProductsServices[0].columns.length;
  const AddheaderRow = document.createElement("div");
  AddheaderRow.classList.add("row", "AddInputRow2");
  AddheaderRow.style.height = "30px";
  for (let i = 0; i < datacollength; i++) {
    //const propertyName = Object.keys(TableDataArray[0])[i];
    if (ProductsServices[0].columns[i].visible != false) {
      if (ProductsServices[0].columns[i].id == "Button") {
        const col = document.createElement("div");
        // col.setAttribute('value', `${TableDataArray[i][propertyvalue]}`);
        col.classList.add("col", "grid-item"); //'col',
        col.innerHTML = `<i class="fa-solid fa-magnifying-glass SalesOrderSearchIcon"></i>`;
        col.style.width = `${ProductsServices[0].columns[i].width}px`;
        col.style.border = "1px solid  rgb(175, 200, 221)";
        col.style.height = "30px";
        AddheaderRow.appendChild(col);
      } else {
        const col = document.createElement("input");
        // col.setAttribute('value', `${TableDataArray[i][propertyvalue]}`);
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
        // rows[j].style.background="rgb(206, 193, 218)";
        //rows[j].style.outline="1px solid white";
        rows[j].style.outline = "None";
      }
      // Add the selected class to the clicked row
      this.classList.add("selected");
      this.style.outline = "1px solid blue";
      // outline: 2px solid blue;
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
// var gridContainerAddRow=document.getElementById("gridContainer-inputRow");
const gridContainerAddRow3 = document.getElementById("gridContainer-data3");
AddRow3.addEventListener("click", function () {
  var datacollength = ContactPerson[0].columns.length;
  const AddheaderRow = document.createElement("div");
  AddheaderRow.classList.add("row", "AddInputRow3");
  AddheaderRow.style.height = "30px";
  for (let i = 0; i < datacollength; i++) {
    //const propertyName = Object.keys(TableDataArray[0])[i];
    if (ContactPerson[0].columns[i].visible != false) {
      if (ContactPerson[0].columns[i].id == "Button") {
        const col = document.createElement("div");
        // col.setAttribute('value', `${TableDataArray[i][propertyvalue]}`);
        col.classList.add("col", "grid-item"); //'col',
        col.innerHTML = `<i class="fa-solid fa-magnifying-glass SalesOrderSearchIcon"></i>`;
        col.style.width = `${ContactPerson[0].columns[i].width}px`;
        col.style.border = "1px solid  rgb(175, 200, 221)";
        col.style.height = "30px";
        AddheaderRow.appendChild(col);
      } else {
        const col = document.createElement("input");
        // col.setAttribute('value', `${TableDataArray[i][propertyvalue]}`);
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
        // rows[j].style.background="rgb(206, 193, 218)";
        //rows[j].style.outline="1px solid white";
        rows[j].style.outline = "None";
      }
      // Add the selected class to the clicked row
      this.classList.add("selected");
      this.style.outline = "1px solid blue";
      // outline: 2px solid blue;
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
// var gridContainerAddRow=document.getElementById("gridContainer-inputRow");
const gridContainerAddRow4 = document.getElementById("gridContainer-data4");
AddRow4.addEventListener("click", function () {
  var datacollength = FactoryDetails[0].columns.length;
  const AddheaderRow = document.createElement("div");
  AddheaderRow.classList.add("row", "AddInputRow4");
  AddheaderRow.style.height = "30px";
  for (let i = 0; i < datacollength; i++) {
    //const propertyName = Object.keys(TableDataArray[0])[i];
    if (FactoryDetails[0].columns[i].visible != false) {
      if (FactoryDetails[0].columns[i].id == "Button") {
        const col = document.createElement("div");
        // col.setAttribute('value', `${TableDataArray[i][propertyvalue]}`);
        col.classList.add("col", "grid-item"); //'col',
        col.innerHTML = `<i class="fa-solid fa-magnifying-glass SalesOrderSearchIcon"></i>`;
        col.style.width = `${FactoryDetails[0].columns[i].width}px`;
        col.style.border = "1px solid  rgb(175, 200, 221)";
        col.style.height = "30px";
        AddheaderRow.appendChild(col);
      } else {
        const col = document.createElement("input");
        // col.setAttribute('value', `${TableDataArray[i][propertyvalue]}`);
        col.classList.add("col-2", "grid-item"); //'col',
        if(FactoryDetails[0].columns[i].inputType == "text"){
          col.setAttribute("type", "text");
          col.style.border = "1px solid  rgb(175, 200, 221)";
          col.style.width = `${FactoryDetails[0].columns[i].width}px`;
          col.style.height = "30px";
        }else if(FactoryDetails[0].columns[i].inputType == "checkbox"){
          col.setAttribute("type", "checkbox");
          col.style.border = "1px solid  rgb(175, 200, 221)";
          col.style.width = `${FactoryDetails[0].columns[i].width}px`;
          col.style.height = "30px";
        }else if(FactoryDetails[0].columns[i].inputType == "number"){
          col.setAttribute("type", "number");
          col.style.border = "1px solid  rgb(175, 200, 221)";
          col.style.width = `${FactoryDetails[0].columns[i].width}px`;
          col.style.height = "30px";
        }

        col.name = FactoryDetails[0].columns[i].id;
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
        // rows[j].style.background="rgb(206, 193, 218)";
        //rows[j].style.outline="1px solid white";
        rows[j].style.outline = "None";
      }
      // Add the selected class to the clicked row
      this.classList.add("selected");
      this.style.outline = "1px solid blue";
      // outline: 2px solid blue;
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
// var gridContainerAddRow=document.getElementById("gridContainer-inputRow");
const gridContainerAddRow5 = document.getElementById("gridContainer-data5");
AddRow5.addEventListener("click", function () {
  var datacollength = ProjectAllowedtoWork[0].columns.length;
  const AddheaderRow = document.createElement("div");
  AddheaderRow.classList.add("row", "AddInputRow5");
  AddheaderRow.style.height = "30px";
  for (let i = 0; i < datacollength; i++) {
    //const propertyName = Object.keys(TableDataArray[0])[i];
    if (ProjectAllowedtoWork[0].columns[i].visible != false) {
      if (ProjectAllowedtoWork[0].columns[i].id == "Button") {
        const col = document.createElement("div");
        // col.setAttribute('value', `${TableDataArray[i][propertyvalue]}`);
        col.classList.add("col", "grid-item"); //'col',
        col.innerHTML = `<i class="fa-solid fa-magnifying-glass SalesOrderSearchIcon"></i>`;
        col.style.width = `${ProjectAllowedtoWork[0].columns[i].width}px`;
        col.style.border = "1px solid  rgb(175, 200, 221)";
        col.style.height = "30px";
        AddheaderRow.appendChild(col);
      } else {
        const col = document.createElement("input");
        // col.setAttribute('value', `${TableDataArray[i][propertyvalue]}`);
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
        // rows[j].style.background="rgb(206, 193, 218)";
        //rows[j].style.outline="1px solid white";
        rows[j].style.outline = "None";
      }
      // Add the selected class to the clicked row
      this.classList.add("selected");
      this.style.outline = "1px solid blue";
      // outline: 2px solid blue;
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
    //const propertyName = Object.keys(TableDataArray[0])[i];
    if (PaymentTerms[0].columns[i].visible != false) {
      if (PaymentTerms[0].columns[i].id == "Button") {
        const col = document.createElement("div");
        // col.setAttribute('value', `${TableDataArray[i][propertyvalue]}`);
        col.classList.add("col", "grid-item"); //'col',
        col.innerHTML = `<i class="fa-solid fa-magnifying-glass SalesOrderSearchIcon"></i>`;
        col.style.width = `${PaymentTerms[0].columns[i].width}px`;
        col.style.border = "1px solid  rgb(175, 200, 221)";
        col.style.height = "30px";
        AddheaderRow.appendChild(col);
      } else {
        const col = document.createElement("input");
        // col.setAttribute('value', `${TableDataArray[i][propertyvalue]}`);
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
        // rows[j].style.background="rgb(206, 193, 218)";
        //rows[j].style.outline="1px solid white";
        rows[j].style.outline = "None";
      }
      // Add the selected class to the clicked row
      this.classList.add("selected");
      this.style.outline = "1px solid blue";
      // outline: 2px solid blue;
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
  // let form = document.querySelector(`${VendorMaster[0].id}`);
  // console.log("form",VendorMaster.id);
  document.getElementById(`${VendorMaster[0].id}`).reset();
  // form1.requestFullscreen()
  document.getElementById(`${GeneralInformation[0].id}`).reset();


  
  const columns = VendorMaster[0].columns;

  columns.forEach(column => {
    const element = document.getElementById(column.id);

    if (element) {

      if (parameter === "new" && column.field === "primary") {
        element.placeholder = "****<<New>>****";
        element.name = column.id;
      }else if(parameter != "new" && column.field === "primary"){
        element.placeholder = column.label;
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




// function saveTheData(){

//   // const Obj = {};

// // Get form values
// const VendorMasterform = document.getElementById("VendorMasterForm");
// const vendormaster = new FormData(VendorMasterform);

// // Create an object to store the form data
// const vendorMaster = {};

// // Update checkbox values to true in the object
// for (let pair of vendormaster.entries()) {
//   const key = pair[0];
//   const element = VendorMasterform.elements[key];

//   if (element.type === "checkbox") {
//     vendorMaster.set(key, element.checked);
//     // vendorMaster[key] = true; // Update the object property value to true
//   } else {
//     vendorMaster[key] = pair[1]; // For other input types, use the FormData value as-is
//   }
// }



// // console.log(VendorMasterObject); // Now VendorMasterObject is a regular JavaScript object


// // const GeneralInfo = {};
// // // Get form values
// // const GeneralInformationForm = document.getElementById("GeneralInformationForm");
// // const vendorGeneralInfo = new FormData(GeneralInformationForm);
// // // GeneralInfo.push(GeneralInformation);
// // for (let pair of vendorGeneralInfo.entries()) {
// //   const key = pair[0];
// //   const element = GeneralInformationForm.elements[key];

// //   if (element.type === "checkbox") {
// //     GeneralInfo.set(key, element.checked);
// //     // vendorMaster[key] = true; // Update the object property value to true
// //   } else {
// //     GeneralInfo[key] = pair[1]; // For other input types, use the FormData value as-is
// //   }
// // }

//   // Get form values
// const GeneralInformationForm = document.getElementById("GeneralInformationForm");
// const GeneralInformation = new FormData(GeneralInformationForm);

// // Create an object to store the form data
// const GeneralInfo = [];
// const GeneralInformationObject = {};


//   for (let pair of GeneralInformation.entries()) {
//     const key = pair[0];
//     const element = GeneralInformationForm.querySelector(`[name="${key}"]`);

//     if (element.type === "checkbox") {
//       GeneralInformationObject[key] = element.checked;
//     } else if (element.type === "file") {
//       const file = element.files[0];
//       GeneralInformationObject[key] = file;
//     } else {
//       GeneralInformationObject[key] = pair[1];
//     }
//   }
//   GeneralInfo.push(GeneralInformationObject);




//   const ProductsServices = panel2Data();
//   const ContactPerson = panel3Data();
//   const FactoryDetails = panel4Data();
//   const ProjectAllowedtoWork = panel5Data();
//   const PaymentTerms = panel6Data();


//   vendorMaster.vendorContactPerson = ContactPerson;
//   vendorMaster.vendorFactoryDetails = FactoryDetails;
//   vendorMaster.vendorGeneralInfo = GeneralInfo;
//   vendorMaster.vendorPaymentTerms = PaymentTerms;
//   vendorMaster.vendorProductService = ProductsServices;
//   vendorMaster.vendorProjectAllowedToWork = ProjectAllowedtoWork;
//   console.log("VendorMasterObject",vendorMaster); 
  
  
//   // for (let pair of vendorMaster.VendorGeneralInfo.entries()) {
//   //   console.log("key",pair[0],"value",pair[1]);
//   // }
  


//   const columns = VendorMaster[0].columns;
//   let primaryfield;

//   for (let i = 0; i < columns.length; i++) {
//     if (columns[i].field == 'primary') {
//       // console.log("element",element);
//       primaryfield = document.getElementById(columns[i].id).placeholder;
//       break; // Exit the loop when the condition is met
//     }
//   }
  
//   // let menuId = document.getElementById('MenuName').name;
//   console.log("primaryfield",primaryfield);

//   if(primaryfield=="****<<New>>****"){
//     // const formData = new FormData();
//     // formData.append('vendorGeneralInfo', vendorGeneralInfo);
//     // formData.append('vendormaster', vendorMaster);

//   // for (let pair of formData.entries()) {
//   //   console.log("key",pair[0],"value",pair[1]);
//   // }
//   //   console.log("key",pair[0],"value",pair[1]);

//     //https://localhost:7241/api/Vendor
//     //https://localhost:7241/api/Vendor/${JSON.stringify(GeneralInfo)}`
//     fetch(`https://localhost:7241/api/Vendor`, {
//       method: "POST",
//       body: JSON.stringify(vendormaster),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => 
//       console.log("response", data)
//       )
//       // .catch((error) => {
//       //   console.error("Error:", error);
//       //   // NewButton("new");
//       // });

//   }else
//   {
//       //https://localhost:7241/api/Vendor
//       fetch(`https://localhost:7241/api/Vendor/${primaryfield}`, {
//         method: "PUT",
//         body: vendorMaster
//       })
//         .then((response) => response.json())
//         .then((data) => console.log("response", data))
//         .catch((error) => {
//           console.error("Error:", error);
//           // NewButton("new");
//         });
//   }


// }

function saveTheData(){

  // const Obj = {};

// Get form values
const VendorMasterform = document.getElementById("VendorMasterForm");
const vendorMaster = new FormData(VendorMasterform);

// // Create an object to store the form data
// const vendormaster = {};
  let file;
// Update checkbox values to true in the object
for (let pair of vendorMaster.entries()) {
  const key = pair[0];
  const element = VendorMasterform.elements[key];

  if (element.type === "checkbox") {
    vendorMaster[key] = element.checked; // Update the object property value to true
  } else if (element.type === "file") {
    file = element.files[0];
    vendorMaster[key] = element.files[0]; // Save the selected file
  } else {
    vendorMaster[key] = pair[1]; // For other input types, use the FormData value as-is
  }
}




// Get form values
const GeneralInformationForm = document.getElementById("GeneralInformationForm");
const GeneralInformation = new FormData(GeneralInformationForm);



  const ProductsServices = panel2Data();
  const ContactPerson = panel3Data();
  const FactoryDetails = panel4Data();
  const ProjectAllowedtoWork = panel5Data();
  const PaymentTerms = panel6Data();

  const obj = {
    // vendormain: vendormaster,
    VendorContactPerson: ContactPerson,
    VendorFactoryDetails: FactoryDetails,
    // VendorGeneralInfo: GeneralInfo,
    VendorPaymentTerms: PaymentTerms,
    VendorProductService: ProductsServices,
    VendorProjectAllowedToWork: ProjectAllowedtoWork
  }

  const formData = new FormData();
  //Update checkbox values to true in the object
  for (let pair of vendorMaster.entries()) {
    const key = pair[0];
    const element = VendorMasterform.elements[key];
    formData.append(key, pair[1]); // For other input types, use the FormData value as-is
  }

  let infoname = "VendorGeneralInfo.";
  for (let pair of GeneralInformation.entries()) {
    const key = pair[0];
    const element = VendorMasterform.elements[key];
    formData.append(`${infoname}${key}`, pair[1]); // For other input types, use the FormData value as-is
  }
  // // formData.append("vendormain", vendorMaster);

  // formData.append("imagePath", file); // Replace with your file input element
  // formData.append("vendorId", "");
  // // formData.append("data", "w3e4rt");
  // formData.append("dateUpdated", "");
  // formData.append("updatedPC", "");
  // formData.append("vendorTypeCode", "");
  // formData.append("dateAdded", "");
  // formData.append("updatedBy", "");
  // formData.append("remarks", "");
  // formData.append("addedPC", "");
  // formData.append("vendorName", "");
  // formData.append("vendorCode", "");
  // formData.append("addedBy", "");
  // formData.append("companyId", "1");
  formData.append("data", JSON.stringify(obj));
  for (let pair of formData.entries()) {
  console.log(pair[0],pair[1]);
  }

  // formData.append("VendorContactPerson", JSON.stringify(ContactPerson));
  // formData.append("VendorFactoryDetails", JSON.stringify(FactoryDetails));
  // formData.append("vendorGeneralInfo", JSON.stringify(GeneralInfo));
  // formData.append("VendorPaymentTerms", JSON.stringify(PaymentTerms));
  // formData.append("VendorProductService", JSON.stringify(ProductsServices));
  // formData.append("VendorProjectAllowedToWork", JSON.stringify(ProjectAllowedtoWork));


  // vendormaster.VendorContactPerson = ContactPerson;
  // vendormaster.VendorFactoryDetails = FactoryDetails;
  // vendormaster.VendorGeneralInfo = GeneralInfo;
  // vendormaster.VendorPaymentTerms = PaymentTerms;
  // vendormaster.VendorProductService = ProductsServices;
  // vendormaster.VendorProjectAllowedToWork = ProjectAllowedtoWork;
  // console.log("VendorMasterObject",vendormaster); 


    const columns = VendorMaster[0].columns;
  let primaryfield;

  for (let i = 0; i < columns.length; i++) {
    if (columns[i].field == 'primary') {
      // console.log("element",element);
      primaryfield = document.getElementById(columns[i].id);
      break; // Exit the loop when the condition is met
    }
  }
  
  // let menuId = document.getElementById('MenuName').name;


  if(primaryfield.placeholder==="****<<New>>****"){


  // Make the Fetch API request
  fetch("https://localhost:7241/api/Vendor", {
    method: "POST",
    headers: {
      Accept: "*/*",
    },
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert( data.message);
      NewButton();
      // Handle the response data
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle errors
    });

  }
  else if(primaryfield.value !== '')
  {
      //https://localhost:7241/api/Vendor
      fetch(`https://localhost:7241/api/Vendor/${primaryfield.placeholder}`, {
        method: "PUT",
        headers: {
          Accept: "*/*",
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("response", data);
          alert( data.message);
          NewButton();
      })
        .catch((error) => {
          console.error("Error:", error);
          // NewButton("new");
        });
  }  else{
    console.log("primaryfield faka");
    alert("Select Data for Update or Enter Data for New Entry.");
  }



}


function panel2Data(){
  const gridData = document.getElementById("gridContainer-data2");
  const rows = gridData.getElementsByClassName("row");
  // console.log("tushar", rows.length);
  const ProductsServices = [];
  // const rowData = {};
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
      }else if (column.tagName === "INPUT") {
        const columnText = column.value.trim();
        rowData[columnName] = columnText;
      }  
      // else if (column.tagName === "DIV" && column.children[0].tagName === "SELECT") {
      //   const selectElement = column.children[0];
      //   const selectElementName = selectElement.name;
      //   const selectedIndex = selectElement.selectedIndex;
      //   const selectedOption = selectElement.options[selectedIndex];
      //   const selectedName = selectedOption.textContent;
      //   rowData[selectElementName] = selectedName; // Use the selected option name as the key
      // }
    }
    ProductsServices.push(rowData);
  }
  console.log("VendorsProductsServices",ProductsServices);
  return ProductsServices;
  // console.log("VendorsProductsServices",VendorsProductsServices);
  // console.log("VendorsProductsServices",VendorsProductsServices);
}
function panel3Data(){
  const gridData = document.getElementById("gridContainer-data3");
  const rows = gridData.getElementsByClassName("row");
  // console.log("tushar", rows.length);
  const VendorsProductsServices = [];
  // const rowData = {};
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
      } 
      // else if (
      //   column.tagName === "DIV" &&
      //   column.children[0].tagName === "SELECT"
      // ) {
      //   const selectElement = column.children[0];
      //   const selectElementName = selectElement.name;
      //   const selectedIndex = selectElement.selectedIndex;
      //   const selectedOption = selectElement.options[selectedIndex];
      //   const selectedName = selectedOption.textContent;
      //   rowData[selectElementName] = selectedName; // Use the selected option name as the key
      // }
    }
    VendorsProductsServices.push(rowData);
  }
  return VendorsProductsServices;
  // console.log("VendorsProductsServices",VendorsProductsServices);
}
function panel4Data(){
  const gridData = document.getElementById("gridContainer-data4");
  const rows = gridData.getElementsByClassName("row");
  // console.log("tushar", rows.length);
  const VendorsProductsServices = [];
  // const rowData = {};
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
      // else if (
      //   column.tagName === "DIV" &&
      //   column.children[0].tagName === "SELECT"
      // ) {
      //   const selectElement = column.children[0];
      //   const selectElementName = selectElement.name;
      //   const selectedIndex = selectElement.selectedIndex;
      //   const selectedOption = selectElement.options[selectedIndex];
      //   const selectedName = selectedOption.textContent;
      //   rowData[selectElementName] = selectedName; // Use the selected option name as the key
      // }
    }
    VendorsProductsServices.push(rowData);
  }
  return VendorsProductsServices;
  // console.log("VendorsProductsServices",VendorsProductsServices);
}
function panel5Data(){
  const gridData = document.getElementById("gridContainer-data5");
  const rows = gridData.getElementsByClassName("row");
  // console.log("tushar", rows.length);
  const VendorsProductsServices = [];
  // const rowData = {};
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
      // else if (
      //   column.tagName === "DIV" &&
      //   column.children[0].tagName === "SELECT"
      // ) {
      //   const selectElement = column.children[0];
      //   const selectElementName = selectElement.name;
      //   const selectedIndex = selectElement.selectedIndex;
      //   const selectedOption = selectElement.options[selectedIndex];
      //   const selectedName = selectedOption.textContent;
      //   rowData[selectElementName] = selectedName; // Use the selected option name as the key
      // }
    }
    VendorsProductsServices.push(rowData);
  }
  return VendorsProductsServices;
  // console.log("VendorsProductsServices",VendorsProductsServices);
}
function panel6Data(){
  const gridData = document.getElementById("gridContainer-data6");
  const rows = gridData.getElementsByClassName("row");
  // console.log("tushar", rows.length);
  const VendorsProductsServices = [];
  // const rowData = {};
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
      // else if (
      //   column.tagName === "DIV" &&
      //   column.children[0].tagName === "SELECT"
      // ) {
      //   const selectElement = column.children[0];
      //   const selectElementName = selectElement.name;
      //   const selectedIndex = selectElement.selectedIndex;
      //   const selectedOption = selectElement.options[selectedIndex];
      //   const selectedName = selectedOption.textContent;
      //   rowData[selectElementName] = selectedName; // Use the selected option name as the key
      // }
    }
    VendorsProductsServices.push(rowData);
  }
  return VendorsProductsServices;
  // console.log("VendorsProductsServices",VendorsProductsServices);
}




function deleteVendor(){
  const columns = VendorMaster[0].columns;
  let primaryfield;
  let labelName;
  for (let i = 0; i < columns.length; i++) {
    if (columns[i].field == 'primary') {
      // console.log("element",element);
      primaryfield = document.getElementById(columns[i].id);
      labelName = columns[i].label;
      break; // Exit the loop when the condition is met
    }
  }
  
    // let menuId = document.getElementById('MenuName').name;
    console.log("primaryfield",primaryfield);



    if(primaryfield.placeholder !=="****<<New>>****" && primaryfield.placeholder !==labelName){

      fetch(`https://localhost:7241/api/Vendor/${primaryfield.placeholder}`,{
        method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
          console.log("response", data);
          alert( data.message);
          NewButton();
  
        })
        .catch(error => {
          console.log(error);
          // NewButton("new");
          // ShowVendorList();
        })

    }else{
      alert("Select Vendor For Delete");
    }
}


var myModal = new bootstrap.Modal(document.getElementById('ShowVendorList'));

myModal._element.addEventListener('show.bs.modal', function() {
  console.log('Modal is opening. You can display a message here.');
  ShowVendorList();
});
function ShowVendorList(){

  console.log("ShowVendorList");
  fetch("https://localhost:7241/api/Vendor")
  .then(response => response.json())
  .then(data => {
    console.log("ShowVendorList Inside Data");
    const modalBody = document.querySelector("#VendorTableBody");
    // Generate HTML for each module
    // <td><img src="${module.logo}" alt="Logo" width="50"></td>
    const moduleHTML = data.map((employee) => {
      return `
        <tr class="dataRow" ondblclick="InsertVendorDataInTable(this)">
          <td >${employee.vendorId}</td>
          <td id="vendorCode">${employee.vendorCode}</td>
          <td id="vendorName">${employee.vendorName}</td>
        </tr>
      `;
    }).join("");

    // Append the generated HTML to the modal body
    modalBody.innerHTML = moduleHTML;
  })
  .catch(error => console.log(error))
}

function InsertVendorDataInTable(row){

  const modal = document.querySelector("#ShowVendorList");
  const bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
  let vendorid = row.children[0].innerText;
  console.log("vendorid",vendorid);

  fetch(`https://localhost:7241/api/Vendor/${vendorid}`)
  .then(response => response.json())
  .then(data => {
    console.log("ShowVendorList Inside Data",data);
    const GeneralInformationobject = data.vendorGeneralInfo || [];
    const vendorsProductsServicesArray = data.vendorProductService || [];
    const vendorContactPersonArray = data.vendorContactPerson || [];
    const vendorFactoryDetailsArray = data.vendorFactoryDetails || [];
    const vendorProjectAllowedtoWorkArray = data.vendorProjectAllowedToWork || [];
    const vendorPaymentTermsArray = data.vendorPaymentTerms || [];
    console.log("vendorsProductsServicesArray Inside Data",vendorsProductsServicesArray);



    // Extract the properties you want to include in the new object
    const propertiesToExtract = [
      "vendorId",
      "vendorCode",
      // "vendorType",
      "vendorName",
      "vendorTypeCode",
      "isActive",
      "imagePath",
      "remarks",
      "companyId",
      "addedBy",
      "dateAdded",
      "addedPC",
      "updatedBy",
      "dateUpdated",
      "updatedPC",
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

    insertDatainform(VendorMaster, extractedDataArray);
    insertDatainform(GeneralInformation, GeneralInformationobjectArray);
    InsertVendorDetailsDataInTable(ProductsServices, vendorsProductsServicesArray,"gridContainer-data2");
    InsertVendorDetailsDataInTable(ContactPerson, vendorContactPersonArray, "gridContainer-data3");
    InsertVendorDetailsDataInTable(FactoryDetails, vendorFactoryDetailsArray, "gridContainer-data4");
    InsertVendorDetailsDataInTable(ProjectAllowedtoWork, vendorProjectAllowedtoWorkArray ,"gridContainer-data5");
    InsertVendorDetailsDataInTable(PaymentTerms, vendorPaymentTermsArray, "gridContainer-data6");
  })
  .catch(error => console.log(error))
  
}

function InsertVendorDetailsDataInTable(para, data, grid){
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
                //const propertyName = Object.keys(data[i])[k];
                //console.log("para[0].columns[j]:",para[0].columns[j].id,"==","propertyName:",Object.keys(data[i])[k]);
                if(para[0].columns[j].id == Object.keys(data[i])[k] && para[0].columns[j].visible!=false)
                {
                    //console.log("match model/key name",para[0].columns[j].id,Object.keys(data[i])[k]);

                        const propertyvalue = Object.keys(data[i])[k];
                        //console.log(Object.keys(data[i])[k],propertyvalue);
                        //const col = document.createElement('div');
                        //col.classList.add('col', 'grid-item','text-break');
                        // Set attributes for the input element
                        // if(Object.keys(data[i])[k]==)

                        const col = document.createElement("input");
                        // const col = document.createElement('div');
                        if(para[0].columns[j].visible==false){
                          col.style.display='none';
                        }
                        // if (k%2 == 0) {
                        //   col.style.backgroundColor='gray';
                        // }else{
                        //   col.style.backgroundColor='white';
                        // }
                        // console.log("para[0].columns[j].inputType",para[0].columns[j].inputType);


                        // col.setAttribute('value', `${TableDataArray[i][propertyvalue]}`);
                        // col.classList.add("col-2", "grid-item"); //'col',
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
                        // col.name = ProjectAllowedtoWork[0].columns[i].id;
                        // col.style.border = "1px solid  rgb(175, 200, 221)";
                        // col.style.width = `${ProjectAllowedtoWork[0].columns[i].width}px`;
                        col.style.height = "30px";
                        col.name = Object.keys(data[i])[k];




                        // if(para[0].columns[j].inputType=="checkbox"){

                        //   const input = document.createElement('input');
                        //   input.setAttribute('type','checkbox');
                        //   input.id = Object.keys(data[i])[k];
                        //   if(data[i][propertyvalue]==true){
                        //     input.checked=true;
                        //   }else{
                        //     input.checked=false;
                        //   }
                        //   col.appendChild(input);
                        // }
                        // else if(para[0].columns[j].inputType=="text" || para[0].columns[j].inputType=="number"){
                        //   const input = document.createElement('input');
                        //   input.setAttribute('type','text');
                        //   input.id = Object.keys(data[i])[k];
                        //     input.value=data[i][propertyvalue];
                        //   col.appendChild(input);
                        // }
                        // else{
                        //   col.id = Object.keys(data[i])[k];
                        //   col.innerText = data[i][propertyvalue];
                        // }
                        // col.setAttribute('value', `${data[i][propertyvalue]}`);
                        col.classList.add('col-2','grid-item','text-wrap');//'col',
                        // col.name = para[0].columns[j].id;
                        col.style.width= `${para[0].columns[j].width}px`;
                        // col.style.height="30px";
                        // col.textContent = data[i][propertyvalue];
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
  
      console.log("asw");
      for(let i = 0; i< para[0].columns.length;i++){
        // let j = 0;
        if(para[0].columns[i].type === "select"){
  
          let selectOptionId = document.getElementById(`${para[0].columns[i].id}`);
          let optionValue;
          // console.log(Object.keys(rowsValues).length, "Object.keys(rowsValues).length");
          for (let j = 0; j < Object.keys(rowsValues[0]).length; j++) {
            if(para[0].columns[i].id === Object.keys(rowsValues[0])[j]){
              optionValue = rowsValues[0][Object.keys(rowsValues[0])[j]];
              console.log(`select options ${para[0].columns[i].id}`,optionValue);
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
  
        }else if(para[0].columns[i].type === "input"){
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
      // btn.style.backgroundColor = ""; // Reset background color
      // btn.style.color = ""; // Reset text color
      // btn.style.border = " 1px solid #0075ca";
    });

    // Add active class to the clicked button
    this.classList.add("active");
    // this.style.backgroundColor = "green"; // Set background color
    // this.style.borderBottom = "4px solid #0075ca";
    // this.style.color = "black"; // Set text color
  });
});


// search work start here
let searchedVendor = document.getElementById("searchedDisplayID");
// console.log("searchedVendor",searchedVendor);
searchedVendor.addEventListener('keyup', ()=>{
  Search();
// console.log("searchedVendor in side keyup",searchedVendor);

});


function Search(){
  let InputValue = searchedVendor.value.toLowerCase();

  let dataRow = document.getElementsByClassName("dataRow");
  // console.log("searchedVendor in side search",dataRow);
  for(i=0;i<dataRow.length;i++){
      console.log("dataRow[i].childNodes[1].innerText",InputValue);
      let vendorCode = dataRow[i].querySelector("#vendorCode").innerText.toLowerCase();
      let vendorName = dataRow[i].querySelector("#vendorName").innerText.toLowerCase();
      // let vendorName = dataRow[i].querySelector(".vendorName");
      // let vendorCode = dataRow[i].querySelector(".vendorCode");
      // console.log("searchedVendor in side vendorName",vendorName);

      //interface.innerHTML.toLowerCase().indexOf(interfaceInputValue) != -1
      //vendorName.indexOf(InputValue) != -1 &&
      if( vendorCode.indexOf(InputValue) != -1){
          dataRow[i].style.display = "table-row";
      }else{
          dataRow[i].style.display = "none";
      }
  }
  // console.log(dataRow.length);
}
// search work end here

