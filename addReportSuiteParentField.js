

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
            id: "ReportParentId",
            type: "input",
            inputType: "number",
            label: "Report Parent Id",
            align: "left",
            width: 150,
            sort: "str",
            visible: false,
            filter: "#text_filter",
        },
        {
            id: "ParentField",
            inputType: "text",
            field:"primary",
            type: "input",
            label: "Parent Field",
            align: "center",
            width: 150,
            sort: "str",
            visible: true,
            filter: "#text_filter",
        },
        {
            id: "reportFieldId",
            inputType: "text",
            type: "select",
            label: "Report Field Id",
            align: "center",
            width: 200,
            sort: "str",
            visible: false,
            filter: "#text_filter",
        },
        {
          id: "label",
          inputType: "text",
          type: "select",
          label: "label",
          align: "center",
          width: 150,
          sort: "str",
          visible: true,
          filter: "#text_filter",
        },
        {
          id: "Condition",
          inputType: "text",
          type: "input",
          label: "Condition",
          align: "center",
          width: 150,
          sort: "str",
          visible: true,
          filter: "#text_filter",
        },
        {
          id: "BlankAllow",
          inputType: "checkbox",
          type: "input",
          label: "Blank Allow",
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
          select.style.border = "1px solid #0072ce";
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
          }else if(column.inputType == "checkbox"){
            input.classList.add('form-check-input');
            input.type = column.inputType;
          }
          input.style.border = "1px solid #0072ce";
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
          fileIcon.setAttribute("onclick","NewButton()");
          fileIcon.style.padding="5px 5px";
          inputColumn.appendChild(fileIcon);
          const searchIcon = document.createElement("i");
          searchIcon.classList.add("fa-solid", "fa-magnifying-glass", "AddMenuSearchIcon");
          // searchIcon.setAttribute("onclick","NewButton()");
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
    loadreportSwiteFieldLabel();
    // loadParentModule();
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
  
  
  function loadreportSwiteFieldLabel(){
    //get all active module : https://localhost:7241/api/Module
    fetch("https://localhost:7241/GetRepLabel")
        .then(Response => Response.json())
        .then(data => {
            var moduleIdDropdown = document.getElementById("label");
            data.forEach(function (GetRepLabel) {
                var option = document.createElement("option");
                option.value = GetRepLabel.reportFieldId;
                option.text = GetRepLabel.label;
                moduleIdDropdown.appendChild(option);
            });
        })
  }
  
// function loadParentModule(){
//     //get all active module : https://localhost:7241/api/GetAllMenu
//     fetch("https://localhost:7241/api/GetAllMenu")
//         .then(Response => Response.json())
//         .then(data => {
//             var parentIdDropdown = document.getElementById("ParentName");
//             data.forEach(function (parent) {
//                 var option = document.createElement("option");
//                 option.value = parent.MenuId;
//                 option.text = parent.MenuName;
//                 parentIdDropdown.appendChild(option);
//             });
//         })
// }
  
  
  
  // Submit form
  var form = document.getElementById("saveTheData");
  form.addEventListener("click", function (event) {
          // event.preventDefault(); // Prevent form submission
          // Get form values
          var ParentField = document.getElementById('ParentField');
          var label = document.getElementById('label').value;
          var Condition = document.getElementById('Condition').value;
          var BlankAllow = document.getElementById('BlankAllow').checked;

          if(ParentField.placeholder === "****<<New>>****"){
            var formData = new FormData();
            formData.append('ParentField', ParentField.value);
            formData.append('label', label);
            formData.append('Condition', Condition);
            formData.append('BlankAllow', BlankAllow);
    
            fetch("https://localhost:7241/ReportSuiteParentField", {
                method: 'POST',
                body: formData
              })
              .then(response => response.json())
              .then(data => {
                console.log(data);
                alert(data.message);
                var ParentField = document.getElementById('ParentField').value="";
                var label = document.getElementById('label').value =="";
                var Condition = document.getElementById('Condition').value ="";
                var BlankAllow = document.getElementById('BlankAllow').checked = false;
    
              })
              .catch(error => {
                console.error(error);
              });
          }else{
            alert("Make the Form New and Fill the Form.");
          }

  });
  
  
//   function searchModule(){
//     //load menu table
//   fetch("https://localhost:7241/GetAllReportSuiteFields")
//   .then(response => response.json())
//   .then(data => {
  
//     loadDataInTable(data);
//   })
//   .catch(error => console.log(error))
//   }
//   function loadDataInTable(data)
//   {
  
//           //load data work start here
//           //console.log("tushgadewebnfsd");
//           const gridContainerData = document.getElementById('gridContainer-data');
//           gridContainerData.innerHTML="";
//           var datacollength = para[0].columns.length;
//           //console.log(datacollength);
//           for (let i = 0; i < data.length; i++)
//           {
//               //console.log(data);
//               const row = document.createElement('div');
//               row.classList.add('row');
//               row.setAttribute("ondblclick", 'insertDatainform(this)');
  
//               // row.style.height='30px';
//               for (let j = 0; j < datacollength; j++) {
//                   //working on sarch icon
//                       // if(para[0].columns[j].id=='Button'){
//                       //     if(para[0].columns[j].visible==true){
//                       //         const col = document.createElement('div');
//                       //         col.classList.add('col-2','grid-item');//'col',
//                       //         col.innerHTML=`<i class="fa-solid fa-magnifying-glass SalesOrderSearchIcon"></i>`;
//                       //         col.style.width= `${para[0].columns[j].width}px`;
//                       //         col.style.border = '1px solid'
//                       //         col.style.height="30px";
//                       //         row.appendChild(col);
//                       //     }
//                       // }
//                   //console.log("2nd loop");
//                   for(let k = 0; k < datacollength; k++){
//                       // console.log("para[0].columns[j]:",para[0].columns[j].id,"==","propertyName:",Object.keys(data[i])[k]);
//                       if(para[0].columns[j].id == Object.keys(data[i])[k])
//                       {
//                           // console.log("match model/key name",para[0].columns[j].id,Object.keys(data[i])[k]);
  
//                               const propertyvalue = Object.keys(data[i])[k];
//                               //console.log(Object.keys(data[i])[k],propertyvalue);
//                               const col = document.createElement('div');
//                               if(para[0].columns[j].visible==false){
//                                 col.style.display='none';
//                               }
//                               col.innerText = data[i][propertyvalue];
//                               col.id = para[0].columns[j].id;
//                               // col.setAttribute('value', `${data[i][propertyvalue]}`);
//                               col.classList.add('col-2','grid-item','text-wrap');//'col',
//                               // col.name = para[0].columns[j].id;
//                               col.style.width= `${para[0].columns[j].width}px`;
//                               row.appendChild(col);
//                               k= datacollength+10;
  
//                       }
//                   }
//               }
//               gridContainerData.appendChild(row);
//           }
//         }
  
  
  
  
  //add double click data to the form

// function insertDatainform(row){
//       console.log("asw");
//       // const modal = document.querySelector("#exampleModal");
//       // const bootstrapModal = bootstrap.Modal.getInstance(modal);
//       // bootstrapModal.hide();
//       console.log(row.children.length);
//       // const valuesObject = {};
//       // for(let i=0 ; i<row.children.length;i++){
//       //   valuesObject[i] = row.children[i].textContent;
  
//       // }
//       // console.log(valuesObject);
//       // var colLength = para[0].columns.length;
//       // for(let i=0 ; i<row.children.length;i++){
//       //   valuesObject[i] = row.children[i].textContent;
  
//       // }
//       const ReportId = row.children[0].textContent;
//       const ReportName = row.children[1].textContent;
//       const ModuleId = row.children[2].textContent;
//       const ModuleName = row.children[3].textContent;
//       const ParentId = row.children[4].textContent;
//       const ParentName = row.children[5].textContent;
//       const DisplayName = row.children[6].textContent;
//       const ReportPath = row.children[7].textContent;
//       const ConName = row.children[8].textContent;
//       const IsVisible = row.children[9].textContent;
//       const SeqNo = row.children[10].textContent;
//       console.log("ModuleId,ModuleName",ModuleId,ModuleName);
//       let module = document.getElementById('ModuleName');
//       // console.log("module",module);
//       for (let i = 0; i < module.options.length; i++) {
//           // console.log("module.options.length",module.options.length);
//           //console.log("module.options[i].value === String(ModuleId)",module.options[i].value,"===", String(ModuleId));
//           // console.log("module.options.length",module.options.length);
//           if (module.options[i].value === String(ModuleId)) {
//               // console.log("module.options[i].value === String(ModuleId)",module.options[i].value, String(ModuleId));
//               module.options[i].selected = true;
//               break; // Optional: If you only have one matching option, you can break the loop
//           }
//       }
//       let parent = document.getElementById('ParentName');
//       // Loop through the options and set the selected property based on parentId
//       for (let i = 0; i < parent.options.length; i++) {
//           if (parent.options[i].value === String(ParentId)) {
//               parent.options[i].selected = true;
//           break; // Optional: If you only have one matching option, you can break the loop
//           }
//       }
//       document.getElementById('ReportName').value = ReportName;
//       document.getElementById('ReportName').name = ReportId;
//       document.getElementById('DisplayName').value = DisplayName;
//       document.getElementById('ReportPath').value = ReportPath;
//       document.getElementById('ConName').value = ConName;
//       document.getElementById('IsVisible').checked = (IsVisible.toLowerCase() === "true");
//       document.getElementById('SeqNo').value = SeqNo;
  
// }
  
//   function deleteModule(){
//       let ReportId = document.getElementById('ReportName').name;
//       console.log("ReportId",ReportId);
//       fetch(`https://localhost:7241/api/Menu/${menuId}`,{
//         method: 'DELETE',
//         })
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           alert(data.message);
//           const form = document.getElementById('myForm');
    
//           // Reset the form to its initial state
//           form.reset();
//         })
//         .catch(error => console.log(error))
// }

// function updateModule(){
//       var ReportName = document.getElementById('ReportName').value;
//       var ModuleName = document.getElementById('ModuleName').value;
//       var ParentName = document.getElementById('ParentName').value;
//       var DisplayName = document.getElementById('DisplayName').value;
//       var ReportPath = document.getElementById('ReportPath').value;
//       var ConName = document.getElementById('ConName').value;
//       var IsVisible = document.getElementById('IsVisible').checked;
//       var SeqNo = document.getElementById('SeqNo').value;
  
//       var formData = new FormData();
//       formData.append('ReportName', ReportName);
//       formData.append('ModuleName', ModuleName);
//       formData.append('ParentName', ParentName);
//       formData.append('DisplayName', DisplayName);
//       formData.append('ReportPath', ReportPath);
//       formData.append('ConName', ConName);
//       formData.append('IsVisible', IsVisible);
//       formData.append('SeqNo', SeqNo);
  
//       updatemenuData(formData);
    
// }

// function updatemenuData(formData) {
//       console.log("Form Data:");
//       for (let pair of formData.entries()) {
//           console.log(pair[0] + ": " + pair[1]);
//       }
//       var ReportName = document.getElementById('ReportName').name;
//       // fetch(`https://localhost:7241/api/Report/${menuId}`, {
//       //   method: 'PUT',
//       //   body: formData
//       // })
//       // .then(response => response.json())
//       // .then(data => {
//       //   console.log(data);
//       //   alert(data.message);
//       //   const form = document.getElementById('myForm');
    
//       //   // Reset the form to its initial state
//       //   form.reset();
//       // })
//       // .catch(error => {
//       //   console.error(error);
//       // });
// }
  
  
  
  function NewButton(){
    var ParentField = document.getElementById("ParentField");
    ParentField.placeholder = "****<<New>>****";
  }
    