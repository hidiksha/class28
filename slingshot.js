class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length:20
        }
        this.pointB=pointB;
        this.Slingshot=Constraint.create(options);
        World.add(world,this.Slingshot);
    }
    fly(){
        this.Slingshot.bodyA=null;
    }
    display(){
        if(this.Slingshot.bodyA){
        var pointa=this.Slingshot.bodyA.position;
        var pointb=this.pointB;
        strokeWeight(6);
        line (pointa.x,pointa.y,pointb.x,pointb.y);
        }
    }
}