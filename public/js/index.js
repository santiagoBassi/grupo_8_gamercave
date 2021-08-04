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
var counter = 1;
setInterval(function() {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 3) {
            counter = 1;
        }
    }, 5000)
    /*termina slider*/