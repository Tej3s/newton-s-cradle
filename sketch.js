const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball1_options ={
		restitution : 0.7,
		friction : 1.7
	}
	var ball2_options ={
		restitution : 0.7,
		friction : 1.7
	}
	var ball3_options ={
		restitution : 0.7,
		friction : 1.7
	}
	var ball4_options ={
		restitution : 0.7,
		friction : 1.7
	}
	var ball5_options ={
		restitution : 0.7,
		friction : 1.7
	}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
	ball1 = Bodies.circle(320,350,40, ball1_options);
	ball2 = Bodies.circle(360,350,40, ball2_options);
	ball3 = Bodies.circle(400,350,40, ball3_options);
	ball4 = Bodies.circle(440,350,40, ball4_options);
	ball5 = Bodies.circle(480,350,40, ball5_options);

    World.add(world,roof, ball1, ball2, ball3, ball4, ball5);

	Engine.run(engine);
	con1 = Matter.Constraint.create({
		pointA:{x:303, y:110},
	   bodyB: ball1,
	   pointB:{x:220, y:150},
	   length: 90,
	   stiffness:0.1
});
World.add(world,con1);

}
con2 = Matter.Constraint.create({
	pointA:{x:403, y:110},
   bodyB: ball1,
   pointB:{x:320, y:150},
   length: 90,
   stiffness:0.1
});
World.add(world,con2);


con3 = Matter.Constraint.create({
	pointA:{x:503, y:110},
   bodyB: ball1,
   pointB:{x:420, y:150},
   length: 90,
   stiffness:0.1
});

World.add(world,con3);

con4 = Matter.Constraint.create({
		pointA:{x:603, y:110},
	   bodyB: ball1,
	   pointB:{x:520, y:150},
	   length: 90,
	   stiffness:0.1
});
World.add(world,con4);

	


function draw() {
  rectMode(CENTER);
 
  background("#99004d");
  

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
	display();
  
  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x, ball1.position.y, 40);
  ellipse(ball2.position.x, ball2.position.y, 40);
  ellipse(ball3.position.x, ball3.position.y, 40);
  ellipse(ball4.position.x, ball4.position.y, 40);
  ellipse(ball5.position.x, ball5.position.y, 40);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function display()
{
	push();
	strokeWeight(2);
	stroke(255);
	line(con1.pointA.x, con1.pointA.y, ball1.position.x, ball1.position.y);
	line(con1.pointA.x, con1.pointA.y, ball1.position.x, ball1.position.y);
	line(con1.pointA.x, con1.pointA.y, ball1.position.x, ball1.position.y);
	pop();
}