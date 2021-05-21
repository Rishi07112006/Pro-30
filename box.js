class Box{
    constructor(x, y, width, height){
      var options = {
        restitution : 0.1,
        friction : 0.1,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
      rectMode(CENTER);
      fill("white")
      rect(pos.x, pos.y, this.width, this.height);
      if(this.body.speed>3){
        push();
        World.remove(world,this.body);
        //this.visibility = visibility - 5;
        //tint(255,this.visibility);
        pop();
      }
  }
};