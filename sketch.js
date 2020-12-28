var moneyBar=0;
var pesticide,pesticide1,pesticideSpray,pesticideSpray_img,moneyLender,FarmingArea;
var seed1,seed2,seed3,back2,pest;
var sow,Sow_Button;
var next,next_symbol,nxt1,nxt_img;
var gameState=0;
var wheat,wg;
var count=0;
var play,play_img;
var plant;
var pesticideSpray2,pesticideSpray2_img;
var spray,spray_img;

function preload(){
FarmingArea=loadImage("Images/background.png");
back2=loadImage("Images/back2.png");
pest=loadImage("Images/pest.png");
Sow_Button=loadImage("Images/button.png");
next_symbol=loadImage("Images/nxt.png");
pesticide_img=loadImage("Images/pesticide spray.png");
//wg=loadImage("Images/wheat.png");
nxt_img=loadImage("Images/next3.png");
play_img=loadImage("Images/play.png");
pesticide=loadImage("Images/BACK4.png");
plant=loadImage("Images/BACK5.png");
pesticideSpray2_img=loadImage("Images/pesticide spray2.png");
spray_img=loadImage("Images/spray.png")
}
function setup() {
  createCanvas(500,400);

  play=createSprite(200,290);
  play.addImage(play_img);
  play.scale=2;
  
 next= createSprite(350, 300, 50, 50);
 next.addImage(next_symbol);
 next.scale=0.5;
 
 pesticide1=createSprite(150,200,50,60);
 pesticide1.addImage(pesticide_img);
 pesticide1.scale=0.5;
 pesticide1.visible=false;

 sow= createSprite(350,360,10);
 sow.addImage(Sow_Button);
 sow.scale=0.4;

 pesticideSpray2=createSprite(150,200,50,60)
 pesticideSpray2.addImage(pesticideSpray2_img);
 pesticideSpray2.scale=0.5;
 pesticideSpray2.visible=false;
 

 spray=createSprite(350,360);
 spray.addImage(spray_img);
 spray.scale=0.3;
 spray.visible=false; 

 //wheat=createSprite(200,200,10,10);
 //wheat.addImage(wg);
 //wheat.scale=0.1; 

 nxt1=createSprite(350,200,20)
 nxt1.addImage(nxt_img);
 nxt1.scale=0.2;

seed1=new seed(100,350);
seed2=new seed(200,320);
seed3=new seed(300,350);
   
}

function draw() {
 if(gameState===0){
background("black");
textSize(15);
stroke("white");
text("Hello,Welcome to the farming simulator.",200,90) 
text("Press PLAY to procced.",280,200) 
next.visible=false;
sow.visible=false;
nxt1.visible=false;  
 }
if(mousePressedOver(play)) {
  gameState=1;
}
 if(gameState===1){
  background(FarmingArea);
  next.visible=false;
  sow.visible=true; 
  nxt1.visible=false;
  play.visible=false;
 } 

 if(mousePressedOver(sow)){     
 gameState=2; 
 
 }
 if(gameState===2){
   background(FarmingArea)
   console.log(count);
    seed1.display();
    seed2.display();
    seed3.display();
 nxt1.visible=true; 
 sow.visible=false;
 pesticideSpray2.visible=false;
  } 
  if(mousePressedOver(nxt1)){
    gameState=3;
  }
if(gameState===3){
  background(back2);
  textSize(14);
  stroke("white")
  text("Look it's raining!,now the seed will grow ",170,260);
  text("and after sometime it will become a plant",180,290);
  text("click on next to get to the next level",190,330);
  sow.visible=false; 
  next.visible=true;
  nxt1.visible=false;
  pesticideSpray2.visible=false;
} 
if(mousePressedOver(next)){
  gameState=4
  }


if(gameState===4){
background(pesticide);
textSize(15);
fill("white");
text("Now your crops are growned",190,360);
text("but wait these insects are spoiling your crops",200,370);
text("we need pesticide spray so that they will never ruin the crops",180,340)
text("press spray button to spray the pesticide",190,360); 
nxt1.visible=false;
next.visible=false;
spray.visible=true;
pesticide1.visible=true;
pesticideSpray2.visible=false;
}

  
if(gameState===5){
 background(plant);
 textSize(15);
 fill("white");
 text("Good Job",180,340);
 pesticideSpray2.visible=true;
nxt1.visible=false;
pesticide1.visible=false;
}

  drawSprites();
 
}