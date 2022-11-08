// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",100,100,155,155,155);
  
}

function balloon(t,x,y,cr,cg,cb){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  
  
  fill(cr,cg,cb); //三原色　cr=赤、cg=緑、cb=青
  rect(x, y, w + p * 2, h + p * 2); //p=padding ：吹き出しと文字の間の隙間
  triangle(x+10,y+h+p+p,x+30,y+h+p*2,x+p+20,y+h+p+20);
  fill(255);
  text(t, x+p, y+h + p);
 

}

//margin : 吹き出しと吹き出しの隙間　外側の隙間