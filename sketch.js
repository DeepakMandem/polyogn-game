var stand1,stand2
var score = 0;
var slingshot
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(800,400);
  stand1 = new Stand(400, 200, 240, 50);

  box1 = new Box(280,350,30,40);
  box2 = new Box(310,350,30,40);
  box3 = new Box(340,350,30,40);
  box4 = new Box(370,350,30,40);
  box5 = new Box(400,350,30,40);
  box6 = new Box(430,350,30,40);
  box7 = new Box(460,350,30,40);
  box8 = new Box(490,350,30,40);

  box9 = new Box(300,310,30,40);
  box10 = new Box(330,310,30,40);
  box11 = new Box(360,310,30,40);
  box12 = new Box(390,310,30,40);

  box13 = new Box(350,270,30,40);
  box14 = new Box(380,270,30,40);

  box15 = new Box(365,230,30,40);
  box16 = new Box(200,300,30,40);

  slingshot = new SlingShot(box16.body,{x:200, y:300})



}

function draw() {
  background(255,255,255);  
  text("SCORE : "+score,750,40);
  getTime();
  stand1.display();
  
  box1.score();
 box2.score(); 
 box3.score(); 
 box4.score(); 
 box5.score(); 
 box6.score(); 
 box7.score(); 
 box8.score();
 box9.score();
 box10.score();
 box11.score();
 box12.score();
 box13.score();
 box14.score();
 box15.score();
 box16.score();

  
  drawSprites();
}

function mouseDragged(){
  
  Matter.Body.setPosition(box16.body, {x: mouseX , y: mouseY});
  }



function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(box16.body);
  }
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responseJSON = await response.json()
  
  var daytime = responseJSON.datetime
  var hour = daytime.slice(11,13)
  console.log(hour)
  
  if(hour>=06 && hour<=19){
  bg = "sprites/bg.png"
  }

  else{
      bg = "sprites/bg2.png"
  }
}