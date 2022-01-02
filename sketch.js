var brickImage , brickGroup;
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImage=loadImage("images/iron.png");
  brickImage=loadImage("images/stone.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg)
  bg.scale=2
  bg.velocityY=-5

  iron=createSprite(200,585,20,20)
  iron.addImage(ironImage)
  iron.scale=0.3
  ground=createSprite(200,585,900,10)
ground.visible=false
  
  
 
}

function draw() {
  
  if(bg.y<225){
    bg.y=bg.width/4;
  }
  if(keyDown("left"))
  iron.x -= 4
  if(keyDown("right"))
  iron.x += 4
  if(keyDown("space"))
  iron.velocityY=-12
  iron.velocityY  +=0.5
  iron.collide(ground)
    
    drawSprites();
   
}
function generateBricks(){
  if (frameCount%70 === 0) {
      var brick = createSprite(1200,120,40,10);
      brick.X=random(50,450);
      brick.addImage(brickImage);
      brick.scale=0.5;
      brick.velocityY=-5;

      brick.lifetime=250;
      brickGroup.add(brick);
  }
}

