/*
	==================================================
	This file contains sorting functions. More may be
	added at a later date for different sorting methods.
	==================================================
*/

function sortAncients(objectArray){

/*

for each (object), put (level) into an array. Then, sort array. Then, for each (object), if level==array[i], output object. Do that for array.length

*/
	var levelArray = [];
	sortHolder = "";
	var i = 0;
	$.each(objectArray, function() {
	
	levelArray[i] = this.level;
	i++
	});
	
	if(sortMethod=='asc') levelArray.sort(function(a, b){return a-b});
	if(sortMethod=='desc') levelArray.sort(function(a, b){return b-a});
	
	for (var k = 0; k < levelArray.length; k++){
	
		if(abbreviated==true){
		$.each(objectArray, function(){
			if(this.level==levelArray[k]) sortHolder += this.level + ':' + (this.names).slice(0,-2) + "; ";
			
		});
		}
		if(abbreviated==false){
		$.each(objectArray, function(){
			if(this.level==levelArray[k] && this.output==true){
			sortHolder += this.name + ' (' + this.level + '); ';
			this.output=false;
			}
			
		});
		}
	}

	return sortHolder;
}