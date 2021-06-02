const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(300,200,70,70)
    iron1= new iron(400,200,50,30)
stone1= new stone(100,100,5,5);
stone2= new stone(110,100,5,5);
stone3= new stone(120,100,5,5);
stone4= new stone(130,100,5,5);
stone5= new stone(140,100,5,5);
stone6= new stone(150,100,5,5);
stone8= new stone(160,100,5,5);
stone9= new stone(170,100,5,5);
stone10= new stone(180,100,5,5);
stone11= new stone(190,100,5,5);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
rubber.display();
    iron1.display();
 //circle1.display();
 stone1.display();
 stone2.display();
 stone3.display();
 stone4.display();
 stone5.display();
 stone6.display();
 stone8.display();
 stone9.display();
 stone10.display();
 stone11.display();
}