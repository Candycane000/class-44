var bg,bg_image,man,man_image, thief, thief_image, coin, coin_image; 
function preload(){
bg_image= loadAnimation("Images/Background 1.gif","Images/Background 2.gif","Images/Background 3.gif","Images/Background 4.gif","Images/Background 5.gif","Images/Background 6.gif","Images/Background 7.gif","Images/Background 8.gif","Images/Background 9.gif","Images/Background 10.gif","Images/Background 11.gif","Images/Background 12.gif","Images/Background 13.gif","Images/Background 14.gif","Images/Background 15.gif","Images/Background 16.gif","Images/Background 17.gif","Images/Background 18.gif","Images/Background 19.gif","Images/Background 20.gif","Images/Background 21.gif","Images/Background 22.gif","Images/Background 23.gif","Images/Background 24.gif","Images/Background 25.gif","Images/Background 26.gif","Images/Background 27.gif","Images/Background 28.gif","Images/Background 29.gif","Images/Background 30.gif");
man_image= loadAnimation("Images/Runner 1.gif", "Images/Runner 2.gif","Images/Runner 3.gif","Images/Runner 4.gif","Images/Runner 5.gif","Images/Runner 6.gif","Images/Runner 7.gif","Images/Runner 8.gif","Images/Runner 9.gif");
thief_image= loadAnimation("Images/Theif 1.gif","Images/Theif 2.gif","Images/Theif 3.gif","Images/Theif 5.gif","Images/Theif 6.gif","Images/Theif 7.gif","Images/Theif 8.gif","Images/Theif 9.gif","Images/Theif 10.gif","Images/Theif 11.gif");
coin_image= loadAnimation("Images/Coin1.gif","Images/Coin2.gif","Images/Coin3.gif","Images/Coin4.gif","Images/Coin5.gif","Images/Coin6.gif")
}
function setup() {
  createCanvas(2000,1000);
  bg=createSprite(20,20,2000,1500)
  bg.addAnimation("moving",bg_image)
  bg.scale=4

  man=createSprite(200,750,20,20)
  man.addAnimation("chasing",man_image)
  thief=createSprite(1400,750,20,20)
  thief.addAnimation("running", thief_image)
}


function draw() {
  background("black"); 
  
  if(keyDown("up")){
    
    man.y=man.y-50;
  };
  spawnCoins()
  drawSprites();
}

function spawnCoins(){
  if(frameCount%200===0){
    coin=createSprite(2000,500,10,10)
    coin.addAnimation("rolling",coin_image)
    coin.y =Math.round(random(600,500))
    coin.velocityX=-3
    coin.scale=0.5
  }
}