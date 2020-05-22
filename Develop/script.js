// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generate random password
function generatePassword() {
  var lowerCharList = "abcdefghijklmnopqrstuvwxyz";
  var numberList = "0123456789";
  var specialCharlist = " !\"#$%\&'()*+,-./:;<=>?@[\\]^_`{|}~";

  var pwdLength = prompt("Please choose a password length (must be between 8 and 128 characters");
  if (pwdLength < 8 || pwdLength > 128) {
    alert('Password needs to be between 8 to 128 characters. Please click Generate Password again.');
    return "";
  }

  var includeLower = confirm("Do you want to include lowercase?");
  var includeUpper = confirm("Do you want to include uppercase?");
  var includeNumbers = confirm(" Do you want to include numbers?");
  var includeSpecChars = confirm("Do you want to include special characters?");

  var fullList = "";
  if( includeLower ) {
    fullList = lowerCharList;
  }
  if( includeUpper ) {
    fullList = fullList.concat( lowerCharList.toUpperCase() );
  }
  if( includeNumbers ) {
    fullList = fullList.concat( numberList.toString() );
  }
  if( includeSpecChars ) {
    fullList = fullList.concat( specialCharlist );
  }

  var tempChar = "";
  var tempString = "";
  for (index = 0; index < pwdLength; index++) {
    tempChar = fullList.charAt( (Math.floor(Math.random() * fullList.length)) );
    tempString = tempString.concat( tempChar );
  }
  finalString = tempString;
  return finalString;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
