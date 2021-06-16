class Drops {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0.1,
         
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.width=width
        this.height=height
        this.rain = Bodies.circle(x,y,5,options)
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();

        

        var maxDrops=100

        for(var i=0; i<maxDrops; i++){
         drops.push (new createDrop(100,400) ) 
         
        }
        if(frameCount %60===0){
          //  drops.push (new createDrops(100,400) )
        showDrop()
              fill("blue") 
          ellipseMode(CENTER); 
          ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius); 

        pop()
    if (this.rain.position.y > height){
            Matter.Body.setPosition(thsi.rain, {x:random(0,400), y:random(0,400)})
        }  
    }
    
    
    }

};