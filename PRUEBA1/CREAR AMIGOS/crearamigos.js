//Amigos recibidos del servidor
let amigos=[
    {name:'Ricardo', email: 'r@r.es'},
    {name:'Irene', email: 'i@r.es'},
    {name:'Nacho', email: 'n@r.es'},
    {name:'Maria', email: 'm@r.es'}
];

//Parsear en spaguettis
let listaUL= document.getElementById('listaAmigos');
for (let index = 0; index < amigos.length; index++) {
    //listaUL.innerHTML += '<li>' +  amigos[index].name+" "+amigos[index].email+ '</li>';
     listaUL.innerHTML += `<li>
        <div> ${amigos[index].name} </div>
        <div> ${amigos[index].email} </div>
        <div><button class="saluda" data-value="${amigos[index].name}">
        Saludar</button></div>
     </li>`;
}
// Parsear en funciones
function parseaAmigos (paramAmigos){
    let listaUL = document.getElementById('listaAmigos');

    for (let index = 0; index < paramAmigos.length; index++) {
        listaUL.innerHTML += `<li>
        <div> ${amigos[index].name} </div>
        <div> ${amigos[index].email} </div>
        <div><button class="saluda" data-value="${paramAmigos[index].name}">
        Saludar</button></div>
     </li>`;
        
    }
}

//Procesar en spaguettis
let saludaBtns=document.getElementsByClassName('saluda');
for (let index = 0; index < saludaBtns.length; index++) {
    saludaBtns[index].onclick=function()
    { alert(this.getAttribute('data-value'));}
    ;
    
}



//Procesar en funciones
function saludarAmigos (classBtn,attrib){
    let saludaBtns = document.getElementsByClassName(classBtn);

    for (let index = 0; index < saludaBtns.length; index++) {
        saludaBtns[index].onclick= function(){
            alert(this.getAttribute('data-value'));
        }
        
    }
}

