import {rdb,ref2,onValue,storage, ref,getDownloadURL} from '../Model/ScriptsDB.js';

let namePicture=[]
let contImage=1;
let consultPatients= sessionStorage.getItem("consultorio");
var izquierda = { left: 0, top: 0, right: 512, bottom: 700 };
var derecha = { left: 512, top: 0, right: 1024, bottom: 700 };

const starCountRef = ref2(rdb, 'consultorios/'+consultPatients);
let cont=0

async function cargarDatos(){
    return new Promise(function(resolve, reject){
        onValue(starCountRef, (snapshot) => {
            let listImage=[];
            snapshot.forEach((doc) => {
                cont++;
                listImage[cont]=doc.val()
            });
            resolve(listImage);
        })
    });
}

(()=>{
    $("#titulo").text("Ruta al consultorio: #"+consultPatients)
    async function lis(){
        let vari = await cargarDatos();
        namePicture=vari;
        // console.log(namePicture[1]);
        cargarImage(namePicture[1])
    }

    lis()

    $("#idImgClinica").click((event)=>{
        var offsetX = event.offsetX;
        var offsetY = event.offsetY;

        if (estaDentroDeZona(offsetX, offsetY, derecha)) {

            contImage++;
            cargarImage(namePicture[contImage]);

        } else{

            contImage=contImage-1;
            cargarImage(namePicture[contImage]);
            
        }
    })

})()


function cargarImage(nombre){

    const storageRe = ref(storage, nombre );

    getDownloadURL(storageRe).then(function(url) {
      $('#idImgClinica').attr('src', url);
    }).catch(function(error) {
      Swal.fire("ERROR", error.message ,"error");
    });
}

function estaDentroDeZona(x, y, zona) {
    return x >= zona.left && x <= zona.right && y >= zona.top && y <= zona.bottom;
}