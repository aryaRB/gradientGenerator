var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("Random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
//from stackoverflow  
function getRandomColor() {
	var letters = '0123456789ABCDEF';   //here hexadecimal digits are taken that counts 16
	var color = '#';                     //difined variable # as first value to be choosed as # 
	for (var i = 0; i < 6; i++) {              // looping from 0 -> 6 i.e #0000ff for blue
	  color += letters[Math.floor(Math.random() * 16)];            //attaching the # and hex together and creating a random hex
	}
	return color;
  }

function randomColors(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomColors);
