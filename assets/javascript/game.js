var imgArr = [
	"../images/baby-unicorn.jpg",
	"../images/fat-unicorn.jpg",
	"../images/Hunenberg.png",
	"../images/Life.jpg"
];

var targetNumber = 0;
var jewels = [];
var userNumber = 0;
var wins = 0;
var losses = 0;

function initialize() {
	targetNumber = 0;
	jewels = [];
	userNumber = 0;
}

//Random # generator
function getRand(x, y) {
	var rand = Math.floor(Math.random() * x + y);
	console.log(rand);
	return rand;
}

//generates a random number between 19-120
//*12, 0-11
//*12 + 1, 1-12
function getTarget() {
	var x = 121 - 19;
	var y = 19;
	var rand = getRand(x, y);
	console.log("Target " + rand);
	return rand;
}

//generates a random number between 1-12
//*12, 0-11
//*12 + 1, 1-12
function getJewel() {
	var x = 12;
	var y = 1;
	var rand = getRand(x, y);
	console.log("Jewel " + rand);
	return rand;
}

function get4Jewels() {
	for (var i = 0; i < imgArr.length; i++) {
		var temp = getJewel();
		unique = false;
		while (!unique) {
			unique = true;
			if (!jewels.includes(temp)) {
				jewels[i] = temp;
				unique = true;
			} else {
				temp = getJewel();
				unique = false;
			}
		}
	}
}

initialize();
targetNumber = getTarget();
get4Jewels();

$("#targetNumber").text(targetNumber);
$("#userNumber").text(userNumber);

$(document).ready(function() {
	$("#img1").click(function() {
		userNumber += jewels[0];
		alert(userNumber);
	});
	$("#img2").click(function() {
		userNumber += jewels[1];
		alert(userNumber);
	});
	$("#img3").click(function() {
		userNumber += jewels[2];
		alert(userNumber);
	});
	$("#img4").click(function() {
		userNumber += jewels[3];
		alert(userNumber);
	});
});
