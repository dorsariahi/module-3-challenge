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

// Add function to generate the password
function generatePassword() {
  var passwordlength = prompt("what is the length of the password?");
  // Add the "if" and "else" statment
  if (passwordlength >= 8 && passwordlength <= 128) {
    var hasLowerCase = confirm("Do you want to include any lowercase charcters?");
    var hasUpperCase = confirm("Do you want to include any uppercase charcters?");
    var hasSpecialCharcter = confirm("Do you want to include any special charcters?");
    var hasNumeric = confirm("Do you want to include any numeric characters?");
    if (hasLowerCase === true || hasUpperCase === true || hasSpecialCharcter === true || hasNumeric === true) {
      var lowercase = "abcdefghijklmnopqrstuvwxyz"
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      var specialcharcter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      var numeric = "0123456789"
    }
    else {
      alert("The password must have at least one of the options.")
    }
  }
  else {
    alert("The password length should be at least 8 characters and no more than 128 characters.")
  }
  return "test password"
}