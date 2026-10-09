
const studentDetails = document.querySelector('.basic_form');

studentDetails.addEventListener('submit',function(event){
    // event.preventDefault();

    const nameInput = document.querySelector('#name');
    const inputValue = nameInput.value;
     localStorage.setItem("name",inputValue);

    const emailInput = document.querySelector('#email');
    const  emailValue = emailInput.value;
     localStorage.setItem("email",emailValue);

    const companyInput = document.querySelector("#coname");
    const companyValue = companyInput.value;
     localStorage.setItem("company",companyValue);

    const budgetInput = document.querySelector("#options");
    const budgetValue = budgetInput.value;
    localStorage.setItem("budget",budgetValue);

    const detailsInput = document.querySelector("#multiple_text");
    const detailsValue = detailsInput.value;
    localStorage.setItem("project_details",detailsValue);
    alert("Form submitted successfully!");


});
    
    const getName = localStorage.getItem("name");
    const gName = document.querySelector("#displayName");
    gName.textContent = getName;

   const getEmail = localStorage.getItem("email");
   const gEmail = document.querySelector("#displayEmail");
   gEmail.textContent = getEmail;

   const getCompany = localStorage.getItem("company");
   const gCompany = document.querySelector("#displayCompany");
   gCompany.textContent = getCompany;

   const getBudget = localStorage.getItem("budget");
   const gBudget = document.querySelector("#displayBudget");
   gBudget.textContent = getBudget;

   const getDetails = localStorage.getItem("project_details");
   const gDetails = document.querySelector("#displayProject");
   gDetails.textContent = getDetails;

