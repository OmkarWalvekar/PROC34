class Box {
    constructor(x,y,width,height){
        var opts ={
            restitution:0.8,
            friction:1,
            density:0.04
            
        }
        this.body = Bodies.rectangle(x,y,width,height,opts);
        this.width = width ;
        this.height = height;
        World.add(world,this.body);
    }
     
    display() {

        var pos;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        
        rectMode(CENTER);
        stroke("purple");
        strokeWeight(3);
        fill("cyan");
        rect(0,0,this.width,this.height);
        pop();
    }
}