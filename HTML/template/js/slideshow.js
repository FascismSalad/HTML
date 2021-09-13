// Sets the current slide to the first slide when the script is loaded.
var currentSlide = 1;

// Controls for the 'next/prev' buttons
function plusSlides(n) {
  showSlides(currentSlide += n);
}

// Allows selection of the image from the 'dot' button
function loadCurrentSlide(n) {
  showSlides(currentSlide = n);
}

// Keeps count of the current slide and loads the correct image slide on the webpage.
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    currentSlide = 1
  }
  if (n < 1) {
    currentSlide = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[currentSlide - 1].style.display = "block";
  dots[currentSlide - 1].className += " active";
}
