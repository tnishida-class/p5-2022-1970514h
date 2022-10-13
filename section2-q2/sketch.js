// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
    
    
    if((i+j) % 2==1){
      fill (196);
    }
    else{
      fill(256);
    }  
    rect(i*8,j*8,8,8);
   

    } // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
  
  }
  for(let ll = 0; ll < 8; ll++){
    for(let kk = 0; kk < 3; kk++){
    
    
    if((ll+kk) % 2==1){
      fill (255,0,0); 

}
else{
  fill(255,255,255);
}
ellipse(ll*8+4,kk*8+4,7);
    }
  }

  for(let ll = 0; ll < 8; ll++){
    for(let kk = 5; kk < 8; kk++){
    
    
    if((ll+kk) % 2==1){
      fill (0,0,0); 

}
else{
  fill(255,255,255);
}
ellipse(ll*8+4,kk*8+4,7);
    }
  }
}
  

