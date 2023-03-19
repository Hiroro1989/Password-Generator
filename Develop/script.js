// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialCharcters = "~!@+=-"; //add later

  var password = generatePassword();
  window.alert("Your password is " + password);
  console.log(password);

  //create function to generate password
  function generatePassword() {
    //ask length of password

    var lengthOfPassword = window.prompt(
      "Choose the length of password from 8 to 128"
    );
    if (8 <= lengthOfPassword && lengthOfPassword <= 128) {
      var includeLowerCase = window.confirm("Do you want to include lowercase?");
      var includeUpperCase = window.confirm("Do you want to include uppercase?");
      var includeNumeric = window.confirm("Do you want to include numeric?");
      var includeSpecailCaracters = window.confirm("Do you want to include specail caracters?");
      var randomIndex;
      password="";


      //all
      if (
        includeLowerCase &&
        includeUpperCase &&
        includeNumeric &&
        includeSpecailCaracters
      ) {
        var everything = alphabet.concat(upperCase, numeric, specialCharcters);
        for (var i = 1; i <= lengthOfPassword; i++) {
          randomIndex = Math.floor(Math.random() * everything.length);
          password += everything.substring(randomIndex, randomIndex+1 );
        }
        return password;
      }
      //3
      else if (
        !includeLowerCase &&
        includeUpperCase &&
        includeNumeric &&
        includeSpecailCaracters
      ) {
        var noLowerCase = upperCase.concat(numeric, specialCharcters);
        for (var i = 1; i <= lengthOfPassword; i++) {
          randomIndex = Math.floor(Math.random() * noLowerCase.length);
          password += noLowerCase.substring(randomIndex, randomIndex + 1);
        }
        return password;
      } else if (
        includeLowerCase &&
        !includeUpperCase &&
        includeNumeric &&
        includeSpecailCaracters
      ) {
        var noUpperCase = alphabet.concat(numeric, specialCharcters);
        for (var i = 1; i <= lengthOfPassword; i++) {
          randomIndex = Math.floor(Math.random() * noUpperCase.length);
          password += noUpperCase.substring(randomIndex, randomIndex + 1);
        }
        return password;
      } else if (
        includeLowerCase &&
        includeUpperCase &&
        !includeNumeric &&
        includeSpecailCaracters
      ) {
        var noNumeric = alphabet.concat(upperCase, specialCharcters);
        for (var i = 1; i <= lengthOfPassword; i++) {
          randomIndex = Math.floor(Math.random() * noNumeric.length);
          password += noNumeric.substring(randomIndex, randomIndex + 1);
        }
        return password;
      } else if (
        includeLowerCase &&
        includeUpperCase &&
        includeNumeric &&
        !includeSpecailCaracters
      ) {
        var noSpecialCaracters = alphabet.concat(upperCase, numeric);
        for (var i = 1; i <= lengthOfPassword; i++) {
          randomIndex = Math.floor(Math.random() * noSpecialCaracters.length);
          password += noSpecialCaracters.substring(
            randomIndex,
            randomIndex + 1
          );
        }
        return password;
      }
      //2 
      else if (
        includeLowerCase &&
        includeUpperCase &&
        !includeNumeric &&
        !includeSpecailCaracters
      ) {
        var lowerAndUpperCase = alphabet.concat(upperCase);
        for (var i = 1; i <= lengthOfPassword; i++) {
          randomIndex = Math.floor(Math.random() * lowerAndUpperCase.length);
          password += lowerAndUpperCase.substring(randomIndex, randomIndex + 1);
        }
        return password;
      } else if (
        !includeLowerCase &&
        !includeUpperCase &&
        includeNumeric &&
        includeSpecailCaracters
      ) {
        var numericAndSpecialCharacters = numeric.concat(specialCharcters);
        for (var i = 1; i <= lengthOfPassword; i++) {
          randomIndex = Math.floor(
            Math.random() * numericAndSpecialCharacters.length
          );
          password += numericAndSpecialCharacters.substring(
            randomIndex,
            randomIndex + 1
          );
        }
        return password;
      } else if (
        !includeLowerCase &&
        includeUpperCase &&
        !includeNumeric &&
        includeSpecailCaracters
      ) {
        var UpperCaseAndSpecialCharacters = upperCase.concat(specialCharcters);
        for (var i = 1; i <= lengthOfPassword; i++) {
          randomIndex = Math.floor(
            Math.random() * UpperCaseAndSpecialCharacters.length
          );
          password += UpperCaseAndSpecialCharacters.substring(
            randomIndex,
            randomIndex + 1
          );
        }
        return password;
      } else if (
        !includeLowerCase &&
        includeUpperCase &&
        includeNumeric &&
        !includeSpecailCaracters
      ) {
        var UpperCaseAndNumeric = upperCase.concat(numeric);
        for (var i = 1; i <= lengthOfPassword; i++) {
          randomIndex = Math.floor(Math.random() * UpperCaseAndNumeric.length);
          password += UpperCaseAndNumeric.substring(
            randomIndex,
            randomIndex + 1
          );
        }
        return password;
      } else if (
        includeLowerCase &&
        !includeUpperCase &&
        !includeNumeric &&
        includeSpecailCaracters
      ) {
        var lowerCaseAndSpecialCharacters = alphabet.concat(specialCharcters);
        for (var i = 1; i <= lengthOfPassword; i++) {
          randomIndex = Math.floor(
            Math.random() * lowerCaseAndSpecialCharacters.length
          );
          password += lowerCaseAndSpecialCharacters.substring(
            randomIndex,
            randomIndex + 1
          );
        }
        return password;
      } else if (
        includeLowerCase &&
        !includeUpperCase &&
        includeNumeric &&
        !includeSpecailCaracters
      ) {
        var lowerCaseAndNumeric = alphabet.concat(numeric);
        for (var i = 1; i <= lengthOfPassword; i++) {
          randomIndex = Math.floor(Math.random() * lowerCaseAndNumeric.length);
          password += lowerCaseAndNumeric.substring(
            randomIndex,
            randomIndex + 1
          );
        }
        return password;
      }
      //1
      else if (
        !includeLowerCase &&
        !includeUpperCase &&
        !includeNumeric &&
        includeSpecailCaracters
      ) {
        for (var i = 1; i <= lengthOfPassword; i++) {
          var randomIndex = Math.floor(Math.random() * specialCharcters.length);
          password += specialCharcters.substring(randomIndex, randomIndex + 1);
        }
        return password;
      } else if (
        !includeLowerCase &&
        !includeUpperCase &&
        includeNumeric &&
        !includeSpecailCaracters
      ) {
        for (var i = 1; i <= lengthOfPassword; i++) {
          var randomIndex = Math.floor(Math.random() * numeric.length);
          password += numeric.substring(randomIndex, randomIndex + 1);
        }
        return password;
      } else if (
        !includeLowerCase &&
        includeUpperCase &&
        !includeNumeric &&
        !includeSpecailCaracters
      ) {
        for (var i = 1; i <= lengthOfPassword; i++) {
          var randomIndex = Math.floor(Math.random() * upperCase.length);
          password += alphabet.substring(randomIndex, randomIndex + 1);
        }
        return password;
      } else if (
        includeLowerCase &&
        !includeUpperCase &&
        !includeNumeric &&
        !includeSpecailCaracters
      ) {
        for (var i = 1; i <= lengthOfPassword; i++) {
          var randomIndex = Math.floor(Math.random() * alphabet.length);
          password += alphabet.substring(randomIndex, randomIndex + 1);
        }
        return password;
      } else {
        window.alert("Choose at least one character!");
        generatePassword();
      }
    } else if(lengthOfPassword<8 || 128<lengthOfPassword || isNaN(lengthOfPassword)){
      window.alert(lengthOfPassword + " is not correct input!");
      generatePassword();
    }
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //print password in the (passwordText) filed
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
