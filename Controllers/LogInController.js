import { auth, signInWithEmailAndPassword, sendPasswordResetEmail } from '../Model/ScriptsDB.js';

export async function iniciarSesionUser(email , password){

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    sessionStorage.setItem("usuario", user.email);
    location.replace('./Views/admin.html');
  })
  .catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;

    switch(errorCode){
      case 'auth/user-not-found':
        Swal.fire("ERROR", "Usuario No Registrado","error");
        break;
      case 'auth/wrong-password':
        Swal.fire("ERROR", "Contraseña Incorrecta","error");
        break
      default:
        Swal.fire(errorCode, errorMessage,"error");
        break;
    }

  });
}

export async function recuperarPassword(email){

  sendPasswordResetEmail(auth, email)
  .then(() => {
    Swal.fire("EXITO", "Correo De Recuperacion Enviado","succes");
    setTimeout(replace,2000);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire(errorCode, errorMessage,"error");
    throw new Error(errorCode)
  });

}

function replace(){
  location.replace('../index.html');
}