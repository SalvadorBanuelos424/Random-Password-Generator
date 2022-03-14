// Password.generator.code
// Character-types Arrays  [lower] [upper] [number] [special]
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_","."];




// Function to retrieve information; password length & the type of characters that will go into the password.
function pInfo () {
  
  //  Prompt user for an 'acceptable' password length, parseInt turns a numeric string into an integer.   
  var pLength = parseInt (prompt('Choose a password length between 8 - 128 characters to get started!'));
  if ((pLength < 8) && (pLength< 128)) {
    alert('Incorrect password length is unable to generate a password.  Choose a password length between 8 - 128 characters to get started! ');
  } 
    
  // Prompt user to select character types for a password.   Must at least choose one.  [lower] [upper] [number] [special]
  var addLow = window.confirm('Click Ok to include lowercase characters.  Click Cancel to exclude lowercase characters.');
  var addUp = window.confirm('Click Ok to include uppercase characters.  Click Cancel to exclude uppercase characters.');
  var addNum = window.confirm('Click Ok to include numeric characters.  Click Cancel to exclude numeric characters.');
  var addSpe = window.confirm('Click Ok to include special characters.  Click Cancel to exclude special characters.');
  if (!addLow && !addUp && !addNum && !addSpe) {
    alert('Unable to generate a password.  Select at least one character type.');
  }

  // Convert user's input into Objects
  var pData = {
    pLength: pLength,
    addLow: addLow,
    addUp: addUp,
    addNum: addNum,
    addSpe: addSpe
  } 
return pData;
}; 




// Function to pull random values from arrays 
function createArray(arr) {
  var randomChar = Math.floor(Math.random() * arr.length);
  var pullChar = arr[randomChar];
  return pullChar
}




// Function to generate a random password
function generatePassword() {
  
  // Manipulate pInfo() easier by turning it into a variable
  var pFacts = pInfo()

  // Space variable to store the generated password 
  var pMade = [];

  // Space variable to store characters concated from their respected type of array
  var useableChars= [];

  // If [lowercase] 'true', pull lowercase characters from lowercase array
  if (pFacts.addLow) {
    useableChars = useableChars.concat(lower);
  }

  // If [uppercase] 'true', pull uppercase characters from uppercase array
  if (pFacts.addUp) {
    useableChars = useableChars.concat(upper);
  }

  //  If [numbers] 'true', pull numberic characters from numbers array
  if (pFacts.addNum) {
    useableChars = useableChars.concat(numbers);
  }

  // If [special] 'true', pull special characters from special array
  if (pFacts.addSpe) {
    useableChars = useableChars.concat(special);
  }
  
  // Pull random values from array of 'useable' password characters, using loops and user's selected length
  for (var i = 0; i < pFacts.pLength; i++) {
    var useableChar = createArray(useableChars);

    // 'Push' or add the generated useable characters into object variable
    pMade.push(useableChar);
  }

  // Turn the generated password values into a 'SingleLineOfString'
  return pMade.join("");
}




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
