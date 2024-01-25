// cargando el mapa
document.addEventListener('DOMContentLoaded', function() {
    
    
    // valores del mapa
    const mapa = [];

    function loadMapValues(){

        for(let i=0; i<10; i++){
            let row = [];
            for(let j=0; j<10; j++){
                let content = Math.round(Math.random());
                row.push(content);
            }
            mapa.push(row);
        }
    }
    loadMapValues();

    console.log(mapa);


    var grid = document.querySelector('.grid');

    // cargado el grid con elementos y clases 0 y 1
    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            let block = document.createElement('div');
            block.classList.add('block');
            if(mapa[i][j]==1){block.classList.add('1')}
            else if(mapa[i][j]==0){block.classList.add('0')}
            grid.append(block);

        }
    }

    // si clase 1=> Al pulsar mostrar mina y quitar una vida
    // si clase 0=> Al pulsar banderita y mostrar numeros?


});

