const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var ground
var box1, box2, box3, box4, box5, box6;

var gameState = "onSling";
var ball, slingshot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create()
    world = engine.world;
    
    var option = {
        isStatic: true
    }
    ground = Bodies.rectangle(600, 390, 1200, 20, option);
    World.add(world,ground);

    box1 = new Box(700,320,50,50);
    box2 = new Box(750,320,50,50);
    box3 = new Box(800,320,50,50);
    box4 = new Box(725,260,50,50);
    box5 = new Box(775,260,50,50);
    box6 = new Box(737.5,200,50,50);

    ball = new Ball(200,150,25,25);

    slingshot = new SlingShot(ball.body,{x:200, y:50});
}

    
function draw(){
    background(150);
    Engine.update(engine);
    fill("brown");
    rectMode(CENTER)
    rect(ground.position.x, ground.position.y, 1200, 20);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    ball.display();

    slingshot.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(ball.body);
    }
}
















