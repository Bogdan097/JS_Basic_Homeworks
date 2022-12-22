


/*
Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :)
*/

 
function addTable(  ) {

   
    let myTable = document.getElementById("tableId");
    let row = document.getElementById('rows').value;
    let col = document.getElementById('cols').value;


    console.log(row+"   "+col);


    for (let rows=0; rows<row; rows++){
        let tr = document.createElement('tr');
   
       
       for (let cols=0; cols<col; cols++){
        let td = document.createElement('td');
        let text = document.createTextNode("Cell " + rows + "," + cols);
           td.appendChild(text);
           tr.appendChild(td);
        
       
       }
      myTable.appendChild(tr);
    }

    
}

document.getElementById('create').addEventListener('click' ,addTable);

//ovde sakav negativno scenario no nesto ne mi bese dobra izgleda logikata...





// function addTable() {
      
//       let myTable = document.getElementById("tab");
//     let row = document.getElementById('rows').value;
//     let col = document.getElementById('cols').value;

    
      
//     for (var i=0; i<3; i++){
//        var tr = document.createElement('TR');
       
       
//        for (var j=0; j<4; j++){
//            var td = document.createElement('TD');
//            var text = document.createTextNode("Cell " + j );
//            tr.appendChild(td);
//            td.appendChild(text);
           
//        }
//        myTable.appendChild(tr);
//     }

// }

// document.getElementById('create').addEventListener('click' ,addTable);

//here we made the same table only with fixed i and j ,we cannot input more than 3 rows and 4 columns,up we can because with rows<row we made it infinite for inputs/>
