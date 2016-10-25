var exports = module.exports = {};

var prompt = require('prompt');
var game = require('./game.js');


prompt.start();

var word=game.chosenword.toUpperCase();
var initialdisplay=word.replace(/A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|0|1|2|3|4|5|6|7|8|9/g,"-");
var guessarray=[];
var lastguess;
var repeat=0;
var guessesleft=10;

function getletter() {

		console.log("-----------------------------------------");

		prompt.get(['guessLetter'], function(err, result) {

			  	lastguess=result.guessLetter.toUpperCase();

			  	for (var x=0; x<guessarray.length;x++){
			  		if (lastguess==guessarray[x]){
			  			repeat=repeat+1;
			  		}
			  		else {
			  			repeat=repeat;
			  		}
			  	}

			  	if (repeat==0){

			  		guessarray.push(lastguess);	

			  		var position = word.indexOf(lastguess);

			  		if (position==-1){
			  			console.log("WRONG!");

			  			guessesleft=guessesleft-1;

			  			if (guessesleft>0){
			  				console.log("Guesses Left: "+guessesleft);
			  				console.log("Your word is still: "+initialdisplay);
			  				console.log("Your guesses so far: "+guessarray);
			  				setTimeout(getletter,3000);
			  			}	
			  			else {
			  				setTimeout(gameover,2000);
			  			}

			  		}
			  		else {
			  			console.log("CORRECT!");
			  			for (var y=0; y<word.length;y++){
			  				var letter1=word.charAt(y);
			  				if (lastguess==letter1){
			  					initialdisplay=initialdisplay.substring(0,y)+lastguess+initialdisplay.substring(y+1);
			  				}
			  			};

			  			if(initialdisplay.indexOf("-")==-1){
			  				console.log("You correctly guessed the word: "+initialdisplay);
			  				setTimeout(congrats,2000);
			  			}
			  			else {
			  				console.log("Guesses Left: "+guessesleft);
			  				console.log("Your word is now: "+initialdisplay);
			  				console.log("Your guesses so far: "+guessarray);
			  				setTimeout(getletter,3000);
			  			}

			  		}

			  	}
			  	else {
			  		console.log("You already guessed "+lastguess+", dumbass.")
			  		repeat=0;
			  		setTimeout(dumbass2,2000);
			  		setTimeout(getletter,4000);
			  	}

		});
};




function dumbass1(){
	console.log("DUMBASS.")
}

function dumbass2(){
	console.log("Yes. I called you a dumbass.")
}

function gameover(){
	console.log("GAME OVER!");
	setTimeout(spoiler,1500);
	setTimeout(dumbass1,3000);
}

function congrats(){
	console.log("CONGRATULATIONS!")
}

function spoiler(){
	console.log("The answer was "+word+".");
}


exports.letter = getletter;




























// export to use in word.js
