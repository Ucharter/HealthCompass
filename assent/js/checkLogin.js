import{ iniciarSesionUser } from'../../Controllers/LogInController.js'

(function () {
    const formCheck = document.querySelector('#formCheck');

    $('#btnPatient').click(()=>{
        location.replace('./Views/login-user.html');
    });
    document.addEventListener('DOMContentLoaded', () => {
        formCheck.addEventListener('submit', checkForm);
    })

    function checkForm(e) {
        e.preventDefault();

        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        if (email === '' || password === '') {
            Swal.fire("Error","Ambos campos son obligatorios","warning");
            return;
        }
        iniciarSesionUser(email,password)
    }
})();


