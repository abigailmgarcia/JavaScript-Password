// Assignment code here
function generatePassword() {
  var passwordLength;
  var includeLowercase;
  var inlcudeUppercase;
  var inlcudeNumericval;
  var includeSpecialchar;


  return "generated password will go here";
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


//prompt the user for the password criteriaa
// password length between 8-128
  passwordLength = prompt("Enter a password length between 8 and 128 characters");
  console.log(passwordLength);
//lowercase, upppercase, special characters
  includeLowercase = confirm("Include lowercase characters?");
  includeUppercase = confirm("Include uppercase characters?");
  includeNumeric = confirm("Include numeric values?");
  includeSpecial = confirm("Include special characters?");
// need to validate input 
// generate password
// display password to page (by return?)
