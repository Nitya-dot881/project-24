class PAPER
{
    constructor(x, y, width, height)
    {
       var options={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }

this.body = Bodies.circle(x, y, width, height );
World.add(world, this.body);
}
display()
{
    var angle=this.body.angle
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(angle)
    rectMode(CENTER);
    fill("pink")
    strokeWeight(4)
    stroke("red")
    pop()
}
}