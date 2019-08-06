function queenProblem(size, first){
    //Fabricamos el tablero
var mesh = new Array(size);
    for(var i=0; i<size; i++){
      mesh[i] = new Array(size);
      mesh[i].fill(NaN);
    }
    //console.log(mesh);
    
    //Viri: funcion itera por las posiciones y buscar que el lugar este disponible
function Encontrar(mesh,dato2){
        let buscarX =dato2[0];
        let buscarY = dato2[1];
        for (i=0;i<size;i++) {
        for(let j=0; j<size; j++){
            if(typeof mesh[i][j] === 'number'&& i === buscarX && j === buscarY){
                return true;
            }else if(mesh[i][j]==0 && i === buscarX && j === buscarY ){
                return false;
             
            }
            
        }
    }
    }
   //mesh[0][1] = 0;
//Encontrar(mesh,[1,3]);
//    console.log(mesh);

    //Sergio: funcion que posiciona 0 por donde pasa la reina
function llenarCeros(arry) {
        x = arry[0][0];
        y = arry[0][1];
        for (let i = 0; i < arry[1].length; i++) {
            for (let ii = 0; ii < arry[1].length; ii++) {
                if(arry[1][i][ii] == 1){
                    //console.log("te encontre", arry[1][i][ii]);
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
                            arry[1][x][y] = 5;
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
                            arry[1][x][y] = 2;
                            //console.log(mesh);
                        }
                        
                    }
                   // console.log(mesh);
                    x = arry[0][0];
                    y = arry[0][1];

                    // vertical derecha y arriba
                    for (x,y; y < arry[1][i].length && x >= 0; x--,y++) {
                        if(arry[1][x][y] == 1){
                            continue;
                        }else{
                            arry[1][x][y] = 3;
                            //console.log(mesh);
                        }
                        
                    }
                    //console.log(mesh);
                    x = arry[0][0];
                    y = arry[0][1];


                    // vertical hacia atras y abajo
                    for (x,y; x < arry[1][i].length && y >= 0; x++,y--) {
                        if(arry[1][x][y] == 1){
                            continue;
                        }else{
                            arry[1][x][y] = 4;
                            //console.log(mesh);
                        }
                        
                    }
                    console.log(mesh);
                    
                }
            }
        }
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
        
        }
        ponerReina(first, mesh)



}
   
console.log(queenProblem(8,[0,0]));
console.log(queenProblem(8,[0,1]));
console.log(queenProblem(8,[0,2]));
console.log(queenProblem(8,[0,3]));
console.log(queenProblem(8,[0,4]));
console.log(queenProblem(8,[0,5]));
console.log(queenProblem(8,[0,6]));
console.log(queenProblem(8,[0,7]));
  console.log(queenProblem(8,[1,1]));
  console.log(queenProblem(8,[1,2]));
  console.log(queenProblem(8,[1,3]));
  console.log(queenProblem(8,[1,4]));
  console.log(queenProblem(8,[1,5]));
  console.log(queenProblem(8,[1,6]));
  console.log(queenProblem(8,[1,7]));
  console.log(queenProblem(8,[2,1]));
  console.log(queenProblem(8,[2,2]));
  console.log(queenProblem(8,[2,3]));
  console.log(queenProblem(8,[2,4]));
  console.log(queenProblem(8,[2,5]));
  console.log(queenProblem(8,[2,6]));
  console.log(queenProblem(8,[2,7]));
  console.log(queenProblem(8,[3,1]));
  console.log(queenProblem(8,[3,2]));
  console.log(queenProblem(8,[3,3]));
  console.log(queenProblem(8,[3,4]));
  console.log(queenProblem(8,[3,5]));
  console.log(queenProblem(8,[3,6]));
  console.log(queenProblem(8,[3,7]));
  console.log(queenProblem(8,[4,1]));
  console.log(queenProblem(8,[4,2]));
  console.log(queenProblem(8,[4,3]));
  console.log(queenProblem(8,[4,4]));
  console.log(queenProblem(8,[4,5]));
  console.log(queenProblem(8,[4,6]));
  console.log(queenProblem(8,[4,7]));
  console.log(queenProblem(8,[5,1]));
  console.log(queenProblem(8,[5,2]));
  console.log(queenProblem(8,[5,3]));
  console.log(queenProblem(8,[5,4]));
  console.log(queenProblem(8,[5,5]));
  console.log(queenProblem(8,[5,6]));
  console.log(queenProblem(8,[5,7]));
  console.log(queenProblem(8,[6,1]));
  console.log(queenProblem(8,[6,2]));
  console.log(queenProblem(8,[6,3]));
  console.log(queenProblem(8,[6,4]));
  console.log(queenProblem(8,[6,5]));
  console.log(queenProblem(8,[6,6]));
  console.log(queenProblem(8,[6,7]));
  console.log(queenProblem(8,[7,1]));
  console.log(queenProblem(8,[7,2]));
  console.log(queenProblem(8,[7,3]));
  console.log(queenProblem(8,[7,4]));
  console.log(queenProblem(8,[7,5]));
  console.log(queenProblem(8,[7,6]));
  console.log(queenProblem(8,[7,7]));































  