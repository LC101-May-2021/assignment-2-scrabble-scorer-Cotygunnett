// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let word;
let scoreSystem;
let scoreTotal;

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
     
		 }
 
	  }
     
	}
   console.log(letterPoints)
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
function initialPrompt() {
  word = input.question(`Let's play some scrabble! \n\ Enter a word:`);

 return word;
};



let simpleScore = function(word) {
  word.toUpperCase();
  for (i = 0; i < word.length; i++ ){
    scoreTotal++
  }
  return scoreTotal;
};;

let vowelBonusScore = function(word) {
  word.toUpperCase();
  let vowels = ['A', 'E', 'I', 'O', 'U'];
  for (i = 0; i < word.length; i++){
  if (vowels.indexOf(word[i])){
    scoreTotal +=3;
  } else {
    scoreTotal ++;
  }
  }
  return scoreTotal
};
;

let scrabbleScore;

const scoringAlgorithms = [

  {
    name: "Simple Score",
    description: "each letter is worth 1 point.",
    scoringFunction: simpleScore = function(word) {
  word.toUpperCase();
  for (i = 0; i < word.length; i++ ){
    scoreTotal++
  }
  return scoreTotal;
}
  },


  {
    name: "Bonus vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore = function(word) {
  word.toUpperCase();
  let vowels = ['A', 'E', 'I', 'O', 'U'];
  for (i = 0; i < word.length; i++){
  if (vowels.indexOf(word[i])){
    scoreTotal +=3;
  } else {
    scoreTotal ++;
  }
  }
  return scoreTotal
}
  },


  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoringFunction: function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
     
		 }
 
	  }
     
	}
   
	return letterPoints;
 }
  },
];




function scorerPrompt() {
  while(scoreSystem = NaN || scoreSystem < 0 || scoreSystem > 2){
   scoreSystem = question.input("Which scoring algorithm would you like to use? \n \n 0 - Simple: One point per character\n 1 - Vowel Bonus: Vowels are worth 3 points \n 2 - Scrabble: Uses scrabble point system \n Enter 0, 1, or 2: ")
  }
  if (scoreSystem = 0){
   return scoringAlgorithms[0].scoringFunction(word)
  } else if (scoreSystem = 1){
     return scoringAlgorithms[1].scoringFunction(word)
  } else if (scoreSystem = 2){
     return scoringAlgorithms[2].scoringFunction(word)
  };
}

function transform() {};

let newPointStructure;

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

