class Bird{
  crunstructor(x,y) {
    var options = {
      'density': 1.0,
      'Friction': 1.3,
      'restitoution': 1.5
    }

    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
    this.Height = 50;

    World.add(world,this.body);
    }

    display() {
      pos = this.body.position;
      pos.X = World.mouseX;
      pos.y = World.mouseY;
      angle = this.body.angle;

      push();
      Rotate(angle);
      translate(x,y);
      rectMode(CENTER);
      rect(x,y,50,50);
      stroke(Black);
      strokeMode(3);
      fill(Red);
      pop();
    }
}
  