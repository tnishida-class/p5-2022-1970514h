//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  //let b1={x:50,y:50,vx:3,vy:0,size:10};

 
}

function draw(){
  background(160, 192, 255);

  const b = { x: random(0, width), y: random(0, height), size:random(20, 100), vx: random(-100, 100), vy: random(-100, 100)};
  balls.push(b);

  for(let i = 0; i < balls.length; i++){
    let b = balls[i];

    ellipse(b.x, b.y, b.size);
 
    b.x += b.vx;
    b.y += b.vy;

    

  }
}



function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;

  if(mag(dx, dy) > 5){

    let scores = [];
   for(let i = 0; i < 10; i++){
     scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
   
    size=scores[i];
   }
     const b = { x: mouseX, y: mouseY, size:size, vx: dx, vy: dy };
     balls.push(b);

  
    }

  }

  // function draw (){
  //   if(mag(dx, dy) > 5){

  //     let scores = [];
  //    for(let i = 0; i < 10; i++){
  //      scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
     
  //     size=scores[i];
  //    }
  //      const b = { x: mouseX, y: mouseY, size:size, vx: dx, vy: dy };
  //      balls.push(b);
  // }

  


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
