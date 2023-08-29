

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
            id: "reportFieldId",
            type: "input",
            inputType: "number",
            label: "reportField Id",
            align: "left",
            width: 150,
            sort: "str",
            visible: false,
            filter: "#text_filter",
        },
        {
          id: "label",
          inputType: "text",
          field:"primary",
          type: "input",
          label: "label",
          align: "left",
          width: 150,
          sort: "str",
          visible: true,
          filter: "#text_filter",
        },
        {
          id: "reportId",
          type: "ed",
          label: "Report Id",
          align: "left",
          width: 150,
          sort: "str",
          visible: false,
          filter: "#text_filter",
        },
        {
          id: "displayName",
          inputType: "text",
          type: "select",
          label: "display Name",
          align: "center",
          width: 150,
          sort: "str",
          visible: true,
          filter: "#text_filter",
        },
        {
          id: "valueField",
          inputType: "text",
          type: "input",
          label: "value Field",
          align: "center",
          width: 150,
          sort: "str",
          visible: true,
          filter: "#text_filter",
        },
        {
          id: "labelField",
          inputType: "text",
          type: "select",
          label: "label Field",
          align: "center",
          width: 200,
          sort: "str",
          visible: true,
          filter: "#text_filter",
        },
        {
          id: "defaultValue",
          inputType: "text",
          type: "input",
          label: "default Value",
          align: "center",
          width: 200,
          sort: "str",
          visible: true,
          filter: "#text_filter",
        },
        // {
        //   id: "Button",
        //   type: "btn",
        //   label: "...",
        //   align: "left",
        //   width: 40,
        //   sort: "str",
        //   visible: false,
        // },
        {
          id: "fieldType",
          inputType: "text",
          type: "input",
          label: "field Type",
          align: "left",
          width: 200,
          sort: "str",
          visible: true,
        },
        {
          id: "mapField",
          inputType: "text",
          type: "input",
          label: "map Field",
          align: "left",
          width: 200,
          sort: "str",
          visible: true,
        },
        {
          id: "referenceSource",
          inputType: "text",
          type: "input",
          label: "reference Source",
          align: "left",
          width: 200,
          sort: "str",
          visible: true,
        },
        {
            id: "operators",
            inputType: "text",
            type: "input",
            label: "operators",
            align: "left",
            width: 200,
            sort: "str",
            visible: true,
        },
        {
          id: "isSysParameter",
          inputType: "checkbox",
          type: "input",
          label: "is System Parameter",
          align: "left",
          width: 125,
          sort: "str",
          visible: true,
        },
        {
            id: "filterOnly",
            inputType: "checkbox",
            type: "input",
            label: "filter Only",
            align: "left",
            width: 125,
            sort: "str",
            visible: true,
        },
        {
            id: "multiSelect",
            inputType: "checkbox",
            type: "input",
            label: "multi Select",
            align: "left",
            width: 125,
            sort: "str",
            visible: true,
        },
        {
          id: "seqNo",
          inputType: "number",
          type: "input",
          label: "Seq. No.",
          align: "center",
          width: 90,
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
          fileIcon.setAttribute("onclick","NewButton('new')");
          fileIcon.style.padding="5px 5px";
          inputColumn.appendChild(fileIcon);
          const searchIcon = document.createElement("i");
          searchIcon.classList.add("fa-solid", "fa-magnifying-glass", "AddMenuSearchIcon");
          searchIcon.setAttribute("onclick","searchModule()");
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
    loadRepLabelName();
    loadAllReportName();
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
  
  
function loadRepLabelName(){
    //get all active module : https://localhost:7241/api/Module
    fetch("https://localhost:7241/GetRepLabel")
        .then(Response => Response.json())
        .then(data => {
            var moduleIdDropdown = document.getElementById("labelField");
            data.forEach(function (module) {
                var option = document.createElement("option");
                option.value = module.reportFieldId;
                option.text = module.label;
                moduleIdDropdown.appendChild(option);
            });
        })
}
function loadAllReportName(){
  //get all active module : https://localhost:7241/api/Module
  fetch("https://localhost:7241/api/GetAllReportSp")
      .then(Response => Response.json())
      .then(data => {
          var moduleIdDropdown = document.getElementById("displayName");
          data.forEach(function (module) {
              var option = document.createElement("option");
              option.value = module.ReportId;
              option.text = module.DisplayName;
              moduleIdDropdown.appendChild(option);
          });
      })
}
  
  
  
  // Submit form
  var form = document.getElementById("saveTheData");
  form.addEventListener("click", function (event) {
    let labelplaceholder = document.getElementById('label');
    if(labelplaceholder.placeholder != "****<<New>>****"){
      updateReportSuiteField();
    }else{
      // event.preventDefault(); // Prevent form submission
      // Get form values
      var label = document.getElementById('label').value;
      var dispayName = document.getElementById('displayName').value;
      var valueField = document.getElementById('valueField').value;
      var labelField = document.getElementById('labelField').value;
      var defaultValue = document.getElementById('defaultValue').value;
      var fieldType = document.getElementById('fieldType').value;          var ParentName = document.getElementById('valueField').value;
      var mapField = document.getElementById('mapField').value;
      var referenceSource = document.getElementById('referenceSource').value;
      var operators = document.getElementById('operators').value;
      var isSysParameter = document.getElementById('isSysParameter').checked;
      var filterOnly = document.getElementById('filterOnly').checked;
      var multiSelect = document.getElementById('multiSelect').checked;
      var seqNo = document.getElementById('seqNo').value;

      var formData = new FormData();
      formData.append('label', label);
      formData.append('ReportId', dispayName);
      formData.append('valueField', valueField);
      formData.append('labelField', labelField);
      formData.append('defaultValue', defaultValue);
      formData.append('fieldType', fieldType);
      formData.append('mapField', mapField);
      formData.append('referenceSource', referenceSource);
      formData.append('operators', operators);
      formData.append('isSysParameter', isSysParameter);
      formData.append('filterOnly', filterOnly);
      formData.append('multiSelect', multiSelect);
      formData.append('seqNo', seqNo);

      fetch("https://localhost:7241/InsertReportSuiteField", {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          alert(data.message);
          NewButton();

        })
        .catch(error => {
          console.error(error);
        });
    }
    
  });
  
  
function searchModule(){
    //load menu table
  fetch("https://localhost:7241/GetAllReportSuiteFields")
  .then(response => response.json())
  .then(data => {
  
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
  document.getElementById('label').placeholder = "";

      console.log("asw");
      // const modal = document.querySelector("#exampleModal");
      // const bootstrapModal = bootstrap.Modal.getInstance(modal);
      // bootstrapModal.hide();
      console.log(row.children.length);
      // const valuesObject = {};
      // for(let i=0 ; i<row.children.length;i++){
      //   valuesObject[i] = row.children[i].textContent;
  
      // }
      // console.log(valuesObject);
      // var colLength = para[0].columns.length;
      // for(let i=0 ; i<row.children.length;i++){
      //   valuesObject[i] = row.children[i].textContent;
  
      // }
      const reportFieldId = row.children[0].textContent;
      const label = row.children[1].textContent;
      const reportId = row.children[2].textContent;
      const displayName = row.children[3].textContent;
      const valueField = row.children[4].textContent;
      const labelFieldvalue = row.children[5].textContent;
      const defaultValue = row.children[6].textContent;
      const fieldType = row.children[7].textContent;
      const mapField = row.children[8].textContent;
      const referenceSource = row.children[9].textContent;
      const operators = row.children[10].textContent;
      const isSysParameter = row.children[11].textContent;
      const filterOnly = row.children[12].textContent;
      const multiSelect = row.children[13].textContent;
      const seqNo = row.children[14].textContent;
      // console.log("ModuleId,ModuleName",ModuleId,ModuleName);
      let LabelField = document.getElementById('labelField');
      // console.log("module",module);
      for (let i = 0; i < LabelField.options.length; i++) {
          // console.log("module.options.length",module.options.length);
          //console.log("module.options[i].value === String(ModuleId)",module.options[i].value,"===", String(ModuleId));
          // console.log("module.options.length",module.options.length);
          if (LabelField.options[i].value === String(labelFieldvalue)) {
              // console.log("module.options[i].value === String(ModuleId)",module.options[i].value, String(ModuleId));
              LabelField.options[i].selected = true;
              break; // Optional: If you only have one matching option, you can break the loop
          }
      }
      let parent = document.getElementById('displayName');
      // Loop through the options and set the selected property based on parentId
      for (let i = 0; i < parent.options.length; i++) {
          if (parent.options[i].value === String(reportId)) {
              parent.options[i].selected = true;
          break; // Optional: If you only have one matching option, you can break the loop
          }
      }
      document.getElementById('label').value = label;
      document.getElementById('label').name = reportFieldId;
      document.getElementById('valueField').value = valueField;
      // var labelField = document.getElementById('labelField').value;
      document.getElementById('defaultValue').value = defaultValue;
      document.getElementById('fieldType').value = fieldType;
      document.getElementById('mapField').value = mapField;
      document.getElementById('referenceSource').value = referenceSource;
      document.getElementById('operators').value =operators;
      document.getElementById('isSysParameter').checked = (isSysParameter.toLowerCase() ==="true");
      document.getElementById('filterOnly').checked = (filterOnly.toLowerCase() === "true");
      document.getElementById('multiSelect').checked = (multiSelect.toLowerCase() === "true");
      document.getElementById('seqNo').value = seqNo;
  
  }
  
  function deleteModule(){
      let reportFieldId = document.getElementById('label').name;
      // console.log("ReportId",ReportId);
      fetch(`https://localhost:7241/${reportFieldId}`,{
        method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          alert(data.message);
          NewButton();
          searchModule();
        })
        .catch(error => console.log(error))
    }
    function updateReportSuiteField(){
      var label = document.getElementById('label').value;
      var dispayName = document.getElementById('displayName').value;
      var valueField = document.getElementById('valueField').value;
      var labelField = document.getElementById('labelField').value;
      var defaultValue = document.getElementById('defaultValue').value;
      var fieldType = document.getElementById('fieldType').value;
      var mapField = document.getElementById('mapField').value;
      var referenceSource = document.getElementById('referenceSource').value;
      var operators = document.getElementById('operators').value;
      var isSysParameter = document.getElementById('isSysParameter').checked;
      var filterOnly = document.getElementById('filterOnly').checked;
      var multiSelect = document.getElementById('multiSelect').checked;
      var seqNo = document.getElementById('seqNo').value;

      var formData = new FormData();
      formData.append('label', label);
      formData.append('ReportId', dispayName);
      formData.append('valueField', valueField);
      formData.append('labelField', labelField);
      formData.append('defaultValue', defaultValue);
      formData.append('fieldType', fieldType);
      formData.append('mapField', mapField);
      formData.append('referenceSource', referenceSource);
      formData.append('operators', operators);
      formData.append('isSysParameter', isSysParameter);
      formData.append('filterOnly', filterOnly);
      formData.append('multiSelect', multiSelect);
      formData.append('seqNo', seqNo);
  
      updatemenuData(formData);
    
    }
    function updatemenuData(formData) {
      console.log("Form Data:");
      for (let pair of formData.entries()) {
          console.log(pair[0] + ": " + pair[1]);
      }
      let reportFieldId = document.getElementById('label').name;
      // console.log("ReportId",ReportId);
      fetch(`https://localhost:7241/${reportFieldId}`,{
        method: 'PUT',
        body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          alert(data.message);
          NewButton();
          searchModule();
        })
        .catch(error => console.log(error))
    }
  
  
  
  function NewButton(parametter){
    document.getElementById('label').value="";
    if(parametter=='new'){
      document.getElementById('label').placeholder="****<<New>>****";
    }
    document.getElementById('displayName').options[0].selected = true;
    document.getElementById('valueField').value = "";
    document.getElementById('labelField').options[0].selected = true;
    document.getElementById('defaultValue').value = "";
    document.getElementById('fieldType').value = "";
    document.getElementById('mapField').value = "";
    document.getElementById('referenceSource').value = "";
    document.getElementById('operators').value = "";
    document.getElementById('isSysParameter').checked = false;
    document.getElementById('filterOnly').checked  = false;
    document.getElementById('multiSelect').checked = false;
    document.getElementById('seqNo').value = "";
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
searchedkey = document.querySelector(".label");
console.log("searchedVendor",searchedkey);
searchedkey.addEventListener('keyup', ()=>{
  Search();
  console.log("searchedVendor in side keyup",searchedkey);

});


function Search(){
  let InputValue = searchedkey.value.toLowerCase();

  let dataRow = document.getElementsByClassName("dataRow");
  console.log("searchedVendor in side search",dataRow);
  for(i=0;i<dataRow.length;i++){
      console.log("dataRow[i].childNodes[1].innerText",InputValue);
      let idnamevalue = dataRow[i].childNodes[1].innerText.toLowerCase();
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

