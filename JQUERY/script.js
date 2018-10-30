console.log($('#holabtn').html());

$( "#holabtn" ).click(function() {
    alert( "HOLA" );
  });

$('h1').html('hola!!!').click(function() {
    alert('este es el titulo');}).
html('otro titulo');

let amigos=[
    {name:'Ricardo', email: 'r@r.es'},
    {name:'Irene', email: 'i@r.es'},
    {name:'Nacho', email: 'n@r.es'},
    {name:'Maria', email: 'm@r.es'},
];

//getElmentById.amigos.innerHtml (es igual)
$('#amigos').html('Estos son mis amigos');

$('#amigos').html(function () {
    return "Resultado de la función";   
});

$('#amigos').html(function () {
    let htmlAmigos='';
    amigos.forEach(unAmigo =>{
        htmlAmigos += `<li>${unAmigo.name}</li>`;
    });
//inyectar HTML en el DOM existente
    return htmlAmigos;   
});

let saludaBtns=document.getElementsByClassName('holaBtn');

$('#amigos').html(function () {
        let htmlAmigos=''; 
        amigos.forEach(unAmigo => {
            htmlAmigos += `<li>
            <div>${unAmigo.name}</div>
            <div>${unAmigo.email}</div>
            <div><button class="saludaBtn" data-value="${unAmigo.email}">
            Saludar</button></div> </li>`;

        });

        return htmlAmigos;
    
});

$('.saludaBtn').click(function () {
    alert('hola'+$(this).attr('data-value')+'!!!!!!');
    
})

$('#holaBtn').click(function() {
    $('#amigos').toggle().animate()
    
})

