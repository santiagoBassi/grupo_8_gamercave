const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const errorConfirmPassword = document.getElementById('errorConfirmPassword');

let comparePasswords = (event) => {
    if (password.value == confirmPassword.value && password.value.length >= 10) {
        document.getElementById('iconoConfirmPasswordCheck').classList.add('mostrarConfirm');
        document.getElementById('iconoConfirmPasswordError').classList.remove('mostrarConfirm');

        document.getElementById('iconoConfirmPasswordCheck2').classList.add('mostrarConfirm');
        document.getElementById('iconoConfirmPasswordError2').classList.remove('mostrarConfirm');
        document.getElementById('errorConfirmPassword').style.display = 'none'

    } else {
        document.getElementById('iconoConfirmPasswordCheck').classList.remove('mostrarConfirm');
        document.getElementById('iconoConfirmPasswordError').classList.add('mostrarConfirm');

        document.getElementById('iconoConfirmPasswordCheck2').classList.remove('mostrarConfirm');
        document.getElementById('iconoConfirmPasswordError2').classList.add('mostrarConfirm');
        document.getElementById('errorConfirmPassword').style.display = 'block'

        event.preventDefault();
    };
}

password.addEventListener('keyup', comparePasswords);
confirmPassword.addEventListener('keyup', comparePasswords);