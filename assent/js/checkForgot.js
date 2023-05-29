import{recuperarPassword}from '../../Controllers/LogInController.js'
(function () {
    const formCheck = document.querySelector('#formCheck');

    document.addEventListener('DOMContentLoaded', () => {
        formCheck.addEventListener('submit', checkForm);
    })

    function checkForm(e) {
        e.preventDefault();

        const email = document.querySelector('#email').value;

        if (email === '') {
            showAlert('El campo de Email es obligatorio', 'error');
            return;
        }
        recuperarPassword(email);

    }

})();