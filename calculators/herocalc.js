
/*
	==================================================
	This file contains WIP simulations. Main purpose
	is hero calculations, finding optimal paths. In
	the future the simulations themselves may be moved
	to a seperate file, leaving herocalc.js to be just
	running the hero calculations etc.
	==================================================
*/







/* Hero index reference

 0:Cid
 1:Tree Beast
 2:Ivan
 3:Brittany
 4:Fisherman
 5:Betty
 6:(Spooky) Samurai
 7:Leon
 8:Seer
 9:Alexa
 10:Natalia
 11:Mercedes
 12:Bobby
 13:Broyle
 14:Sir George
 15:Midas
 16:Referi
 17:Abaddon
 18:Ma Zhu
 19:Amenhotep
 20:Beastlord
 21:Athena
 22:Aphrodite
 23:Shinatobe
 24:Grant
 25:Frostleaf
 26:DreadKnight
 27:Atlas
 28:Terra
 29:Phthalo
 30:Orntchya
 31:Lilin
 32:Cadmia
 33:Alabaster
 34:Astraea

*/




/*

Process to simulate path efficiency:

1. Pick path
2. Set gold = consumable at highest level (2+Iris?)
3. Progress along selected path until endíng condition is met

Path 1: 

1. Level up the hero with the highest DPS gain / Cost.
	1.a. Check each hero for DPS gain / cost (Inefficient?)
	1.b. Level up the hero with highest value.

Path 2:

1. level up the most expensive hero affordable. 
	(Only moves to the next once it's cheaper than the previous, since it doesn't save up).
	
*/








mainListener('click',calc,calcButton);

function calc(){
 // The game uses 4 sig. digits for most outputs. Use .toPrecision(4) to output in a readable way.
 // NOTE: .toPrecision(n) rounds the number, while the game floors it. Produces rounding errors.
 
	var string = input.value;
    var myData = decryptSave(string);
 
	souls.count = myData.heroSouls;
 
	// Calculate all heroes' base DPS.
	//$.each(heroes, function(index){
	//	this.damage = baseDPS(index);
	//});
	
	readAncientLevels(myData);
	
	readUpgrades(myData.upgrades);
	
	readDamageMult(myData);

	simulateGold(myData,360);
	
	//console.log("Starting sim...");
	//simulateEfficiency();
	
	

}

function simulateEfficiency(){
	console.log("Simulation started");
heroes = [
  {name: "Cid", cost: 5, damage: 0, level: 0, upgradeCosts: [100, 250, 1e3, 8e3, 80e3, 400e3, 4e6]/*,upgradeIDs:[,,,,]*/}, 
  {name: "Tree Beast", cost: 50, damage: 5 * 20, level: 0, has5x: false, upgradeCosts: [500, 1.25e3, 5e3, 40e3, 400e3],upgradeIDs:[17,18,19,20,103]},
  // 1:17 2:18 3:19 4:20, 5:103
  {name: "Ivan", cost: 250, damage: 22 * 20, level: 0, has5x: false, upgradeCosts: [2.5e3, 6.25e3, 25e3, 200e3, 2e6, 10e6], upgradeIDs:[21,22,23,108,100,24]},
  // 1:21 2:22 3:23 4:108 5:100 6:24
  {name: "Brittany", cost: 1000, damage: 74 * 20, level: 0, has5x: false, upgradeCosts: [10e3, 25e3, 100e3, 800e3], upgradeIDs:[13,14,15,16]},
  // 1:13 2:14 3:15 4:16
  {name: "Fisherman", cost: 4000, damage: 245 * 8, level: 0, has5x: false, upgradeCosts: [40e3, 100e3, 400e3, 3.2e6, 32e6], upgradeIDs:[9,10,11,12,101]},
  // 1:9 2:10 3:11 4:12 5:101
  {name: "Betty", cost: 20000, damage: 976, level: 0, has5x: false, upgradeCosts: [200e3, 500e3, 2e6, 16e6, 160e6], upgradeIDs:[25,26,27,28,102]},
  // 1:25 2:26 3:27 4:28 5:102
  {name: "Samurai", cost: 100e3, damage: 3725 * 20, has5x: false, level: 0, upgradeCosts: [1e6, 2.5e6, 10e6, 80e6], upgradeIDs:[29,30,31,32]},
  // Guesses 1:29 2:30 3:31 4:32:confirmed
  {name: "Leon", cost: 400e3, damage: 10859 * 8, has5x: false, level: 0, upgradeCosts: [4e6, 10e6, 40e6, 320e6], upgradeIDs:[33,34,35,36]},
  // Guesses 1:33 2:34 (3:35 4:36):confirmed
  {name: "Seer", cost: 2500e3, damage: 47143 * 20, has5x: false, level: 0, upgradeCosts: [25e6, 62.5e6, 250e6, 2e9], upgradeIDs:[37,38,39,40]},
  // Guesses 1:37 2:38 3:39 4:40
  {name: "Alexa", cost: 15000e3, damage: 186e3 * 5.0625, has5x: false, level: 0, upgradeCosts: [150e6, 375e6, 1.5e9, 12e9, 120e9], upgradeIDs:[41,42,43,44,109]},
  // Guesses 1:41 2:42 3:43 (4:44 5:109):confirmed
  {name: "Natalia", cost: 100e6, damage: 782e3 * 20, has5x: false, level: 0, upgradeCosts: [1e9, 2.5e9, 10e9, 80e9], upgradeIDs:[45,46,47,48]},
  // Guesses 1:45 2:46 3:47 4:48
  {name: "Mercedes", cost: 800e6, damage: 3721e3 * 20, has5x: false, level: 0, upgradeCosts: [8e9, 20e9, 80e9, 640e9, 6.4e12], upgradeIDs:[49,50,51,52,104]},
  // Guesses 1:49 2:50 3:51 4:52 5:104
  {name: "Bobby", cost: 6500e6, damage: 17010e3 * 20, has5x: false, level: 0, upgradeCosts: [65e9, 162e9, 650e9, 5.2e12, 52e12], upgradeIDs:[53,54,55,56,116]},
  // Guesses 1:53 2:54 3:55 4:56 5:116
  {name: "Broyle", cost: 50e9, damage: 69480e3 * 10, has5x: false, level: 0, upgradeCosts: [500e9, 1.25e12, 5e12, 40e12, 400e12], upgradeIDs:[57,58,59,60,110]},
  // Guesses 1:57? 2:58 3:59 4:60 5:110
  {name: "Sir George", cost: 450e9, damage: 460e6 * 20, has5x: false, level: 0, upgradeCosts: [4.5e12, 11.25e12, 45e12, 360e12, 3.6e15], upgradeIDs:[61,62,63,64,105]},
  // Guesses 1:61 2:62 3:63 4:64 5:105
  {name: "Midas", cost: 4e12, damage: 3017e6, level: 0, has5x: false, upgradeCosts: [40e12, 100e12, 400e12, 3.2e15, 32e15, 160e15], upgradeIDs:[65,66,67,68,111]},
  // Guesses 1:65 2:66 3:67 4:68 5:111
  {name: "Referi", cost: 36e12, damage: 20009e6 * 20, level: 0, has5x: false, upgradeCosts: [360e12, 900e12, 3.6e15, 28.8e15, 288e15], upgradeIDs:[69,70,71,72,73]},
  // 5 1:69 2:70 3:71 4:72 5:73
  {name: "Abaddon", cost: 320e12, damage: 131e9 * 11.390625, level: 0, has5x: false, upgradeCosts: [3.2e15, 8e15, 32e15, 256e15], upgradeIDs:[74,75,76,112]},
  //4 1:74 2:75 3:76 4:112
  {name: "Ma Zhu", cost: 2.7e15, damage: 814e9 * 20, level: 0, has5x: false, upgradeCosts: [27e15, 67.5e15, 270e15, 2.16e18], upgradeIDs:[77,78,79,80]},
  //4 1:77 2:78 3:79 4:80
  {name: "Amenhotep", cost: 24e15, damage: 5335e9 * 2, level: 0, has5x: false, upgradeCosts: [240e15, 600e15, 2.4e18 /*, 19.2e18*/], upgradeIDs:[82,83,84]},
  //3 1:81 2:82 3:83 4:106/132?
  {name: "Beastlord", cost: 300e15, damage: 49143e9 * 8, level: 0, has5x: false, upgradeCosts: [3e18, 7.5e18, 30e18, 240e18, 2.4e21], upgradeIDs:[84,85,86,87,113]},
  //5 1:84 2:85 3:86 4:87 5:113
  {name: "Athena", cost: 9e18, damage: 1086e12 * 16, level: 0, has5x: false, upgradeCosts: [90e18, 225e18, 900e18, 0, 7.2e21], upgradeIDs:[88,89,90,91]},
  //4	1:88 2:89 3:90 4:91
  {name: "Aphrodite", cost: 350e18, damage: 31124e12 * 16, level: 0, has5x: false, upgradeCosts: [3.5e21, 8.75e21, 35e21, 0, 280e21, 2.8e24], upgradeIDs:[92,93,94,114,95]},
  //5 1:92 2:93 3:94 4:114 5:95
  {name: "Shinatobe", cost: 14e21, damage: 917e15 * 8, level: 0, has5x: false, upgradeCosts: [140e21, 350e21, 1.4e24, 11.2e24, 112e24], upgradeIDs:[96,97,98,99,115]},
  //5 1:96 2:97 3:98 4:99 5:115
  {name: "Grant", cost: 4199e21, damage: 202e18 * 4, level: 0, has5x: false, upgradeCosts: [41.999e24, 104e24, 419e24, 3.359e27], upgradeIDs:[120,121,122,123]},
  //4 1:120 2:121 3:122 4:123
  {name: "Frostleaf", cost: 2100e24, damage: 74698e18 * 4, level: 0, has5x: false, upgradeCosts: [21e27, 52.499e27, 209e27, 1.679e30], upgradeIDs:[124,125,126,127]},
  //4 1:124 2:125 3:126 4:127
  {name: "DreadKnight", cost: 1e40, damage: 1.46e32 * 20, level: 0, has5x: true, upgradeCosts: [1e41, 2.5e41, 1e42, 0, 8e42], upgradeIDs:[133,134,135,136]},
  //4 1:133 2:134 3:135 4:136
  {name: "Atlas", cost: 1e55, damage: 1.075e45 * 20, level: 0, has5x: true, upgradeCosts: [1e56, 2.5e56, 1e57, 0, 8e57], upgradeIDs:[138,139,140,141]},
  //4 1:138 2:139 3:140 4:141
  {name: "Terra", cost: 1e70, damage: 7.926e57 * 20, level: 0, has5x: true, upgradeCosts: [1e71, 2.5e71, 1e72, 0, 8e72], upgradeIDs:[143,144,145,146]},
  //4 1:143 2:144 3:145 4:146
  {name: "Phthalo", cost: 1e85, damage: 5.839e70 * 20, level: 0, has5x: true, upgradeCosts: [1e86, 2.5e86, 1e87, 0, 8e87], upgradeIDs:[148,149,150,151]},
  //4 1:148 2:149 3:150 4:151
  {name: "Orntchya", cost: 1e100, damage: 3.302e83 * 20, level: 0, has5x: true, upgradeCosts: [1e101, 2.5e101, 1e102, 0, 8e102], upgradeIDs:[153,154,155,156]},
  //4 1:153 2:154 3:155 4:156
  {name: "Lilin", cost: 1e115, damage: 3.17e96 * 20, level: 0, has5x: true, upgradeCosts: [1e116, 2.5e116, 1e117, 0, 8e117], upgradeIDs:[158,159,160,161]},
  //4 1:158 2:159 3:160 4:161
  {name: "Cadmia", cost: 1e130, damage: 2.335e109 * 20, level: 0, has5x: true, upgradeCosts: [1e131, 2.5e131, 1e132, 0, 8e132], upgradeIDs:[163,164,165,166]},
  //4 1:163 2:164 3:165 4:166
  {name: "Alabaster", cost: 1e145, damage: 1.721e122 * 20, level: 0, has5x: true, upgradeCosts: [1e146, 2.5e146, 1e147, 0, 8e147], upgradeIDs:[168,169,170,171]},
  //4 1:168 2:169 3:170 4:171
  {name: "Astraea", cost: 1e160, damage: 1.268e135 * 20, level: 0, has5x: true, upgradeCosts: [1e161, 2.5e161, 1e162, 0, 8e162], upgradeIDs:[173,174,175,176]}
  //4 1:173 2:174 3:175 4:176
];


$.each(heroes,function(){

	this.dmgMult = 1;
	this.epicLevel = 0;

});


console.log("TB Started");

//Level HERO from 0 to 4100
var base_cost = levelHero(heroes[1],4100);

console.log(base_cost);

console.log("TB Done");
// For each hero, level until the cost exceeds HERO's cost
$.each(heroes,function(index){

	console.log(this.name + " started");

	if(index==1) return;
	
	this.levelCosts = 0;
	
	while (this.levelCosts < base_cost){
		this.levelCosts += levelHero(this,1);
		console.log(this.name + ":" + this.level);
	}
	
	
	console.log(this.name + ':' + this.levelCosts);

}); 


console.log("\nCost/DPS");
$.each(heroes,function(index){

if (index==1) console.log(this.name + ":" + this.level + ":" + base_cost/actualDPS(this));
else console.log(this.name + ":" + this.level + ":" + this.levelCosts/actualDPS(this));


});

}




function levelCost(currentLev,endLev,hero){
/*
Takes in amount of levels to level up and heroindex, spits out cost to level all those levels.

BaseCost*1.07^Level, rounded down. Dogcog applies after rounding.
*/
// Initialize the sum
var levelCostSum = 0;

for(var n=currentLev;n<endLev;n++){
levelCostSum += Math.floor(hero.cost*Math.pow(1.07,n)) * (1-ancients[10].level*0.02);
}
return levelCostSum;

}

function baseDPS(index){
/*
(BaseCost/10)*(1-0.0188*min(N,14))^N, rounded up. N=index+1.
Heroes after FL (index 26-34) multiply previous with 5*10^(-2*N+50)
*/
if(index===0) return 0;

var DPS = 0;
var heroNum = index+1;

DPS = Math.ceil((heroes[index].cost/10)*Math.pow(1-(0.0188*Math.min(heroNum,14)),heroNum));

if(index>25) DPS *= (5*Math.pow(10,(-2*heroNum+50)));

return DPS;
}

function actualDPS (hero) {
var finalDPS = 0;

/*
read all upgrades in datareader. Make object array of upgrades. 

for any given hero, read its upgrades. Multiply their values. Upgrade costs are in the heroes object array.

dps = baseDPS*upgrade
*/


gildMult = 1 + (0.5+(0.02*ancients[27].level)) * hero.epicLevel;

finalDPS = hero.damage * hero.level * globalUpgrades * souls.mult * achievementDPS * gildMult * hero.dmgMult;

return finalDPS;
}

function totalDPS(){

	var finalDPS = 0;

	$.each(heroes, function(){
		
		finalDPS += actualDPS(this);

	});
	
	return finalDPS;

}

function idleDPS(dps){

/*
    # Siyalatas gives 25% increased damage per level at level 1, scaling down to
    # 15% bonus at level 100, reduced by 1% per 10 levels.
    if siyalatas > 0:
        siyalatas_bonus = sum((0.25 - 0.01 * (x // 10) for x in range(1, min(100, siyalatas + 1)))) 
		+ (0.15 * max(0, siyalatas - 99))
        mult *= (1.0 + siyalatas_bonus)
		
		*/
		var siyBonus = 1;
		
		for(var i=1; i<Math.min(ancients[4].level+1,100);i++){
			siyBonus += 0.25 - 0.01 * Math.floor(i/10);
		}
		
		siyBonus += 0.15 * Math.max(0, ancients[4].level - 99);

		siyMult = siyBonus;
		

	return dps*siyMult;
}

function levelHero(hero,levels){

	var start = hero.level;
	
	
	for(var i=start;i<start+levels;i++){
	
	initLevel = hero.level;
	
	hero.level += 1;
	
	if(Math.floor(hero.level/1000)-Math.floor(initLevel/1000) >= 1 && hero.level < 4000) hero.dmgMult *= 10;
	else if(Math.floor(hero.level/25)-Math.floor(initLevel/25) >= 1 && hero.level >= 200 && hero.level <=4100 && hero.has5x===false){ 
	console.log(hero.name + " 4xd");
	hero.dmgMult *= 4;
	}
	else if(Math.floor(hero.level/25)-Math.floor(initLevel/25) >= 1 && hero.level >= 200 && hero.level <=500 && hero.has5x===true) hero.dmgMult *= 4;
	else if(Math.floor(hero.level/25)-Math.floor(initLevel/25) >= 1 && hero.level >= 525 && hero.level <=725 && hero.has5x===true) hero.dmgMult *= 5;
	else if(Math.floor(hero.level/25)-Math.floor(initLevel/25) >= 1 && hero.level >= 750 && hero.level <=4100 && hero.has5x===true) hero.dmgMult *= 4;
	}

	return levelCost(start,hero.level,hero);
}

function simulateGold(data,secondCount){
/*

Monster gold: MonsterHP/15*min(3,1.025^max(0,Level-75)), rounded up. Treasure chests have a (10+MimzeeLevel*5) gold multiplier, applied before rounding. Bubos is taken into account here, Thusia is not.
Treasure chest chance: (1+DoraLevel*0.2)%

Take highest level completed current run. 

Take idleDPS(totalDPS()), take MonsterHP. MonsterHP/totalDPS = seconds to kill. If boss and seconds > 30 + 5*Chronos, set gps to 0.

*/

//ASSUMES: Idling. No abilities.

	console.log("Starts...");

	readHeroes(data);
		
	var boss = {};
	var normal = {};
	var chest = {};
	
	var libBonus = 1;
		
		for(var i=1; i<Math.min(ancients[3].level+1,100);i++){
			libBonus += 0.25 - 0.01 * Math.floor(i/10);
		}
		
		libBonus += 0.15 * Math.max(0, ancients[3].level - 99);
		
		
	
	normal.level = data.highestFinishedZone+(4-data.highestFinishedZone%5);
	boss.level = data.highestFinishedZone-(data.highestFinishedZone%5);
	normal.hp = monsterHP(normal.level);
	boss.hp = monsterHP(boss.level);
	
	var dps = idleDPS(totalDPS());

	normal.timeToKill = normal.hp / dps;
	boss.timeToKill = boss.hp / dps;
	
	normal.goldPerKill = normal.hp / 15*Math.min(3,Math.pow(1.025,Math.max(0,normal.level-75)));
	boss.goldPerKill = boss.hp / 15*Math.min(3,Math.pow(1.025,Math.max(0,boss.level-75)));

	normal.totalKills = (secondCount / (normal.timeToKill+0.5));
	boss.totalKills = (secondCount / (boss.timeToKill+0.5));
	
	if(boss.timeToKill < 30 + (ancients[16].level*5)) boss.goldTotal = boss.goldPerKill * boss.totalKills;
	else boss.goldTotal = 0;

	normal.goldTotal = normal.goldPerKill * normal.totalKills;

	//Treasure chests
	
	chest.count = normal.totalKills * (1+ancients[13].level*0.2)/100;
	normal.fortunaCount = (ancients[11].level*0.0025) * normal.totalKills;
	boss.fortunaCount = (ancients[11].level*0.0025) * boss.totalKills;

	
	normal.goldTotal -= chest.count * normal.goldPerKill;
	normal.goldTotal += chest.count * (normal.goldPerKill * (1+ancients[8].level*0.5));
	
	normal.goldTotal -= normal.fortunaCount * normal.goldPerKill;
	normal.goldTotal += normal.fortunaCount * normal.goldPerKill * 10;
	
	boss.goldTotal -= boss.fortunaCount * boss.goldPerKill;
	boss.goldTotal += boss.fortunaCount * boss.goldPerKill * 10;
	
	normal.goldTotal *= libBonus * (1 + ancients[7].level * 0.05);
	boss.goldTotal *= libBonus * (1 + ancients[7].level * 0.05);
	
	output.value = "Gold per second: " + normal.level + ':' + (normal.goldTotal/secondCount).toPrecision(4) + ', ' + boss.level + ':' + (boss.goldTotal/secondCount).toPrecision(4);

}

function monsterHP(level){

	//Monster HP: 10*(1.6^(min(Level,140)-1)+min(Level,140)-1)*(1.15^max(Level-140,0)), rounded up. 
	//Bosses have a 10*(1-BubosLevel*0.02) HP multiplier, applied before rounding.
	var finalHP;
	
	finalHP = 10 * (Math.pow(1.6,(Math.min(level,140)-1))+(Math.min(level,140)-1)) * (Math.pow(1.15, Math.max(level-140,0)));

	if(level%5 == 0) {
	
	finalHP *= 10*(1-(ancients[17].level*0.02));
	
	}
	
	return Math.ceil(finalHP);
}

function levelAncients(data){

/*
Start DPS is X

For each ancient, level up once. If DPS after levelup > X, output name and levelup count

*/



var startDPS = idleDPS(totalDPS());

	console.log(souls.count);
	

	$.each(ancients,function(){
	
		if(this.name == 'None') return;
		
		var startLevel = this.level;
		var upgradeSoulsSpent = 0;
		this.levelUp = 0;
		
		var ancientStartDPS = startDPS;
		
		this.level++;
		upgradeSoulsSpent += upgradeCost(this);
		souls.count -= upgradeCost(this);
		readDamageMult(data);

		
		while(idleDPS(totalDPS())>ancientStartDPS && souls.count > upgradeCost(this)){
			console.log("Levelup!");
			ancientStartDPS = idleDPS(totalDPS());
			
			this.levelUp++;
			this.level++;
			
			upgradeSoulsSpent += upgradeCost(this);
			souls.count -= upgradeCost(this);
			readDamageMult(data);
		}	
		
		this.level = startLevel;
		
		
		console.log(this.name + ':' + this.levelUp + ':' + souls.count);
		
		
		souls.count += upgradeSoulsSpent;
	});



}

function upgradeCost(ancient){
	
	//NOTE: Level up before checking cost.
	
	var targetLevel = ancient.level;

	if(ancient.name == "Solomon") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Libertas") return targetLevel;
	if(ancient.name == "Siyalatas") return targetLevel;
	if(ancient.name == "Khrysos") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Thusia") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Mammon") return targetLevel;
	if(ancient.name == "Mimzee") return targetLevel;
	if(ancient.name == "Pluto") return targetLevel;
	if(ancient.name == "Dogcog") return targetLevel;
	if(ancient.name == "Fortuna") return targetLevel;
	if(ancient.name == "Atman") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Dora") return targetLevel;
	if(ancient.name == "Bhaal") return targetLevel;
	if(ancient.name == "Morgulis") return 1;
	if(ancient.name == "Chronos") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Bubos") return targetLevel;
	if(ancient.name == "Fragsworth") return targetLevel;
	if(ancient.name == "Vaagur") return (targetLevel/3);
	if(ancient.name == "Kumawakamaru") return (10*targetLevel);
	if(ancient.name == "Chawedo") return targetLevel;
	if(ancient.name == "Hecatoncheir") return targetLevel;
	if(ancient.name == "Berserker") return targetLevel;
	if(ancient.name == "Sniperino") return targetLevel;
	if(ancient.name == "Kleptos") return targetLevel;
	if(ancient.name == "Energon") return targetLevel;
	if(ancient.name == "Argaiv") return targetLevel;
	if(ancient.name == "Juggernaut") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Iris") return Math.pow(targetLevel,1.5);
	
}








