/*
	==================================================
	Original intent was to produce a list of ancients
	and their levels. Since then it's evolved to list
	most(if not all) relevant info that one might want
	to share.
	==================================================
*/

//Misc
var soulsSpent = 0;

//Lists
var ancientList = "Ancients: ";
var heroList = "Gilded heroes: ";
var miscList = "Misc Info: ";
var timeList = "";

//Elements
mainListener('click',calc,calcButton);

function calc(){
	abbreviated = abbreviatedMode.checked;
    
	var string = input.value;
    var myData = decryptSave(string);
	
	
	sortMethod = $('input[name="sortMode"]:checked').val();
	
	readData(myData);
	
	arrayChopper();
	
	//Adds together the arrays. More arrays can be added after heroArray with commas separating them.
	var outputArray = ancientArray.concat(heroArray,miscArray,timeArray);
	
    var len = outputArray.length;

    for(i=0;i<outputArray.length;i++){
	
		// Chops off starting commas and spaces.
        while(outputArray[i][0]==","||outputArray[i][0]==" "){

            outputArray[i] = outputArray[i].substring(1);

        }

		// Chops off trailing commas. Leaves spaces.
        while(outputArray[i][outputArray[i].length-1] == ','){

            outputArray[i] = outputArray[i].slice(0,-1);

        }

    }
	// Adds newlines between all blocks. Reconsider this for abbreviated version.
    for (i=0;i<=len+1;i++){
        outputArray.splice(i+1,0,'\n\n');
        i++;
    }

    output.value = outputArray.join("");


}
 