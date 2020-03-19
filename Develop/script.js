//Declaring Variables
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "01234567689";
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var password,
  randomCharacter,
  passwordLength,
  chooseLower,
  chooseNum,
  chooseUpper,
  chooseSymbol

// Add event listener to either prompt or to generate password by clicking generate button
generateBtn.addEventListener("click", function(event){
  event.preventDefault();
  //if the given condition is met it will prompt user series of question
  if(passwordText.textContent = " "){   
    passwordLength = prompt("Please enter a Number betweeen '8' and '128'");
    if(passwordLength >=8 && passwordLength <= 128){
        console.log(passwordLength);
      chooseLower = confirm("Do you want to include LOWERCASE in your password?")
        console.log(chooseLower);
      chooseUpper = confirm("Do you want to include UPPERCASE in your password?")
        console.log(chooseUpper);
      chooseNum = confirm("Do you want to include NUMBERS in your password?")
        console.log(chooseNum);
      chooseSymbol = confirm("Do you want to include SYMBOLS in your password?")
        console.log(chooseSymbol);
      //Goes inside this condition only if user does not select any input character
      if (chooseLower === false && chooseUpper === false && chooseNum === false   
        && chooseSymbol === false) {
        alert("You MUST select atleast one character type input to generate password .");
      }
      //calls the write password function at the end of prompt selection
      writePassword();  
    } else {
        alert("You MUST select a number betweeen 8 and 128 to continue creating password..");
      }
  }else{
    alert("Please refresh the page and click generate button to generate a new password..") // Not necessary but still just to be safe
  }
});

//Function to generate an array of random character type
function generatePassword() {
  password = "";
  randomCharType = "";
  if (chooseLower === true) {
    //This means randomCharType = randomCharType + lowerCase
    randomCharType += lowerCase;  
  }
  if (chooseUpper === true) {
    randomCharType += upperCase;
  }
  if (chooseNum === true) {
    randomCharType += numbers;
  }
  if (chooseSymbol === true) {
    randomCharType += symbols;
  }
  for (var i = 0; i < passwordLength; i++) {
    password += randomCharType.charAt(Math.floor(Math.random() * randomCharType.length));
    /*
    This will select a random character from randomCharType
    variable, loops through all choices and += keeps adding to the password 
    untill the length is met..
    */
  }
  
  //This alert will display user their new password everytime Generate Password is clicked
  // alert("Your New Secure Password is: " + password);
}

//Write password to the #password input
function writePassword() {
  generatePassword();
  passwordText.innerHTML = password;
  console.log(password);
}

