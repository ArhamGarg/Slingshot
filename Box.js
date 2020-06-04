class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }
  display() {
    super.display();

    strokeWeight(4);
    stroke("green");
    fill(255);
  }
};
