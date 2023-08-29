

const para = [
  {
    id: "menu",
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
        id: "companyId",
        type: "input",
        inputType: "text",
        field:"primary",
        label: "company Id",
        align: "left",
        width: 150,
        sort: "str",
        visible: true,
        // value:1,
        filter: "#text_filter",
      },
      {
        id: "shortName",
        inputType: "text",
        type: "input",
        // field:"primary",
        label: "Short Name",
        align: "center",
        width: 150,
        sort: "str",
        visible: true,
        filter: "#text_filter",
      },
      {
        id: "companyName",
        inputType: "text",
        type: "input",
        label: "Company Name",
        align: "center",
        width: 150,
        sort: "str",
        visible: true,
        filter: "#text_filter",
      },
      {
        id: "vatRegNo",
        inputType: "text",
        type: "input",
        label: "VAT. Reg. No.",
        align: "left",
        width: 200,
        sort: "str",
        visible: true,
      },
      {
        id: "tinNo",
        inputType: "text",
        type: "input",
        label: "TIN. No.",
        align: "left",
        width: 200,
        sort: "str",
        visible: true,
      },
      {
        id: "tradeLicenseNo",
        inputType: "text",
        type: "input",
        label: "Trade License No.",
        align: "left",
        width: 200,
        sort: "str",
        visible: true,
      },
      {
        id: "address",
        inputType: "text",
        type: "input",
        label: "Address",
        align: "left",
        width: 200,
        sort: "str",
        visible: true,
      },
      {
        id: "phoneNo",
        inputType: "number",
        type: "input",
        label: "Phone No.",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
      {
        id: "faxNo",
        inputType: "text",
        type: "input",
        label: "Fax No.",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
      {
        id: "email",
        inputType: "email",
        type: "input",
        label: "Email",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
      {
        id: "web",
        inputType: "text",
        type: "input",
        label: "Web",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
      {
        id: "logo",
        subid: "imageFile",
        inputType: "file",
        type: "input",
        label: "Logo",
        align: "left",
        width: 115,
        sort: "str",
        visible: true,
      },
      {
        id: "isMaster",
        inputType: "checkbox",
        type: "input",
        label: "Is Master",
        align: "left",
        width: 125,
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
    const MainRow = document.createElement("form");
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
            input.name = column.id;
          }else if(column.inputType == "text"){
            input.type = column.inputType;
            input.name = column.id;
          }else if(column.inputType == "checkbox"){
            input.classList.add('form-check-input');
            input.type = column.inputType;
            input.name = column.id;
          }else if(column.inputType == "file"){
            input.type = column.inputType;
            input.name = column.subid;
          }
          // input.type = column.type === "ro" ? "text" : "number";
          input.id = column.id;
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
    // loadModuleName();
    // loadParentModule();
    loadSelectOption();
  }
  
  function loadSelectOption(){
  
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
        // if (i%2 == 0) {
        //   col.style.backgroundColor='gray';
        // }else{
        //   col.style.backgroundColor='white';
        // }
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
  
  
  function saveTheData()
  {
    const columns = para[0].columns;
    let primaryfield;
  
    for (let i = 0; i < columns.length; i++) {

  
      if (columns[i].field == 'primary') {
        // console.log("element",element);
        primaryfield = document.getElementById(columns[i].id);
        console.log("primaryfield",primaryfield);
        break; 
      }
    }
    if(primaryfield.placeholder != "****<<New>>****"){
      updateMenu();
    }else{

      const form = document.getElementById(`${para[0].id}`);
      const formData = new FormData(form);
      
      for (let pair of formData.entries()) {
        const key = pair[0];
        const element = form.elements[key];
      
        if (element.type === "checkbox") {
          formData.set(key, element.checked); 
        }
      }
      
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      
  
  
  
  
      fetch("https://localhost:7241/api/Company", {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          alert(data.message);
          searchModule();
          NewButton("new");
        })
        .catch(error => {
          console.error(error);
        });
  
    }
  }
  
  
  function searchModule(){
    //load menu table
  fetch("https://localhost:7241/api/Company")
  .then(response => response.json())
  .then(data => {
    console.log("spGetClientTypes",data);
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
              row.classList.add('row');
              row.setAttribute("ondblclick", 'insertDatainform(this)');
  
              // row.style.height='30px';
              for (let j = 0; j < datacollength; j++) {
                 
                  for(let k = 0; k < datacollength; k++){
                      //const propertyName = Object.keys(data[i])[k];
                      console.log("para[0].columns[j]:",para[0].columns[j].id,"==","propertyName:",Object.keys(data[i])[k]);
                      if(para[0].columns[j].id == Object.keys(data[i])[k])
                      {
                          //console.log("match model/key name",para[0].columns[j].id,Object.keys(data[i])[k]);
  
                              const propertyvalue = Object.keys(data[i])[k];
                              const col = document.createElement('div');
                              if(para[0].columns[j].visible==false){
                                col.style.display='none';
                              }
                             
                              col.id = Object.keys(data[i])[k];
                              col.innerText = data[i][propertyvalue];
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
  
  
  
  
  //add double click data to the form
  function insertDatainform(row){
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
    // var MenuNameplaceholder = document.getElementById('MenuName');
    primaryfield.placeholder="";
      console.log("asw");

      let rowsValues ={};
      for (let i = 0; i < row.children.length; i++) {
        rowsValues[row.children[i].id] = row.children[i].textContent;
        // values.push(row.children[i].textContent);
      }
      // console.log("rowsValues",rowsValues);
  
      for(let i = 0; i< para[0].columns.length;i++){
        // let j = 0;
        if(para[0].columns[i].type === "select"){
  
          let selectOptionId = document.getElementById(`${para[0].columns[i].id}`);
          let optionValue;
          // console.log(Object.keys(rowsValues).length, "Object.keys(rowsValues).length");
          for (let j = 0; j < Object.keys(rowsValues).length; j++) {
            if(para[0].columns[i].id === Object.keys(rowsValues)[j]){
              optionValue = rowsValues[Object.keys(rowsValues)[j]];
              break;
            }
          }

          for (let k = 0; k < selectOptionId.options.length; k++) {

              if (selectOptionId.options[k].innerText === String(optionValue)) {
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
            for (let j = 0; j < Object.keys(rowsValues).length; j++) {
              if(para[0].columns[i].id === Object.keys(rowsValues)[j]){
                inputNumber.value = rowsValues[Object.keys(rowsValues)[j]];
                break;
              }
            }
          }if(para[0].columns[i].inputType === "email"){
            var inputNumber = document.getElementById(`${para[0].columns[i].id}`);
            // let optionValue;
            // console.log(Object.keys(rowsValues).length, "Object.keys(rowsValues).length");
            for (let j = 0; j < Object.keys(rowsValues).length; j++) {
              if(para[0].columns[i].id === Object.keys(rowsValues)[j]){
                inputNumber.value = rowsValues[Object.keys(rowsValues)[j]];
                break;
              }
            }
          }else if(para[0].columns[i].inputType == "text"){
            var inputNumber = document.getElementById(`${para[0].columns[i].id}`);
            // let optionValue;
            // console.log(Object.keys(rowsValues).length, "Object.keys(rowsValues).length");
            for (let j = 0; j < Object.keys(rowsValues).length; j++) {
              if(para[0].columns[i].id === Object.keys(rowsValues)[j]){
                inputNumber.value = rowsValues[Object.keys(rowsValues)[j]];
                if(para[0].columns[i].field === "primary"){
                  let primaryId;
                  for(let z = 0; z < para[0].columns.length; z++){
                    if(para[0].columns[i].label == para[0].columns[z].label){
                      primaryId = para[0].columns[z].id;
                      break;
                    }
                  }
                  for (let y = 0; y < Object.keys(rowsValues).length; y++) {
                    if(primaryId === Object.keys(rowsValues)[y]){
                      inputNumber.placeholder = rowsValues[Object.keys(rowsValues)[y]];
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
            for (let j = 0; j < Object.keys(rowsValues).length; j++) {
              if(para[0].columns[i].id === Object.keys(rowsValues)[j]){
                inputNumber.checked = rowsValues[Object.keys(rowsValues)[j]];
                break;
              }
            }
          }
      }
    }
  
  }
  
  function deleteMenu(){
    const columns = para[0].columns;
    let primaryfield;
  
    for (let i = 0; i < columns.length; i++) {
      if (columns[i].field == 'primary') {
        // console.log("element",element);
        primaryfield = document.getElementById(columns[i].id).placeholder;
        break; // Exit the loop when the condition is met
      }
    }
    
      // let menuId = document.getElementById('MenuName').name;
      // console.log("menuId",menuId);
  
      fetch(`https://localhost:7241/api/Company/${primaryfield}`,{
        method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          alert(data.message);
          searchModule();
          NewButton("new");
  
        })
        .catch(error => console.log(error))
  }
  
  function updateMenu(){
  
      // Get form values
      const form = document.getElementById(`${para[0].id}`);
      const formData = new FormData(form);
      
      // Update checkbox values to true in the FormData object
      for (let pair of formData.entries()) {
        const key = pair[0];
        const element = form.elements[key];
      
        if (element.type === "checkbox") {
          formData.set(key, element.checked); // Update the FormData value to true
        }
      }
      
      // Iterate through the updated FormData object
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
  
      updatemenuData(formData);
    
    }
    function updatemenuData(formData) {
      const columns = para[0].columns;
      let primaryfield;
  
      for (let i = 0; i < columns.length; i++) {
        if (columns[i].field == 'primary') {
          // console.log("element",element);
          primaryfield = document.getElementById(`${columns[i].id}`).placeholder;
          break; // Exit the loop when the condition is met
        }
      }
      console.log("primaryfield",primaryfield);
      fetch(`https://localhost:7241/api/Company/${primaryfield}`, {
        method: 'PUT',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert(data.message);
        searchModule();
        NewButton("new");
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  function NewButton(parameter) {
    const columns = para[0].columns;
  
    columns.forEach(column => {
      const element = document.getElementById(column.id);
  
      if (element) {
        if (column.inputType === "text" || column.inputType === "number") {
          element.value = "";
        } else if (column.inputType === "checkbox") {
          element.checked = false;
        }
  
        if (parameter === "new" && column.field === "primary") {
          element.placeholder = "****<<New>>****";
          element.name = column.id;
        }
  
        if (column.type === "select") {
          element.options[0].selected = true;
        }
      }
    });
  }
  
  
    

  