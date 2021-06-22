var truckSprite;
var c1Sprite
var c2Sprite
var c3Sprite
var roadSprite
var roadSprite1
var tGroup
var cGroup
async function preload() {
  truck = loadImage("v-1.png");
  c1 = loadImage("v-2.png");
  c2 = loadImage("v-3.png");
  c3 = loadImage("v-4.png");
  road=loadImage("road-01.png")
  road2=loadImage("road-01.png")
}
async function setup() {
  createCanvas(1000, 670);

   tGroup = new Group()
   cGroup = new Group()
 border = createSprite(400,-130,1000,10)
 border.visible=true
  createSpriteWithAllOptions(roadSprite,400,10,road,1,0,0,false)
  createSpriteWithAllOptions(roadSprite1,400,150,road2,1,0,0,false)
  createSpriteWithAllOptions(c2Sprite,100,800,c2,0.5,0,-2,false)
  createSpriteWithAllOptions(c3Sprite,600,800,c3,0.5,0,-3,false)
  createSpriteWithAllOptions(c1Sprite,455,1800,c1,0.5,0,-3.5,false,true,cGroup,false)
  createSpriteWithAllOptions(truckSprite,455,760,truck,0.5,0,-1.2,false,true,tGroup,true,"rectangle",15,85,100,350)

}
async function draw() {
  background('white')
  if(tGroup.isTouching(border)){
    tGroup.destroyEach()
    cGroup.destroyEach()
    for(var i=0;i<10;i++){
      var t=t
      var pt = t+i
      var c=c
      var pc = c+i
      createSpriteWithAllOptions(pt,455,760,truck,0.5,0,-1,false,true,tGroup,true,"rectangle",15,85,100,350)
      createSpriteWithAllOptions(pc,455,1800,c1,0.5,0,-3,false,true,cGroup,false)
      createSpriteWithAllOptions(c2Sprite,100,800,c2,0.5,0,-2,false)
    }
  }
  if(tGroup.isTouching(cGroup)){
    tGroup.setVelocityXEach(-3)
  }
  if(tGroup.isTouching(cGroup)){
    tGroup.setVelocityXEach(-3)
  }
  else{
    tGroup.setVelocityXEach(0)
  }
  if(tGroup.y===-3||tGroup.y<-3){
    tGroup.setPosition(455,580)
  }
  if(cGroup.y===-3||cGroup.y<-3){
    cGroup.setPosition(455,1200)
  }
  drawSprites()
}
function createSpriteWithAllOptions(name,x,y,img,scale,velocityX,velocityY,debug,groupTrueOrNot,group,colliderSetOrNot,type,offsetX,offsetY,width,height){
   name=createSprite(x,y)
   name.addImage(img)
   name.debug=debug
   name.scale=scale
   name.velocityX=c=velocityX
   name.velocityY=c=velocityY
   if(groupTrueOrNot===true){
    group.add(name)
   }
   if(colliderSetOrNot===true){
    name.setCollider(type,offsetX,offsetY,width,height)
   }
}