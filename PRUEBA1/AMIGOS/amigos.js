let saludaBtns=document.getElementsByClassName('saluda');
let saludaNombre=document.getElementsByClassName('nombre');
console.log(saludaBtns);
console.log(saludaNombre);

for (let index = 0; index < saludaBtns.length; index++) {
    saludaBtns[index].onclick=function () {
        let name=this.getAttribute('data-name');
        let idp =this.getAttribute('data-idp');
        let infop= document.getElementById(idp).innerHTML;

        alert(infop);
        
    }
    
}

let borrarBtns= document.getElementsByClassName('borra');
for (let index = 0; index < borrarBtns.length; index++) {
    borrarBtns[index].onclick=function () {
        let elidLI = this.getAttribute('data-li');
        removeElement(elidLI);
      
    }
}

function removeElement (id){
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);

}