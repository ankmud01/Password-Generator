// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables
var lowerCase = randomGenerator("abcdefghijklmnopqrstuvwxyz");
console.log(lowerCase);
var upperCase = randomGenerator("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numbers = randomGenerator("01234567689");
var symbols = randomGenerator("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");

//Prompt and confirm user input 
var passwordLength = prompt("Please enter a Number betweeen 8 and 128");
if (passwordLength >= 8 && passwordLength <= 128) {
  console.log(passwordLength);
  var chooseLower = confirm("Do you want to include LOWERCASE in your password?")
  console.log(chooseLower);
  var chooseUpper = confirm("Do you want to include UPPERCASE in your password?")
  console.log(chooseUpper);
  var chooseNum = confirm("Do you want to include NUMBERS in your password?")
  console.log(chooseNum);
  var chooseSymbol = confirm("Do you want to include SYMBOLS in your password?")
  console.log(chooseSymbol);
} else {
  alert("You must select a number betweeen 8 and 128 to continue creating password..")
}

//Function to generate an array of random numbers

function randomGenerator(String){
  var letterarr = []
  var letter = (String.split(''))
  console.log("my split letters: " + letter);
  letterarr.push(letter)
  console.log("my array letters: " + letterarr);
  return letterarr;
}

//Generate Password function
var password = generatePassword(passwordLength, chooseLower, chooseUpper, chooseNum, chooseSymbol);
function generatePassword(passwordLength, chooseUpper, chooseNum, chooseSymbol){
  var combinedLetters = lowerCase
  if (chooseUpper) combinedLetters = combinedLetters.concat(upperCase)
  console.log (combinedLetters);
  if (chooseNum) combinedLetters = combinedLetters.concat(numbers)
  console.log (combinedLetters);
  if (chooseSymbol) combinedLetters = combinedLetters.concat(symbols)
  console.log (combinedLetters);

  var randomValues = [];
  for(var i=0; i<passwordLength; i++){
    var value = combinedLetters[Math.floor(Math.random()* combinedLetters.length)]
    randomValues.push(value)
  }
  return randomValues.join('')
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLength, chooseLower, chooseUpper, chooseNum, chooseSymbol);
  var passwordText = document.querySelector("#password");

  passwordText.innerHTML = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
