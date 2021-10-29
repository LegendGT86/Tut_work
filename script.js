var origimg = null;
var bluimg = null;
var bordimg = null;
var blurimg = null;
var greyimg = null;
var rainimg = null;
var randomimg = null;
var canvas2 = document.getElementById("canv2");
var canvas = document.getElementById("canv1");;

function uploadimg(){
  var file = document.getElementById("upimg");
origimg = new SimpleImage(file);
bluimg = new SimpleImage(file);
bordimg = new SimpleImage(file);
blurimg = new SimpleImage(file);
greyimg = new SimpleImage(file);
rainimg = new SimpleImage(file);
randomimg = new SimpleImage(file);
canvas = document.getElementById("canv1");
origimg.drawTo(canvas);
}

function blueit(){
  for (var pix of bluimg.values()){
    var avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
    if (avg<128){
      pix.setRed(0);
      pix.setGreen(0);
    pix.setBlue(avg*2);
    } else{
      pix.setRed(avg*2-255);
      pix.setGreen(avg*2-255);
      pix.setBlue(255);
    }
    
    bluimg.drawTo(canvas2);
  }
}

function rainit(){
  for (var pix of rainimg.values()){
  var X = pix.getX();
  var Y = pix.getY();
  var H = rainimg.getHeight();
  var W = rainimg.getWidth();
  var avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
   
    //Get the red pixels of rainbox
    if(X < W/3 && Y < H/4 || X>W/3*2 && Y<H/4){
    if (avg<128){
      pix.setRed(avg*2);
      pix.setGreen(0);
      pix.setBlue(0);
    }
      else{
        pix.setRed(255);
        pix.setGreen(avg*2-255);
        pix.setBlue(avg*2-255)
    }
    } 
    
    //Get the green pixel of rainbox
     if(X < W/3 && Y > H/4 && Y < H/4*2 || X > W/3*2 && Y > H/4 && Y < H/4*2){
    if (avg<128){
      pix.setRed(0);
      pix.setGreen(avg*2);
      pix.setBlue(0);
    }
      else{
        pix.setRed(avg*2-255);
        pix.setGreen(255);
        pix.setBlue(avg*2-255)
    }
    }
     //Get the blue pixels of the rainbow
     if(X < W/3 && Y > H/4*2 && Y < H/4*3 || X > W/3*2 && Y > H/4*2 && Y < H/4*3){
    if (avg<128){
      pix.setRed(0);
      pix.setGreen(0);
      pix.setBlue(avg*2);
    }
      else{
        pix.setRed(avg*2-255);
        pix.setGreen(avg*2-255);
        pix.setBlue(255)
    }
    }
    
    //get the orange
    
     if(X < W/3 && H/4*3< Y || X>W/3*2 && H/4*3< Y){
    if (avg<128){
      pix.setRed(2*avg);
      pix.setGreen(avg*0.8);
      pix.setBlue(0);
    }
      else{
        pix.setRed(255);
        pix.setGreen(1.2*avg-51);
        pix.setBlue(avg*2-255)
    }
    }
   
    //Verticle left color violet
    if(X > W/3 && X < W/6*3){
    if (avg<128){
      pix.setRed(1.6*avg);
      pix.setGreen(0);
      pix.setBlue(1.6*avg);
    }
      else{
        pix.setRed(0.4*avg + 153);
        pix.setGreen(2*avg-255);
        pix.setBlue(0.4*avg + 153)
    }
    }
    //Verticle right color indigo
    if(X > W/6*3 && X < W/6*4){
    if (avg<128){
      pix.setRed(2*avg);
      pix.setGreen(0.8*avg);
      pix.setBlue(0);
    }
      else{
        pix.setRed(255);
        pix.setGreen(1.2*avg-51);
        pix.setBlue(2*avg-255);
    }
    }
  rainimg.drawTo(canvas2);
}
}

//The grey button function
function greyit() {
  for (var pix of greyimg.values()){
    var avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
    pix.setRed(avg);
    pix.setGreen(avg);
    pix.setBlue(avg);
  }
  greyimg.drawTo(canvas2);
}

// The border button
function border() {
  for (var pix of bordimg.values()){
    var X = pix.getX();
    var Y = pix.getY();
    var W = bordimg.getWidth();
    var H = bordimg.getHeight();
    if( X < W*0.03 || X > W*0.97)
    {
      pix.setRed(250);
      pix.setGreen(150);
      pix.setBlue(155);
    }
    if ( Y < H*0.03 || Y> H*0.97){
      pix.setRed(155);
      pix.setGreen(150);
      pix.setBlue(250);
    }
    bordimg.drawTo(canvas2);
  }
    
}
function blurit(){
  for (var pix of blurimg.values()){
    X = pix.getX();
    Y = pix.getY();
    W = blurimg.getWidth();
    H = blurimg.getHeight();
    rand = Math.random();
    if (rand<0.4){
      blurimg.setPixel(X,Y,pix)
    }
    else{
      Modifiedpix(X,Y);
    }
  }
}

function Modifiedpix(X,Y){
  var xx = X + Math.floor(5*rand);
  var yy = Y + Math.floor(5*rand);
  if (xx >= W){
    xx = W - Math.floor(5*rand)-1;
  }
  if (yy >= H){
    yy = H- Math.floor(5*rand)-1;
  }
  var Finalpix = blurimg.getPixel(xx,yy);
  blurimg.setPixel(X,Y,Finalpix);
  blurimg.drawTo(canvas2)
}