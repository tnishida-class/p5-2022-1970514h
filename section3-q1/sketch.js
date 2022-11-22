// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

let z;


function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 200;
  z=20;
  
  

}

function draw(){
  background(160, 192, 255);
  count = (count + 5) % cycle;
  if (keyIsDown(UP_ARROW)){count+=10;}// BLANK[1]
  if(count < 180){
    ellipse(width/2, height/2, 50)
  }
  else{
    z=count;
    ellipse(width/2, height/2, z-100);
  }
 

}
