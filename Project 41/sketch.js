const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var umbrella1;
var maxDrops=100;
var drops=[];
var bolt1, bolt2, bolt3, bolt4;

function preload(){
  bolt1 = loadImage("images/thunderbolt/1.png");  
  bolt2 = loadImage("images/thunderbolt/2.png");  
  bolt3 = loadImage("images/thunderbolt/3.png");  
  bolt4 = loadImage("images/thunderbolt/4.png");  
}

function setup(){
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  umbrella1 = new Umbrella(200,300,200);

  if(frameCount % 60 === 0) {
    drops.push(new Drop(random(0,400), random(0,400), 5));
  }
  // for(var i=0; i<maxDrops; i++) {
  //   drops.push(new Drop(random(0,400),random(0,400), 15));
  // }

  Engine.run(engine);
}

function draw(){
  Engine.update(engine);
  
  background(0);

  umbrella1.display();  

  for(var j = 0; j < maxDrops; j++) {
    drops[j].display();
  }
}   

