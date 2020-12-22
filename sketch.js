function setup() {
  createCanvas(1200,800)
  fixedRect =  createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2){
    movingRect.shapeColor = "orange";
    fixedRect.shapeColor = "orange"
  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  drawSprites();
}