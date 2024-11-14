document.addEventListener("DOMContentLoaded", function () {
    const formDatos = document.getElementById('formDatos');
    const formIncidencia = document.getElementById('formIncidencia');
    const formInvitation = document.getElementById('formInvitation');


   
    function redirectToHomePage() {
        setTimeout(function() {
            window.location.href = "index.html";  
        }, 3000); 
    }

    
    if (formDatos) {
        formDatos.addEventListener('submit', function(event) {
            event.preventDefault();  
            
            document.getElementById('dataResponse').style.display = 'block';
           
            setTimeout(function() {
                document.getElementById('dataResponse').style.display = 'none';
            }, 2000);
            
            redirectToHomePage();
        });
    }

   
    if (formIncidencia) {
        formIncidencia.addEventListener('submit', function(event) {
            event.preventDefault();  
           
            document.getElementById('incidentResponse').style.display = 'block';
            
            setTimeout(function() {
                document.getElementById('incidentResponse').style.display = 'none';
            }, 2000);
            
            redirectToHomePage();
        });
    }

    
    if (formInvitation) {
        formInvitation.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            document.getElementById('invitationResponse').style.display = 'block';
            
            setTimeout(function() {
                document.getElementById('invitationResponse').style.display = 'none';
            }, 2000);
            
            redirectToHomePage();
        });
    }
});
