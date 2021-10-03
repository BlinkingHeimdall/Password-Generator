var lowercase
var uppercase
var symbols
var numbers

window.alert("Do you want lowercase letters?")
window.alert("Do you want upercase letters?")
window.alert("Would you like to include numbers?")
window.alert("would you like to include symbols?")



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
