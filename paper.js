class paper{
    constructor(x,y){

        var options = { 
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:0.2,
        }
        this.x=x;
        this.y=y;
      //  this.r=r;

        this.body=Bodies.circle(this.x,this.y,23,options);
        this.image=loadImage("paper.png")
        World.add(world,this.body);
    }
    display(){
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        imageMode(RADIUS);
        strokeWeight(3);
        fill(255,0,255)
            image(this.image,0,0,70,70);
        pop();
    }
}