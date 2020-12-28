class seed{
    constructor(x,y){
      this.x=x;
      this.y=y; 
      this.image=loadImage("Images/seed.png")
    }
  display(){
  image(this.image,this.x,this.y,25,25);
  }  
}