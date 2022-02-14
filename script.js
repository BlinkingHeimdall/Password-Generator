
// variables

var useLowercase
var useUppercase
var useSymbol
var useNumber

// arrays for characters

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbol = ["!", "@", "#", "$", "%", "&", "*", "/", "<", ">", "?", "+", "-", "_", "="];

var parameters

// Assignment Code

var generateBtn = document.querySelector("#generate");

//Questions for parameters
function writePassword() {
var useLowercase = window.confirm("Do you want lowercase letters?")
var useUppercase = window.confirm("Do you want uppercase letters?")
var useNumber = window.confirm("Would you like to include numbers?")
var useSymbol = window.confirm("Would you like to include symbols?")

// A reminder that the user needs to select a parameter to actually get a password

if (!useLowercase && !useNumber && !useSymbol && !useUppercase) {
  window.alert("You need to pick something");
  writePassword();
}

var PasswordLength = parseInt(window.prompt("How many characters, between 8-24, would you like you password to be?"))



// checks for a valid number between 8 and 24

while (PasswordLength <8 || PasswordLength >24) {
  PasswordLength = prompt("The number of characters for you password has to be between 8 and 24");

}

//double checks the length is a number

if(Number.isNaN(PasswordLength)) {
  alert("you did not provide a number");
  return null;
}

if (useLowercase && useUppercase && useNumber && useSymbol) {
  parameters = lowercase.concat(uppercase, number, symbol );
}

var writePassword = "";
for (var i = 0; i < PasswordLength; i++){
  writePassword += parameters[Math.floor(Math.random() * parameters.length)];
}

// Write password to the #password input
var passwordText = document.querySelector ("#password");
  passwordText.value = writePassword;



};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
