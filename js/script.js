// Assignment code here
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// function generatePassword and it's variables(password criteria) we will be using throughout code
function generatePassword() {
  var passwordLength;
  var includeLowercase;
  var includeUppercase;
  var includeNumericval;
  var includeSpecialchar;
  console.log("you clicked button")

// password length between 8-128

  passwordLength = prompt("Enter a password length between 8 and 128 characters");
  console.log(passwordLength);

//lowercase, upppercase, special characters
includeLowercase = confirm("Include lowercase characters?");
includeUppercase = confirm("Include uppercase characters?");
includeNumericval = confirm("Include numeric values?");
includeSpecialchar = confirm("Include special characters?");

//variables for characters
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericValues = "0123456789";
var specialCharacters= "!@#$%^&*()_-=+~`?,.;";

var charSet = "";
if (includeLowercase) {
  charSet += lowercaseCharacters;
}
if (includeUppercase) {
  charSet += uppercaseCharacters;
}
if (includeNumericval) {
  charSet += numericValues;
}
if (includeSpecialchar) {
  charSet += specialCharacters;
}

// need to validate input 
if(!includeLowercase && !includeUppercase && !includeNumericval && !includeSpecialchar) {
  alert("Invalid. Must select at least one character type.");
} else { 

}
console.log()


  return(writePassword); //"generated password will go here";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// generate password
// display password to page (by return?)
