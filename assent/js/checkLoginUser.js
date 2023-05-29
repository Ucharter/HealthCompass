import{iniciarSesionPatients} from '../../Controllers/PacientesController.js';

(function () {
    const formCheck = document.querySelector('#checkForm');

    document.addEventListener('DOMContentLoaded', () => {
        formCheck.addEventListener('submit', checkForm);
    })

    function checkForm(e) {
        e.preventDefault();

        const cc = document.querySelector('#cc').value;

        if (cc === '') {
            Swal.fire("ERROR", "El campo de C.C es obligatorio","error");
            return;
        }
        iniciarSesionPatients(cc);
    }
})();