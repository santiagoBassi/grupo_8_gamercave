function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();


    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3030/users/loginGoogle');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.send('idtoken=' + id_token);
}