class Ground{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(400,680,800,0.1,options);
        this.width = 800;
        this.height =0.1;
        this.image = loadImage("grass.png")
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height+50);
    }
}