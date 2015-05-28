/*
	==================================================
	This file calculates the Iris level needed to buy
	a given hero with the gold gotten from one gold
	clickable after an ascension.
	==================================================

	TODO:
	Add navigation to the website to make people actually know about this.
	
*/





	var libBonus = 1;




mainListener('click',calc,calcButton);

	$.each(heroes,function(){	
		this.cost *= (1-ancients[10].level*0.02)
	});

function calc(){
	output.value = "Iris levels";
	var string = input.value;
    var myData = decryptSave(string);
	
	readAncientLevels(myData);

	libCalc();
	

	
	// For each hero, find first level at which levelGold > cost, then move on
	
	$.each(heroes,function(){
	
		var i=1;
	
		while (levelGold(i)<this.cost){
		
			i++
		
		}
	
		this.irisLevel = i-2;
		if (this.irisLevel<0) this.irisLevel = 0;
	
	output.value += "\n\n" + this.name + ": " + this.irisLevel + ", Current level: " + ancients[29].level;
	
	});
	
}


function levelGold(level){

var hp = Math.ceil(10 * (Math.pow(1.6,(Math.min(level,140)-1))+(Math.min(level,140)-1)) * (Math.pow(1.15, Math.max(level-140,0))));

// Includes x10 for candy
var gold = Math.ceil(hp / 15*Math.min(3,Math.pow(1.025,Math.max(0,level-75)))*10);

return gold *= libBonus * (1 + ancients[7].level * 0.05);

}

function libCalc(){

 libBonus = 1;

		
		for(var i=1; i<Math.min(ancients[3].level+1,100);i++){
			libBonus += 0.25 - 0.01 * Math.floor(i/10);
		}
		
	libBonus += 0.15 * Math.max(0, ancients[3].level - 99);	

	libBonus = Math.floor(libBonus*10)/10;
	
}