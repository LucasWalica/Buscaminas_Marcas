function obtenerMinas(){
    let inputMinas = document.getElementById('numMinas').value;
    return inputMinas;
}

// cargando el mapa
document.addEventListener('DOMContentLoaded', function() {    
    // valores del mapa
    const mapa = [];
    let minasJuego = 0;
    let vidasJugador = 10;


    // mejorar para que pueda ingresar un numero de minas a generar 
    // y que se generen de una forma equitativa en todo el tablero
    function loadMapValues(){
        
        let countMinas =obtenerMinas(); 
        
        console.log(countMinas);

        for(let i=0; i<10; i++){
            let row = [];
            for(let j=0; j<10; j++){
                
                let content = Math.round(Math.random()*3);

                if(content===1 && countMinas>0){minasJuego++; countMinas--;}
                
                else if(content===1 && countMinas===0){content=0;}

                row.push(content);
            }
            mapa.push(row);
        }
    }

    loadMapValues();
    console.log(mapa);
    // generar grid
    let button = document.getElementById("generate");
    button.addEventListener('click', function(){
        

        var grid = document.querySelector('.grid');
        
        
        
        console.log("Minas juego: ",minasJuego)

        // cargado el grid con elementos y clases 0 y 1
        for(let i=0; i<10; i++){
            for(let j=0; j<10; j++){
                let block = document.createElement('div');
                block.classList.add('block');
                
                if(mapa[i][j]===1){
                    block.classList.add('mina'); 
                }
                else if(mapa[i][j]===0 ||  mapa[i][j]===2 || mapa[i][j]===3){
                    block.classList.add('noMina');
                    
                }
                // funcion de click
                block.addEventListener('click', function(){
                    click(block, i, j);
                });
                // testing
                let test = contar(i, j)
                block.innerHTML=test;
                grid.append(block);
            }
        }
           
        let minas_div = document.querySelector('#minas_count');
        minas_div.innerHTML =  obtenerMinas();

        let vidas = document.querySelector('#vidasRestas');
        vidas.innerHTML = vidasJugador;


    })

    function contar(i,j){
        let count = 0;

        for(let x = Math.max(0, i-1); x<=Math.min(9, i+1); x++){
            for(let y=Math.max(0, j-1); y<=Math.min(9, j+1); y++){
                if(mapa[x][y]===1){
                    count++;
                }
            }
        }
        return count;
    }    
    

    // funcion click
    function click(block, i, j){

        if(block.classList.contains('mina')){
            
            vidasJugador--;
            let vidas = document.querySelector('#vidasRestas');
            vidas.innerHTML = vidasJugador;
        
        }else if(block.classList.contains('noMina')){

            let minasCercanas = contar(i, j);
            block.innerHTML=minasCercanas;

            for(let x = Math.max(0, i-1); x<=Math.min(9, i+1); x++){
                for(let y=Math.max(0, j-1); y<=Math.min(9, j+1); y++){
                    if(mapa[x][y]!=1){
                        // mejorar para colorear los alrededores de blanco
                        block.classList.add('white');
                    }
                }
            }
        }
    }
 

    // si clase 1=> Al pulsar mostrar mina y quitar una vida
    // si clase 0=> Al pulsar banderita y mostrar numeros?

});

