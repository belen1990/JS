function concatenar(str1, str2){return str1+' '+str2;}
console.log ( concatenar ('hola', 'mundo'));

// ES6:
// LET: variables
// const: constantes
//function (sin nombre= funciones anonimas), para invocarlas se pone () ejemplo (function (texto){console.log (texto);})('Hola mundo?); 

(function (texto){
    console.log (texto);
})('HOLA MUNDO') ;

const concatenar2 = function  (str1, str2){return str1+' '+str2;}
console.log ( concatenar ('hola2', 'mundo2'));

function factorial(N) {
    if (N==0) return 1;
    else return N*factorial(N-1);
}

console.log(factorial(4));