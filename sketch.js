var dog,happydog;
var database;
var foodS,foodStock;
function preload() {

}
function setup() {
  createCanvas(500,500);
  dog(250, 250, 50, 50);


  foodStock=database.ref('food');
  foodStock.on("value",readStock)
}

function draw() {
  background(255,255,255);  
  
  if(keyPressed("up")){


  }
  
  
  
  drawSprites();
}