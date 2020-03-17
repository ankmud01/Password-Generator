// Assignment Code
var generateBtn = document.querySelector("#generate");


//variables
var length;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "01234567689";
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var passwordLength = prompt("Please enter a Number betweeen 8 and 128");
if (passwordLength >= 8 && passwordLength <= 128) {
  console.log(passwordLength);
  var chooseLowerCase = confirm("Do you want to include LOWERCASE in your password?")
  console.log(chooseLowerCase);
  var chooseUpperCase = confirm("Do you want to include UPPERCASE in your password?")
  console.log(chooseUpperCase);
  var chooseNumber = confirm("Do you want to include NUMBERS in your password?")
  console.log(chooseNumber);
  var chooseSymbols = confirm("Do you want to include SYMBOLS in your password?")
  console.log(chooseSymbols);
} else {
  alert("You must select a number betweeen 8 and 128 to continue creating password..")
}

//Function for generating random variables
function randomLowerLetter() {
  return lowerCase.split('')[(Math.floor(Math.random() * lowerCase.length))]
};
console.log(randomLowerLetter())
function randomUpperLetter() {
  return upperCase.split('')[(Math.floor(Math.random() * upperCase.length))]
};
console.log(randomUpperLetter());
function randomNumbers() {
  return numbers.split('')[(Math.floor(Math.random() * numbers.length))]
};
console.log(randomNumbers());
function randomSymbols() {
  return symbols.split('')[(Math.floor(Math.random() * symbols.length))]
};
console.log(randomSymbols());

password.innerText = generatePassword(chooseLowerCase, chooseUpperCase, chooseNumber, chooseSymbols, passwordLength);

//Creating the generatePassword Function
var randomLetterFunction = {
  lowerLetter: randomLowerLetter,
  upperLetter: randomUpperLetter,
  symbolsValue: randomSymbols,
  numbersValue: randomNumbers
};


function generatePassword(chooseLowerCase, chooseUpperCase, chooseNumber, chooseSymbols, passwordLength){
  //password variable
  //filter out unchecked items
  //loop over length & call generator function
  //add final password to password variable

  var password = '';
  requiredFeilds = chooseUpperCase + chooseLowerCase + chooseSymbols + chooseNumber
  console.log ( "required Feilds: ", requiredFeilds);

  var charfeildsArr = [{ chooseLowerCase }, { chooseUpperCase }, { chooseNumber }, { chooseSymbols }].filter
  (
    item => Object.values(item)[0]
  );
  console.log ( "Character Feilds: ", charfeildsArr);

  if(requiredFeilds === 0){
    return '';
  }

  for (let i=0; i<chooseNumber; i+= requiredFeilds){
    charfeildsArr.forEach(type => {
      var randomFunction = Object.keys(type)[0];
      console.log('random Function: ', randomFunction);

      generatePassword += randomLetterFunction[randomFunction()];
    });
  }

  console.log (password);
}









// var passwordGen = [];
// function generatePassword(passwordLength, chooseLowerCase, chooseUpperCase, chooseNumber, chooseSymbols) {
//   let passwordCharacter = randomLowerLetter()
//   if (chooseUpperCase) passwordCharacter = passwordCharacter.concat(randomLowerLetter())
//   if (chooseSymbols) passwordCharacter = passwordCharacter.concat(randomSymbols())
//   if (chooseNumber) passwordCharacter = passwordCharacter.concat(randomNumbers())

//   for (let i = 0; i <= passwordLength; i++) {
//     var passwordGen = passwordCharacter[Math.floor(Math.random() * passwordCharacter.length)]
//   }
//   return passwordGen.join('')
// }
// console.log(passwordGen);
// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLength, chooseLowerCase, chooseUpperCase, chooseNumber, chooseSymbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
