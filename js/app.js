// all element  selector  =====================
// ===============================================

const main_sellery = document.querySelector(".main_sellery");
const food_cust = document.querySelector(".food_cust");
const Rent_cust = document.querySelector(".Rent_cust");
const Clothes_cust = document.querySelector(".Clothes_cust");
const form = document.querySelector("#form");
const calculate_Btn = document.querySelector(".calculate_Btn");
const total_Expenses = document.querySelector("#total_Expenses");
const TotalBalance = document.querySelector("#Balance");
const saveManey = document.querySelector("#saveManey");
const saveManeyAmount = document.querySelector("#saveManeyAmount");
const TotalsavingAmount = document.querySelector("#TotalsavingAmount");
const remainingBalance = document.querySelector("#remainingBalance");
const saveManeyBtn = document.querySelector("#saveManeyBtn");
const saveingErrorSms = document.querySelector("#saveingErrorSms");

// all addEventListener =========================
// ===================================================

form.addEventListener("submit", monthlyCust);
saveManeyBtn.addEventListener("click", saveManeyForFuture);

// project function all ====================================
// ======================================================== 

// munthly cust and hanle Error

function monthlyCust(e) {
  e.preventDefault();
  const totalSellery = getinputValue(main_sellery);
  main_selleryStore = getinputValue(main_sellery);
  const totalCust =
    getinputValue(food_cust) +
    getinputValue(Rent_cust) +
    getinputValue(Clothes_cust);
  const balance = totalSellery - totalCust;

  if (isNaN(getinputValue(main_sellery))) {
    setError(main_sellery, "Only numbers are acceptable.  string not acceptable");
  } else if (getinputValue(main_sellery) < 0) {
    setError(main_sellery, "Negative values ​​are not acceptable.  Please give a positive value");
  } else if (isNaN(getinputValue(food_cust))) {
    setError(food_cust, "Only numbers are acceptable.  string not acceptable");
  } else if (getinputValue(food_cust) < 0) {
    setError(food_cust, "Negative values ​​are not acceptable.  Please give a positive value");
  } else if (isNaN(getinputValue(Rent_cust))) {
    setError(Rent_cust, "Only numbers are acceptable.  string not acceptable");
  } else if (getinputValue(Rent_cust) < 0) {
    setError(Rent_cust, "Negative values ​​are not acceptable.  Please give a positive value");
  } else if (isNaN(getinputValue(Clothes_cust))) {
    setError(Clothes_cust, "Only numbers are acceptable.  string not acceptable");
  } else if (getinputValue(Clothes_cust) < 0) {
    setError(Clothes_cust, "Negative values ​​are not acceptable.  Please give a positive value");
  } else if (totalSellery < totalCust) {
    setError(main_sellery, "The cost is much higher than your salary");
  } else {
    total_Expenses.innerText = totalCust;
    TotalBalance.innerText = balance;
    setSuccess(main_sellery);
    setSuccess(food_cust);
    setSuccess(Rent_cust);
    setSuccess(Clothes_cust);
  }
}

// save Maney for future

function saveManeyForFuture() {
  const maneySaveAmount = getinputValue(saveManeyAmount);
  const balance = parseInt(TotalBalance.innerText);
  const totalSave = parseInt((main_selleryStore / 100) * maneySaveAmount);
  
if(maneySaveAmount ){
  if(maneySaveAmount < 0){
    saveingErrorSms.innerText = "Negative values ​​are not acceptable.  Please give a positive value";
  }else{
    if (totalSave > balance) {
      saveingErrorSms.innerText = "you save amount is big for your balance";
      saveManeyAmount.classList.add("error");
      saveManeyAmount.style.border = "1px solid red";
    }
     else {
      const remainingAmount = balance - totalSave;
      TotalsavingAmount.innerText = totalSave;
      remainingBalance.innerText = remainingAmount;
      saveManeyAmount.classList.remove("ErrorInput");
      saveingErrorSms.innerHTML = "";
      saveManeyAmount.style.border = "1px solid transparent";
    }
  }
  }
}

// get input value
function getinputValue(input) {
  return (inputValue = parseInt(input.value));
}

function clearInputValue(input) {
  input.value = "";
}
function setError(element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

function setSuccess(element) {
  const inputControl = element.parentElement;
  const arrorDisplay = inputControl.querySelector(".error");

  arrorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}
