
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
        id: "moduleId",
        type: "ed",
        label: "module Id",
        align: "left",
        width: 150,
        sort: "str",
        visible: false,
        filter: "#text_filter",
      },
      {
        id: "moduleName",
        inputType: "text",
        type: "input",
        field:"primary",
        label: "module Name",
        align: "center",
        width: 150,
        sort: "str",
        visible: true,
        filter: "#text_filter",
      },
      {
        id: "description",
        inputType: "text",
        type: "input",
        label: "description",
        align: "center",
        width: 150,
        sort: "str",
        visible: true,
        filter: "#text_filter",
      },
      {
        id: "logo",
        inputType: "file",
        type: "input",
        label: "logo",
        align: "center",
        width: 200,
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
        id: "isDefault",
        inputType: "checkbox",
        type: "input",
        label: "is Default",
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
      }



      inputRow.appendChild(inputColumn);
      formPart.appendChild(inputRow);
    }

    MainRow.appendChild(formPart);
  }
  formContainer.appendChild(MainRow);
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
form.addEventListener("click", function (event) {
  var moduleNameInput = document.getElementById('moduleName');
  if(moduleNameInput.placeholder != "****<<New>>****"){
    updateModule();
  }else{
    // event.preventDefault(); // Prevent form submission
    // Get form values
    var moduleNameInput = document.getElementById('moduleName').value;
    var descriptionInput = document.getElementById('description').value;
    var isDefaultInput = document.getElementById('isDefault').checked;
    var isActiveInput = document.getElementById('isActive').checked;
    var seqNoInput = document.getElementById('seqNo').value;
    var formData = new FormData();
    formData.append('moduleName', moduleNameInput);
    formData.append('description', descriptionInput);
    formData.append('isDefault', isDefaultInput);
    formData.append('isActive', isActiveInput);
    formData.append('seqNo', seqNoInput);
    var logoInput = document.getElementById('logo');
    var selectedFile = logoInput.files[0];
    console.log(selectedFile,"sentimage");
    if (selectedFile) {
      formData.append('imageFile', selectedFile);
    }
    submitForm(formData);
  }
});
function submitForm(formData) {
  console.log("Form Data:");
  for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
  }

  fetch("https://localhost:7241/api/Module", {
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
  })
}

function searchModule(){
  //load menu table
fetch("https://localhost:7241/api/Module")
.then(response => response.json())
.then(data => {

  loadDataInTable(data);
  // const gridContainerdata = document.querySelector("#gridContainer-data");
  // Generate HTML for each module
  //<div style="word-break: break-word;" class="col-2 grid-item ">${menu.MenuId}</div>
  //<div style="word-break: break-word;" class="col-2 grid-item ">${menu.ModuleId}</div>
  //<div style="word-break: break-word;" class="col-2 grid-item ">${menu.ParentId }</div>
  // const moduleHTML = data.map((menu) => {
  //   return `
  //     <div class="row bottomField1stRow" ondblclick="insertDatainform(this)">
  //       <div id="${menu.MenuId}" style="word-break: break-word;" class="col-2 grid-item text-wrap">${menu.MenuName}</div>
  //       <div id="${menu.ModuleId}" style="word-break: break-word;" class="col-2 grid-item text-wrap">${menu.ModuleName }</div>
  //       <div id="${menu.ParentId}" style="word-break: break-word;" class="col-2 grid-item text-wrap">${menu.ParentName}</div>
  //       <div style="word-break: break-word;" class="col-2 grid-item text-wrap">${menu.PageName}</div>
  //       <div style="word-break: break-word;" class="col-2 grid-item text-wrap">${menu.TabCaption}</div>
  //       <div style="word-break: break-word;" class="col-2 grid-item text-wrap">${menu.NavigateUrl}</div>
  //       <div style="word-break: break-word;" class="col-2 grid-item text-wrap">${menu.TabWidth }</div>
  //       <div style="word-break: break-word;" class="col-2 grid-item text-wrap">${menu.PageHeight }</div>
  //       <div style="word-break: break-word;" class="col-2 grid-item text-wrap">${menu.IsVisible}</div>
  //       <div style="word-break: break-word;" class="col-2 grid-item text-wrap">${menu.SeqNo}</div>
  //     </div>
  //   `;
  // }).join("");

  // // Append the generated HTML to the modal body
  // gridContainerdata.innerHTML = moduleHTML;
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
  document.getElementById('moduleName').placeholder = "";
    console.log("asw");
    const moduleId = row.children[0].textContent;
    const moduleName = row.children[1].textContent;
    const description = row.children[2].textContent;
    const isDefault = row.children[4].textContent;
    const isActive = row.children[5].textContent;
    const seqNo = row.children[6].textContent;
    console.log("seqNo",seqNo);
  
    document.getElementById('moduleName').value = moduleName;
    document.getElementById('moduleName').name = moduleId;
    document.getElementById('description').value = description;
    document.getElementById('isDefault').checked = (isDefault.toLowerCase() === "true");
    document.getElementById('isActive').checked = (isActive.toLowerCase() === "true");
    document.getElementById('seqNo').value = seqNo;

}

function deleteModule(){
  let moduleId = document.getElementById('moduleName').name;
  console.log("moduleId",moduleId);
  fetch(`https://localhost:7241/api/Module/DeleteModule/${moduleId}`,{
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
function updateModule(){
    var moduleNameInput = document.getElementById('moduleName').value;
    var descriptionInput = document.getElementById('description').value;
    var isDefaultInput = document.getElementById('isDefault').checked;
    var isActiveInput = document.getElementById('isActive').checked;
    var seqNoInput = document.getElementById('seqNo').value;
    var formData = new FormData();
    formData.append('moduleName', moduleNameInput);
    formData.append('description', descriptionInput);
    formData.append('isDefault', isDefaultInput);
    formData.append('isActive', isActiveInput);
    formData.append('seqNo', seqNoInput);
    var logoInput = document.getElementById('logo');
    var selectedFile = logoInput.files[0];
    if (selectedFile) {
      formData.append('imageFile', selectedFile);
    }
    updatemoduleData(formData);

}
function updatemoduleData(formData) {
  console.log("Form Data:");
  for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
  }
  let moduleId = document.getElementById('moduleName').name;
  console.log("moduleId: ",moduleId);
  fetch(`https://localhost:7241/api/Module/${moduleId}`, {
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
  .catch(error => {
    console.error(error);
  });
}



function NewButton(parametter){
  document.getElementById('moduleName').value="";
  if(parametter=='new'){
    document.getElementById('moduleName').placeholder = "****<<New>>****";
    }
  document.getElementById('logo').value ="";
  document.getElementById('description').value = "";
  document.getElementById('isDefault').checked = false;
  document.getElementById('isActive').checked = false;
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
searchedkey = document.querySelector(".moduleName");
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

  


    
