/*// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
*/



var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

var tecla = {};

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

function desenha(){
  ctx.fillStyle = "white";
  ctx.fillRect(bola.x, bola.y, bola.largura, bola.altura);
  ctx.fillRect(direita.x, direita.y, direita.largura, direita.altura);
  ctx.fillRect(esquerda.x, esquerda.y, esquerda.largura, esquerda.altura);
}

desenha();
