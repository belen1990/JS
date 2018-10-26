let belen = {
    nombre: 'belen',
    apellido: 'alarcon',
    email: 'belen@gmail.com',
    edad: 28,
    gustaleer: true,
    gustavideojuegos: false,

    saludar: function() {
        return 'hola, me llamo' + this.nombre + '; tengo' + this.edad + 'años, me gustan leer';}

};

console.log(belen.saludar());



console.log(belen);
console.log(belen.apellido);
console.log(belen.gustavideojuegos);
// el unico caso en el que las llaves tienen ; es cuando hacen referencia a objetos
// cualquier cosa que tenga un . despues es un objeto. Console es un objeto
//programacion orientada a objetos OOP

let alumnos=[
    {id:1 , nombre: 'carlos', edad: '30', showInfo: function() {return '['+ this.id + ']'+ this.nombre+ ','+ this.edad;}},
    {id:2 , nombre: 'irene', edad: '30', showInfo: function() {return '['+ this.id + ']'+ this.nombre+ ','+ this.edad;}},
    {id:3 , nombre: 'marcos', edad: '30', showInfo: function() {return '['+ this.id + ']'+ this.nombre+ ','+ this.edad;}}
    ];
    
  

    for (let index = 0; index < alumnos.length; index++)  { console.log( alumnos[index].showInfo())
        ;}
       
//definir una clase en JS
//ES5 las clases se definen mediante funciones se definen siempre con mayuscula porque definen un concepto
let Persona = function (id,nom,ed) {
    this.id=id;
    this.nombre=nom;
    this.edad=ed;

    this.showInfo=function(){
        return '['+ this.id + ']'+ this.nombre+ ','+ this.edad;
    }
    
}       

let ricardo= new Persona (1, 'Ricardo', 32);

console.log(ricardo);

let clase2= [
    new Persona( 1, 'Ricardo', 34),
    new Persona( 2 , 'carlos' , 44),
    new Persona( 3, 'alicia', 18),
];

for (let index = 0; index < clase2.length; index++) {
    console.log(clase2[index].showInfo());
    
}

//ES6
class Persona2{
    constructor(id, nom, ed){
        this.id = id;
        this.nombre = nom;
        this.edad = ed;
    }


    showInfo(){
        return '['+ this.id + ']'+ this.nombre+ ','+ this.edad;
    }
}
    
