var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 5000)

var contador = 1;
setInterval(function() {
    document.getElementById('radio-publicidades' + contador).checked = true;
    contador++;
    if (contador > 3) {
        contador = 1;
    }
}, 5000)