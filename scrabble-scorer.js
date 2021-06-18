// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let word = '';
let scoreSystem = 5;

let newPointStructure = transform(oldPointStructure);

function oldScrabbleScorer(word) {

	let letterPoints = "";
 	word = word.toUpperCase();

	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
     
		 }
 
	  }
     
	}
  
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
function initialPrompt() {
 word = input.question(`Let's play some scrabble! \n\ Enter a word:`);
 
return word;
 
};




function simpleScore(word) {
  return word.length;
};

function vowelBonusScore(word) {
  let scoreTotal = 0;
  word = word.toLowerCase();
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (i = 0; i < word.length; i++){
  if (vowels.includes(word[i])){
    scoreTotal +=3;
  } else {
    scoreTotal += 1;
  }
  }
  return scoreTotal
};
;

let scrabbleScore = function(word){
  	let scoreTotal = 0;
 	word = word.toLowerCase();

	for (let i = 0; i < word.length; i++) {
 
	
 
   scoreTotal +=  newPointStructure[word[i]]    
	 
     
	}
  return scoreTotal;
};
  


const scoringAlgorithms = [

  {
    name: "Simple Score",
    description: "each letter is worth 1 point.",
    scoringFunction: simpleScore

  },


  {
    name: "Bonus vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore
  },

  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoringFunction: scrabbleScore
  }
];

console.log(word);


function scorerPrompt() {
  while(scoreSystem == NaN || scoreSystem < 0 || scoreSystem > 2){
   scoreSystem = input.question("Which scoring algorithm would you like to use? \n \n 0 - Simple: One point per character\n 1 - Vowel Bonus: Vowels are worth 3 points \n 2 - Scrabble: Uses scrabble point system \n Enter 0, 1, or 2: ")
  }
  console.log(scoreSystem)
  if (scoreSystem == 0){

   console.log(scoringAlgorithms[0].scoringFunction(word))
  } else if (scoreSystem == 1){
     console.log(scoringAlgorithms[1].scoringFunction(word))
  } else if (scoreSystem == 2){
     console.log(scoringAlgorithms[2].scoringFunction(word))
  };
}

function transform(objectA) {
  let newObject = {};
  for(let num in objectA){
    for(let letter of objectA[num]){
      newObject[letter.toLowerCase()] = Number(num);
    }
  }
  return newObject
};



function runProgram() {
  initialPrompt();

  scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

