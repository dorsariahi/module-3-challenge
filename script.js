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
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialcharcter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var numeric = "0123456789"

// Add function to generate the password
function generatePassword() {
  var userpassword = "";
  var password = "";
  var passwordlength = prompt("what is the length of the password? password must be greater than 8 and least than 128.");
  // Add the "if" and "else" statment
  if (passwordlength < 8) {
    alert("The password must be at least 8 characters.");
    return null;
  };
  if (passwordlength > 128) {
    alert("The password must be at least 128 characters.");
    return null;
  };
  if (isNaN(passwordlength)) {
    alert("password length should only be numbers.")
    return null;
  };
  var hasLowerCase = confirm("Do you want to include any lowercase charcters?");
  if (hasLowerCase) {
    userpassword += lowercase
  };
  var hasUpperCase = confirm("Do you want to include any uppercase charcters?");
  if (hasUpperCase) {
    userpassword += uppercase
  };
  var hasSpecialCharcter = confirm("Do you want to include any special charcters?");
  if (hasSpecialCharcter) {
    userpassword += specialcharcter
  };
  var hasNumeric = confirm("Do you want to include any numeric characters?");
  if (hasNumeric) {
    userpassword += numeric
  };
  for (var i = 0; i < passwordlength; i++) {
    password += userpassword.charAt(Math.floor(Math.random() * userpassword.length))
  }
  return password;
}