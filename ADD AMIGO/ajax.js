
function generarHtml(paramElemid, paramAmigos) {
    $(paramElemid).html(function () {
        let htmlAmigos = '';
        paramAmigos.forEach(unAmigo => {
            htmlAmigos += `<li>
           <div>${unAmigo.name}</div>
           <div>${unAmigo.email}</div>
           <div><button class="saludaBtn" data-value="${unAmigo.email}">
           Saludar</button></div> </li>`;
        });

        return htmlAmigos;
    });
}

$('#cargaramigosfb').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b1e3100002414474d4b",
    }).done(function (amigosfromserve) {
        console.log(amigosfromserve);
        generarHtml('#amigosfb', amigosfromserve);

        //saludar los botones //asociar eventos
        $('#amigosfb.saludaBtn').click(function () {
            alert('hola' + $(this).attr('data-value') + '!!!!!!');

        })
    });

});



$('#cargaramigossp').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b1e3100002414474d4b",
    }).done(function (amigosfromserve) {
        console.log(amigosfromserve);
        generarHtml('#amigossp', amigosfromserve);

        //saludar los botones //asociar eventos
        $('amigossp.saludaBtn').click(function () {
            alert('hola' + $(this).attr('data-value') + '!!!!!!');
        //asociar eventos
        asociaClick('amigosfb',amigosfromserve);

        })
    });

});


$('#cargaramigosfb').click(function () {
    
    $ajax({
        url: "http://www.mocky.io/v2/5bd84b1e3100002414474d4b",
    }).done(function(amigosfromserve) {
        console.log(amigosfromserve)
        generarHtml('amigosfb', amigosfromserve);
        asociaClick('#amigosgb');
        
    })
})

let formValid = document.getElementById('form').checkValidity();

if(formValid){
    //Enviar
    $.ajax({
        method: "POST",
        url: "http://www.mocky.io/v2/5bd973362f0000561406d127",// CASO TRUE
        url: "http://www.mocky.io/v2/5bd977892f0000580006d150", //CASO FALSE
        data: { 
            username: document.getElementById('name').value, 
            password: document.getElementById('email').value, 
        }
      })
        .done(function(data) {
        console.log(data);
    }else{
        //mostrar mensaje y no enviar
        
        //document.getElementById('mensaje').innerHTML="datos incorrectos";
        


        if(!document.getElementById('form').checkValidity() ){
            document.getElementById('name').classList.add.htmlAmigos();
        }

        if(!document.getElementById('form').checkValidity() ){
            document.getElementById('email').classList.add.htmlAmigos();
        }
    }
   

});