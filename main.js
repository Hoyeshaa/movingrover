canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var roverWidth = 80;
var roverHeight = 100;
var roverx = 10;
var rovery = 10;
var nasapics = ["n1.jpg","n2.jpg","n3.jpg","n4.jpg","mars.jpg"];
var randomno = Math.floor(Math.random()*5);
var marspic = nasapics[randomno];
var roverpic = "rover.png";
function add(){
    backgroundpic = new Image();
    backgroundpic.onload=uploadbackground;
    backgroundpic.src=marspic;
    roverimage = new Image();
    roverimage.onload=uploadrover;
    roverimage.src=roverpic;
}
function uploadbackground(){
    ctx.drawImage(backgroundpic, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(roverimage, roverx, rovery, roverWidth, roverHeight );
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
code=e.keyCode;
if(code=='37'){
   left();
}
if(code=='38'){
    up();
}
if(code=='39'){
    right();
}
if(code=='40'){
    bottom();
}
console.log(code);
}

function left(){
    if(roverx > 0){
        roverx-=10;
        uploadbackground();
        uploadrover();
    }
}

function up(){
    if(rovery > 0){
        rovery-=10;
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if(roverx < 720){
        roverx+=10;
        uploadbackground();
        uploadrover();
    }
}

function bottom(){
    if(rovery < 500){
        rovery+=10;
        uploadbackground();
        uploadrover();
    }
}
