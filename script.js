// Assignment Code
var generateBtn = document.querySelector("#generate");


//Password generator
var generatePassword = function () {
  var passwordLength = parseInt(prompt("Choose password length please"));
  console.log(passwordLength);
  var lowerCase = confirm("Do you want lowercase characters?");
  var upperCase = confirm("Do you want upercase characters?");
  var specialCase = confirm("Do you want special characters?");
  var nums = confirm("Do you want numbers?")

  //ParseInt password length
  passwordLength = parseInt(passwordLength);


  //Characters
  var container = [], spreadArrays, result; 
  var numss = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var capLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialCharaters = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":",]
  
  // Conditions
  if (!lowerCase && !upperCase && !nums && !specialCase) { 
    alert(`You must choose atleast one character`)
  } else {
    //place values in true confirmations
    lowerCase = letters;
    nums = numss;
    upperCase = capLetters;
    specialCase = specialCharaters;
    spreadArrays = [...nums, ...lowerCase, ...upperCase, ...specialCase]
  }

  for (var i = 0; i < passwordLength; i++){
 
    container.push(spreadArrays[Math.floor(Math.random() * spreadArrays.length)]);
    result = container.join("");
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
