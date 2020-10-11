
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage;
var treeImage;
var gameState = "START";
function preload()
{
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//ground = new Ground();
	stone = new Stone(100,500,25);
	ground = new Ground();
	mango = new Mango(500,300,30);
	mango1 = new Mango(550,275,30);
	mango2 = new Mango(600,150,30);
	mango3 = new Mango(650,250,30);
	mango4 = new Mango(540,400,30);
	mango5 = new Mango(700,275,30)
	launcher = new Launcher(stone.body,{x:140,y:600});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(70, 104, 191);
  Engine.update(engine);

  
  //ground.display();
  image(boyImage,100,540,200,200);
  image(treeImage,420,100,350,600);
  stone.display();
  ground.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  launcher.display();

  detectCollision(stone,mango);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
  drawSprites();
 
}
function mouseDragged(){
	if(gameState==="START"){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	}
}
function mouseReleased(){
	launcher.fly();
	gameState = "LAUNCHED";
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Body.setStatic(lmango.body,false);
	}
}
function keyPressed(){
	
	if(keyCode===32){
		launcher.attach(stone.body)
		gameState = "START";
	}
}



