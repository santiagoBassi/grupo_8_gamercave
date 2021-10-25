var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 5000)

const btnUser = document.querySelector(".btn-user");
const ulUser = document.querySelector(".ul-user")

btnUser.addEventListener('click', () => {
    ulUser.classList.toggle('ul-user-show');
})