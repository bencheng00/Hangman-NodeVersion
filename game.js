var exports = module.exports = {};



exports.wordarray = {
	words:["washington","jefferson","adams","lincoln","kennedy","clinton","roosevelt","bush","obama","ford","reagan"],
	randomword: function(){
		var wordslength=this.words.length;
		var i=Math.floor(Math.random()*wordslength);
		exports.chosenword=this.words[i];
	},

};

exports.wordarray.randomword();