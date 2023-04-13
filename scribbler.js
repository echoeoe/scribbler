//event listeners - mousedown, mousemove, mouseup
document.getElementById('canvas').addEventListener("mousedown", pendown);
document.getElementById('canvas').addEventListener("mousemove", draw);
document.getElementById('canvas').addEventListener("mouseup", penup);
var draw = false;

//set white beneath canvas
ctx = canvas.getContext("2d");
ctx.globalCompositeOperation = 'destination-under';
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function getPos(event){
    const rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left; //get coordinates of mouse on canvas
    var y = event.clientY - rect.top;
    return [x, y];
}

function pendown(event){
    ctx = canvas.getContext('2d'); //get canvas context, get mouse location
    var pos = getPos(event);
    ctx.moveTo(pos[0], pos[1]); //position cursor to current location  
    ctx.beginPath(); //start path 
    draw = true; //pendown flag used in draw()
    ctx.strokeStyle = document.getElementById('color').value;
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
    link.setAttribute('download', 'image.jpg');
    link.setAttribute('href', canvas.toDataURL("image/png"));
    link.click();
}

// // color selection
// document.getElementById('color').addEventListener('change', setColor);

// function setColor(){
//     console.log(document.getElementById('color').value);
//     color = document.getElementById('color').value;
// }

