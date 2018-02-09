// object of game:
// words to guess stored in an array
// words to guess are displayed as underscores to the user
// prompt user to guess a letter "? Guess a letter!"
// user guesses letters in the word
// if letter guessed is correct, shows as letter
// user told letter is correct "CORRECT"
// if letter guessed is false, underscore stays
// user told incorrect "INCORRECT"
// guesses remaining starts at 10 and decreases "9 guesses remaining"
// user prompt to guess a letter again "? Guess a letter!"
// user continues to guess until all letters found in word
// computer displays next word to guess "You got it right! Next word"

// need to install inquirer npm so user can interact

// The file containing the logic for the course of the game, which depends on
// Word.js 

//linking Word.js file
var Word = require("./Word.js");

// command to ask user
var prompt = require('prompt');
// var inquirer = require("inquirer");
// Randomly selects a word and uses the Word constructor to store it
console.log ("Play Sports Hangman") 
console.log ("A sport name is hidden for you to guess its letters")
console.log("-----------------------------");

// Prompts the user for each guess and keeps track of the user's remaining guesses
prompt.start(); //from prompt npm

var game = {
	wordList: ["soccer"],

	// wordList: ["soccer", "golf", "polo", "football", "hockey"],
	won: false,
	guessesLeft: 10,
	currentWord: null,

	startGame: function(word) {
		this.resetGuesses();
		this.currentWord = new Word(this.wordList[Math.floor(Math.random()* this.wordList.length)]);
		this.currentWord.addLetter();
		this.currentWord.ifIsLetter(null);
		this.promptUser();
	},

	resetGuesses: function() {
		this.guessesLeft = 10;
	},

	promptUser: function() {//from prompt NPM
		var user = this;
		prompt.get(["guessLetter"], function(err, result) {
			console.log("You guessed: " + result.guessLetter);
			var youGuessed = user.currentWord.ifIsLetter(result.guessLetter);

			if(youGuessed == false) {
				console.log("Wrong, guess again");
				user.guessesLeft--;

			} else {
				console.log("CORRECT");
				if (user.currentWord.findWord()) {
					console.log("You won!");
					console.log("----------------------")
					return;
				}
			}
			console.log("Guesses remaining: " + user.guessesLeft);
			console.log("---------------------");
			if((user.guessesLeft > 0) && (user.currentWord.found == false)) {
				user.promptUser();
			} else if(user.guessesLeft == 0) {
				console.log("Game over.");
			} else {
				console.log(user.currentWord.getString());
			}
		});
	}
};

game.startGame();
