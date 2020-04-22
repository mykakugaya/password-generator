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

// Generate the password for #password
function generatePassword() {
    var lowerchar = "abcdefghijklmnopqrstuvwxyz";
    var upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numchar = "01234567890123456789";
    var specialchar = "!'#$%&()*+,-./:;<=>?@[]^_`{|}~)";

    var userChoices = [];
    var userPass = "";

  // Length? Range 8-128 characters
    var passLength = prompt("How many characters do you want in your password?");

  // Lowercase?
    var lowercase = confirm("Include lowercase letters in your password?");
    if (lowercase===true) {
        userChoices.push(lowerchar);
    }

  // Uppercase?
    var uppercase = confirm("Include uppercase letters in your password?");
    if (uppercase===true) {
        userChoices.push(upperchar);
    }

  // Numeric?
    var numeric = confirm("Include numbers in your password?");
    if (numeric===true) {
        userChoices.push(numchar);
    }

  // Special characters?
    var special = confirm("Include special characters in your password?");
    if (special===true) {
        userChoices.push(specialchar);
    }

    if (userChoices.length == 0) {
        alert("You must choose at least one character type!")
    }


  //Generate password of length passLength
    for (i=0; i<userChoices.length; i++) {
        var selectList = userChoices[(Math.floor(Math.random()*userChoices.length))];

        for (i=0; i<selectList.length; i++) {
            var passwordchar = selectList[Math.floor(Math.random()*selectList.length)]
            userPass += passwordchar
        }
    }
}