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
    // need " and \
    var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var numChar = ["0","1","2","3","4","5","6","7","8","9"];
    var specialChar = ["!","'","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~", '"'];

    var userChoices = [];
    var userPass = "";

    // function that chooses randomly out of an array
    function randomChar(array) {
        var index = Math.floor(Math.random()*array.length);
        return array[index];
    }

  // Length? Range 8-128 characters
    var passLength = prompt("How many characters do you want in your password?");

    while (passLength<=8 || passLength>=128) {
        alert("Password length must be between 8 and 128 characters.")
        passLength = prompt("How many characters do you want in your password?");
    }

    while (userChoices.length === 0) {
        // Lowercase?
        var lowercase = confirm("Include lowercase letters in your password?");
        if (lowercase===true) {
            userChoices.push(lowerChar);
        }

    // Uppercase?
        var uppercase = confirm("Include uppercase letters in your password?");
        if (uppercase===true) {
            userChoices.push(upperChar);
        }

    // Numeric?
        var numeric = confirm("Include numbers in your password?");
        if (numeric===true) {
            userChoices.push(numChar);
        }

    // Special characters?
        var special = confirm("Include special characters in your password?");
        if (special===true) {
            userChoices.push(specialChar);
        }

        if (userChoices.length == 0) {
            alert("You must choose at least one character type!")
        }
    }
  


  //Generate password of length passLength
    for (i=0; i<passLength; i++) {
        var selectList = userChoices[(Math.floor(Math.random()*userChoices.length))];
        userPass += randomChar(selectList)
    }

    return userPass
}