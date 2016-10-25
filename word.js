

function blah(){
	console.log("BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH");
};

function blahs(){
	blah();
	setTimeout(blah,500);
	setTimeout(blahs,1000);
};

function conditionalblah(){
	if (process.argv[2]=="blah"){
		setTimeout(blahs,6200);
	}
};

conditionalblah();




//HERE'S THE CONSTRUCTOR YOU MANDATED IN THE INSTRUCTIONS:

function ObligatoryFreakinConstructor(a,b,c) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.Question=function(){
		console.log("There. Happy now?");
	}
}