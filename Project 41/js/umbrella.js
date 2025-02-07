class Umbrella {
  constructor(x,y,radius) {
    var options={
      isStatic : true 
    }  
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image = loadImage("images/Walking Frame/walking_1.png");
    World.add(world, this.body);
  } 
  
  display() {
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.radius, this.radius);
  } 
}