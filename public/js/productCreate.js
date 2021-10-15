function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function borrarCampo(carac, value) {


    const caracABorrar = document.getElementById(carac);
    const valueABorrar = document.getElementById(value)

    caracABorrar.remove();
    valueABorrar.remove();

    let lugarParaInsertatValue = document.getElementById('value');
    let cantidadElementos = document.getElementById('cantidadElementos');


    let elementosTotales = lugarParaInsertatValue.getElementsByTagName('input').length;
    cantidadElementos.setAttribute('value', elementosTotales);
}

function agregarCampos() {

    const lugarParaInsertatCarac = document.getElementById('carac');
    const lugarParaInsertatValue = document.getElementById('value');
    const cantidadElementos = document.getElementById('cantidadElementos');

    const inputCarac = document.createElement('input');
    const inputValue = document.createElement('input');
    const divContainerDeleteField = document.createElement('div');
    const icono = document.createElement('i');

    inputCarac.className = 'input';
    inputValue.className = 'input';
    divContainerDeleteField.className = 'containerDeleteField';
    icono.classList = "deleteField fas fa-times";


    inputCarac.name = 'characteristic';
    inputValue.name = 'value';

    inputCarac.setAttribute("required", "");
    inputValue.setAttribute("required", "");

    inputCarac.placeholder = 'Ej: color';
    inputValue.placeholder = 'Ej: rojo';

    let idCarac = uuidv4();
    let idValue = uuidv4();

    icono.onclick = function() {
        borrarCampo(idCarac, idValue)
    }

    divContainerDeleteField.setAttribute('id', idCarac);
    inputValue.setAttribute('id', idValue);


    divContainerDeleteField.appendChild(icono);
    divContainerDeleteField.appendChild(inputCarac);

    lugarParaInsertatCarac.appendChild(divContainerDeleteField);
    lugarParaInsertatValue.appendChild(inputValue);


    let lugarParaInsertatValue2 = document.getElementById('value');
    let cantidadElementos2 = document.getElementById('cantidadElementos');


    let elementosTotales2 = lugarParaInsertatValue2.getElementsByTagName('input').length;
    cantidadElementos2.setAttribute('value', elementosTotales2);
}