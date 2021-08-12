function agregarCampos() {
    const lugarParaInsertar = document.getElementById('descripcion')
    const div = document.createElement('div');
    const inputCarac = document.createElement('input');
    const inputValue = document.createElement('input');



    let contador = lugarParaInsertar.getElementsByTagName('div').length;
    contador = contador + 1;
    inputCarac.name = 'caracteristica' + contador;
    inputValue.name = 'valor' + contador;

    div.appendChild(inputCarac);
    div.appendChild(inputValue);

    lugarParaInsertar.appendChild(div);

    let elementosTotales = lugarParaInsertar.getElementsByTagName('div').length;
    cantidadElementos.value = elementosTotales + 1;


}