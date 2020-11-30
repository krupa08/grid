var cols = prompt("How many columns per side?");
var rows = prompt("How many rows per side?");

	var newGrid = document.createElement('div');
	/**newGrid.className='grid';
    newGrid.id='grid1';**/
    //var text = document.createTextNode('my code');
    //newGrid.appendChild(text);

    var ele = document.getElementById('container');
    ele.appendChild(newGrid);
	for(var i = 0; i< cols;i++ ){
		for(var j = 0; j<rows; j++){
		 $('#container').append("<div class='grid'></div>")
		}
	};
	$(".grid").width(310/i);
    $(".grid").height(310/j);



var container = document.querySelector('.container2');
console.log(newGrid);
console.log(container);


//create grid
/**
var newGrid = document.createElement('div');


newGrid.className='grid';
newGrid.id='grid1';
newGrid.style.height = '50px';
newGrid.style.width = '50px';
var x,y;
console.log(newGrid);
**/
/**
function make2DArray(cols, rows){
	var arr = new Array(cols);
	for(var i=0;i<arr.length;i++){
		arr[i] = new Array(rows);
	}

	return arr;
}

function fillColors(){
	var lettersOfColors = '0123456789ABCDEF';
	var color = '#';
	for(var i=0; i<6;i++){
		color + = lettersOfColors[Math.floor(Math.random()*16)];
	}

	return color;
}


for(var x = 0; x<cols; x++){
	for(var y = 0; y<row; y++){
		//var text = document.createTextNode('hello');
	}
}

**/
    
