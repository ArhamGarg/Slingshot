class Box {
  constructor(x, y, width, height) {
    this.Visiblity = 255;
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("blue");
    fill(255);
    rect(0, 0, this.width, this.height);
    
    if(this.body.speed < 3){
        this.body.display();
    }
    else{
    World.remove(world, this.body);
    push();
    this.Visiblity = this.Visiblity - 5;
    tint(255,this.Visiblity);
    pop();
  }
    
  }
};

 
