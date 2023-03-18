// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var  numeric = "0123456789"
  var specialCharcters = "~!@+=-"; //example

  var password = generatePassword();

  //create function to generate password
  function generatePassword(){
        //ask length of password 

    var length =  window.prompt("choose the length of password from 8 to 128");
      if (8<=length && length <=128){
        var includeLowerCase = window.confirm("lowercase?");
        var includeUpperCase = window.confirm("uppercase?");
        var includeNumeric = window.confirm("numeric?");

        
        var includeSpecailCaracters = window.confirm("specail caracters?");
          //all
          if(includeLowerCase && includeUpperCase && includeNumeric && includeSpecailCaracters){

          }
          //3
          else if(!includeLowerCase && includeUpperCase && includeNumeric &&includeSpecailCaracters){

          }
          else if(includeLowerCase && !includeUpperCase && includeNumeric && includeSpecailCaracters){

          }else if(includeLowerCase && includeUpperCase && !includeNumeric && includeSpecailCaracters){
            
          }else if(includeLowerCase && includeUpperCase && includeNumeric && !includeSpecailCaracters){
            
          }
          //2
          else if(includeLowerCase && includeUpperCase && !includeNumeric && !includeSpecailCaracters){

          }else if(!includeLowerCase && !includeUpperCase && includeNumeric && includeSpecailCaracters){

          }else if(!includeLowerCase && includeUpperCase && !includeNumeric && includeSpecailCaracters){
            
          }else if(!includeLowerCase && includeUpperCase && includeNumeric && !includeSpecailCaracters){
            
          }else if(includeLowerCase && !includeUpperCase && !includeNumeric && includeSpecailCaracters){
            
          }else if(includeLowerCase && !includeUpperCase && includeNumeric && !includeSpecailCaracters){
            
          }
          //1
          else if(!includeLowerCase && !includeUpperCase && !includeNumeric && includeSpecailCaracters){
            
          }else if(!includeLowerCase && !includeUpperCase && includeNumeric && !includeSpecailCaracters){
            
          }else if(!includeLowerCase && includeUpperCase && !includeNumeric && !includeSpecailCaracters){
            
          }else if(includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecailCaracters){
            
          }

          else{
            return;
          }





      }else{return;}

  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //print password in the (passwordText) filed

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//writePassword statrs working when click the button