var slideIndex = 1;
var timer = null;
showSlides(slideIndex);
showSl(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  var box = document.getElementsByClassName("sliderBox");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    box[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  box[slideIndex - 1].style.display = "inline-flex";
  dots[slideIndex-1].className += " active";
  if(window.innerWidth < 769){
    for (i = 0; i < box.length; i++) {
      box[i].style.display = 'none';
    }
  }
}
function currSlide(n) {
  clearTimeout(timer);
  showSl(slideIndex = n);
}
function showSl(n) {
  var i;
  var slides = document.getElementsByClassName("slideTitle");
  var dots = document.getElementsByClassName("dots");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSl, 5000);
}
