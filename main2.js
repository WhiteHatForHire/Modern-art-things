var canvas, canvasContext;
var ballX = 75;
var ballY = 75;
var ballSpeedX = 50;
var ballSpeedY = 20;
var color;
var size;

var blip1 = new Audio("blips/1.mp3");
var blip2 = new Audio('blips/2.mp3');
var blip3 = new Audio('blips/3.mp3');
var blip4 = new Audio('blips/4.mp3');
var blip5 = new Audio('blips/5.mp3');
var blip6 = new Audio('blips/6.mp3');
var blip7 = new Audio('blips/7.mp3');
var blip8 = new Audio('blips/8.mp3');
var blip9 = new Audio('blips/9.mp3');
var blip10 = new Audio('blips/10.mp3');



window.onload = function () {
canvas = document.getElementById('gameCanvas');
canvasContext = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var framesPerSecond = 100;
setInterval(updateAll, 1000/framesPerSecond);
}


function updateAll() {
    // blip1.play();
    // console.log(blip1);
    size = Math.floor(Math.random() * 200);
    playSound(size);
    // console.log(size);
    color = 'rgba('+ Math.floor(Math.random() * 255) + "," +  Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';  
    // ballX+= ballSpeedX * Math.floor(Math.random() * 3);
    ballX+= ballSpeedX;
    // ballY+= ballSpeedY * Math.floor(Math.random() * 3);
    ballY+= ballSpeedY;

    if(ballX > canvas.width) {
        ballSpeedX *= -1;
    }
    if(ballX < 0) {
        ballSpeedX *= -1;
    }
    if(ballY > canvas.height) {
        ballSpeedY *= -1;
    }
    if(ballY < 0) {
        ballSpeedY *= -1;
    }

    // canvasContext.fillStyle = 'black';
    // canvasContext.fillRect(0,0, canvas.width, canvas.height);
    // console.log(color);

    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(ballX,ballY, size, 0, Math.PI*2, true);
    canvasContext.fill();
}

function playSound(size) {
    var size = size;
    console.log(size);
    var noteNum = Math.floor(size) + 1;
    var noteName = 'blips/' + noteNum + '.mp3';
    var audio = new Audio(noteName);
    audio.play();
    console.log(audio);
}