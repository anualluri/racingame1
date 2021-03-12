var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var car1, car2, car3, car4;
var car1IMG, car2IMG, car3IMG, car4IMG;
var cars=[];
var trackL, trackS, ground;

function preload(){
  car1IMG=loadImage("sprites/car1.png");
  car2IMG=loadImage("sprites/car2.png");
  car3IMG=loadImage("sprites/car3.png");
  car4IMG=loadImage("sprites/car4.png");

  trackL=loadImage("sprites/track.jpg");
  trackS=loadImage("sprites/track.png");
  ground=loadImage("sprites/ground.png");
}

function setup(){

  
  car1=createSprite(100, 200);
  car2=createSprite(300, 200);
  car3=createSprite(500, 200);
  car4=createSprite(700, 200);

  car1.addImage(car1IMG)
  car2.addImage(car2IMG)
  car3.addImage(car3IMG)
  car4.addImage(car4IMG)

  cars=[car1, car2, car3, car4];

  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}




function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }

  drawSprites();
}
