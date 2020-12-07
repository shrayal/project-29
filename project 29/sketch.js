const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var sling,s,g;
function setup() {
  createCanvas(800,800);
  stroke(255)
  s=new Striker(400,200,40,404)
  sling=new SlingShot(s,{x:400,y:400})
  g=new Ground(600,600,100,25)
}

function draw() {
  background(0);
 s.display()
 sling.display()
 g.display()
 drawSprites();
}
