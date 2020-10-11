
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score,ground;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  monkey=createSprite(60,260);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(300,290,3600,5);
  ground.velocityX=-4;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("white");
  textSize(20);
  text("Survival Time : "+score,100,50);
  
  if (ground.x<0) {
    ground.x=ground.width/2;
  }
 
  if(keyDown("space")) {
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  
  spawnBananas();
  
  spawnObstacles();
  
  if (obstacleGroup.isTouching(monkey)) {
    monkey.VelocityX=0;
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
  } else {
    score=Math.ceil(frameCount/frameRate());
  }
  
  drawSprites();
  
}

function spawnBananas() {
  if (frameCount%80 == 0) {
    var banana = createSprite(600,Math.round(random(120,200)),10,10);     banana.addImage("bananaImage",bananaImage);
    banana.velocityX=-6;
    banana.lifetime=100;
    banana.scale=0.1;
    bananaGroup.add(banana);
  }
}

function spawnObstacles() {
    if (frameCount%300 == 0) {
    var obstacle = createSprite(600,280,10,10);     obstacle.addImage("obstaceImage",obstaceImage);
    obstacle.velocityX=-6;
    obstacle.lifetime=100;
    obstacle.scale=0.1;
    obstacleGroup.add(obstacle);
  }
}