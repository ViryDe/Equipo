function queenProblem(size, first){
    //Fabricamos el tablero
var mesh = new Array(size);
    for(var i=0; i<size; i++){
      mesh[i] = new Array(size);
      mesh[i].fill(NaN);
    }
    //Viri: funcion itera por las posiciones y buscar que el lugar este disponible
function Encontrar(mesh,dato2){
        let buscarX =dato2[0][0];
        let buscarY = dato2[0][1];
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
Encontrar(mesh,[1,3]);
    console.log(mesh);

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
                    //console.log(mesh);   
                }
            }
        }
    }

       
//Marlon: Iterando en las posiciones para encontrar la reina
function ponerReina(position, mesh){
        if(Encontrar(mesh, position)){
        mesh[position[0]][position[1]] = 1;
        console.log(mesh);
        mesh = llenarCeros([position, mesh]);
        console.log(mesh);
        //return [];
        }
        
        }
        ponerReina(first, mesh)

}
   
   
  console.log(queenProblem(8,[1,5]));