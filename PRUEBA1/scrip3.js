var numeros = [8,9, 'a','b','c'];
console.log(numeros);
numeros[2]= 4;
numeros[6]='S';
console.log(numeros);



for (let index = 0; index < numeros.length; index++) {
    console.log('el valor en el indice:', index,'es',
    numeros[index]) 

    
}

for (let index = 0; index < 20 ; index++) {
   console.log('hola');
}

let mascotitas=[];
mascotitas[0]=`perrito 1`;

for (let index= 0; index < 1000; index++) {mascotitas[index]= 'perrito'+(index+1) ; }

console.log(mascotitas);


for (let index = 0; index< 1000 ; index++) {
    console.log('la mascota'+index+ 'se llama' +mascotitas[index]);
}