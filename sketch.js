//Author : Mihishkaa Sinha
//create a game that helps the people now how to throw the paper into the dustbin by pressing on the upper arrow key.

//create all the constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//create all the variables
var dustbin1, paperObject,groundObject;
var world;

//create the function setup
function setup() 
{
	///create a canvas
	createCanvas(1270, 670);

	rectMode(CENTER);

	//create the Engine and add it to world
	engine = Engine.create();
	world = engine.world;
	
	//create a paper object
	paperObject = new Paper(400, 390, 40);

	//create a ground
	groundObject = new Ground(width/2,560,width,20);

	//create the dustbin
	dustbin1 = new Dustbin(1200, 490, 20, 120);
	dustbin2 = new Dustbin(1000, 490, 20, 120);
	dustbin3 = new Dustbin(1100, 543, 200, 15);

	//running the Engine
	Engine.run(engine);
  
}

//create the function draw
function draw() 
{

  rectMode(CENTER);

  //set a background colour
  background(253, 226, 135);
 
  //display all the objects
  paperObject.display();
  groundObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

}

//create the function keyPressed()
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x : 110, y : -50});

	}
}