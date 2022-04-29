let x = 0;
let radius = 50;
let speed = 3;

// Call setup only once!
class Jack {
  constructor() {
      this.r= 150;
      this.x = 20;
      this.y = height - this.r;
      this.vy = 0;
      this.gravity = 0.7;
      this.k = 50;
  }

  jump(){
    if (this.y == height- this.r){
    this.vy = -15;
  }
  }
hits(candlestick){
  return collideRectRect(this.x+50, this.y, this.k+5, this.k+75, candlestick.x, candlestick.y, candlestick.r, candlestick.r);
}

move(){
  this.y += this.vy;
  this.vy += this.gravity
  this.y = constrain (this.y, 0, height - this.r);
}
  show(){
      image(jImg, this.x, this.y, this.r, this.r);
      console.log("test");
      // fill(255,50);
      //   rect(this.x+50, this.y, this.k+5, this.k+75)
  }


}

let jack;
let jImg;
let cImg;
let bImg;
let candlestick = [];

let background_img=[];

function preload (){
  jImg = loadImage('images/jack.png');
  cImg = loadImage('images/candlestick-cartoon.png');
  bImg = loadImage('images/background.png');
}

function setup() {
  const canvas = createCanvas(700, 450);
  // Places the canvas within the HTML element with id "sketch-holder"
  canvas.parent("sketch-holder");
  background(200, 200, 200);
  frameRate(60);
  jack=new Jack();
  // xPos = 0;
  
}


function keyPressed(){
  if(key == ' '){
    jack.jump();
  }
}

function draw() {
  background
  
  
  if(random(1)< 0.007){
    candlestick.push(new Candlestick());
  }
  
  if(random(1)< 0.007){
   background_img.push(new Background_img());
  }

  background(bImg);
//   xPos += 4;
//   if(xPos >= width){
//     xPos = 0; 
// 	}
// eclippse(xPos,height/2, 20, 20)
  
 
  for (let c of candlestick){
    c.move();
    c.show();
    if (jack.hits(c)){
      console.log('game over');
      noLoop();
    }
  }
  for (let b of background_img){
    b.move();
    b.show();
    
  }
  jack.show();
 jack.move();

}
