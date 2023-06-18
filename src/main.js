const emailInput = document.getElementById("email");
const errorText = document.getElementById("error");
const subButton = document.getElementById("sub");
let myHead = document.getElementById("con");
let myMain = document.getElementById("head");
let myIm = document.getElementById("thanks");
let mm = document.getElementById("mm");

subButton.addEventListener("click", validateEmail);

function validateEmail(e) {
  e.preventDefault();
  
  const email = emailInput.value.trim();
  
  if (email === "") {
    errorText.innerText = "Valid email required";
    errorText.classList.remove("hidden");
    emailInput.classList.add("bg-[rgba(255,98,78,0.3)]", "border-red-600");
  } else if (!isValidEmail(email)) {
    errorText.innerText = "Please enter a valid email address";
    errorText.classList.remove("hidden");
    emailInput.classList.add("bg-[rgba(255,98,78,0.3)]", "border-red-600");
  } else {
    errorText.classList.add("hidden");
    emailInput.classList.remove("bg-[rgba(255,98,78,0.3)]", "border-red-600");
    myHead.classList.add("w-min")
    myMain.classList.add("hidden")
    myIm.classList.remove("hidden")
    mm.innerHTML= emailInput.value
    // here you can submit the form or perform any other action
  }
}

function isValidEmail(email) {
  // A simple regular expression to check for a valid email address format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


function myFunction() {
    myHead.classList.remove("w-min")
    myMain.classList.remove("hidden")
    myIm.classList.add("hidden")
    
  }