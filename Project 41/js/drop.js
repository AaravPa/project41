class Drop {
  constructor(x,y,radius) {
    var options={
      isStatic : false, 
      friction : 0.1 
    }  
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world, this.body);
  } 
  
  display() {
    var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      noStroke();
      ellipseMode(CENTER);
      fill("darkblue");
      ellipse(pos.x, pos.y, this.radius, this.radius);
      pop();
  } 

  update() {
    if(this.body.position.y > height) {
      Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
    }
  }
}