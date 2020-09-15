
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobobject1 = new bob(600,650,40,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobobject1.display();
  drawSprites();
 
}



