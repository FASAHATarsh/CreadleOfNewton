class Bob {
    constructor(x,y,radius){
        var options = {
         isStatic:false, 
         restitution:1.3, 
         friction:0.1, 
         density:3 
        }
    
        this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    
    World.add(world, this.body);
    }
    display(){
        
        push ();
        translate(this.body.position.x, this.body.position.y);
        rotate (this.body.angle);
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius) 
        pop ();
    }
}