let w=new Worker('./worker.js');

w.postMessage('Hola hijo!!!');

w.onmessage=function (mess) {
    console.log(mess.data);
    
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let suma= 0;

for (let index = 0; index < arr.length; index++) {
    suma += arr[index];
}

console.log(suma);

w.postMessage(arr);

w.onmessage = function (mess){ console.log (mess.data);}
