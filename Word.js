
// contains all the methods which will check the letters guessed vs the random word selected.

	var Letter = require("./Letter.js"); //depends on Letter constructor

// first function argument constructor
	function Word(WordToGuess) { 
		this.wordToGuess = WordToGuess; //random word to guess 
		this.letters = []; //collection of letters guessed
		this.found = false; //letter guessed in word?

// 1st function method to grab the letter in the word
	this.grabLetters = function() { 
		for(var i=0; i < this.wordToGuess.length; i++) {
			var newLetter = new Letter(this.wordToGuess[i]);
			this.letters.push(new Letter);
			}
		};
// 2nd function method to grab the word
	this.findWord = function() {
		this.found = this.letters.every(function(currentLetter){
			return currentLetter.guessed;
		});
		return this.found;
	};

// 3rd function method that finds the letter in the letters array
	this.ifIsLetter = function(guessLetter) {  
		var toReturn = 0;
		for(var i = 0; i < this.letters.length; i++) {
			if(this.letters[i].character == guessLetter) {
				this.letters[i].isLetter(guessLetter);
				// this.letters[i].guessed = true;
				toReturn ++;
				}

				// 
			}
			return toReturn;
		};

// 4th function method that returns a string representing the word
	this.getString = function() { 
		var string = "";
		for (var i = 0; i< this.letters.length; i ++) {
				string += this.letters[i].toString();
			}
			return string;
		};
	};
}
// var test = new Word("bear")
// console.log(test.wordToGuess)
// var test = new Word("bear");
// console.log("a")
// console.log(test.toString())

// test.getString("a")
// console.log(test.getString())

module.exports = Word;