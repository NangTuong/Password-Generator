// array of acceptable characters
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] 
var specialCharacters = ['@', '%', '+', '/', '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']

console.log(specialCharacters);

// function for user password criteria
var getPasswordCriteria = function() {
  var passwordLength = parseInt(
  window.prompt("How many characters would you like your password to have? Must be a value between 8 and 128.")
  )

//check to see if password is at least 8 characters
if (passwordLength < 8) {
  window.alert("Password length must be at least 8 characters.");
  return;
}

//check to see if password is no more than 128 characters
if (passwordLength > 128) {
  window.alert("Password length must be no more than 128 characters.");
  return;
}

//ask user if they would like to include lowercase characters
var lowerCaseCharacters =
  window.confirm("Would you like to use lowercase characters?");

//ask user if they would like to include uppercase characters
var upperCaseCharacters =
  window.confirm("Would you like to use uppercase characters?");

//ask user if they would like to include numeric characters
var numericCharacters = 
  window.confirm("Would you like to use numeric characters?");

//ask user if they would like to include special characters
var specialCharacters =
  window.confirm("Would you like to use special characters?");

// ensure user selects at least one type of character
if (lowerCaseCharacters === false && upperCaseCharacters === false && numericCharacters === false && specialCharacters === false) {
  window.alert("You must select at least one character type!");
  return;
}
// object to store user input
var passwordCriteria = {
  length: passwordLength, 
  lowerCaseCharacters: lowerCaseCharacters, 
  upperCaseCharacters: upperCaseCharacters, 
  numericCharacters: numericCharacters, 
  specialCharacters: specialCharacters
}
return passwordCriteria;
}
//function to generate password
var generatePassword = function () {
  var password = getPasswordCriteria()

  if (specialCharacters) {}
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
