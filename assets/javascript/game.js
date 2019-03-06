document.

var imgArr = [
	"../images/baby-unicorn.jpg",
	"../images/fat-unicorn.jpg",
	"../images/Hunenberg.png",
	"../images/Life.png"
];

function getRand(x, y) {
	var rand = Math.floor(Math.random() * x + y);
	console.log(rand);
	return rand;
}

//generates a random number between 19-120
//*12, 0-11
//*12 + 1, 1-12
function getTargetRand() {
	var x = 121 - 19;
	var y = 19;
	var rand = getRand(x, y);
	console.log("Target " + rand);
	return rand;
}

//generates a random number between 1-12
//*12, 0-11
//*12 + 1, 1-12
function getJewelRand() {
	var x = 12;
	var y = 1;
	var rand = getRand(x, y);
	console.log("Jewel " + rand);
	return rand;
}
