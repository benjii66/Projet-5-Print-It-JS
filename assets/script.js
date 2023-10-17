const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//I put the number and content of slides into a tab
const carousselTab = slides.length;

//I must have it oustide of the calculations
let currentSlide = 0;


//I take the image and give it the path of the right slide
let img = document.getElementById('banner-img');
img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"]);

//I take the text from the right slide and attribute it to the slide p div
let tagline = document.getElementById('tagline');
tagline.innerHTML = slides[currentSlide]["tagLine"];

//for loop about the dots
for(let i = 0; i < carousselTab; i++){
	if( i == 0){
		//if 0 set first dot active
		let dot = document.createElement("div");
		dot.setAttribute("class", "dot dot_selected");
		dot.setAttribute("id", i);
		let parentElement = document.getElementById("dots");
		parentElement.appendChild(dot);
	}else{
		//or the others are active
		let dot = document.createElement("div");
		dot.setAttribute("class", "dot");
		dot.setAttribute("id", i);
		let parentElement = document.getElementById("dots");
		parentElement.appendChild(dot);
	}
}

//event listener on the left arrow
//attribute it on a const
const arrowLeft = document.querySelector('.arrow_left');


//let's get funcky
function clickGauche() {
	
	//if current slide 0 we start at the first slide and first dot
	if(currentSlide == 0){
		currentSlide = carousselTab - 1;
		img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"]);
		tagline.innerHTML = slides[currentSlide]["tagLine"];
		dot = document.getElementById(currentSlide);
		dot.classList.add("dot_selected");
		previousDot = document.getElementById(0);
		previousDot.classList.remove("dot_selected");
	}else{
		//otherwise slide +1 and dot+1
		currentSlide--;
		img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"]);
		tagline.innerHTML = slides[currentSlide]["tagLine"];
		dot = document.getElementById(currentSlide);
		dot.classList.add("dot_selected");
		previousDot = document.getElementById(currentSlide +1);
		previousDot.classList.remove("dot_selected");
		console.log(previousDot);
	}
}
//and the event listener
arrowLeft.addEventListener("click", clickGauche);


//same with the right but -1 instead
const arrowRight = document.querySelector('.arrow_right');

function clickDroit() {
	if(currentSlide == carousselTab - 1){
		currentSlide = 0;
		img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"]);
		tagline.innerHTML = slides[currentSlide]["tagLine"];
		dot = document.getElementById(currentSlide);
		dot.classList.add("dot_selected");
		previousDot = document.getElementById(carousselTab - 1);
		previousDot.classList.remove("dot_selected");
	}else{
		currentSlide++;
		img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"]);
		tagline.innerHTML = slides[currentSlide]["tagLine"];
		dot = document.getElementById(currentSlide);
		dot.classList.add("dot_selected");
		previousDot = document.getElementById(currentSlide-1);
		previousDot.classList.remove("dot_selected");
	}
}

arrowRight.addEventListener("click", clickDroit);