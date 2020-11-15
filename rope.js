class rope{
    constructor(body1, body2, offsetX, offsetY)
    {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = 
        {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX, y:this.offsetY},
            stiffness: 1,
            length: 5
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
    }

    display()
    {
        if (this.rope.bodyA!=null)
        {
            var pointA = this.rope.bodyA.position;
            push()
            strokeWeight(4);
            stroke("white")
            line(pointA.x, pointA.y, this.rope.pointB.x, this.rope.pointB.y);
            pop()
            
        }
    }
    
}