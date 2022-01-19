// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Password generator
var generatePassword = function () {
  var passwordLength = parseInt(prompt("Choose password length please"));
  console.log(passwordLength);
  var lowerCase = confirm("Do you want lowercase characters?");
  var upperCase = confirm("Do you want upercase characters?");
  var specialCase = confirm("Do you want special characters?");
  var nums =confirm("Do you want numbers?")
 
  var numss = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var capLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialCharaters = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":",]
  var container;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
