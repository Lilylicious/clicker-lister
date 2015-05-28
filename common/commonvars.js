/*
	==================================================
	This file contains variables that multiple tools
	may want to access. Not all of them are in use,
	at some point there'll be some cleanup done.
	==================================================
*/

// Ancient ID's start at 3, so adding the None's make it so that we reference this array by,
// using ID-1 (arrays start at 0) rather than ID-3.
//
// Example: When reading Solomon from the save, we're inside of the object of Solomon. ID there is listed as 3.
// We store his level by doing ancients[this.id-1].level = this.level; where this.id is 3, this.id-1 is 2 which
// references the third object in the array, Solomon.
var ancients = [
{name:"None",level:0,maxLevel:"None"},
{name:"None",level:0,maxLevel:"None"},
{name:"Solomon",level:0,maxLevel:"None"},
{name:"Libertas",level:0,maxLevel:"None"},
{name:"Siyalatas",level:0,maxLevel:"None"},
{name:"Khrysos",level:0,maxLevel:10},
{name:"Thusia",level:0,maxLevel:"None"},
{name:"Mammon",level:0,maxLevel:"None"},
{name:"Mimzee",level:0,maxLevel:"None"},
{name:"Pluto",level:0,maxLevel:"None"},
{name:"Dogcog",level:0,maxLevel:25},
{name:"Fortuna",level:0,maxLevel:40},
{name:"Atman",level:0,maxLevel:25},
{name:"Dora",level:0,maxLevel:50},
{name:"Bhaal",level:0,maxLevel:"None"},
{name:"Morgulis",level:0,maxLevel:"None"},
{name:"Chronos",level:0,maxLevel:"None"},
{name:"Bubos",level:0,maxLevel:25},
{name:"Fragsworth",level:0,maxLevel:"None"},
{name:"Vaagur",level:0,maxLevel:15},
{name:"Kumawakamaru",level:0,maxLevel:5},
{name:"Chawedo",level:0,maxLevel:30},
{name:"Hecatoncheir",level:0,maxLevel:30},
{name:"Berserker",level:0,maxLevel:30},
{name:"Sniperino",level:0,maxLevel:30},
{name:"Kleptos",level:0,maxLevel:30},
{name:"Energon",level:0,maxLevel:30},
{name:"Argaiv",level:0,maxLevel:"None"},
{name:"Juggernaut",level:0,maxLevel:"None"},
{name:"Iris",level:0,maxLevel:"None"},
{name:"Revolc",level:0,maxLevel:15}
];

var abr_ancients = [];

for (var name in ancients){
abr_ancients.push({name:ancients[name].name.substring(0,4),level:ancients[name].level});
};


//["None","None","Sol","Lib","Siy","Khrys","Thus","Mam","Mim","Plu","Dog","Fort","Atm","Dora","Bha","Morg","Chro","Bub","Frag","Vaag","Kuma","Chaw","Heca","Bers","Snip","Klep","Energon","Arga","Jugg","Iris"]
// Abilities ivan:108 Alexa:109 Broyle:110 Midas:111
// 0.5% click damage TB:103 ivan:100 betty:102 fish:101 mercedes:104 george:105
// 106:false 132:false
var heroes = [
  {name: "Cid", cost: 5, damage: 0, level: 0, upgradeCosts: [100, 250, 1e3, 8e3, 80e3, 400e3, 4e6]/*,upgradeIDs:[,,,,]*/}, 
  {name: "Tree Beast", cost: 50, damage: 5, level: 0, upgradeCosts: [500, 1.25e3, 5e3, 40e3, 400e3],upgradeIDs:[17,18,19,20,103]},
  // 1:17 2:18 3:19 4:20, 5:103
  {name: "Ivan", cost: 250, damage: 22, level: 0, upgradeCosts: [2.5e3, 6.25e3, 25e3, 200e3, 2e6, 10e6], upgradeIDs:[21,22,23,108,100,24]},
  // 1:21 2:22 3:23 4:108 5:100 6:24
  {name: "Brittany", cost: 1000, damage: 74, level: 0, upgradeCosts: [10e3, 25e3, 100e3, 800e3], upgradeIDs:[13,14,15,16]},
  // 1:13 2:14 3:15 4:16sss
  {name: "Fisherman", cost: 4000, damage: 245, level: 0, upgradeCosts: [40e3, 100e3, 400e3, 3.2e6, 32e6], upgradeIDs:[9,10,11,12,101]},
  // 1:9 2:10 3:11 4:12 5:101
  {name: "Betty", cost: 20000, damage: 976, level: 0, upgradeCosts: [200e3, 500e3, 2e6, 16e6, 160e6], upgradeIDs:[25,26,27,28,102]},
  // 1:25 2:26 3:27 4:28 5:102
  {name: "Samurai", cost: 100e3, damage: 3725, level: 0, upgradeCosts: [1e6, 2.5e6, 10e6, 80e6], upgradeIDs:[29,30,31,32]},
  // Guesses 1:29 2:30 3:31 4:32:confirmed
  {name: "Leon", cost: 400e3, damage: 10859, level: 0, upgradeCosts: [4e6, 10e6, 40e6, 320e6], upgradeIDs:[33,34,35,36]},
  // Guesses 1:33 2:34 (3:35 4:36):confirmed
  {name: "Seer", cost: 2500e3, damage: 47143, level: 0, upgradeCosts: [25e6, 62.5e6, 250e6, 2e9], upgradeIDs:[37,38,39,40]},
  // Guesses 1:37 2:38 3:39 4:40
  {name: "Alexa", cost: 15000e3, damage: 186e3, level: 0, upgradeCosts: [150e6, 375e6, 1.5e9, 12e9, 120e9], upgradeIDs:[41,42,43,44,109]},
  // Guesses 1:41 2:42 3:43 (4:44 5:109):confirmed
  {name: "Natalia", cost: 100e6, damage: 782e3, level: 0, upgradeCosts: [1e9, 2.5e9, 10e9, 80e9], upgradeIDs:[45,46,47,48]},
  // Guesses 1:45 2:46 3:47 4:48
  {name: "Mercedes", cost: 800e6, damage: 3721e3, level: 0, upgradeCosts: [8e9, 20e9, 80e9, 640e9, 6.4e12], upgradeIDs:[49,50,51,52,104]},
  // Guesses 1:49 2:50 3:51 4:52 5:104
  {name: "Bobby", cost: 6500e6, damage: 17010e3, level: 0, upgradeCosts: [65e9, 162e9, 650e9, 5.2e12, 52e12], upgradeIDs:[53,54,55,56,116]},
  // Guesses 1:53 2:54 3:55 4:56 5:116
  {name: "Broyle", cost: 50e9, damage: 69480e3, level: 0, upgradeCosts: [500e9, 1.25e12, 5e12, 40e12, 400e12], upgradeIDs:[57,58,59,60,110]},
  // Guesses 1:57? 2:58 3:59 4:60 5:110
  {name: "Sir George", cost: 450e9, damage: 460e6, level: 0, upgradeCosts: [4.5e12, 11.25e12, 45e12, 360e12, 3.6e15], upgradeIDs:[61,62,63,64,105]},
  // Guesses 1:61 2:62 3:63 4:64 5:105
  {name: "Midas", cost: 4e12, damage: 3017e6, level: 0, upgradeCosts: [40e12, 100e12, 400e12, 3.2e15, 32e15, 160e15], upgradeIDs:[65,66,67,68,111]},
  // Guesses 1:65 2:66 3:67 4:68 5:111
  {name: "Referi", cost: 36e12, damage: 20009e6, level: 0, upgradeCosts: [360e12, 900e12, 3.6e15, 28.8e15, 288e15], upgradeIDs:[69,70,71,72,73]},
  // 5 1:69 2:70 3:71 4:72 5:73
  {name: "Abaddon", cost: 320e12, damage: 131e9, level: 0, upgradeCosts: [3.2e15, 8e15, 32e15, 256e15], upgradeIDs:[74,75,76,112]},
  //4 1:74 2:75 3:76 4:112
  {name: "Ma Zhu", cost: 2.7e15, damage: 814e9, level: 0, upgradeCosts: [27e15, 67.5e15, 270e15, 2.16e18], upgradeIDs:[77,78,79,80]},
  //4 1:77 2:78 3:79 4:80
  {name: "Amenhotep", cost: 24e15, damage: 5335e9, level: 0, upgradeCosts: [240e15, 600e15, 2.4e18 /*, 19.2e18*/], upgradeIDs:[82,83,84]},
  //3 1:81 2:82 3:83 4:106/132?
  {name: "Beastlord", cost: 300e15, damage: 49143e9, level: 0, upgradeCosts: [3e18, 7.5e18, 30e18, 240e18, 2.4e21], upgradeIDs:[84,85,86,87,113]},
  //5 1:84 2:85 3:86 4:87 5:113
  {name: "Athena", cost: 9e18, damage: 1086e12 , level: 0, upgradeCosts: [90e18, 225e18, 900e18, 0, 7.2e21], upgradeIDs:[88,89,90,91]},
  //4	1:88 2:89 3:90 4:91
  {name: "Aphrodite", cost: 350e18, damage: 31124e12, level: 0, upgradeCosts: [3.5e21, 8.75e21, 35e21, 0, 280e21, 2.8e24], upgradeIDs:[92,93,94,114,95]},
  //5 1:92 2:93 3:94 4:114 5:95
  {name: "Shinatobe", cost: 14e21, damage: 917e15, level: 0, upgradeCosts: [140e21, 350e21, 1.4e24, 11.2e24, 112e24], upgradeIDs:[96,97,98,99,115]},
  //5 1:96 2:97 3:98 4:99 5:115
  {name: "Grant", cost: 4199e21, damage: 202e18, level: 0, upgradeCosts: [41.999e24, 104e24, 419e24, 3.359e27], upgradeIDs:[120,121,122,123]},
  //4 1:120 2:121 3:122 4:123
  {name: "Frostleaf", cost: 2100e24, damage: 74698e18, level: 0, upgradeCosts: [21e27, 52.499e27, 209e27, 1.679e30], upgradeIDs:[124,125,126,127]},
  //4 1:124 2:125 3:126 4:127
  {name: "DreadKnight", cost: 1e40, damage: 1.46e32, level: 0, upgradeCosts: [1e41, 2.5e41, 1e42, 0, 8e42], upgradeIDs:[133,134,135,136]},
  //4 1:133 2:134 3:135 4:136
  {name: "Atlas", cost: 1e55, damage: 1.075e45, level: 0, upgradeCosts: [1e56, 2.5e56, 1e57, 0, 8e57], upgradeIDs:[138,139,140,141]},
  //4 1:138 2:139 3:140 4:141
  {name: "Terra", cost: 1e70, damage: 7.926e57, level: 0, upgradeCosts: [1e71, 2.5e71, 1e72, 0, 8e72], upgradeIDs:[143,144,145,146]},
  //4 1:143 2:144 3:145 4:146
  {name: "Phthalo", cost: 1e85, damage: 5.839e70, level: 0, upgradeCosts: [1e86, 2.5e86, 1e87, 0, 8e87], upgradeIDs:[148,149,150,151]},
  //4 1:148 2:149 3:150 4:151
  {name: "Orntchya", cost: 1e100, damage: 3.302e83, level: 0, upgradeCosts: [1e101, 2.5e101, 1e102, 0, 8e102], upgradeIDs:[153,154,155,156]},
  //4 1:153 2:154 3:155 4:156
  {name: "Lilin", cost: 1e115, damage: 3.17e96, level: 0, upgradeCosts: [1e116, 2.5e116, 1e117, 0, 8e117], upgradeIDs:[158,159,160,161]},
  //4 1:158 2:159 3:160 4:161
  {name: "Cadmia", cost: 1e130, damage: 2.335e109, level: 0, upgradeCosts: [1e131, 2.5e131, 1e132, 0, 8e132], upgradeIDs:[163,164,165,166]},
  //4 1:163 2:164 3:165 4:166
  {name: "Alabaster", cost: 1e145, damage: 1.721e122, level: 0, upgradeCosts: [1e146, 2.5e146, 1e147, 0, 8e147], upgradeIDs:[168,169,170,171]},
  //4 1:168 2:169 3:170 4:171
  {name: "Astraea", cost: 1e160, damage: 1.268e135, level: 0, upgradeCosts: [1e161, 2.5e161, 1e162, 0, 8e162], upgradeIDs:[173,174,175,176]}
  //4 1:173 2:174 3:175 4:176
];

var heroUpgrades =[
{name:"Test", upgrades:[true,true,false,false]},

];

var abr_heroes = [];

for (var name in heroes){
abr_heroes.push({name:heroes[name].name.substring(0,4)})
}

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

// Simulation Things
var souls = {};
var globalUpgrades = 1;
var achievementDPS = 1;
var siyMult = 1;
var iterations = 10000;
var ancientCount = 0;


//Time
var currentTime;
var creationTime;
var prevLoginTime;
var startTime;
var timeSinceCreation;

//Elements
var input = document.getElementById('input');
var output = document.getElementById('output');
var abbreviatedMode = document.getElementById('abbreviatedMode');
var calcButton = document.getElementById('calcButton');

// Holders
var ancientHolder;
var heroHolder;
var miscHolder;
var timeHolder;
var sortHolder;

//Seeds
var primals = {};
var gilds = {};

// Arrays
var ancientArray;
var heroArray;
var miscArray;
var timeArray;

//Misc
var scientific = true;
if (abbreviatedMode !== null) var abbreviated = abbreviatedMode.checked;
var sortButtons = document.getElementsByName('sortMode');
var sortMethod = $('input[name="sortMode"]:checked').val();



function mainListener(event, func, button){

if (abbreviatedMode !== null){
abbreviatedMode.addEventListener(event, func);

for (var l=0;l<sortButtons.length;l++)
sortButtons[l].addEventListener(event, func);
}
button.addEventListener(event, func);
}

function displayRound(num){

    var len = num.toString().length;
    var finalnum = (Math.floor(num/(Math.pow(10,len-1))*1000)/1000);
    return finalnum.toString() + "e" + (len-1).toString();

}























