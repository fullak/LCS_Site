const button = document.querySelector('#connexion');

button.addEventListener('click', function () {

    const user = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    console.log(user);

    axios
        .post("http://localhost:3000/user/login", user)
        .then((response) => {
            console.log('connexion done! : ', response.status);
            setTimeout(() => {
                location.href = '../back-office/main-menu.html';
            }, 2500);
        })
        .catch((error) => {
            console.log('An error is appeared : ', error.response.data);
        });

});