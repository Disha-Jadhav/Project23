var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, groundSprite;
var box1Sprite, box2Sprite, box3Sprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG = loadImage("helicopter.png");

	packageIMG = loadImage("package.png");
}

function setup() 
{
	createCanvas(800, 700);

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	Engine.run(engine);
	Engine.update(engine);
	
		packageSprite = createSprite(width/2, 80, 10, 10);
		packageSprite.addImage(packageIMG)
		packageSprite.scale = 0.2;
		packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
		World.add(world, packageBody);

		box1Sprite = createSprite(400, 660, 200, 20);
		box1body = Bodies.rectangle(400,660, 200, 20, {isStatic:true});
		World.add(world, box1body);

		box2Sprite = createSprite(300, 620, 20, 100);
		box2body = Bodies.rectangle(300, 620, 20, 100, {isStatic:true});
		World.add(world, box2body);

		box3Sprite = createSprite(500, 620, 20, 100);
		box3body = Bodies.rectangle(500, 620, 20, 100, {isStatic:true});
		World.add(world, box3body);

		groundSprite = createSprite(400, 680, 800, 10);
		groundbody = Bodies.rectangle(400, 680, 800, 10, {isStatic:true});
		World.add(world, groundbody);

		helicopterSprite = createSprite(width/2, 200, 10,10);
		helicopterSprite.addImage(helicopterIMG)
		helicopterSprite.scale = 0.6;
}

function draw() 
{
  rectMode(CENTER);

  background(0);

  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 

  box2Sprite.x = box2body.position.x 
  box2Sprite.y = box2body.position.y 

  box3Sprite.x = box3body.position.x 
  box3Sprite.y = box3body.position.y 

  groundSprite.x = groundbody.position.x 
  groundSprite.y = groundbody.position.y 

  box1Sprite.x = box1body.position.x 
  box1Sprite.y = box1body.position.y 

  keyPressed();

  drawSprites();
}

function keyPressed() 
{
 if (keyCode === DOWN_ARROW)
  {
	Matter.Body.setStatic(packageBody,false);
  }
}



