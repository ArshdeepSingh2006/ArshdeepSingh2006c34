class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5            
        }
       // this.chain1 = loadImage('sprites/chain1.png');
       
        this.chain = Constraint.create(options);
        World.add(myWorld, this.sling);
    }
   
   show(){
       // image(this.sling1,200,20);
        
     
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
           stroke(0);
                strokeWeight(5);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}