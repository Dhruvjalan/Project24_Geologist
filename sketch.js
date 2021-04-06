const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubber1;
var ball, box1,box2;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(200,200);
    rubber1 = new Rubber(400,525,10);
    rubber2 = new Rubber(401,525,10);
    rubber3 = new Rubber(402,525,10);
    rubber4 = new Rubber(403,525,10);
    rubber5 = new Rubber(404,525,10);
    rubber6 = new Rubber(405,525,10);
    rubber7 = new Rubber(406,525,10);
    ball = new Ball (800,599,110);
    ball.debug = true;
    box1 = new BOX1(125,125);
    box2 = new BOX2(100,50);
    box1.debug = true;


   

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


   plane.display();
   hammer.display();
   rubber1.display();
   rubber2.display();
   rubber3.display();
   rubber4.display();
   rubber5.display();
   rubber6.display();
   rubber7.display();
   ball.display();
   box1.display();
   box2.display();



   

    
 
}