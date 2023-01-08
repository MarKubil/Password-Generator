// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Object with all user options.
var passOpt = {
  // Global scope object1 for how many characters user wants in his password
  howManyChars: null,
  //Global scope object does user wants include special characters
  specialChars: null,
  // Global scope variable does user wants include numeric characters
  numChars: null,
  // Global scope variable does user wants include lowercase cahracters characters
  lowercaseChars: null,
  // Global scope variable does user wants include upper cahracters characters
  uppercaseChars: null,
};



// Function to prompt user for password options
var getPasswordOptions = function () {
  //Local variable for many characters password user wants
  var howMany = prompt("How many character would you like your password to containt?");
  // Validation how many characters input
  if (howMany < 10 || howMany > 64) {
    alert("Please choose password character between 10 and 64");
  } else {
    passOpt.howManyChars = howMany;
  };


  // Local variable asking does user wants include special characters
  var specialChar = confirm("Click OK to confirm including special characters.");
  // Moving to global scope
  if (specialChar) {
    passOpt.specialChars = true;
  } else {
    passOpt.specialChars = false;
  };


  // Local variable asking does user wants include numeric characters
  var numChar = confirm("Click OK to confirm including numeric characters.");
  // Moving to global scope
  if (numChar) {
    passOpt.numChars = true;
  } else {
    passOpt.numChars = false;
  };


  // Local variable asking does user wants include lovercase characters
  var lowercaseChar = confirm("Click OK to confirm including lowercase characters.");
  // Moving to global scope
  if (lowercaseChar) {
    passOpt.lowercaseChars = true;
  } else {
    passOpt.lowercaseChars = false;
  };

  // Local variable asking does user wants include upper characters
  var uppercaseChar = confirm("Click OK to confirm including upper characters.");
  // Moving to global scope
  if (uppercaseChar) {
    passOpt.uppercaseChars = true;
  } else {
    passOpt.uppercaseChars = false;
  };

  // Validation that user will pick atleast one of the options.
  if (passOpt.specialChars === false && passOpt.numChars === false && passOpt.lowercaseChars === false && passOpt.uppercaseChars === false) {
    alert("Please choose atleast one of the options.")

    // Loop witch puts back all of the values to null.
    for (var x in passOpt) {
      passOpt[x] = null;
    };
  };
};

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

