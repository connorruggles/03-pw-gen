var generateBtn = document.querySelector("#generate");
var finalUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var finalLowerCase = finalUpperCase.toLowerCase();
var finalNumbers = "1234567890";
var finalSpecialChars = "?<>!$+^%@~)(*=-`;:"

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function questions() {
  var criteria = ["lowerCase", "upperCase", "numbers", "specialChars"];
  var userSelection = {};
  criteria.forEach(function (criterion) {
    userSelection[criterion] = confirm("Would you like " + criterion + " included in your password?");
  });
  return userSelection;
}

function generatePassword() {
  var result = "";
  var passwordLength = prompt("How many characters would you like your password to include? Please choose at least 8 characters and no more than 128 characters.");
  
  if (passwordLength <= 8 || passwordLength > 128) {
    alert("Please choose at least 8 characters and no more than 128 characters.");
    return generatePassword();
  } else {
    alert("Your password will be " + passwordLength + " characters long.");
  }
  
  var userSelection = questions();
  
  if (!Object.values(userSelection).some(Boolean)) {
    alert("You must choose at least 1 character type.");
    return generatePassword();
  }
  
  if (userSelection.lowerCase) {
    result += finalLowerCase;
  }
  if (userSelection.upperCase) {
    result += finalUpperCase;
  }
  if (userSelection.numbers) {
    result += finalNumbers;
  }
  if (userSelection.specialChars) {
    result += finalSpecialChars;
  }
  
  for (var i = 0; i < passwordLength; i++) {
    result += result.charAt(Math.floor(Math.random() * result.length));
  }
  
  return result;
}