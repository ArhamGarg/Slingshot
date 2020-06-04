class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    Matter.Body.setAngle(this.body, angle);
  }
  display() {
    super.display();

    strokeWeight(4);
    stroke("brown");
    fill(255);
  }
}