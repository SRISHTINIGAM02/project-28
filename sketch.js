
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Tree,TreeImage;
var Ground;
var boy,Boy;
var Stone,stone;

function preload()
{
 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   Tree = createSprite(650,634,22,650);
  
   Ground = createSprite(390,690,800,10);
   
   boy = createSprite(225,650,40,220);

   Stone = createSprite(190,600,10,10);

	Engine.run(engine);
  
}


function draw() {
  background("white");
  rectMode(CENTER);
  background(0);
  Tree.display();
  Ground.display();
  boy.display();
  Stone.display();
  drawSprites();
 
}



