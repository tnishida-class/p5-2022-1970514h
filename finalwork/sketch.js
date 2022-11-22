// 最終課題を制作しよう
let balls;
let x,y,bx,by,d,e,f,g;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  d=windowHeight-135;
  e=70;
  f=windowWidth-250;
  g=windowHeight-100;
}

function draw(){
  background(160, 192, 255);
  balloon("aaaaaaaa",f,g,155,155,155);
  const b = { x: random(0, width), y: random(0, 0), size:random(5, 10), vx: random(0, 10), vy: random(0, 100)};
  balls.push(b);

  for(let i = 0; i < balls.length; i++){
    let b = balls[i];

    ellipse(b.x, b.y, b.size);
 
    b.x += b.vx+sin(frameCount*0.02)*10;
    b.y += b.vy;
  }
  
  ellipse(windowWidth-100,windowHeight-50,100);//胴体
  ellipse(windowWidth-100,d,e);//顔
  
  fill (0,0,255);
  quad(windowWidth-60,d-25,windowWidth-140,d-25,windowWidth-120,d-75,windowWidth-80,d-75);//帽子
  fill(255,0,0);
  triangle(windowWidth-120,d+10,windowWidth-100,d+15,windowWidth-100,d+5);//鼻
  fill(0,0,0);
  ellipse(windowWidth-100,windowHeight-30,10);//ボタン
  ellipse(windowWidth-100,windowHeight-50,10);
  ellipse(windowWidth-100,windowHeight-70,10);
  ellipse(windowWidth-110,d-5,5);//目
  ellipse(windowWidth-90,d-5,5);
  // rect(windowWidth-250,windowHeight-160,100,50);//看板
  // rect(windowWidth-200,windowHeight-110,10,60);//持ち手
  //line(windowWidth-200,windowHeight-80,windowWidth-150,windowHeight-60);//手
  fill(209,152,38);
  rect(195,windowHeight-225,260,210);
  fill(0,50,0);
  rect(200,windowHeight-220,250,200);
  console.log(mouseIsPressed);
  fill(255,255,255);
  noStroke();
  if(mouseIsPressed){
    ellipse(mouseX, mouseY, 10);
}
}

function keyPressed(){
  if(keyIsDown(UP_ARROW)){ d -= 2.5, e += 5; }
  if(keyIsDown(DOWN_ARROW)){ d += 2.5,e -= 5; }
  if(keyIsDown(" ".charCodeAt(0))){ d=windowHeight-135,e=70; }
}

function balloon(t,f,g,cr,cg,cb){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  
  fill(cr,cg,cb); //三原色　cr=赤、cg=緑、cb=青
  rect(f, g, w + p * 2, h + p * 2); //看板//p=padding ：吹き出しと文字の間の隙間
  rect(f+(w + p * 2)/2,g+h + p * 2,10,60);//持ち手
  fill(255);
  text(t, f+p, g+h + p);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
