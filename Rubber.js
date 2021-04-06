var x1,y1,r1;
class Rubber {
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
		'restitution':0.3,
		'friction':5,
		'density':1,
	}
		
		
		this.body = Bodies.circle(x, y, (r-3)/2, options);	
		x1 = x;
		y1 = y;
		r1 = r;
		World.add(world, this.body);

	}
	display()
	{
			push();
			rectMode(CENTER)
 			translate(this.body.position.x, this.body.position.y);
			fill("red");
			//ellipseMode(CENTER);
			ellipse(0,0,r1, r1);
			pop();
	}

}