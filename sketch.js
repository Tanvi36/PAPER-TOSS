
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObj
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj = new paper(100,250,70,70);
	textSize(30);
  fill("black")
  text("Press space to re-throw",width/2,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObj.display();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.position,{x:20,y:-24})
	}
}
function keyP(){
	if(keyDown("space")){
		Matter.Body.setPosition(ob1.body,{x:200,y:607})
	}
}

