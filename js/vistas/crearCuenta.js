import {} from '../controladorMain.js';

$(document).ready(function() { 
    $('#crearCuentaSubmit').click(
        function(event)
        {              
            event.preventDefault();      
            var nombre= $('#nombreCrearCuenta').val();
            var apellido = $('#apellidoCrearCuenta').val();
            var cedula = $('#cedulaCrearCuenta').val();
            var telefono = $('#telefonoCrearCuenta').val();
            var direccion = $('#direccionCrearCuenta').val();
            var correoElectronico = $('#correoElectronicoCrearCuenta').val();
            var password = $('#passwordCrearCuenta').val();

            $.ajax(
            {
                type: "POST",
                data: {
                    "nombre" : nombre,
                    "apellido" : apellido, 
                    "cedula" : cedula,
                    "telefono" : telefono,
                    "direccion" : direccion,
                    "correoElectronico" : correoElectronico,
                    "password" : password
                },
                url: "php/controladores/crearCuenta.php",
            
                success: function(response) 
                { 
                    alert(
                        "su cuenta generada por el sistema es: " + response
                    );                         
                },
            
                error: function(jqXHR, textStatus, errorThrown)
                {
                    if(textStatus === 'timeout'){alert('Failed from timeout');}   
                    if (jqXHR.status === 0) {alert('Not connect: Verify Network: ' + textStatus);}
                    else if (jqXHR.status == 404) {alert('Requested page not found [404]');} 
                    else if (jqXHR.status == 500) {alert('Internal Server Error [500].');}
                    else if (textStatus === 'parsererror') {alert('Requested JSON parse failed.');}
                    else if (textStatus === 'timeout') {alert('Time out error.');} 
                    else if (textStatus === 'abort') {alert('Ajax request aborted.');} 
                    else {alert('Uncaught Error: ' + jqXHR.responseText);}
                },
                timeout: 5000
            });
        });
});