// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword(){
// generate the length of password
  var lengthp = prompt("How long do you want your password to be? (Must be a number between 8 and 128 characters)");
    var cnvrtLength = parseInt(lengthp);
    if (lengthp < 8 || lengthp > 128) {
      lengthp = prompt("Please enter a number between 8 and 12 for the password's length")
    }
// prompt user for requirements
  var lowercase = confirm("Do you want to include lowercase letters in your password?");
  var uppercase = confirm("Do you want to include uppercase letters? in your password");
  var numbers = confirm("Do you want to include numbers in your password?");
  var special = confirm("Do you want to include special in your password?");
// if requirements don't work prompt user again
  while (lowercase === false && uppercase === false && numbers === false && special === false){
    alert("You must have one of these criterias");
    var lowercase = confirm("Do you want to include lowercase letters in your password?");
    var uppercase = confirm("Do you want to include uppercase letters? in your password");
    var numbers = confirm("Do you want to include numbers in your password?");
    var special = confirm("Do you want to include special in your password?");
  }
// create an array from user input
  var lA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var nA = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var sA = ["@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ".", "(", ")", "{", "}", "[", "]", "~", "-", "_"];
  var luA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lnA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var lsA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ".", "(", ")", "{", "}", "[", "]", "~", "-", "_"];
  var unA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var usA = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ".", "(", ")", "{", "}", "[", "]", "~", "-", "_"];
  var nsA = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ".", "(", ")", "{", "}", "[", "]", "~", "-", "_"]; 
  var lunA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var lusA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ".", "(", ")", "{", "}", "[", "]", "~", "-", "_"];
  var unsA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0","@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ".", "(", ")", "{", "}", "[", "]", "~", "-", "_"]; 
  var lnsA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0","@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ".", "(", ")", "{", "}", "[", "]", "~", "-", "_"];
  var lunsA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0","@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ".", "(", ")", "{", "}", "[", "]", "~", "-", "_"];

    if (lowercase === true && uppercase === false &&  numbers === false && special === false){
      var lP = [];
         for(i = 0; i < lengthp; i++){
          var lR = lA[Math.floor(Math.random() * 26)];
           lP.push(lR);
         }
         var passwordArray = lP.join("");
         return passwordArray;
        }
      else if (lowercase === false && uppercase === true &&  numbers === false && special === false){
        var uP = [];
           for(i = 0; i < lengthp; i++){
            var uR = uA[Math.floor(Math.random() * 26)];
             uP.push(uR);
           }
           var passwordArray = uP.join("");
           return passwordArray;
          }
        else if (lowercase === false && uppercase === false &&  numbers === true && special === false){
          var nP = [];
             for(i = 0; i < lengthp; i++){
              var nR = nA[Math.floor(Math.random() * 10)];
              nP.push(nR);
             }
             var passwordArray = nP.join("");
             return passwordArray;
            }
         else if (lowercase === false && uppercase === false &&  numbers === false && special === true){
          var sP = [];
             for(i = 0; i < lengthp; i++){
              var sR = sA[Math.floor(Math.random() * 21)];
              sP.push(sR);
             }
             var passwordArray = sP.join("");
             return passwordArray;
            }
          else if (lowercase === true && uppercase === true &&  numbers === false && special === false){
            var luP = [];
               for(i = 0; i < lengthp; i++){
                var luR = luA[Math.floor(Math.random() * 52)];
                luP.push(luP);
               }
               var passwordArray = luP.join("");
               return passwordArray;
              }
          else if (lowercase === true && uppercase === false &&  numbers === true && special === false){
            var lnP = [];
               for(i = 0; i < lengthp; i++){
                var lnR = lnA[Math.floor(Math.random() * 36)];
                lnP.push(lnR);
               }
               var passwordArray = lnP.join("");
               return passwordArray;
            }
          else if (lowercase === true && uppercase === false &&  numbers === false && special === true){
            var lsP = [];
               for(i = 0; i < lengthp; i++){
                var lsR = lsA[Math.floor(Math.random() * 47)];
                lsP.push(lsR);
               }
               var passwordArray = lsP.join("");
               return passwordArray;
              }
          else if (lowercase === false && uppercase === true &&  numbers === true && special === false){
            var unP = [];
               for(i = 0; i < lengthp; i++){
                var unR = unA[Math.floor(Math.random() * 36)];
                unP.push(unR);
               }
               var passwordArray = unP.join("");
               return passwordArray;
            }
          else if (lowercase === false && uppercase === true &&  numbers === false && special === true){
            var usP = [];
               for(i = 0; i < lengthp; i++){
                var usR = usA[Math.floor(Math.random() * 47)];
                usP.push(usR);
               }
               var passwordArray = usP.join("");
               return passwordArray;
            }
          else if (lowercase === false && uppercase === false &&  numbers === true && special === true){
            var nsP = [];
               for(i = 0; i < lengthp; i++){
                var nsR = nsA[Math.floor(Math.random() * 31)];
                nsP.push(nsR);
               }
               var passwordArray = nsP.join("");
               return passwordArray;
              }
          else if (lowercase === true && uppercase === true &&  numbers === true && special === false){
            var lunP = [];
               for(i = 0; i < lengthp; i++){
                var lunR = lunA[Math.floor(Math.random() * 62)];
                lunP.push(lunR);
               }
               var passwordArray = lunP.join("");
               return passwordArray;
             }
          else if (lowercase === true && uppercase === true &&  numbers === false && special === true){
            var lusP = [];
               for(i = 0; i < lengthp; i++){
                var lusR = lusA[Math.floor(Math.random() * 73)];
                lusP.push(lusR);
               }
               var passwordArray = lusP.join("");
               return passwordArray;
            }
          else if (lowercase === false && uppercase === true &&  numbers === true && special === true){
            var unsP = [];
               for(i = 0; i < lengthp; i++){
                var unsR = unsA[Math.floor(Math.random() * 57)];
                unsP.push(unsR);
               }
               var passwordArray = unsP.join("");
               return passwordArray;
           }
           else if (lowercase === true && uppercase === false &&  numbers === true && special === true){
            var lnsP = [];
               for(i = 0; i < lengthp; i++){
                var lnsR = lnsA[Math.floor(Math.random() * 57)];
                lnsP.push(lnsR);
               }
              var passwordArray = lnsP.join("");
              return passwordArray;
            }
          else if (lowercase === true && uppercase === true &&  numbers === true && special === true){
            var lunsP = [];
               for(i = 0; i < lengthp; i++){
                var lunsR = lunsA[Math.floor(Math.random() * 83)];
                lunsP.push(lunsR);
               }
             var passwordArray = lunsP.join("");
             return passwordArray;
            }
}  

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 