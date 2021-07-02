var garden,rabbit;
var gardenImg,rabbitImg;
var food, foodImgO, foodImgA

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  // foodImA = loadImage("apple.png");
   // foodImO = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  
    spawnFood()
    console.log("working")

    if (frameCount % 60 === 0){
              
    }

  


  drawSprites();
}
function spawnFood() {
  //write code here to spawn the apple
  if (frameCount % 60 === 0) {
    
    food = createSprite(400,0,40,10);
    food.x = Math.round(random(0,400))
    // apple.scale = 0.4;
    food.velocityY = 3;
    
    
    //assigning lifetime to the variable
    food.lifetime = 400
    
    //adjust the depth
    food.depth = rabbit.depth
    rabbit.depth = rabbit.depth + 1;
    }

    // var rand = Math.round(random(1,2));
    // switch(rand) {
    //   case 1: food.addImage(foodImgA);
    //           break;
    //   case 2: food.addImage(foodImgO);
    //           break;
    //   default: break;
    // }

    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: console.log("Apple");
              break;
      case 2: console.log("orange")
              break;
      default: break;
    }
}

