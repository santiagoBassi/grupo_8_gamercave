function showPassword() {
    let password = document.getElementById('password');
    let hide = document.getElementById('hide');
    let show = document.getElementById('show');

    if (hide.style.display == 'none') {
        hide.style.display = 'initial';
        show.style.display = 'none';
    } else {
        show.style.display = 'initial';
        hide.style.display = 'none';
    }

    if (password.getAttribute('type') == 'password') {
        password.setAttribute('type', 'text');
    } else {
        password.setAttribute('type', 'password');
    }

}