import {main,desplegarInvestigador} from '../controladorMain.js';

main();

$(document).ready(function() { 
    $('#iniciarSesionSubmit').click(
        function(event) {  
            event.preventDefault();    
            var cuenta = $('#cuentaIniciarSesion').val();
            var password = $('#passwordIniciarSesion').val();

            $.ajax({
                type: "POST",
                data: {
                    "cuenta" : cuenta,
                    "password" : password
                },
                url: "php/controladores/iniciarSesion.php",
            
                success: function(response) { 
                    if(response != "password o cuenta equivocada") {
                        desplegarInvestigador();
                    }
                    else {
                        alert(response);
                    }
                },
            
                error: function(jqXHR, textStatus, errorThrown) {
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