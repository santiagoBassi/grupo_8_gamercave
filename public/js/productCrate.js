function agregarCampos() {

    const lugarParaInsertatCarac = document.getElementById('carac');
    const lugarParaInsertatValue = document.getElementById('value');

    const inputCarac = document.createElement('input');
    const inputValue = document.createElement('input');

    inputCarac.className = 'input';
    inputValue.className = 'input';

    inputCarac.name = 'caracteristica';
    inputValue.name = 'valor';


    lugarParaInsertatCarac.appendChild(inputCarac);
    lugarParaInsertatValue.appendChild(inputValue);


    let elementosTotales = lugarParaInsertatCarac.getElementsByTagName('input').length;
    cantidadElementos.value = elementosTotales;


}