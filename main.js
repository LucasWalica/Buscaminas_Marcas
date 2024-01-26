// cargando el mapa
document.addEventListener('DOMContentLoaded', function() {    
    // valores del mapa
    const mapa = [];
    let minasJuego = 0;
    let vidasJugador = 10;

    function loadMapValues(){

        for(let i=0; i<10; i++){
            let row = [];
            for(let j=0; j<10; j++){
                let content = Math.round(Math.random()*3);
                if(content===1){minasJuego++;}
                row.push(content);
            }
            mapa.push(row);
        }
    }
    loadMapValues();

    console.log(mapa);


    let countMinas =50;
    let countMinasRow = 5;
    var grid = document.querySelector('.grid');

    console.log("Minas juego: ",minasJuego)

    // cargado el grid con elementos y clases 0 y 1
    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            let block = document.createElement('div');
            block.classList.add('block');
            
            if(mapa[i][j]==1 && countMinas>0 && countMinasRow>0){
                block.classList.add('mina');
                countMinas--; 
                countMinasRow--;
            }
            else if(mapa[i][j]==0 ||  mapa[i][j]==2 || mapa[i][j] ==3 ||countMinas==0 || countMinasRow==0){
                block.classList.add('noMina');
            }
            // funcion de click
            block.addEventListener('click', function(){
                click(block, i, j);
            });

            grid.append(block);
        }
        countMinasRow=3;

    }
    let minas_div = document.querySelector('#minas_count');
    minas_div.innerHTML = minasJuego;
    let vidas = document.querySelector('#vidasRestas');
    vidas.innerHTML = vidasJugador;


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
            alert("mina");
        }else if(block.classList.contains('noMina')){
            let minasCercanas = contar(i, j);
            block.innerHTML=minasCercanas;
        }
    }

    // si clase 1=> Al pulsar mostrar mina y quitar una vida
    // si clase 0=> Al pulsar banderita y mostrar numeros?

});

