
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

//questions for parameters
var useLowercase = window.confirm("Do you want lowercase letters?")
var useUppercase = window.confirm("Do you want upercase letters?")
var useNumber = window.confirm("Would you like to include numbers?")
var useSymbol = window.confirm("Would you like to include symbols?")

// a reminder that the user needs to select a parameter

if (!useLowercase && !useNumber && !useSymbol && !useUppercase) {
  window.alert("You need to pick something");
  writePassword();
}

passwordLength = Prompt("How many characters, between 8-128, would you like you password to be?")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
