let notasmusicales= [
    {nota: 'DO',sonido:"./wav-piano-sound/wav/c1.wav", tono:'true'},
    {nota: 'DO#',sonido:"./wav-piano-sound/wav/c1S.wav", tono: 'false'},
    {nota: 'RE',sonido:"./wav-piano-sound/wav/c2.wav", tono: 'true'},
    {nota: 'RE#',sonido:"./wav-piano-sound/wav/c1.wav", tono: 'false'},
    {nota: 'MI',sonido:"./wav-piano-sound/wav/d1.wav", tono: 'true'},
    {nota: 'FA',sonido:"./wav-piano-sound/wav/d1s.wav", tono:'false'},
    {nota: 'FA#',sonido:"./wav-piano-sound/wav/e1.wav", tono: 'true'},
    {nota: 'SOL',sonido:"./wav-piano-sound/wav/f1.wav", tono: 'false'},
    {nota: 'SOL#',sonido:"./wav-piano-sound/wav/f1s.wav", tono: 'true'},
    {nota: 'LA',sonido:"./wav-piano-sound/wav/g1.wav", tono:'false'},
    {nota: 'LA#',sonido:"./wav-piano-sound/wav/g1s.wav", tono: 'true'},
    {nota: 'SI',sonido:"./wav-piano-sound/wav/a1.wav", tono: 'false'},
];


    let sonido = document.getElementById('piano');

    for (let index = 0; index < notasmusicales.length; index++) {
        

    ;
       
       
        ;
        
    }

function asociateAndPlayNotes() {
    let player = document.getElementById('player');

    document.querySelectorAll('section').forEach(element =>){
        element.onclick =function(){
            player.src = this.getAttri
        }
    }
    
}