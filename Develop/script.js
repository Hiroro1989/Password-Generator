// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialCharcters = "~!@+=-"; //example

  var password = generatePassword();
  window.alert("Your password is " + password);
  console.log(password);


  //create function to generate password
  function generatePassword() {
    //ask length of password

    var lengthOfPassword = window.prompt("choose the length of password from 8 to 128");
    if (8 <= lengthOfPassword && lengthOfPassword <= 128) {
      var includeLowerCase = window.confirm("lowercase?");
      var includeUpperCase = window.confirm("uppercase?");
      var includeNumeric = window.confirm("numeric?");
      var includeSpecailCaracters = window.confirm("specail caracters?");

      //all
      if (
        includeLowerCase &&
        includeUpperCase &&
        includeNumeric &&
        includeSpecailCaracters
      ) {
        var everything = alphabet.concat(upperCase,numeric,specialCharcters);
        for(var i =1; i<=lengthOfPassword; i++){
          randomIndex = Math.floor(Math.random()*everything.length);
          password += everything.substring(randomIndex, randomIndex+1);
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
        var noLowerCase = upperCase.concat(numeric,specialCharcters);
        for(var i =1; i<=lengthOfPassword; i++){
          randomIndex = Math.floor(Math.random()*noLowerCase.length);
          password += noLowerCase.substring(randomIndex, randomIndex+1);
        }
        return password;
      } else if (
        includeLowerCase &&
        !includeUpperCase &&
        includeNumeric &&
        includeSpecailCaracters
      ) {
        var noUpperCase = alphabet.concat(numeric, specialCharcters);
        for(var i =1; i<=lengthOfPassword; i++){
          randomIndex = Math.floor(Math.random()*noUpperCase.length);
          password += noUpperCase.substring(randomIndex, randomIndex+1);
        }
        return password;
      } else if (
        includeLowerCase &&
        includeUpperCase &&
        !includeNumeric &&
        includeSpecailCaracters
      ) {
        var noNumeric = alphabet.concat(upperCase, specialCharcters);
        for(var i =1; i<=lengthOfPassword; i++){
          randomIndex = Math.floor(Math.random()*noNumeric.length);
          password += noNumeric.substring(randomIndex, randomIndex+1);
        }
        return password;
        
      } else if (
        includeLowerCase &&
        includeUpperCase &&
        includeNumeric &&
        !includeSpecailCaracters
      ) {
        var noSpecialCaracters = alphabet.concat(upperCase, numeric);
        for(var i =1; i<=lengthOfPassword; i++){
          randomIndex = Math.floor(Math.random()*noSpecialCaracters.length);
          password += noSpecialCaracters.substring(randomIndex, randomIndex+1);
        }
        return password;
      }
      //2 concat
      else if (
        includeLowerCase &&
        includeUpperCase &&
        !includeNumeric &&
        !includeSpecailCaracters
      ) {
      } else if (
        !includeLowerCase &&
        !includeUpperCase &&
        includeNumeric &&
        includeSpecailCaracters
      ) {
      } else if (
        !includeLowerCase &&
        includeUpperCase &&
        !includeNumeric &&
        includeSpecailCaracters
      ) {
      } else if (
        !includeLowerCase &&
        includeUpperCase &&
        includeNumeric &&
        !includeSpecailCaracters
      ) {
      } else if (
        includeLowerCase &&
        !includeUpperCase &&
        !includeNumeric &&
        includeSpecailCaracters
      ) {
      } else if (
        includeLowerCase &&
        !includeUpperCase &&
        includeNumeric &&
        !includeSpecailCaracters
      ) {
      }
      //1
      else if (
        !includeLowerCase &&
        !includeUpperCase &&
        !includeNumeric &&
        includeSpecailCaracters
      ) {
        for(var i = 1; i <= lengthOfPassword; i++){
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
        for(var i = 1; i <= lengthOfPassword; i++){
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
        for(var i = 1; i <= lengthOfPassword; i++){
          var randomIndex = Math.floor(Math.random() * upperCase.length);
         password += alphabet.substring(randomIndex, randomIndex + 1);
        }
        return password;
      }else if (
        includeLowerCase &&
        !includeUpperCase &&
        !includeNumeric &&
        !includeSpecailCaracters
      ) {
        for(var i = 1; i <= lengthOfPassword; i++){
          var randomIndex = Math.floor(Math.random() * alphabet.length);
         password += alphabet.substring(randomIndex, randomIndex + 1);
        }
        return password;
      } else {
        window.alert("choose at least one element");
        generatePassword();
      }
    } else {
      generatePassword();
    }
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //print password in the (passwordText) filed
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
