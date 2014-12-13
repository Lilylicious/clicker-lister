
const ANTI_CHEAT_CODE = 'Fe12NAfA3R6z4k0z';
const SALT = 'af0ik392jrmt0nsfdghy0';
const CHARACTERS = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

var ancients = ["None","None","Solomon","Libertas","Siyalatas","Khrysos","Thusia","Mammon","Mimzee","Pluto","Dogcog","Fortuna","Atman","Dora","Bhaal","Morgulis","Chronos","Bubos","Fragsworth","Vaagur","Kumawakamaru","Chawedo","Hecatoncheir","Berserker","Sniperino","Kleptos","Energon Life","Argaiv","Juggernaut","Iris"]

var count = 0;
var ancientList = "Ancients: ";
var input = document.getElementById('input');
var output = document.getElementById('output');
var decodeButton = document.getElementById('decodeButton');
var encodeButton = document.getElementById('encodeButton');
decodeButton.addEventListener('click', onDecodeButtonClick);

function readAncients(data){
	ancientList = "Ancients: ";
    $.each(data, function() {
        var ancientHolder = ancients[this.id-1] + ' (' + this.level + '), '
        ancientList += ancientHolder;

    });
}

function onDecodeButtonClick(event){

    var string = input.value;

    var antiCheatCodeIndex = string.search(ANTI_CHEAT_CODE);
    var antiCheatCodeExist = (antiCheatCodeIndex != -1);
    if (antiCheatCodeExist) string = fromAntiCheatFormat(string);
    var jsonString = atob(string);
    var myData = JSON.parse(jsonString);
    readAncients(myData.ancients.ancients);
    var outputArray = ancientList.match(/.{1,249},/g);

    var len = outputArray.length;


    for(i=0;i<outputArray.length;i++){
       console.log(outputArray[i][0])
        while(outputArray[i][0]==","||outputArray[i][0]==" "){

            outputArray[i] = outputArray[i].substring(1);

        }
        console.log(outputArray[i][0])




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

function onEncodeButtonClick(event)
{
    var string = jsonInput.value;
    var base64string = btoa(string);
    var result = sprinkle(base64string) + ANTI_CHEAT_CODE + getHash(base64string);
    jsonOutput.value = result;
}

function sprinkle(string)
{
    var characters;
    var randomIndex;
    var array = string.split("");
    var result = [];
    var counter = 0;
    while (counter < array.length)
    {
        result[counter * 2] = array[counter];
        characters = CHARACTERS;
        randomIndex = Math.floor(Math.random() * (characters.length - 1));
        result[counter * 2 + 1] = characters.substr(randomIndex, 1);
        counter++;
    }
    return result.join("");
}
 