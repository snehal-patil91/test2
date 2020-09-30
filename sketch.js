var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3,gameObject4;
var object1,object2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";  
  movingRect.debug = true;

  gameObject1 = createSprite(100, 100, 50, 80);
  gameObject1.shapeColor = "blue";
  gameObject2 = createSprite(200, 100, 50, 80);
  gameObject2.shapeColor = "blue";
  gameObject3 = createSprite(400, 100, 50, 80);
  gameObject3.shapeColor = "blue";
  gameObject4 = createSprite(500, 100, 50, 80);
  gameObject4.shapeColor = "blue";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,gameObject2))
  {
    gameObject2.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else
  {
    gameObject2.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  
  drawSprites();
}

function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) 
    {  
      return true;
    }
  else
    {
    return false;
    }
}