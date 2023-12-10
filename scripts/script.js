// JavaScript Document
console.log("hi");

//De code heb ik van://
// https://dev.to/arindam1997007/creating-an-infinite-looping-image-carousel-with-css-and-javascript-4pao
 
var carousel = document.querySelector('main section:nth-of-type(1) ul');
var slides = document.querySelectorAll('main section:nth-of-type(1) ul li');
 
var rightArrow = document.querySelector('main section:nth-of-type(1) > button:first-of-type');
var leftArrow = document.querySelector('main section:nth-of-type(1) > button:last-of-type');
 
var currentIndex = 0; // huidige slide
var prevIndex; // vorige slide
 
var totalSlides = slides.length; // totaal aantal slides
// var imageWidth = 390; 
// breedte van de slide
 
var imageWidth = window.innerWidth;
console.log(imageWidth);

window.addEventListener("resize", () => {
  imageWidth = window.innerWidth;
  console.log(imageWidth);
});

// vorige slide
leftArrow.addEventListener('click', () => {
  // bijwerken index
  prevIndex = currentIndex;
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
 
  // verschuif carrousel naar links
  carousel.style.transform = `translateX(-${imageWidth}px)`;
  // plaats vorige dia aan het begin
  carousel.insertBefore(slides[currentIndex], carousel.firstChild);
 
  setTimeout(() => {
    carousel.style.transform = '';
    carousel.classList.add('sliding-transition');
  }, 10);
 
  setTimeout(() => {
    carousel.classList.remove('sliding-transition');
  }, 490);
});
 
// volgende slide
rightArrow.addEventListener('click', () => {
  carousel.classList.add('sliding-transition');
 
  // bijwerken index
  prevIndex = currentIndex;
  currentIndex = (currentIndex + 1) % totalSlides;
 
  // verschuif carrousel naar links
  carousel.style.transform = `translateX(-${imageWidth}px)`;
 
  setTimeout(() => {
    // plaats vorige dia aan het einde
    carousel.appendChild(slides[prevIndex]);
 
    carousel.classList.remove('sliding-transition');
    carousel.style.transform = '';
  }, 500);
});

var openMenuButton = document.querySelector("header nav > button");
var sluitMenuButton = document.querySelector("header nav > section > section:first-of-type button");
var deNav = document.querySelector("header nav > section");
var body = document.querySelector('body');

openMenuButton.onclick = openMenu;
sluitMenuButton.onclick = sluitMenu;

function openMenu(){
  deNav.classList.add("showMenu");
  body.classList.add("overflowHidden");
}

function sluitMenu(){
  deNav.classList.remove("showMenu");
  body.classList.remove("overflowHidden");
}