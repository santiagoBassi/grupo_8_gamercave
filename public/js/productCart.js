/*Botones de agregar o disminuir cantidad*/
function increaseValue(id) {
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(id).value = value;
}

function decreaseValue(id) {
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById(id).value = value;
}

function updatePrice(id, idCant) {
    let priceInitial =document.getElementById(`priceInitial${idCant}`).innerHTML;
    let price = document.getElementById(id);
    let cant = document.getElementById(idCant).value
    let newPrice = Number(priceInitial) * Number(cant);

    price.innerText =`$ ${newPrice}` 
   
}
