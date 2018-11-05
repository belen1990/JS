
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
        let textoFiltro=document.getElementById('buscador').value;
        let arrfiltrado=amigosfromserve.filter(elem => {return elem.name.indexOf(textoFiltro)>=0?true:false;} )

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