import {rdb,ref2,set} from '../Model/ScriptsDB.js'

export function saveData(pacienteId,fecha,consultorio) {
  return set(ref2(rdb, '/citas/'+pacienteId), {
      fecha:fecha,
      consultorio:consultorio,
      cc:pacienteId
  }).then(()=>{
    Swal.fire("EXITO", "Cita Agendada","success");
    setTimeout(reload,2000)
  }).catch((error) => {
    throw error;
  });
}

function reload(){
  location.reload();
}
