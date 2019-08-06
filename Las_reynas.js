function queenProblem(size, first){
    //Fabricamos el tablero
var mesh = new Array(size);
    for(var i=0; i<size; i++){
      mesh[i] = new Array(size);
      mesh[i].fill(3);
    }
    //Viri: funcion itera por las posiciones y buscar que el lugar este disponible
function Encontrar(mesh,dato2){
        let buscarX =dato2[0];
        let buscarY = dato2[1];
        for (i=0;i<size;i++) {
        for(let j=0; j<size; j++){
            if(mesh[i][j] === 3 && i === buscarX && j === buscarY){
                return true;
            }else if(mesh[i][j]==0 && i === buscarX && j === buscarY ){
                return false;
             
            }
            
        }
    }
    }
    //Sergio: funcion que posiciona 0 por donde pasa la reina
function llenarCeros(arry) {
        x = arry[0][0];
        y = arry[0][1];
        for (let i = 0; i < arry[1].length; i++) {
            for (let ii = 0; ii < arry[1].length; ii++) {
                if(arry[1][i][ii] == 1){
                    for (let index = 0; index < arry[1][i].length; index++) {
                        if(arry[1][x][index] == 1){
                            continue;
                        }else{
                            arry[1][x][index] = 0;
                        }  
                    }
                    for (let index = 0; index < arry[1][i].length; index++) {
                        if(arry[1][index][y] == 1){
                            continue;
                        }else{
                            arry[1][index][y] = 0;
                        }
                    }
                    // veretical derecha - abajo
                    for (x,y; y < arry[1][i].length && x < arry[1][i].length; x++,y++) {
                        if(arry[1][x][y] == 1){
                            continue;
                        }else{
                            arry[1][x][y] = 0;
                            // console.log(mesh);
                        }
                    }
                   // console.log(mesh);
                    x = arry[0][0];
                    y = arry[0][1];
                    //diagonal izquierda - arriba
                    for (x,y; x >= 0 && y >=0; x--,y--) {
                        if(arry[1][x][y] == 1){
                            continue;
                        }else{
                            arry[1][x][y] = 0;
                        }  
                    }
                    x = arry[0][0];
                    y = arry[0][1];
                    // vertical derecha y arriba
                    for (x,y; y < arry[1][i].length && x >= 0; x--,y++) {
                        if(arry[1][x][y] == 1){
                            continue;
                        }else{
                            arry[1][x][y] = 0;
                        }
                    }
                    x = arry[0][0];
                    y = arry[0][1];
                    // vertical hacia atras y abajo
                    for (x,y; x < arry[1][i].length && y >= 0; x++,y--) {
                        if(arry[1][x][y] == 1){
                            continue;
                        }else{
                            arry[1][x][y] = 0;
                        }
                    }
                }
            }
        }
        return arry[1];
    }

       
//Marlon: Iterando en las posiciones para encontrar la reina
function ponerReina(position, mesh){
        if(Encontrar(mesh, position)){
        mesh[position[0]][position[1]] = 1;
        //console.log(mesh);
        mesh = llenarCeros([position, mesh]);
        //console.log(mesh);
        //return [];
        }
        // regresa solo pa primera prosicion de la reina, falto seguir el curso para las posiciones vacias
        return mesh;
}
return ponerReina(first, mesh);
}
// ejecucion para probar
console.log(queenProblem(8,[2,6]));





























  