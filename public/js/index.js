/*comienza header*/
function showmenu() {
    document.getElementById("otro-modo").classList.toggle("show");
}
/*termina header*/

/*comienza aside*/
function showfiltro() {
    document.getElementById("mostrar-filtro").classList.toggle("show-filtro");
}


/*termina aside*/

/*comienza girar flecha categorias*/
function rotateflecha() {
    document.getElementById("girar-flecha").classList.toggle("rotate-flecha");
}
/*termina girar flecha gategoria*/


/*comienza slider*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";

}

/*termina slider*/