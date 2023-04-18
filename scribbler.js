//event listeners - mousedown, mousemove, mouseup
document.getElementById('canvas').addEventListener("mousedown", pendown);
document.getElementById('canvas').addEventListener("mousemove", draw);
document.getElementById('canvas').addEventListener("mouseup", penup);
var draw = false;
var erase = false;

//clear, set white beneath canvas
clear();

function getPos(event){
    var x = event.offsetX; 
    var y = event.offsetY;
    return [x, y];
}

function pendown(event){
    ctx = canvas.getContext('2d'); //get canvas context, get mouse location
    var pos = getPos(event);
    ctx.moveTo(pos[0], pos[1]); //position cursor to current location  
    ctx.beginPath(); //start path 
    draw = true; //pendown flag used in draw()
    if (erase == false){ //using pen
        ctx.strokeStyle = document.getElementById('color').value;
        ctx.lineWidth = document.getElementById('thickness').value;
    }
    else{ //using eraser
        ctx.strokeStyle = "white";
        ctx.lineWidth = "35";
    }   
}

function draw(event){
    if (draw == true){ //if pen is down
        ctx = canvas.getContext('2d'); //get cursor location
        var pos = getPos(event);
        ctx.lineTo(pos[0], pos[1]); //move path here and create stroke
        ctx.stroke();
    }
}

function penup(event){ 
    //set draw flag
    draw = false;
}

//download image
document.getElementById('downloadBtn').addEventListener("click", download);

function download(){
    var link = document.getElementById('link');
    link.setAttribute('download', 'image.png');
    link.setAttribute('href', canvas.toDataURL("image/png"));
    link.click();
}

//clearing button 
document.getElementById('clear').addEventListener("click", clear);

function clear(){
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
    ctx.globalCompositeOperation = 'destination-under';
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

//eraser = white thick pen
document.getElementById('eraser').addEventListener("click", eraser);

function eraser(){
    //toggle eraser boolean
    if(erase == false){
        erase = true;
    }
    else{
        erase = false;
    }
}
