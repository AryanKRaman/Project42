var iss,spacecraft,hasDocked=false;

function preload(){
  bg=loadImage("spacebg.jpg");
  issImage=loadImage("iss.png");
  space1=loadImage("spacecraft1.png");
  space2=loadImage("spacecraft2.png");
  space3=loadImage("spacecraft3.png");
  space4=loadImage("spacecraft4.png");
}


function setup() {
  createCanvas(600,350);
  spacecraft=createSprite(285, 240, 100, 100);
  spacecraft.addImage(space1);
  spacecraft.scale=0.15;

  iss=createSprite(330,130,100,100);
  iss.addImage(issImage);
  iss.scale=0.25;
}

function draw() {
  background(bg); 
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
   if(keyDown("UP_ARROW")){
     spacecraft.y-=2;
   }
   if(keyDown("RIGHT_ARROW")){
    spacecraft.x+=1;
    spacecraft.addImage(space3);
  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.x-=1;
    spacecraft.addImage(space4);
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.x-=1;
    spacecraft.addImage(space2);
  }
  } 
  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
   hasDocked=true;
   textSize(25);
   fill("white");
   text("Docking Successfull",200,300);
  }
  drawSprites()
}