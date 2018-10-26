function operarNumeros(num1, num2, op) {
    if (op == '-') { return num1 - num2; }
    else if (op == '+') { return num1 + num2; }
    else if (op == '*') { return num1 * num2; }
    else if (op == '/') {
        if(num2==0) {return 0;}
        else {return num1 / num2;}
    }
 }
 
 console.log(operarNumeros(4, 8, '-')); //-4
 console.log(operarNumeros(4, 8, '+')); //12
 console.log(operarNumeros(4, 8, '*')); //32
 console.log(operarNumeros(4, 8, '/')); //0.5
 console.log(operarNumeros(343, 0, '/')); //0
 
 
 function opNumArr(arr,op){
    let resultado;
 
    if(op=='+'){
        resultado=0;
        for (let index = 0; index < arr.length; index++) {
            resultado = operarNumeros(resultado, arr[index],'+');
        }
    }else if(op=='-'){
        resultado=0;
        for (let index = 0; index < arr.length; index++) {
            if(index==0) resultado=arr[index];
            else resultado -= arr[index];
        }
    }else if(op=='*'){
        resultado=1;
        for (let index = 0; index < arr.length; index++) {
            resultado *= arr[index];
        }
    }else if(op=='/'){
        for (let index = 0; index < arr.length; index++) {
            if(index==0) resultado=arr[index];
            else resultado /= arr[index];
        }
    }
 
    return resultado;
 }
 
 let arr_nums=[1,2,3,4];
 
 console.log("RESULTADOS ARRAY");
 console.log(opNumArr(arr_nums, '+')); //10
 console.log(opNumArr(arr_nums, '-')); //-8
 console.log(opNumArr(arr_nums, '*')); //24
 console.log(opNumArr(arr_nums, '/')); //0.0416666


function concatena(a,b){return a+' '+b};
concatena('hola','Ric');
function concatenaABC(a,b,c){return a+' '+b+' '+c;}
concatenaABC('Hola', 'Ricardo', 'Como estas');
function concatenaABC(a,b,c){return concatena(a,b)+' '+c;}
function concatenaABC(a,b,c){return concatena(concatena(a,b),c);}