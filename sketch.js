//I can't get the apply force to work properly as all of them go to the right nd don't move at all, i even put the apply force to 1000 and it still barely moved, but if i put is static to true for the bob then its normal but then the apply force doesn't move at all.

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new roof(410,150,425,50)

	bobObject1 = new bob(240,450,40);
	bobObject2 = new bob(325,450,40);
	bobObject3 = new bob(410,450,40);
	bobObject4 = new bob(495,450,40);
	bobObject5 = new bob(580,450,40);
	var bobDiameter = 85

	rope1 = new rope(bobObject1.body,roofObject.body,bobObject1.body.position.x,150)
	rope2 = new rope(bobObject2.body,roofObject.body,bobObject2.body.position.x,150)
	rope3 = new rope(bobObject3.body,roofObject.body,bobObject3.body.position.x,150)
	rope4 = new rope(bobObject4.body,roofObject.body,bobObject4.body.position.x,150)
	rope5 = new rope(bobObject5.body,roofObject.body,bobObject5.body.position.x,150)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roofObject.display()


  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()




  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 38) 
	{
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:50})

	}
}
