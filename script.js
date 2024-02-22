var subBut = document.getElementById("submit");
// console.log(subBut);
subBut.addEventListener("click", (e)=>{
    e.preventDefault();
   // Getting input text values
   let firstName = document.getElementById('first-name').value;
   let lastName = document.getElementById('last-name').value;
   let address = document.getElementById('address').value;
   let pincode = document.getElementById('pincode').value;
   let state = document.getElementById('formState').value;
   let country = document.getElementById('formCountry').value;
  //  console.log(firstName, lastName, address, pincode, state, country);

    // Getting radio box value
    const genderInputs = document.getElementsByName('gender');
    let gender = '';
    for (let GI of genderInputs) {
      if (GI.checked) {
        gender = GI.value;
        break;
      }
    }
    // console.log(gender);

  // Getting check box values
  const foodInputs = document.getElementsByName('foodCheck');
  // console.log(foodInputs);
  let selectedFood = [];
  for (let FI of foodInputs) {
    if (FI.checked) {
      selectedFood.push(FI.value);
    }
  }
  if (selectedFood.length < 2) {
    alert('Please select at least 2 food options.');
  }else{
    selectedFood = selectedFood.join(', ');
    // console.log(selectedFood);
  
        // Creating table dynamic row
        let tBody = document.getElementById('tBody');
        let newR = document.createElement('tr');
        newR.innerHTML = ` 
          <td>${firstName}</td>
          <td>${lastName}</td>
          <td>${gender}</td>
          <td>${address}</td>
          <td>${pincode}</td>
          <td>${state}</td>
          <td>${country}</td>
          <td>${selectedFood}</td>
        `;
        
        // adding new row
        tBody.append(newR);
        alert(`Your Opinion Successfully Added!`);
  
        // Clearing form fields
        document.getElementById('form').reset();
  }
  
  
});



/*
document.getElementById('foodForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Getting input text values
  let firstName = document.getElementById('formFirstName').value;
  let lastName = document.getElementById('formLastName').value;
  let address = document.getElementById('formAddress').value;
  let pincode = document.getElementById('formPincode').value;
  let state = document.getElementById('formState').value;
  let country = document.getElementById('formCountry').value;
  
  
  // Getting radio box value
  const genderInputs = document.getElementsByName('gender');
  let gender = '';
  for (let GI of genderInputs) {
    if (GI.checked) {
      gender = GI.value;
      break;
    }
  }

  // Getting check box values
  const foodInputs = document.getElementsByName('foodCheck');
  let selectedFood = [];
  for (let FI of foodInputs) {
    if (FI.checked) {
      selectedFood.push(FI.value);
    }
  }

  if (selectedFood.length < 2) {
    alert('Please select at least 2 food options.');
    return;
  }

  selectedFood = selectedFood.join(', ');



  // Creating table dynamic row
  const tableBody = document.getElementById('tbody');
  const newRow = document.createElement('tr');
  newRow.innerHTML = ` 
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${gender}</td>
    <td>${address}</td>
    <td>${pincode}</td>
    <td>${state}</td>
    <td>${country}</td>
    <td>${selectedFood}</td>
  `;
  
  // adding new row
  tableBody.appendChild(newRow);

  // Clearing form fields
  document.getElementById('foodForm').reset();
});



*/

/*
//mainDiv
const mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "container-fluid p-0");
document.body.append(mainDiv);

//mainRow
const mainRow = document.createElement("div");
mainRow.setAttribute("class", "row bg-info m-0");
mainDiv.append(mainRow);



//mainColumn1
const mainColumn1 = document.createElement("div");
mainColumn1.setAttribute("class", "col-lg-6 m-auto my-5 bg-white form-div");
mainRow.append(mainColumn1);

//form
const mainForm = document.createElement("form");
mainForm.setAttribute("class", "my-3 mx-2");
mainColumn1.append(mainForm);

//formRows
const formRow1 = document.createElement("div");
formRow1.setAttribute("class", "row mb-3");
const formRow2 = document.createElement("div");
formRow2.setAttribute("class", "row mb-3");
const formRow3 = document.createElement("div");
formRow3.setAttribute("class", "row mb-3");
const formRow4 = document.createElement("div");
formRow4.setAttribute("class", "row mb-3");
const formRow5 = document.createElement("div");
formRow5.setAttribute("class", "row mb-3");
const formRow6 = document.createElement("div");
formRow6.setAttribute("class", "row mb-3");
mainForm.append(formRow1, formRow2, formRow3, formRow4, formRow5, formRow6);

//formRow1 - col1
const formRow1_col1 = document.createElement("div");
formRow1_col1.setAttribute("class", "form-group col-lg-6");
const firstNameLabel = document.createElement("label");
firstNameLabel.setAttribute("class", "formLabel");
firstNameLabel.setAttribute("for", "inputNameF");
firstNameLabel.innerHTML = "First Name <span class='text-danger'>*</span>";
formRow1_col1.append(firstNameLabel);
formRow1_col1.innerHTML = '<input type="text" class="form-control w-100 py-1 px-2" id="inputNameF" placeholder="Enter your First Name" required />';

//formRow1 - col2
const formRow1_col2 = document.createElement("div");
formRow1_col2.setAttribute("class", "form-group col-lg-6");

formRow1.append(formRow1_col1, formRow1_col2);








//mainColumn2
const mainColumn2 = document.createElement("div");
mainColumn2.setAttribute("class", "col-lg-10 m-auto mb-5 py-5 bg-white");
mainRow.append(mainColumn2);

//tableResDiv
const tableResDiv = document.createElement("div");
tableResDiv.setAttribute("class", "table-responsive");
mainColumn2.append(tableResDiv);

//table
const dataTable = document.createElement("table");
dataTable.setAttribute("class", "table table-bordered text-center");
tableResDiv.append(dataTable);
//tableHead
const tableHead = document.createElement("thead");
tableHead.innerHTML =
 "<tr><th>First Name</th><th>Last Name</th><th>Gender</th><th>Address</th><th>Country</th><th>State</th><th>Pincode</th><th>Food of Choice</th></tr>";
const tableBody = document.createElement("tbody");

dataTable.append(tableHead, tableBody);
*/