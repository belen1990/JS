let upper = document.getElementById('upperbtn');
upper.onclick= function () {
    parrafo=document.getElementById('parrafo');
    parrafo.innerHTML=parrafo.innerHTML.toUpperCase();
    
    
}

let lower = document.getElementById('lowerbtn');
lower.onclick= function () {
    parrafo=document.getElementById('parrafo');
    parrafo.innerHTML=parrafo.innerHTML.toLowerCase();
    
    
}


document.getElementById("sentencebtn").onclick = function () {
    var parraf = document.getElementById("parrafo").innerHTML;
    let palabrasTransf = [];
    separat = parraf.split(" ");
 
    for (let index = 0; index < separat.length; index++) {
 
        palabrasTransf[index] = separat[index].toLowerCase().replace(separat[index].toLowerCase().charAt(0), separat[index].charAt(0).toUpperCase());
 
    }
    var palabrasTransfJunto = palabrasTransf.join(" ");
    // console.log(palabrasTransfJunto);
 
    document.getElementById("parrafo").innerHTML = palabrasTransfJunto;
 }