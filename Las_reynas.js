function queenProblem(size, first){
    //Fabricamos el tablero
    var mesh = new Array(size);
    for(var i=0; i<size; i++){
      mesh[i] = new Array(size);
      mesh[i].fill(NaN);
    }
  
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
                arry[1][x][y] = 0;
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
                arry[1][x][y] = 0;
                //console.log(mesh);
              }
                          
            }         
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
  
    if(size >= 4 && size <= 20){ 
      if((first[0] < size && first[0] >= 0) || (first[1] < size && first[1] >= 0)){ //Sin errores, se comienza a desarrollar la solucion
        console.log(mesh);  
        ponerReina(first, mesh);
        for(var i=0; i<size; i++){
          for(var j=0; j<size; j++){
            ponerReina([i, i], mesh);
          }
        }
        console.log(mesh);
      } else { //Errores en la primer reina
        console.error('Error: The first queen position is out of the bounds of the mesh');
        mesh = fillZeros(mesh);
        return mesh;
      }
    } else {  //Errores en el tamaño del tablero
        if(size < 4){
          console.error('Error: The size of the mesh is small');
        } else {
          console.error('Error: The size of the mesh is big');
        }
        mesh = fillZeros(mesh);
        return mesh;
    }
}