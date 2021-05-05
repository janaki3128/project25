class Ball
{
    constructor(x,y){
        var options = {
            restitution: 0.1,
            density: 1.2,
            friction: 1

        }
        this.body = Bodies.circle(x,y,40,options)
        this.image = loadImage("paper.png")
        World.add(world,this.body)
        }
        display(){
          imageMode(CENTER)
          image(this.image,this.body.position.x,this.body.position.y,80,80)
        }
}
