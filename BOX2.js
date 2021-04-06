class BOX2 {
    constructor(x, y) {
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(100,550,x, y, options);
      this.width = x;
      this.height = y;
      World.add(world, this.body);
      this.body.debug = true;
    }
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
     // stroke('white')
      fill('brown');
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  