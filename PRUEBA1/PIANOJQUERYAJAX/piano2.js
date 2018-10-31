 $.ajax({
        url: 'http://www.mocky.io/v2/5bd887573100007738474efe',
    }).done(function (dataNotas) {
        console.log(dataNotas);
        generateStructure(dataNotas, 'piano');
        })

function generateStructure(params) {
    
}
