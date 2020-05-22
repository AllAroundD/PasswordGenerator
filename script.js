// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/* function to generate random password
  Inputs: none
  Output: string with random characters based on the selections
    Function:
    - prompts for length of password
    - prompts for password criteria (lowercase, uppercase, numeric, and/or special characters)
    - input is validated and at least one character type must be selected.
      If user doesn't choose criteria, no password is returned.
*/
function generatePassword() {
  var lowerCharList = "abcdefghijklmnopqrstuvwxyz";
  var numberList = "0123456789";
  var specialCharlist = " !\"#$%\&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // prompt for password length (between 8 and 128)
  var pwdLength = Number(prompt("Please choose a password length (must be between 8 and 128 characters"));
  if (pwdLength < 8 || pwdLength > 128) {
    // If length wasn't between 8 and 128, alert and exit.
    alert('Password needs to be between 8 to 128 characters. Please click Generate Password again.');
    return "";
  } else if (!Number.isInteger(pwdLength)) {
    // If length wasn't an integer, alert and exit.
    alert('Length was not an integer. It needs to be between 8 to 128. Please click Generate Password again.');
    return "";
  }

  // Confirm what the selections are (lowercase, uppercase, numeric, and/or special characters)
  var includeLower = confirm("Do you want to include lowercase?");
  var includeUpper = confirm("Do you want to include uppercase?");
  var includeNumbers = confirm(" Do you want to include numbers?");
  var includeSpecChars = confirm("Do you want to include special characters?");
  var fullTempList = "";  // String to contain all of the characters based on the options

  if (!(includeLower) && !(includeUpper) && !(includeNumbers) && !(includeSpecChars)) {
    alert('No selection was chosen. Please click the Generate button again.');
    return "";
  } else if (includeLower) {
    // lowercase - concatenate to the temp list
    fullTempList = lowerCharList;
  } else if (includeUpper) {
    // uppercase - concatenate to the temp list
    fullTempList = fullTempList.concat(lowerCharList.toUpperCase());
  } else if (includeNumbers) {
    // numbers - concatenate to the temp list
    fullTempList = fullTempList.concat(numberList.toString());
  } else if (includeSpecChars) {
    // special characters - concatenate to the temp list
    fullTempList = fullTempList.concat(specialCharlist);
  }

  var tempChar = "";
  var finalString = "";
  // loop through fullTempList string and randomly concatenate to the final string
  for (var index = 0; index < pwdLength; index++) {
    tempChar = fullTempList.charAt((Math.floor(Math.random() * fullTempList.length)));
    finalString = finalString.concat(tempChar);
  }
  return finalString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
