






function funcSubmit(){
  var value = document.getElementById('username').value;
switch(value){
case 'UserA':document.getElementById("row8");
}
}















function deleteRow(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById("Table").deleteRow(i);
}

function insRow() {
    var x = document.getElementById("Table");
    var i;
    for(i=0; i<=1; i++)
    {
        var new_row = x.rows[i].cloneNode(true);
    }
    
    var len = x.rows.length;
    new_row.cells[0].innerHTML = len;
    var j;
    for(j=1; j<=3; j++){
        var inp = new_row.cells[j].getElementsByTagName("input")[0];
        console.log
        inp.id += len;
        inp.value = '';
    }
    x.appendChild(new_row);
}