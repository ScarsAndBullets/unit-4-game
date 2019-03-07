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
	getTarget();
	get4Jewels();
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
	targetNumber = getRand(x, y);
	console.log("targetNumber " + targetNumber);
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

function display() {
	$("#targetNumber").text(targetNumber);
	$("#userNumber").text(userNumber);
	console.log("Target: " + targetNumber + "  User: " + userNumber);
}

function test() {
	if (userNumber > targetNumber) {
		alert("You lose.");
		losses++;
		initialize();
	} else if (userNumber === targetNumber) {
		alert("You win!");
		wins++;
		initialize();
	} else {
	}
}

$(document).ready(function() {
	$("#img1").click(function() {
		userNumber += jewels[0];
		display();
	});
	$("#img2").click(function() {
		userNumber += jewels[1];
		display();
	});
	$("#img3").click(function() {
		userNumber += jewels[2];
		display();
	});
	$("#img4").click(function() {
		userNumber += jewels[3];
		display();
	});
});

// initialize();
targetNumber = getTarget();
get4Jewels();
