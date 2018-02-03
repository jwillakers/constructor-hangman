// Contains a constructor, Letter. This constructor should be able to either display 
// an underlying character or a blank placeholder (such as an
// underscore), depending on whether or not the user has guessed the letter.
// That means the constructor should define:
function Letter (character) {
	this.character = character; // A string value to store the underlying character for the letter
	this.guessed = false; // A boolean value that stores whether that letter has been guessed yet.	
	};

// A function that returns the underlying character if the letter has been
// guessed, or a placeholder (like an underscore) if the letter has not been
// guessed. name your letter's display function toString.

function toString() {		
	if(this.guessed === true) {
		return this.character;
	}else {
// else returns underscore
		return "_";
		}
	};

 // A function that takes a character as an argument and checks it
 // against the underlying character, updating the stored boolean value
 // to true if it was guessed correctly
 Letter.prototype.isLetter = function(letterguessed) {
 	if(letterguessed === this.character){
 		this.guessed = true;
 	}
 }
// var test = new Letter("a");
// test.isLetter("b")
// console.log(test.guessed)

module.exports = Letter;
