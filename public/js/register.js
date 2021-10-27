const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const errorConfirmPassword = document.querySelector('.validation-password');

let comparePasswords = (event) => {
    if (password.value == confirmPassword.value && password.value.length >= 8) {
        document.getElementById('iconoConfirmPasswordCheck').classList.add('mostrarConfirm');
        document.getElementById('iconoConfirmPasswordError').classList.remove('mostrarConfirm');

        document.getElementById('iconoConfirmPasswordCheck2').classList.add('mostrarConfirm');
        document.getElementById('iconoConfirmPasswordError2').classList.remove('mostrarConfirm');


    } else {
        document.getElementById('iconoConfirmPasswordCheck').classList.remove('mostrarConfirm');
        document.getElementById('iconoConfirmPasswordError').classList.add('mostrarConfirm');

        document.getElementById('iconoConfirmPasswordCheck2').classList.remove('mostrarConfirm');
        document.getElementById('iconoConfirmPasswordError2').classList.add('mostrarConfirm');


        event.preventDefault();
    };
    if (password.value.length >= 8) {
        errorConfirmPassword.style.display = 'none';
    } else {
        errorConfirmPassword.style.display = 'initial';
    }
}

password.addEventListener('keyup', comparePasswords);
confirmPassword.addEventListener('keyup', comparePasswords);