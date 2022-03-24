const words = ["apple", "book", "cat" , "pen", "toy"]
const randomWord = words[Math.floor(Math.random() * words.length)]
const visitedArray = []
const correctChar = []
const wrongChar = []
const hangmanBody = document.querySelectorAll('.figure-part');   


function showChar() {
   document.getElementById('word').innerHTML =
   `
   ${randomWord.split("").map((letter) =>
           `
               <span class = "letter">
                   ${correctChar.includes(letter) ? letter : ""}
               </span>
           `
   ).join("")
   }
   `;
 
   const guessedWord = document.getElementById('word').innerText.replace(/\n/g,"");
  
   console.log(guessedWord)
   if(guessedWord === randomWord) {
       alert("We won the game")
       wrongChar.splice(0)
       correctChar.splice(0)
       visitedArray.splice(0)
       showChar()
 
   }
 
 
 
}
 
function updateIncorrectChar() {
   document.getElementById('wrong-char-block').innerHTML =
   `
   ${wrongChar.length>=1 ? "<p> Wrong Char Guessed </p>" : ""}
   ${wrongChar.map((letter) =>
       `
       <span>${letter}</span>
       `
       )}
 
  
   `;
 
   hangmanBody.forEach((ele, index) => {
       const noOfIncorrectGuess = wrongChar.length;
       console.log("Printing" + index + "  " + wrongChar.length)
       if(index < noOfIncorrectGuess) {
           console.log("Displaying" + index + "  " + wrongChar.length)
           ele.style.display = "block";
       } else{
           console.log("#########" + index + "  " + wrongChar.length)
           ele.style.display = "none";
       }
 
   })
 
   if(wrongChar.length === hangmanBody.length) {
       alert("You lost the game")
   }
 
 
 
}
 function showNotification() {
   document.getElementById('notification-container').style.display = "block";
   setTimeout(() => {
       document.getElementById('notification-container').style.display = "none";
   }, 1000)
}
 
document.getElementById('notification-container').style.display = "none";



showChar()




window.addEventListener("keydown" , (e) => {
   console.log(e.key)
   if (e.key >= 'a' && e.key <= 'z') {
       if(visitedArray.includes(e.key)){
           showNotification()
       } else{
           visitedArray.push(e.key)
           if(randomWord.includes(e.key)){
               correctChar.push(e.key)
               showChar();
           } else {
               wrongChar.push(e.key)
               updateIncorrectChar()
           }
           console.log(visitedArray)
           console.log(wrongChar)
           console.log(correctChar)
       }
   } else{
       console.log("bad character...bhppppppp")
   }
})
