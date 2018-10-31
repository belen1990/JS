document.getElementById('accederbtn').onclick= (function (evnt) {
    //console.log(evnt);
    evnt.preventDefault();

    document.querySelectorAll('.error').forEach(elem => {
        elem.classList.add('esconder');
    })
    
    let formValid = document.getElementById('loginform').checkValidity();
    
    if(formValid){
        //Enviar
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd973362f0000561406d127",// CASO TRUE
            url: "http://www.mocky.io/v2/5bd977892f0000580006d150", //CASO FALSE
            data: { 
                username: document.getElementById('username').value, 
                password: document.getElementById('password').value, 
            }
          })
            .done(function(data) {
            console.log(data);
            if (data-result){
                 window.location.href='dashboard.html'               
            }else{
                //mensaje de error
                document.getElementById('mensaje').classList.remove('esconder');

            }

                
            })
    }else{
        //mostrar mensaje y no enviar
        
        //document.getElementById('mensaje').innerHTML="datos incorrectos";
        


        if(!document.getElementById('loginform').checkValidity() ){
            document.getElementById('errorusername').classList.remove('esconder');
        }

        if(!document.getElementById('loginform').checkValidity() ){
            document.getElementById('errorpassword').classList.remove('esconder');
        }
    }
    
});


