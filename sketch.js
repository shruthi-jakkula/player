var tower,towerImg;
var door,doorImg,doorsGroup;
var climber,climberImg,climbersGroup;
var ghost,ghostImg;
var invisibleBlockGroup,invisibleBlock;
var gameState="play";

function preload()
{
  towerImg=loadImage("tower.png");
  
  
  doorImg=loadImage("door.png");
  
  
  climberImg=loadImage("climber.png");
  
  ghostImg=loadImage("ghost-standing.png");
  
  spookySound=loadSound("spooky.wav");
}





function setup()
{
  createCanvas(600,600);
  
  //spookySound.loop();
  
  tower= createSprite(300,300);
  tower.addImage(towerImg);
  tower.velocityY=2;
  
  doorsGroup=new Group();
  
  climbersGroup=new Group();
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage(ghostImg);
  ghost.scale=0.3;
  
  invisibleBlockGroup=new Group();
  
}

function draw()
{
  
  background(0);
  
  if(gameState==="play")
  {
  
  if(tower.y > 600)
    {
      tower.y=300;
    }
  
  if(keyDown("left_arrow"))
    {
      ghost.x=ghost.x-3;
    }
  
  if(keyDown("right_arrow"))
    {
      ghost.x=ghost.x+3;
    }
  
   if(keyDown("space"))
    {
      ghost.velocityY=-5;
    }
  
  if(climbersGroup.isTouching(ghost))
    {
      ghost.velocityY=0;
    }
  
  if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600)
    {
      ghost.destroy();
      gameState="end";
    }
  
  
  
  ghost.velocityY=ghost.velocityY+0.8;
  
  
  spawnDoor();
  
  drawSprites();
  }
  
  if(gameState==="end")
    {
      stroke("red");
      fill("yellow");
      textSize(30);
      text("GAME OVER",230,250);
    }
  
}


function spawnDoor()
{
  if(frameCount%240===0)
    {
  door = createSprite(200,50);
  door.addImage(doorImg);
  door.x=Math.round(random(120,400));    
  door.velocityY=1; 
  door.lifetime=800;
  doorsGroup.add(door); 
      
  
  climber=createSprite(200,100);
  climber.addImage(climberImg);
  climber.x=door.x;
  climber.velocityY=1;
  climber.lifetime=800;
  climbersGroup.add(climber);    
      
  ghost.depth=door.depth;
  ghost.depth+=1;
      
  invisibleBlock=createSprite(200,100 );
  invisibleBlock.width=climber.widthl
  invisibleBlock.height=2;
  invisibleBlock.x=door.x;
  invisibleBlock.velocityY=1;
  invisibleBlock.debug=true;
  invisibleBlockGroup.add(invisibleBlock);    
      
      
    }
}






