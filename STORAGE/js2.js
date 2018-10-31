console.log( window.localStorage.getItem('palabra_almacenada'));

let amigosRetStr= window.localStorage.getItem('listaamigos');
let amigosRet= JSON.parse(amigosRetStr);

document.getElementById('amigos').innerHTML=(function(){
    let html='';

    amigosRet.forEach(element => {
        html+=`<li>${element.name} | ${element.edad} </li>`;

    });

    return html;

})();
