var exports = module.exports = {};

var prompt = require('prompt');
var game = require('./game.js');
var word = require('./word.js');
var letter = require('./letter.js');


prompt.start();

rungame = {
	startGame : function (wrd){
		var guessesleft=10;
		console.log("You get up to "+guessesleft+" wrong guesses to find the last name of a President.")
		setTimeout(dont,2000);
		setTimeout(generateword,4000);
		setTimeout(good,5000);
		setTimeout(letter.letter,6000);
	}, 
};

rungame.startGame();

function dont(){
	console.log("Don't f&$k it up!");
};

function generateword(){
	var chosenword=game.chosenword;
	var initialdisplay=chosenword.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|0|1|2|3|4|5|6|7|8|9/g,"-");
	console.log("Your word is: "+initialdisplay);
};

function good(){
	console.log("Good luck!");
};