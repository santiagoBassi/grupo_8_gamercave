function showImg(numImg) {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    img1.classList.remove('mostrar');
    img2.classList.remove('mostrar');
    img3.classList.remove('mostrar');

    console.log('img' + numImg)

    const imgAMostrar = document.getElementById('img' + numImg);
    imgAMostrar.classList.add('mostrar', 'img-grande');
}