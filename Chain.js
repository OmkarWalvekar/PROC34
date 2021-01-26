class Chain {
    constructor(bodyA,pointB){
        var opts = {
            stiffnes:0.8,
            bodyA:bodyA,
            pointB:pointB
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.chain = Constraint.create(opts);
        World.add(world,this.chain);
    }

    display() {

        push();

        stroke("white");
        strokeWeight(3);

        var pointA = this.bodyA.position;
        var pointB = this.pointB;

        
        line(pointA.x,pointA.y,pointB.x,point.y);
        pop();
    }
}