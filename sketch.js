const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gamestate = 0;
var form1;
var riddle1;
var barImage,woodenBackground;
var bottle1,bottle2,bottle2,bottle3;
var slingshot;
var platfrom;
function preload(){
    barImage = loadImage("images/barImage.jpg");
    woodenBackground = loadImage("images/woodenBackground.jpg");
}
function setup(){
    engine = Engine.create();
    world = engine.world;
createCanvas(displayWidth,displayHeight);
form1 = new Form();
riddle1 = new Riddle();
bottle1 = new Bottle2(200,200,50,100);
bottle2 = new Bottle2(180,200,50,100);
bottle3 = new Bottle2(160,200,50,100);
bottle4 = new Bottle(190,150,50,100);
ball = new Ball(500,200,20,20);
slingshot = new SlingShot(ball.body,{x:600,y:200});
platform = new Platform(150,400,150,500)


}
function draw(){
    Engine.update(engine);
background(barImage);
if (gamestate===0){
   // form1.display();
    gamestate=1;
}
if (gamestate===1){
   // riddle1.display();
}
bottle1.display();
bottle2.display();
bottle3.display();
bottle4.display();
ball.display();
slingshot.display();
platfrom.display();
}