
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var gamestate="sling"
function preload()
{
	tree = loadImage("images/tree.png");
	stoneimg = loadImage("images/stone.png");
	Boy = loadImage("images/boy.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 Tree=createSprite(600,300,100,100)
 Tree.addImage(tree);
 Tree.scale=.5;
 boy=createSprite(200,500,100,100)
 boy.addImage(Boy);
 boy.scale=.1;
 mango = new Mango(450, 300, 80, 80);
 mango1 = new Mango(500, 300, 80, 80);
 
 mango2 = new Mango(600, 300, 80, 80);
 mango3 = new Mango(400, 300, 80, 80);
 

 mango4 = new Mango(450, 100, 80, 80);
 mango5 = new Mango(360, 300, 80, 80);
 

 mango6 = new Mango(700, 300, 80, 80);
 mango7 = new Mango(350, 200, 80, 80);
 

 mango8 = new Mango(750, 300, 80, 80);
 mango9 = new Mango(350, 100, 80, 80);
 stone= new Stone(200,400, 80, 80);
 rope = new Rope(stone.body, { x:200, y: 500 });
 






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();  
  mango9.display();
 stone.display();
 rope.display()
 

  drawSprites();
 
}
function mouseDragged(){
  if(gamestate!=="launched"){
    Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }


}
function mouseReleased(){
rope.fly()

gamestate="launched"
}

