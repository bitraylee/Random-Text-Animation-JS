const alpha_special = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '*'];
var attributes = ["Developer", "Designer", "Illustrator", "###"];
var control = 0;

function textAnimation(final) {
   var elem = document.getElementById("myAnimation");


   var id = setInterval(frame, 105);

   //var final = "developer";

   var word = elem.innerHTML;
   word = "";

   var k = 0;
   var keyLog = new Array;
   console.log(word);
   //var maxNumOfIterations = 30;
   var updatesPerLetter = new Array;
   for (let i = 0; i < final.length; i++) {
      updatesPerLetter[i] = Math.floor(Math.random() * 25) + 11; //11 is the minimum number of updates and 30 is the maximum no. of updates
   }
   var iterationsPerLetter = new Array(final.length).fill(0);

   function frame() {
      if (elem.innerHTML == final) {
         clearInterval(id);
         control++;
         if (control == 4)
            control = 0;
         setTimeout(() => {
            textAnimation(attributes[control]);
         }, 3000);
      } else {
         for (let i = 0; i < final.length; i++) {
            for (let j = 0; j < keyLog.length; j++) {
               if (keyLog[j] == i)
                  continue;
            }
            var newWord = Array.from(word);
            if (newWord[i] == final.charAt(i)) {
               keyLog[k] = i;
               k++;
               continue;
            }
            if (iterationsPerLetter[i] == updatesPerLetter[i]) {
               newWord[i] = final.charAt(i);
               word = newWord.join("");
               continue;
            }
            //let numRandom = Math.floor(Math.random() * 26) + 97;
            let numRandom = Math.floor(Math.random() * 30);
            let resChar = alpha_special[numRandom];
            newWord[i] = resChar;
            iterationsPerLetter[i]++;
            word = newWord.join("");
            console.log(word + "\t" + iterationsPerLetter[i]);
            //word.charAt(i) = resChar;
         }
         elem.innerHTML = word;
      }
   }
}

function loadTextAnimation() {
   setTimeout(() => {
      textAnimation(attributes[control]);
   }, 4000);
}