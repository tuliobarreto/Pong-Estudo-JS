/*// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
*/



var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

var teclas = {};

var bola = {
  x: canvas.width / 2 - 15,
  y: canvas.height / 2 - 15,
  altura: 30,
  largura: 30,
  dirx: -1,
  diry: 1,
  mod: 0,
  speed: 50
};

var direita = {
  x: 10,
  y: canvas.height / 2 - 60,
  altura: 120,
  largura: 30,
  score: 0,
  speed: 15
};

var esquerda ={
  x: 560,
  y: canvas.height / 2 - 60,
  altura: 120,
  largura: 30,
  score: 0,
  speed: 15
};

document.addEventListener("keydown", function(e){
  teclas[e.keyCode] = true;
  //alert(e.keyCode);
}, false);

document.addEventListener("keyup", function(e){
  delete teclas[e.keyCode];
}, false );

function moverbloco(){
  if(87 in teclas && esquerda.y > 0)
    esquerda.y -= esquerda.speed;

  if(83 in teclas && esquerda.y + esquerda.altura < canvas.height)
    esquerda.y += esquerda.speed;
  
  if (38 in teclas && direita.y >0)
    direita.y -= direita.speed;

  if(40 in teclas && direita.y + direita,alert < canvas.height)
    direita.y -= direita.speed;
};

function desenha(){

  ctx.clearRect(0,0,canvas.width, canvas.height);
  moverbloco();

  ctx.fillStyle = "white";
  ctx.fillRect(bola.x, bola.y, bola.largura, bola.altura);
  ctx.fillRect(direita.x, direita.y, direita.largura, direita.altura);
  ctx.fillRect(esquerda.x, esquerda.y, esquerda.largura, esquerda.altura);

  ctx.font = "20px Arial";
  ctx.fillText("Player 1:" + esquerda.score, 50, 30);
  ctx.fillText("Player 2:" + direita.score, canvas.width -150, 30);
}

desenha();
