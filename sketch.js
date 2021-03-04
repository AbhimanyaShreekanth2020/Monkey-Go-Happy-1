var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground,bannanaGroup
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(50,340,20,50);
monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  ground=createSprite(200,380,800,20);
  ground.velocityX=-3
  foodGroup=new Group()
  obstacleGroup=new Group()
}


function draw() {
background("lightblue");
  text("SURVIVAL TIME:"+survivalTime,200,50);
  survivalTime=Math.ceil(frameCount/frameRate())
if(ground.x <0){
ground.x=200
}
if(keyDown("space")){
monkey.velocityY=-10
}
monkey.velocityY=monkey.velocityY+0.5
  monkey.collide(ground)
  food();
  obstacles();
drawSprites()
  
}
function food(){
if(frameCount%80===0){
 bannana=createSprite(400,Math.round(random(30,350)),40,10);
  bannana.velocityX=-4
bannana.addImage(bananaImage)
bannana.scale=0.1
bannana.lifetime=100
  foodGroup.add(bannana)
}
}

function obstacles(){
if(frameCount%100===0){
 obstacle=createSprite(400,355,10,40);
  obstacle.velocityX=-4
obstacle.addImage(obstacleImage)
obstacle.scale=0.1
obstacle.lifetime=100
  obstacleGroup.add(obstacle)
  
}
}



