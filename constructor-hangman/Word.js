
 // Contains a constructor, Word that depends on the Letter constructor. This
 // is used to create an object representing the current word the user is
 // attempting to guess. That means the constructor should define:
// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the
// function on each letter object (the first function defined in Letter.js) that
// displays the character or an underscore and concatenate those together. A
// function that takes a character as an argument and calls the guess function on
// each letter object (the second function defined in Letter.js)

	var Letter = require("./Letter.js"); //depends on Letter constructor

	function Word(WordToGuess) { 
		this.wordToGuess = WordToGuess;
		this.letters = []; //collection of letter objects
		this.found = false;
	};

	function getLetters() { //populate the array of letter objects with new letter objects
		for(var i=0; i < this.wordToGuess.length; i++) {
			var newLetter = new Letter(this.wordToGuess[i]);
			this.letters.push(newLetter);
		}
	};	

	function getWord() { //finds current word
		this.found = this.letters.every(funcion(currentLetter) {
			return currentLetter.appear;
		});
			return this.found;
	};
	
	function ifIsLetter(guessLetter) {  //calls the function of each letter object 
		var returnlet = 0;
		for(var i = 0; i < this.guessedLetters.length; i++) {
			if(this.letters[i].character == guessLetter) {
				this.letters[i].appear = true;
				returnlet++;
				}
			}
			return returnlet;
		};

	function getString() { //function that returns a string representing the word
		var string = "";
		for (var i = 0; i< this.letters.length; i ++) {
				string += this.letters[i].Letter();
			}
			return string;
		};
	};


module.exports = Word;