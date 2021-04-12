var  wall ;
var car,speed, weight;

function setup() {
  createCanvas(1000,400);
speed=random(50,90)
weight=random(400,1500)


car=createSprite(50, 200, 50, 50);
car.velocityX = speed;

wall=createSprite(800,200,60,height/2);
wall.shapeColor=(80,80,80);

}

function draw() {
  background(255,255,255);  

  if(hasCollided(car, wall))
  {
car.velocityX=0;
var deformation=0.5 * weight* speed* speed/(22500);


if(deformation>180)
{
  car.shapeColor=color(255,0,0);
  wall.shapeColor=color(255,0,0);
}else

if(80<deformation<180)
{
  car.shapeColor=color(255,255,0);
  wall.shapeColor=color(255,255,0);
}else
if(deformation<80){

  car.shapeColor=color(0,255,0);
  wall.shapeColor=color(0,255,0);
}
  }
  
  
  drawSprites();
}

function hasCollided(lcar, lwall)
{
  carRightEdge=lcar.x +lcar.width;
  wallLeftEdge=lwall.x;
  if (carRightEdge >=wallLeftEdge)
  {
    return true
  }
  return false;

}
