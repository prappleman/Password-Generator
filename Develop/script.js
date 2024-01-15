// Assignment code here

function generatePassword() {
  console.log("you clicked generate")

  //defines the characters that can be used in the password
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?";

  //asks the user for password length in numbers
  var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");

  //checks if it is a valid number between 8 and 128
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid number between 8 and 128.");
    console.log("ERROR number is not between (8-128)")
    return "";
  }
  console.log("number is between (8-128)")
  //asks user for character types to include
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  //checks to make sure there is at least one character selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    console.log("ERROR no character options have been selected")
    return "";
  }
  console.log("password characters have been selected")

  //this combines the selected characters 
  var allChars = "";
  if (includeLowercase) allChars += lowercaseChars;
  if (includeUppercase) allChars += uppercaseChars;
  if (includeNumeric) allChars += numericChars;
  if (includeSpecial) allChars += specialChars;

  //generates the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
    console.log("characters for password have been generated")
  }

  //returns result to display on the page in the write password function
  return password;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
console.log("password has been displayed to page")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


