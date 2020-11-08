class Log {
constructor(x,y,height,angle) {

    var options = {
    'restitution': 1.3,
    'friction': 1.0,
    'density': 1.0
    }
    
    this.body = Bodies.rectangle(x,y,20,height,options);
    Matter.Body.setAngle(this.body,angle);
    this.width = 20;
    this.height = height;
    
    World.add(world,this.body);
}
    display() {
    var angle = this.body.angle;
    
    push();
    rotate(angle);
    translate(this.body.position.x,this.body.position.y);
    strokeWeight(3);
    stroke(black);
    rectMode(CENTER);
    rect(x,y,20,height);
    pop();
    }
}
