import {rdb,ref2,onValue} from '../Model/ScriptsDB.js';

export async function iniciarSesionPatients(cc){

  const starCountRef = ref2(rdb, 'citas');

  await onValue(starCountRef, (snapshot) => {
    snapshot.forEach((doc) => {
      if(doc.val().cc==cc){
        sessionStorage.setItem("consultorio",doc.val().consultorio);
        
      }
  });
    Object.keys(snapshot.val()).forEach((doc) => {
      if(doc == cc)location.replace('./home-page.html');
    });
  })

}