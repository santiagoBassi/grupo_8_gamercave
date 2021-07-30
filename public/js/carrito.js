/*comienza header*/
function showmenu() {
    document.getElementById("otro-modo").classList.toggle("show");
}
/*termina header*/
/*Botones de agregar o disminuir cantidad*/
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}

/*Segundo*/
function increaseValue2() {
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number2').value = value;
}

function decreaseValue2() {
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number2').value = value;
}

/*Tercero*/
function increaseValue3() {
    var value = parseInt(document.getElementById('number3').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number3').value = value;
}

function decreaseValue3() {
    var value = parseInt(document.getElementById('number3').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number3').value = value;
}


/*Boton de eliminar producto*/

var cont = 0;

function borrar() {
    var borrardiv = document.getElementById("container").lastChild;
    document.getElementById("container").removeChild(borrardiv);
    cont--;

}











