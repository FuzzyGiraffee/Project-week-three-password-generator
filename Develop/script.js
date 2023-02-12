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
  // Prompts for character types and stores as boolean
  var passwordSpecial = confirm("Include special characters?");
  var passwordLower = confirm("Include lowercase letters?");
  var passwordUpper = confirm("include uppercase letters?");
  var passwordNum = confirm("Include numbers?");
  // Validate at lesat one character type was selected
  if (!passwordSpecial && !passwordLower && !passwordUpper && !passweordNum) {
    alert("Erorr at least one character type must be selected");
  };
  // Create arrays contiaing characters
  var lowercase = ["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
   uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
   special = ["!","#","$","~"],
   num = ["1","2","3","4","5","6","7","8","9","0"];

   var letterselector = random(1,26)
   var charactertypespector = random(1,4)
   var password = []
   // take password lenght output -> run random that number of times ->  randomly choose be
  //  create new variable that assigned a number to each

  //begin character randomization
  for (var i = 0; i <= passwordLength; i++ ){
    // randomize type of character 
    //create if else and elseif statements to select password special, password lower, passwordupper and passwordnum.
    //once selected use random funciton to select random character in each array and sequentiall asign to location in desired password output
      if (charactertypespector = 1) {
        password[i] = [letterselector]
      }
     }
     console.log(password)
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
