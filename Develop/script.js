// Assignment code here
// psudo-random number generator

//TODO: 1) store character selection types selected during dialog box sequence 
//      2) referece stored values in character randomization algorithm to selectivly add characters
//      3)
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

// Dialogue 
function generatePassword(){
  // Prompts for length of password and stores as string
  var passwordLength = prompt("Please write desired password length. Input must be between 8 and 128 characters");
  // valiate char length
  if (passwordLength < 8) {
    alert("Error password must be 8 to 128 characters")
  }else if( passwordLength > 128){
    alert("Error password must be 8 to 128 characters")
  // Prompts for character types and stores as boolean
  }
  var passwordSpecial = confirm("Include special characters?");
  var passwordLower = confirm("Include lowercase letters?");
  var passwordUpper = confirm("include uppercase letters?");
  var passwordNum = confirm("Include numbers?");
  // Validate at lesat one character type was selected
  if (!passwordSpecial && !passwordLower && !passwordUpper && !passwordNum) {
    alert("Error at least one character type must be selected");
  };
  // Create arrays contiaing characters
    var lowerCase = "abcdefghifjklmnopqrstuvwxyz",
    uppercase = "ABCDEFGHIJKLMNOPQRTSTUVWXYZ",
    special = "!#~$5^&*()",
    num = "123457890";

   //create array named password 
   var password = [];
  //  // take password lenght output -> run random that number of times ->  randomly choose be
  //  create new variable that assigned a number to each

  //create if else and elseif statements to select password special, password lower, passwordupper and passwordnum.
    //once selected use random funciton to select random character in each array and sequentiall asign to location in desired password output


  //begin character randomization
    for (var i = 0; i < passwordLength; i++){
      characterTypeSelector = random(0,3);
      letterSelector = random(0,25);
        //Character insertion procedure
        if (characterTypeSelector == 0) {
          var addLetterLower = lowerCase[letterSelector]
          console.log (addLetterLower)
          password.push(addLetterLower);
          console.log(password)

        }else if (characterTypeSelector == 1){
          var addLetterUpper = uppercase[letterSelector]
          console.log (addLetterUpper)
          password.push(addLetterUpper);
          console.log(password)

        }else if (characterTypeSelector == 2){
          var addLetterSpecial = special[letterSelector]
          console.log (addLetterSpecial)
          password.push(addLetterSpecial);
          console.log(password)
          
        }else {
          var addLetterNum = num[letterSelector]
          console.log (addLetterNum)
          password.push(addLetterNum);
          console.log(password)
          
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
