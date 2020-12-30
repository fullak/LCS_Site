const button = document.querySelector('#inscription');

button.addEventListener('click', function () {

    const user = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    console.log(user);

    axios
        .post("http://localhost:3000/user/signup", user)
        .then((response) => {
            console.log('Utilisateur ajouté à la base de donnée, status : ', response.status);
        })
        .catch((error) => {
            console.log('An error is appeared : ', error.response.data);
        });
});