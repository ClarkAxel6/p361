var dog,sadDog,happyDog;
var feedPet;
var addFood;

var database;

var foodObj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  database = firebase.database();

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feedPet = createButton('Feed');
  feedPet.position(700, 95);
  feedPet.mousePressed(feedDog);

  addFood = createButton('Add food');
  addFood.position(800, 95);
  addFood.mousePressed(addFoods);

  food = new Food()
}

function draw() {
  background(46,139,87);
  drawSprites();

  food.display();

}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){
  food.getFoodStock();
  if(food.foodStock > 0){
    food.foodStock = food.foodStock - 1;
    dog.addImage(happyDog);
    food.updateFoodStock(food.foodStock);
  }
}

//function to add food in stock
function addFoods(){
  food.getFoodStock();
  food.foodStock ++;
  food.updateFoodStock(food.foodStock);
}