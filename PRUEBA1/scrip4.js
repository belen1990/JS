var resultado;
var arr_nums = [2, 4, 6, 8, 9];


function opNumArr(arr, op) {
    let resultado;

    if (op == '+') {
        resultado = 0;
        for (i = 0; i < arr.length; i++) {
            resultado = resultado + arr[i];} //resultado+=arr[index] es lo mismo; 
        
    }else if (op == '*') {
        resultado = 1;
        for (i = 0; i < arr.length; i++) {
            resultado = resultado*arr[i];}
        
    }else if (op == '-') {
        resultado = arr[0];
        for (i = 1; i < arr.length; i++) {
            resultado = resultado-arr[i];}
        }
    else if (op == '/') {
            resultado = arr[0];
            for (i = 1; i < arr.length; i++) {
                resultado = resultado/arr[i];}}
    

    return resultado;
}



console.log(opNumArr(arr_nums, '+' ));//29
console.log(opNumArr(arr_nums,  '*' ));
console.log(opNumArr(arr_nums, '-' ));
console.log(opNumArr(arr_nums, '/' ));//29