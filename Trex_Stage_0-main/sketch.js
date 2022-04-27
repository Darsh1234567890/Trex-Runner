
var trex ,trex_running; 
var edges
var ground ,ground_img
var invisGround

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png") 
  ground_img = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,400);
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",ground_img);
  ground.x=ground.width/2;
  
  invisGround = createSprite(200,190,400,10)
  invisGround.visible = false

}

function draw(){
  background("white");
  console.log(trex.y)
  ground.velocityX = -2;
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  
  if (keyDown("space") && (trex.collide(ground))){
    trex.velocityY = -10;
    
  }       
  trex.velocityY += 0.5;
  trex.collide(invisGround);
  drawSprites();
}
