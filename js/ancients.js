
const ANTI_CHEAT_CODE = 'Fe12NAfA3R6z4k0z';
const SALT = 'af0ik392jrmt0nsfdghy0';

var ancients = [
{name:"None",level:0},
{name:"None",level:0},
{name:"Solomon",level:0},
{name:"Libertas",level:0},
{name:"Siyalatas",level:0},
{name:"Khrysos",level:0},
{name:"Thusia",level:0},
{name:"Mammon",level:0},
{name:"Mimzee",level:0},
{name:"Pluto",level:0},
{name:"Dogcog",level:0},
{name:"Fortuna",level:0},
{name:"Atman",level:0},
{name:"Dora",level:0},
{name:"Bhaal",level:0},
{name:"Morgulis",level:0},
{name:"Chronos",level:0},
{name:"Bubos",level:0},
{name:"Fragsworth",level:0},
{name:"Vaagur",level:0},
{name:"Kumawakamaru",level:0},
{name:"Chawedo",level:0},
{name:"Hecatoncheir",level:0},
{name:"Berserker",level:0},
{name:"Sniperino",level:0},
{name:"Kleptos",level:0},
{name:"Energon",level:0},
{name:"Argaiv",level:0},
{name:"Juggernaut",level:0},
{name:"Iris",level:0}
];

var abr_ancients = [];

for (var name in ancients){
console.log(ancients[name].name.substring(0,4));
abr_ancients.push({name:ancients[name].name.substring(0,4),level:ancients[name].level});
};


//["None","None","Sol","Lib","Siy","Khrys","Thus","Mam","Mim","Plu","Dog","Fort","Atm","Dora","Bha","Morg","Chro","Bub","Frag","Vaag","Kuma","Chaw","Heca","Bers","Snip","Klep","Energon","Arga","Jugg","Iris"]

var heroes = [
  {name: "Cid", cost: 5, damage: 0, level: 0, upgrades: [100, 250, 1e3, 8e3, 80e3, 400e3, 4e6]}, 
  {name: "Tree Beast", cost: 50, damage: 5 * 20, level: 100, upgrades: [500, 1.25e3, 5e3, 40e3, 400e3]},
  {name: "Ivan", cost: 250, damage: 22 * 20, level: 125, upgrades: [2.5e3, 6.25e3, 25e3, 200e3, 2e6, 10e6]},
  {name: "Brittany", cost: 1000, damage: 74 * 20, level: 75, upgrades: [10e3, 25e3, 100e3, 800e3]},
  {name: "Fisherman", cost: 4000, damage: 245 * 8, level: 100, upgrades: [40e3, 100e3, 400e3, 3.2e6, 32e6]},
  {name: "Betty", cost: 20000, damage: 976, level: 100, upgrades: [200e3, 500e3, 2e6, 16e6, 160e6]},
  {name: "(Spooky) Samurai", cost: 100e3, damage: 3725 * 20, level: 75, upgrades: [1e6, 2.5e6, 10e6, 80e6]},
  {name: "Leon", cost: 400e3, damage: 10859 * 8, level: 75, upgrades: [4e6, 10e6, 40e6, 320e6]},
  {name: "Seer", cost: 2500e3, damage: 47143 * 20, level: 75, upgrades: [25e6, 62.5e6, 250e6, 2e9]},
  {name: "Alexa", cost: 15000e3, damage: 186e3 * 5.0625, level: 100, upgrades: [150e6, 375e6, 1.5e9, 12e9, 120e9]},
  {name: "Natalia", cost: 100e6, damage: 782e3 * 20, level: 75, upgrades: [1e9, 2.5e9, 10e9, 80e9]},
  {name: "Mercedes", cost: 800e6, damage: 3721e3 * 20, level: 100, upgrades: [8e9, 20e9, 80e9, 640e9, 6.4e12]},
  {name: "Bobby", cost: 6500e6, damage: 17010e3 * 20, level: 100, upgrades: [65e9, 162e9, 650e9, 5.2e12, 52e12]},
  {name: "Broyle", cost: 50e9, damage: 69480e3 * 10, level: 100, upgrades: [500e9, 1.25e12, 5e12, 40e12, 400e12]},
  {name: "Sir George", cost: 450e9, damage: 460e6 * 20, level: 100, upgrades: [4.5e12, 11.25e12, 45e12, 360e12, 3.6e15]},
  {name: "Midas", cost: 4e12, damage: 3017e6, level: 125, upgrades: [40e12, 100e12, 400e12, 3.2e15, 32e15, 160e15]},
  {name: "Referi", cost: 36e12, damage: 20009e6 * 20, level: 125, upgrades: [360e12, 900e12, 3.6e15, 28.8e15, 288e15]},
  {name: "Abaddon", cost: 320e12, damage: 131e9 * 11.390625, level: 75, upgrades: [3.2e15, 8e15, 32e15, 256e15]},
  {name: "Ma Zhu", cost: 2.7e15, damage: 814e9 * 20, level: 75, upgrades: [27e15, 67.5e15, 270e15, 2.16e18]},
  {name: "Amenhotep", cost: 24e15, damage: 5335e9 * 2, level: 50, upgrades: [240e15, 600e15, 2.4e18 /*, 19.2e18*/]},
  {name: "Beastlord", cost: 300e15, damage: 49143e9 * 8, level: 100, upgrades: [3e18, 7.5e18, 30e18, 240e18, 2.4e21]},
  {name: "Athena", cost: 9e18, damage: 1086e12 * 16, level: 100, upgrades: [90e18, 225e18, 900e18, 0, 7.2e21]},
  {name: "Aphrodite", cost: 350e18, damage: 31124e12 * 16, level: 125, upgrades: [3.5e21, 8.75e21, 35e21, 0, 280e21, 2.8e24]},
  {name: "Shinatobe", cost: 14e21, damage: 917e15 * 8, level: 100, upgrades: [140e21, 350e21, 1.4e24, 11.2e24, 112e24]},
  {name: "Grant", cost: 4199e21, damage: 202e18 * 4, level: 75, upgrades: [41.999e24, 104e24, 419e24, 3.359e27]},
  {name: "Frostleaf", cost: 2100e24, damage: 74698e18 * 4, level: 75, upgrades: [21e27, 52.499e27, 209e27, 1.679e30]},
  {name: "DreadKnight", cost: 1e40, damage: 1.46e32 * 20, level: 0, has5x: true, upgrades: [1e41, 2.5e41, 1e42, 0, 8e42]},
  {name: "Atlas", cost: 1e55, damage: 1.075e45 * 20, level: 0, has5x: true, upgrades: [1e56, 2.5e56, 1e57, 0, 8e57]},
  {name: "Terra", cost: 1e70, damage: 7.926e57 * 20, level: 0, has5x: true, upgrades: [1e71, 2.5e71, 1e72, 0, 8e72]},
  {name: "Phthalo", cost: 1e85, damage: 5.839e70 * 20, level: 0, has5x: true, upgrades: [1e86, 2.5e86, 1e87, 0, 8e87]},
  {name: "Orntchya", cost: 1e100, damage: 3.302e83 * 20, level: 0, has5x: true, upgrades: [1e101, 2.5e101, 1e102, 0, 8e102]},
  {name: "Lilin", cost: 1e115, damage: 3.17e96 * 20, level: 0, has5x: true, upgrades: [1e116, 2.5e116, 1e117, 0, 8e117]},
  {name: "Cadmia", cost: 1e130, damage: 2.335e109 * 20, level: 0, has5x: true, upgrades: [1e131, 2.5e131, 1e132, 0, 8e132]},
  {name: "Alabaster", cost: 1e145, damage: 1.721e122 * 20, level: 0, has5x: true, upgrades: [1e146, 2.5e146, 1e147, 0, 8e147]},
  {name: "Astraea", cost: 1e160, damage: 1.268e135 * 20, level: 0, has5x: true, upgrades: [1e161, 2.5e161, 1e162, 0, 8e162]}
];

var abr_heroes = [
  {name: "Cid", cost: 5, damage: 0, level: 0, upgrades: [100, 250, 1e3, 8e3, 80e3, 400e3, 4e6]}, 
  {name: "TB", cost: 50, damage: 5 * 20, level: 100, upgrades: [500, 1.25e3, 5e3, 40e3, 400e3]},
  {name: "Ivan", cost: 250, damage: 22 * 20, level: 125, upgrades: [2.5e3, 6.25e3, 25e3, 200e3, 2e6, 10e6]},
  {name: "Brit", cost: 1000, damage: 74 * 20, level: 75, upgrades: [10e3, 25e3, 100e3, 800e3]},
  {name: "Fish", cost: 4000, damage: 245 * 8, level: 100, upgrades: [40e3, 100e3, 400e3, 3.2e6, 32e6]},
  {name: "Betty", cost: 20000, damage: 976, level: 100, upgrades: [200e3, 500e3, 2e6, 16e6, 160e6]},
  {name: "Sam", cost: 100e3, damage: 3725 * 20, level: 75, upgrades: [1e6, 2.5e6, 10e6, 80e6]},
  {name: "Leon", cost: 400e3, damage: 10859 * 8, level: 75, upgrades: [4e6, 10e6, 40e6, 320e6]},
  {name: "Seer", cost: 2500e3, damage: 47143 * 20, level: 75, upgrades: [25e6, 62.5e6, 250e6, 2e9]},
  {name: "Alex", cost: 15000e3, damage: 186e3 * 5.0625, level: 100, upgrades: [150e6, 375e6, 1.5e9, 12e9, 120e9]},
  {name: "Nat", cost: 100e6, damage: 782e3 * 20, level: 75, upgrades: [1e9, 2.5e9, 10e9, 80e9]},
  {name: "Merc", cost: 800e6, damage: 3721e3 * 20, level: 100, upgrades: [8e9, 20e9, 80e9, 640e9, 6.4e12]},
  {name: "Bobby", cost: 6500e6, damage: 17010e3 * 20, level: 100, upgrades: [65e9, 162e9, 650e9, 5.2e12, 52e12]},
  {name: "Broyle", cost: 50e9, damage: 69480e3 * 10, level: 100, upgrades: [500e9, 1.25e12, 5e12, 40e12, 400e12]},
  {name: "George", cost: 450e9, damage: 460e6 * 20, level: 100, upgrades: [4.5e12, 11.25e12, 45e12, 360e12, 3.6e15]},
  {name: "Midas", cost: 4e12, damage: 3017e6, level: 125, upgrades: [40e12, 100e12, 400e12, 3.2e15, 32e15, 160e15]},
  {name: "Referi", cost: 36e12, damage: 20009e6 * 20, level: 125, upgrades: [360e12, 900e12, 3.6e15, 28.8e15, 288e15]},
  {name: "Abaddon", cost: 320e12, damage: 131e9 * 11.390625, level: 75, upgrades: [3.2e15, 8e15, 32e15, 256e15]},
  {name: "Ma Zhu", cost: 2.7e15, damage: 814e9 * 20, level: 75, upgrades: [27e15, 67.5e15, 270e15, 2.16e18]},
  {name: "Amen", cost: 24e15, damage: 5335e9 * 2, level: 50, upgrades: [240e15, 600e15, 2.4e18 /*, 19.2e18*/]},
  {name: "Beast", cost: 300e15, damage: 49143e9 * 8, level: 100, upgrades: [3e18, 7.5e18, 30e18, 240e18, 2.4e21]},
  {name: "Athena", cost: 9e18, damage: 1086e12 * 16, level: 100, upgrades: [90e18, 225e18, 900e18, 0, 7.2e21]},
  {name: "Aphro", cost: 350e18, damage: 31124e12 * 16, level: 125, upgrades: [3.5e21, 8.75e21, 35e21, 0, 280e21, 2.8e24]},
  {name: "Shin", cost: 14e21, damage: 917e15 * 8, level: 100, upgrades: [140e21, 350e21, 1.4e24, 11.2e24, 112e24]},
  {name: "Grant", cost: 4199e21, damage: 202e18 * 4, level: 75, upgrades: [41.999e24, 104e24, 419e24, 3.359e27]},
  {name: "FL", cost: 2100e24, damage: 74698e18 * 4, level: 75, upgrades: [21e27, 52.499e27, 209e27, 1.679e30]},
  {name: "DK", cost: 1e40, damage: 1.46e32 * 20, level: 0, has5x: true, upgrades: [1e41, 2.5e41, 1e42, 0, 8e42]},
  {name: "Atlas", cost: 1e55, damage: 1.075e45 * 20, level: 0, has5x: true, upgrades: [1e56, 2.5e56, 1e57, 0, 8e57]},
  {name: "Terra", cost: 1e70, damage: 7.926e57 * 20, level: 0, has5x: true, upgrades: [1e71, 2.5e71, 1e72, 0, 8e72]},
  {name: "Phthalo", cost: 1e85, damage: 5.839e70 * 20, level: 0, has5x: true, upgrades: [1e86, 2.5e86, 1e87, 0, 8e87]},
  {name: "Ornt", cost: 1e100, damage: 3.302e83 * 20, level: 0, has5x: true, upgrades: [1e101, 2.5e101, 1e102, 0, 8e102]},
  {name: "Lilin", cost: 1e115, damage: 3.17e96 * 20, level: 0, has5x: true, upgrades: [1e116, 2.5e116, 1e117, 0, 8e117]},
  {name: "Cad", cost: 1e130, damage: 2.335e109 * 20, level: 0, has5x: true, upgrades: [1e131, 2.5e131, 1e132, 0, 8e132]},
  {name: "Alab", cost: 1e145, damage: 1.721e122 * 20, level: 0, has5x: true, upgrades: [1e146, 2.5e146, 1e147, 0, 8e147]},
  {name: "Astr", cost: 1e160, damage: 1.268e135 * 20, level: 0, has5x: true, upgrades: [1e161, 2.5e161, 1e162, 0, 8e162]}
];

var nonMaxAncients = [
{name:"Solomon",level:0},
{name:"Libertas",level:0},
{name:"Siyalatas",level:0},
{name:"Thusia",level:0},
{name:"Mammon",level:0},
{name:"Mimzee",level:0},
{name:"Pluto",level:0},
{name:"Bhaal",level:0},
{name:"Morgulis",level:0},
{name:"Chronos",level:0},
{name:"Fragsworth",level:0},
{name:"Argaiv",level:0},
{name:"Juggernaut",level:0},
{name:"Iris",level:0}
];

//Misc
var count = 0;
var soulsSpent = 0;
var scientific = true;
var limit = 10000;
var prevLevel = -1;

// Holders
var ancientHolder;

//Lists
var ancientList = "Ancients: ";
var heroList = "Gilded heroes: ";
var miscList = "Misc Info: ";
var timeList = "";
var ancientListCombinedHolder = [];

//Time
var currentTime;
var creationTime;
var prevLoginTime;
var startTime;
var timeSinceCreation;

//Elements
var input = document.getElementById('input');
var output = document.getElementById('output');
var decodeButton = document.getElementById('decodeButton');
var encodeButton = document.getElementById('encodeButton');
var abbreviatedMode = document.getElementById('abbreviatedMode');
decodeButton.addEventListener('click', onDecodeButtonClick);
abbreviatedMode.addEventListener('click', onDecodeButtonClick);
var abbreviated = abbreviatedMode.checked;
var sortButtons = document.getElementsByName('sortMode');
var sortMethod = $('input[name="sortMode"]:checked').val();

for (var l=0;l<sortButtons.length;l++)
sortButtons[l].addEventListener('click', onDecodeButtonClick);


function readAncients(data){
	ancientHolder = "";
	// Takes in data in the form of a json string. NOTE: The save file (as of 0.17a) saves ancient info
	// under root.ancients.ancients

	// Reset souls spent and ancients listed each time we read the ancients
	soulsSpent = 0;
	ancientList = "Ancients: ";
	
	ancientListObjects = [];
	
	// Jquery, for each (object) in (data), do (function). The objects in root.ancients.ancients are the purchased ancients. Unpurchased are not listed.
    $.each(data, function() {
	// For each ancient, add new object to ancientListObjects with level and name
	ancientListObjects.push({level:this.level, name: ancients[this.id-1].name,output:true});

	
		
		// Adds the variable in the current ancient being checked to the total.
		soulsSpent += this.spentHeroSouls;
    });
	
	
	
	if(sortMethod=='desc' || sortMethod=='asc'){
	ancientHolder = sortAncients(ancientListObjects);
	}
	
	if(sortMethod=='id'){
	$.each(data, function() {
	ancientHolder += ancients[this.id-1].name + ' (' + this.level + '); '
	});
	}
	
	ancientList += ancientHolder;

}


function readAncientsAbr(data){

	// Takes in data in the form of a json string. NOTE: The save file (as of 0.17a) saves ancient info
	// under root.ancients.ancients

	// Reset souls spent and ancients listed each time we read the ancients
	soulsSpent = 0;
	ancientList = "Ancients: ";
	ancientHolder = "";
	
	//Initialize ancient list
	ancientListObjects = [];

	
    $.each(data, function() {
	// For each ancient, do the following. Unpurchased not listed.
		var currentLevel = this.level;
		var ancientID = this.id
		var objectExists=false;
			
		// For each object in ancientListObjects,
		$.each(ancientListObjects, function() {
			// If the objects level is the same as the ancients level
			if(this.level==currentLevel){
				// Add ancient name to the list of names, state that the level exists
				this.names += abr_ancients[ancientID-1].name + ', ';
				objectExists=true;
			}
			
			
		
		
		    });
		// If the level isn't found in the objectlist, add a new object with that level and name.
		if (objectExists==false){
		ancientListObjects.push({level:this.level, names: abr_ancients[ancientID-1].name + ', '});
		}
		
		// Adds the variable in the current ancient being checked to the total.
		soulsSpent += this.spentHeroSouls;
    });
	
	
	
	if(sortMethod=='id'){
	// Add each objects level and names to the ancientList, slice off the trailing commas and spaces, add a closing semicolon and space.
	$.each(ancientListObjects, function(){
		ancientHolder += this.level + ':' + (this.names).slice(0,-2) + "; ";
	
	});
	}
	
	if(sortMethod=='desc' || sortMethod=='asc'){
	ancientHolder = sortAncients(ancientListObjects);
	}
	
	ancientList += ancientHolder;
}

function sortAncients(objectArray){

/*

for each (object), put (level) into an array. Then, sort array. Then, for each (object), if level==array[i], output object. Do that for array.length

*/
	var levelArray = [];
	var sortHolder = "";
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

function readHeroes(data){

	// Takes in data in the form of a json string. NOTE: The save file (as of 0.17a) saves hero info
	// under root.heroCollection.heroes

	// Reset list at start of each call
	heroList = "Gilded heroes: ";
	
	// Jquery, for each (object) in (data), do (function). The objects in .heroes are all the heroes, named after their ID. Unpurchased ARE listed, unlike ancients.
    $.each(data, function() {
	
		// heroHolder works the same as ancientHolder. Manipulate the entry before we add it to the list, for cleanness.
         if (abbreviated==false) var heroHolder = heroes[this.id-1].name + ' (' + this.epicLevel + '), '
        if (abbreviated==true) var heroHolder = abr_heroes[this.id-1].name + '(' + this.epicLevel + '), '
		// epicLevel = Gild count. Since it lists all purchased and unpurchased heroes, we only want to read the gilded heroes as of the current version.
		if(this.epicLevel>0) heroList += heroHolder;

    });
}

function readTime(data){
	// Reset the list at start of each call
	timeList = "";
	
	// Grabs the various timestamps in the save.
	creationTime = data.creationTimestamp;
	prevLoginTime = data.prevLoginTimestamp;
	startTime = data.startTimestamp;
	// Grabs the current time, for comparisons.
	currentTime = new Date().getTime();
	// Compares times with current time. The positive signs are to specify integer handling. Javascript!
	timeSinceCreation = +currentTime - +creationTime;
	timeSinceAscension = +currentTime - +startTime;
	
	
		//Adding time to array
	
	 if (abbreviated==false) var timeHolder = 'Time since start: ' + formatTime(timeSinceCreation) + ', Time since ascension: ' + formatTime(timeSinceAscension) + ', ';
	 if (abbreviated==true) var timeHolder = 'First launch: ' + formatTime(timeSinceCreation) + ', Time since ascension: ' + formatTime(timeSinceAscension) + ', ';
	timeList += timeHolder;
}

function formatTime(time){
	// Time coverted to seconds from milliseconds, doesn't need to be more accurate.
	time /= 1000;
	var days = time/(24*60*60);
	var hours = (time/(60*60))%24;
	var minutes = (time/60)%60; 
	var seconds = time%60;
	// Floor it all, removing remainders
	days = Math.floor(days);
	hours = Math.floor(hours);
	minutes = Math.floor(minutes);
	seconds = Math.floor(seconds);
	
	// Return string of time.
	if(abbreviated==false) return days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds';
	if(abbreviated==true) return days + ' days, ' + hours + ' hours';
}

function readMisc(data){
	miscList = "";
	var totalSouls = +data.heroSouls + +soulsSpent;
	if (abbreviated==false) var miscHolder = 'Hero Souls: ' + data.heroSouls +  ', Souls spent on Ancients: ' + soulsSpent + ', Total Souls: ' + totalSouls + ', Highest Zone: ' + data.highestFinishedZonePersist + ', Current Zone: ' + data.currentZoneHeight + ', Ascensions: ' + data.numWorldResets +  ', ';
	if (abbreviated==true) var miscHolder = 'HS: ' + data.heroSouls +  ', HS on Ancients: ' + soulsSpent + ', Total HS: ' + totalSouls + ', High Zone: ' + data.highestFinishedZonePersist + ', Current Zone: ' + data.currentZoneHeight + ', Ascensions: ' + data.numWorldResets +  ', ';
	miscList += miscHolder;
	}
	
function decryptSave(string){

	// Find anticheatcode
	var antiCheatCodeIndex = string.search(ANTI_CHEAT_CODE);
	// If found, convert string from anticheatformat
    if (antiCheatCodeIndex != -1) string = fromAntiCheatFormat(string);
	// Then decrypt the result using standard base 64 decryption
    var jsonString = atob(string);
	
return JSON.parse(jsonString);
}

function onDecodeButtonClick(event){
	abbreviated = abbreviatedMode.checked;
    var string = input.value;
    var myData = decryptSave(string);
	sortMethod = $('input[name="sortMode"]:checked').val();
	// Reading block. Specify the part to read as detailed as possible to lessen the complexity of the functions.
	// Drawback to specifying this right here is that one needs to remember how deep one has to specify in the call in order to make it work.
	// Functions that read data from the root of the json keeps it global.
	
	if(abbreviated==false){
    readAncients(myData.ancients.ancients);	
	readHeroes(myData.heroCollection.heroes);
	readMisc(myData);
	readTime(myData);
	}
	if(abbreviated==true){
    readAncientsAbr(myData.ancients.ancients);	
	readHeroes(myData.heroCollection.heroes);
	readMisc(myData);
	readTime(myData);
	}
	
	//Chops up output arrays in blocks up to 249 chars + a comma at the end. Always ends with comma.
    var ancientArray = ancientList.match(/.{1,249};/g);
	var heroArray = heroList.match(/.{1,249},/g);
	var miscArray = miscList.match(/.{1,249},/g);
	var timeArray = timeList.match(/.{1,249},/g);
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



function fromAntiCheatFormat(string)
{
	// Separate the things by the anticheatcode
    var elements = string.split(ANTI_CHEAT_CODE);
	// Unsprinkle the actual save
    var data = unSprinkle(elements[0]);
	// Get the hash
    var hash = elements[1];
	// Calculate the actual hash from the data
    var dataHash = getHash(data);
	// Check if the calculated hash is the same as the given hash, if yes then return the data
    if (dataHash = hash) return data;
    alert("Hash is bad");
}

function unSprinkle(string)
{
	// Unsprinkles the save. Sprinkle adds randomized elements after every character. Split by "" to separate it all into separate spots in the array.
		// Splitting the array isn't strictly necessary. Strings are technically an array of letters. Might try to remove the splitting and see if it still works.

    var array = string.split("");
	// Empty array for the result.
    var result = [];
    var counter = 0;
	
	// Until we reach the end of the string...
    while (counter < array.length)
    {
		// Take a letter, add it to the new array at half the value it was at from the start. 0 becomes 0. 2 becomes 1. 4 becomes 2. 6 becomes 3. etc.
        result[counter / 2] = array[counter];
		// Advancing by two steps skips every other letter, effectively unsprinkling it.
        counter += 2;
    }
    return result.join("");
}

function getHash(string)
{
	// Split the string up. Again, not strictly necessary, might change at some point.
    var characters = string.split();
	// Sort the string. The hash doesn't need to be decrypted, only encrypted, thus the actual data isn't preserved.
    characters.sort();
	// Joins the characters into a variable. Not sure if this step is necessary either.
    var sortedcharacters = characters.join();
	// Returns and MD5 hash. Not the most secure of hashes, but functional and suitable for our uses. 
    return CryptoJS.MD5(sortedcharacters + SALT);
}


 