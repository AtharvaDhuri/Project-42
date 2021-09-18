var iss_img;
var spacebg_img;
var spacecraft1_img;
var spacecraft2_img;
var spacecraft3_img;
var spacecraft4_img;

var iss, spacecraft, hasDocked = false;

function preload() {
  iss_img = loadImage("Images/iss.png");  
  spacebg_img = loadImage("Images/spacebg.jpg");
  spacecraft1_img = loadImage("Images/spacecraft1.png");
  spacecraft2_img = loadImage("Images/spacecraft2.png");
  spacecraft3_img = loadImage("Images/spacecraft3.png");
  spacecraft4_img = loadImage("Images/spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(iss_img)
  iss.scale = 0.8;

  spacecraft = createSprite(285, 240);
  spacecraft.addImage(spacecraft1_img);
  spacecraft.scale = 0.23
}

function draw() {
  background(spacebg_img); 
  
  if(!hasDocked) {
    spacecraft.x = spacecraft.x +random(-1, 1);

    if(keyDown(LEFT_ARROW)) {
      spacecraft.x = spacecraft.x -2;
      spacecraft.addImage(spacecraft4_img)
    }

    if(keyDown("m")) {
      spacecraft.x = spacecraft.x +2;
      spacecraft.addImage(spacecraft3_img)
    }

    if(keyDown(UP_ARROW)) {
      spacecraft.y = spacecraft.y -2;
      spacecraft.addImage(spacecraft2_img)
    }

    if(keyDown(DOWN_ARROW)) {
      spacecraft.y = spacecraft.y +2
      spacecraft.addImage(spacecraft1_img)
    }
  }

  if(spacecraft.x >300 && spacecraft.x <350 && spacecraft.y >280 && spacecraft.y <350) {
    hasDocked = true;
    textSize(25);
    fill("red")
    text("Docking Succesfull", 22, 300);
  }

  

  drawSprites();
}