// Assignment code here

// psudo-random number generator    
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
  }

  // Prompts for character types and stores as boolean
  var passwordLower = confirm("Include lowercase letters?");
  var passwordUpper = confirm("include uppercase letters?");
  var passwordSpecial = confirm("Include special characters?");
  var passwordNum = confirm("Include numbers?");
  // Validate at lesat one character type was selected
  if (!passwordSpecial && !passwordLower && !passwordUpper && !passwordNum) {
    alert("Error at least one character type must be selected");
  };
  // Create arrays contiaing characters
    var lowerCase = "abcdefghijklmnopqrstuvwxyz",
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    special = "!#$%&'()*+,-./:;<=>?@[^_`{|}~",
    num = "1234567890";

   //create array named password 
   var password = []; 

 

  //begin character randomization
    for (var i = 0; i < passwordLength; i++){
      
      //generate random numbers within set range to randomly set from relevant string
      //generate character to insert
      characterTypeSelector = random(0,3);
        
        //Character insertion procedure
        while (password.length < passwordLength ){
        
          console.log (characterTypeSelector)
          characterSelectorLetterLower = random(0,lowerCase.length);
          characterSelectorLetterUpper = random(0,uppercase.length);
          characterSelectorSpecial = random(0,special.length);
          characterSelectorNum = random(0,num.length)
          while (password.length < passwordLength){
           if (characterTypeSelector == 0 && passwordLower == true) {
            var addLetterLower = lowerCase[characterSelectorLetterLower]
            console.log (addLetterLower)
            password.push(addLetterLower);
            console.log(password)
          
          }else if (characterTypeSelector == 1 && passwordUpper == true){
            var addLetterUpper = uppercase[characterSelectorLetterUpper]
            console.log (addLetterUpper)
            password.push(addLetterUpper);
            console.log(password)

          }else if (characterTypeSelector == 2 && passwordSpecial == true){
            var addLetterSpecial = special[characterSelectorSpecial]
            console.log (addLetterSpecial)
            password.push(addLetterSpecial);
            console.log(password)
            
          }else if (characterTypeSelector == 3 && passwordNum == true){
            var addLetterNum = num[characterSelectorNum];
            console.log (addLetterNum);
            password.push(addLetterNum)
            console.log(password);
        }
        }
      }
    }
    return password;
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