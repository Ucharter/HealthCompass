import {rdb,ref2,onValue,remove} from '../Model/ScriptsDB.js'

let pacientes = [];
let body_tabla = document.getElementById('body_tabla_citas');

const starCountRef = ref2(rdb, 'citas');
let cont=0

onValue(starCountRef, (snapshot) => {
    snapshot.forEach((doc) => {
        cont++;
        pacientes[cont]=doc.val()
    });
    tabla_citas(pacientes);
});


function tabla_citas(datos){
    
    for (let i = 1; i < datos.length; i++) {

        let row = document.createElement("tr");

        for (let j = 0; j < 4; j++) {
            let celda = document.createElement("td");
            let celda1 = document.createElement("th");
            let textoCelda = document.createTextNode(i);
            let textoCelda1 = document.createTextNode(datos[i].fecha);
            let textoCelda2 =document.createTextNode(datos[i].consultorio);
            let boton_eliminar = document.createElement("r");
            boton_eliminar.setAttribute('href','#');
            boton_eliminar.setAttribute('class','boton_eliminar_class btn btn-danger fa fa-trash');

            if (j == 0){
                celda1.appendChild(textoCelda);
                row.appendChild(celda1);
            }
            if (j == 1){
                celda.appendChild(textoCelda1);
                row.appendChild(celda);
            }
            if (j == 2){
                celda.appendChild(textoCelda2);
                row.appendChild(celda);
            }
            if (j == 3){
                let cont3 = i;
                boton_eliminar.setAttribute('id','boton_eliminar_'+ cont3)
                celda.appendChild(boton_eliminar);
                row.appendChild(celda);
            }
            let cont = i+1
            row.id = 'fila_'+cont
        }
        body_tabla.appendChild(row);
    }
    listener();
}

function listener(){
    document.querySelectorAll('.boton_eliminar_class').forEach(item => {
        
        item.addEventListener('click', event => {
            console.log(pacientes[item.id.substr(15,15)]);
          Swal.fire({
            title: 'Eliminar usuario?',
            text: "El usuario "+pacientes[item.id.substr(15,15)].cc+" será eliminado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              DeleteUser(pacientes[item.id.substr(15,15)]);
            }
          })
        })
    });

}

console.log("hola");

async function DeleteUser(id){
    remove(ref2(rdb, '/citas/'+id.cc)).then(()=>{
        Swal.fire('EXITO','Cita Eliminada','success');
        setTimeout(reloade,2000);
    }).catch((error)=>{
        Swal.fire('ERROR',error.message,'error');
    })
}
function reloade(){
    location.reload();
}