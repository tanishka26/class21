var fobj,mobj;

function setup() {
  createCanvas(800,400);
  fobj=createSprite(100, 200, 50, 100);
  obj=createSprite(200, 200, 50, 100);
  mobj=createSprite(100, 200, 100, 50);
  fobj.shapeColor="green";
  mobj.shapeColor="green";
fobj.debug=true;
mobj.debug=true;
obj1=createSprite(100, 100, 50, 50);
obj2=createSprite(600, 100, 50, 50);
obj1.velocityX=6;
obj2.velocityX=-6;
}

function draw() {
  background(255,255,255);  
  mobj.x=mouseX
  mobj.y=mouseY
 /* console.log(mobj.width/2+fobj.width/2);
  console.log(mobj.x-fobj.x);
  console.log(fobj.x-mobj.x);
  console.log(mobj.x);*/
 if(isTouching( mobj,obj)){
  obj.shapeColor="lightBlue";
  mobj.shapeColor="lightBlue";
}
else{
  obj.shapeColor="green";
  mobj.shapeColor="green";
}
 bounce(obj1,obj2)
console.log("hello")
  drawSprites();
}