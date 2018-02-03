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
// Word.js linking Word.js file
var index = require("./Word.js");
// command for reading and writing files
var fs = require("fs");
// command to ask user
var inquirer = require("inquirer");
// Randomly selects a word and uses the Word constructor to store it
console.log ("Play Sports Hangman") 
console.log ("A sport name is hidden for you to guess its letters")
console.log("-----------------------------");

// Prompts the user for each guess and keeps track of the user's remaining guesses
prompt.start();

var game = {
	wordList: ["soccer", "golf", "polo", "football", "hockey"],
	won: false,
	guessesLeft: 10,
	currentWord: null,

	function startGame(word) {
		this.resetGuesses();
		this.currentWord = new Word(this.WordList[Math.floor(Math.random()* this.wordList.length)]);
		this.currentWord.getLetters();
		this.promptUser();

	};

	function resetGuesses()	{
		this.guessesLeft = 10
		};

	function promptUser() {
		var user = this;
		prompt.get([])
	}
	}
