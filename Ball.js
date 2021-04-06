var x2,y2,r2;
class Ball {
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
		'restitution':0.2,
		'friction':5,
		'density':1,
	}
		
		
		this.body = Bodies.circle(x,    y, (r-3)/2, options);	
		x2 = x;
		y2 = y;
		r2 = r;
		World.add(world, this.body);

	}
	display()
	{
			push();
			rectMode(CENTER)
 			translate(this.body.position.x, this.body.position.y);
			fill("darkblue");
			//ellipseMode(CENTER);
			ellipse(0,0,r2,r2);
			pop();
	}

}