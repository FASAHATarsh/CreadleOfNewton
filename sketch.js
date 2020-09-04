
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var constrainedbobs;
var log;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var options = {
		bodyA: log.body,
		bodyB: constrainedbobs.body,
		stiffness: 1
		length: 10,
	}
	var chain = Constraint.create(options);
	world.add(world, chain);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  constrainedbobs.display();
 
}



