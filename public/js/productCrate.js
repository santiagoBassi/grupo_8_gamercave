function agregarCampos() {
    const lugarParaInsertar = document.getElementById('descripcion');
    const div = document.createElement('div');
    const inputCarac = document.createElement('input');
    const inputValue = document.createElement('input');


    inputCarac.name = 'caracteristica';
    inputValue.name = 'valor';
    inputCarac.className = 'input';
    inputValue.className = 'input';

    div.appendChild(inputCarac);
    div.appendChild(inputValue);

    lugarParaInsertar.appendChild(div);



    let elementosTotales = lugarParaInsertar.getElementsByTagName('div').length;
    cantidadElementos.value = elementosTotales;


}