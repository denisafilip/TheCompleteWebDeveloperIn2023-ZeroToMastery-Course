var cssGradient = document.getElementById("css-gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var cssGradientDirection = document.getElementsByClassName("minimal")[0];

function setGradient() {
	body.style.background = 
	"linear-gradient(to "
	+ cssGradientDirection.value
	+ ", " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	cssGradient.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

cssGradientDirection.addEventListener("change", setGradient);
