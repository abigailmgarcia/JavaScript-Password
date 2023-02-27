// Assignment code here
// function generatePassword and it's variables(password criteria) we will be using throughout code
function generatePassword() {
  var passwordLength;
  var includeLowercase;
  var includeUppercase;
  var inlcudeNumericval;
  var includeSpecialchar;
  console.log("you clicked button")

// password length between 8-128
  passwordLength = prompt("Enter a password length between 8 and 128 characters");
  console.log(passwordLength);

//lowercase, upppercase, special characters
includeLowercase = confirm("Include lowercase characters?");
includeUppercase = confirm("Include uppercase characters?");
inlcudeNumericval = confirm("Include numeric values?");
includeSpecialchar = confirm("Include special characters?");

// need to validate input 
if(!includeLowercase && !includeUppercase && !inlcudeNumericval && !includeSpecialchar) {
  alert("Invalid. Must select at least one character type.");
} else { 
  console.log(generatePassword);
}

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




// generate password
// display password to page (by return?)
