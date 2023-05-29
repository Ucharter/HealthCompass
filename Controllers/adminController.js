import{ saveData }from './citasController.js'

(()=>{
    
    $('#mostrarModal').click(()=>{
        $('#agendaModal').modal('show')
    })
    $("#close").click(()=>{
        $('#agendaModal').modal('hide')
    })
    $('#btnAgendar').click((e)=>{
        e.preventDefault();
        const cc = $('#idDocumento').val();
        const fecha = $('#idFecha').val();
        const consultorio = $('#idConsultorio').find("option:selected").val();

        try {
            saveData(cc,fecha,consultorio)
            $('#agendaModal').modal('hide')
        } catch (error) {
            Swal.fire("ERROR", error.message,"error");
        };


    });

})();