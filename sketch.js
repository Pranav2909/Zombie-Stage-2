var bg,bgImg;
var player;
var shooterImg;
var shooter_shooting;
var zombie,zombieImg;
var zombieGroup;
var heart1,heart1Img;
var heart2,heart2Img;
var heart3,heart3Img;

function preload(){
bgImg = loadImage("images/bg.jpeg");
shooterImg = loadImage("images/shooter_2.png");
shooter_shooting = loadImage("images/shooter_3.png");
zombieImg = loadImage("images/zombie.png");
heart1Img = loadImage("images/heart_1.png");
heart2Img = loadImage("images/heart_2.png");
heart3Img = loadImage("images/heart_3.png");
}

function setup(){

createCanvas(windowWidth,windowHeight);

bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgImg);
bg.scale = 1.1;

player = createSprite(displayWidth-1150,displayHeight-300,50,50);
player.addImage(shooterImg);
player.scale = 0.3;
player.debug = true;
player.setCollider("rectangle",0,0,300,300);

heart1 = createSprite(displayWidth-150,40,20,20);
heart1.addImage(heart1Img);
heart1.scale = 0.4;
heart1.visible = false;

heart2 = createSprite(displayWidth-100,40,20,20);
heart2.addImage(heart2Img);
heart2.scale = 0.4;
heart2.visible = false;

heart3 = createSprite(displayWidth-150,40,20,20);
heart3.addImage(heart3Img);
heart3.scale = 0.4;


zombieGroup = new Group();
}

function draw(){
background("black");

if(keyDown("UP_ARROW") || touches.lenght>0){
player.y = player.y-30;
}

if(keyDown("DOWN_ARROW") || touches.lenght>0){
player.y = player.y+30;
}

if(keyDown("RIGHT_ARROW") || touches.width>0){
player.x = player.x+30;
}

if(keyDown("LEFT_ARROW") || touches.width>0){
player.x = player.x-30;
}
 
if(keyWentDown("space")){
player.addImage(shooter_shooting);
}

else if(keyWentUp("space")){
player.addImage(shooterImg)
}

enemy();

if(zombieGroup.isTouching(player)){
for(var i = 0; i<zombieGroup.length;i++){
if(zombieGroup[i].isTouching(player)){
zombieGroup[i].destroy();
}
}
}

drawSprites();
}

function enemy(){
if(frameCount%50 === 0){
zombie = createSprite(random(500,1100),random(100,500),40,40);
zombie.addImage(zombieImg);
zombie.scale = 0.15;
zombie.velocityX = -3
zombie.debug = true;
zombie.setCollider("rectangle",0,0,400,400);
zombieGroup.add(zombie);
zombie.lifetime = 400;
}
}
