
const ANTI_CHEAT_CODE = 'Fe12NAfA3R6z4k0z';
const SALT = 'af0ik392jrmt0nsfdghy0';
const CHARACTERS = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

var ancients = ["None","None","Solomon","Libertas","Siyalatas","Khrysos","Thusia","Mammon","Mimzee","Pluto","Dogcog","Fortuna","Atman","Dora","Bhaal","Morgulis","Chronos","Bubos","Fragsworth","Vaagur","Kumawakamaru","Chawedo","Hecatoncheir","Berserker","Sniperino","Kleptos","Energon Life","Argaiv","Juggernaut","Iris"]

var heroes = [
  {name: "Cid", cost: 5, damage: 0, level: 0, upgrades: [100, 250, 1e3, 8e3, 80e3, 400e3, 4e6]}, 
  {name: "Tree Beast", cost: 50, damage: 5 * 20, level: 100, upgrades: [500, 1.25e3, 5e3, 40e3, 400e3]},
  {name: "Ivan", cost: 250, damage: 22 * 20, level: 125, upgrades: [2.5e3, 6.25e3, 25e3, 200e3, 2e6, 10e6]},
  {name: "Brittany", cost: 1000, damage: 74 * 20, level: 75, upgrades: [10e3, 25e3, 100e3, 800e3]},
  {name: "Fisherman", cost: 4000, damage: 245 * 8, level: 100, upgrades: [40e3, 100e3, 400e3, 3.2e6, 32e6]},
  {name: "Betty", cost: 20000, damage: 976, level: 100, upgrades: [200e3, 500e3, 2e6, 16e6, 160e6]},
  {name: "Samurai", cost: 100e3, damage: 3725 * 20, level: 75, upgrades: [1e6, 2.5e6, 10e6, 80e6]},
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


var count = 0;
var soulsSpent = 0;

var ancientList = "Ancients: ";
var heroList = "Gilded heroes: ";
var miscList = "Misc Info: ";


var input = document.getElementById('input');
var output = document.getElementById('output');
var decodeButton = document.getElementById('decodeButton');
var encodeButton = document.getElementById('encodeButton');
decodeButton.addEventListener('click', onDecodeButtonClick);

function readAncients(data){
	soulsSpent = 0;
	ancientList = "Ancients: ";
    $.each(data, function() {
        var ancientHolder = ancients[this.id-1] + ' (' + this.level + '), '
        ancientList += ancientHolder;
		soulsSpent += this.spentHeroSouls;

    });
}

function readHeroes(data){
	heroList = "Gilded heroes: ";
    $.each(data, function() {
        var heroHolder = heroes[this.id-1].name + ' (' + this.epicLevel + '), '
        
		if(this.epicLevel>0) heroList += heroHolder;

    });
}

function readTime(time){
	microSecTime = time/2;
	daysTime = microSecTime/86400000000;

}

function readMisc(data){
	miscList = "";
	var totalSouls = +data.heroSouls + +soulsSpent;
	var miscHolder = 'Hero Souls: ' + data.heroSouls +  ', Souls spent on Ancients: ' + soulsSpent + ', Total Souls: ' + totalSouls + ', Highest zone: ' + data.highestFinishedZonePersist + ', Current zone: ' + data.currentZoneHeight + ', Ascensions: ' + data.numWorldResets + ',';
	miscList += miscHolder;
	}

function onDecodeButtonClick(event){

    var string = input.value;

    var antiCheatCodeIndex = string.search(ANTI_CHEAT_CODE);
    var antiCheatCodeExist = (antiCheatCodeIndex != -1);
    if (antiCheatCodeExist) string = fromAntiCheatFormat(string);
    var jsonString = atob(string);
    var myData = JSON.parse(jsonString);

    readAncients(myData.ancients.ancients);	
    readHeroes(myData.heroCollection.heroes);
	readMisc(myData);
	//Chops up output arrays in blocks up to 249 chars + a comma at the end. Always ends with comma.
    var ancientArray = ancientList.match(/.{1,249},/g);
	var heroArray = heroList.match(/.{1,249},/g);
	var miscArray = miscList.match(/.{1,249},/g);
	
	//Adds together the arrays. More arrays can be added after heroArray with commas separating them.
	var outputArray = ancientArray.concat(heroArray,miscArray);
	
    var len = outputArray.length;

    for(i=0;i<outputArray.length;i++){
        while(outputArray[i][0]==","||outputArray[i][0]==" "){

            outputArray[i] = outputArray[i].substring(1);

        }





        while(outputArray[i][outputArray[i].length-1] == ','){

            outputArray[i] = outputArray[i].slice(0,-1);

        }

    }

    for (i=0;i<len;i++){
        outputArray.splice(i+1,0,'\n\n');
        i++;
    }

    output.value = outputArray.join("");


}



function fromAntiCheatFormat(string)
{
    var elements = string.split(ANTI_CHEAT_CODE);
    var data = unSprinkle(elements[0]);
    var hash = elements[1];
    var dataHash = getHash(data);
    if (dataHash = hash) return data;
    alert("Hash is bad");
}

function unSprinkle(string)
{
    var array = string.split("");
    var result = [];
    var counter = 0;
    while (counter < array.length)
    {
        result[counter / 2] = array[counter];
        counter += 2;
    }
    return result.join("");
}

function getHash(string)
{
    var charaters = string.split();
    charaters.sort();
    var sortedCharaters = charaters.join();
    return CryptoJS.MD5(sortedCharaters + SALT);
}


 