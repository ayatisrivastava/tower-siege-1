const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;

var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var ball;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  //level 1
  block1 = new Block(450,295,50,50);
  block2 = new Block(500,295,50,50);
  block3 = new Block(550,295,50,50);
  block4 = new Block(600,295,50,50);
  //level 2
  block5 = new Block(475,245,50,50);
  block6 = new Block(525,245,50,50);
  block7 = new Block(575,245,50,50);
  //level 3
  block8 = new Block(500,195,50,50);
  block9 = new Block(550,195,50,50);
  //level 4
  block10 = new Block(525,145,50,50);
  ball = new Ball();
  slingshot = new Slingshot(bird.body {x:200, y:50});
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  slingshot.display();
}

function mouseDragged(){
  matter.body.setPosition(ball.body {x: mouseX,y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}