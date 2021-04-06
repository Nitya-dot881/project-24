
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new PAPER(56,56,55,55)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  Engine.update(engine);
  paper.display()

  drawSprites();
 
}



