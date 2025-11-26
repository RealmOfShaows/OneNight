window.addEventListener("keydown", function (e) {
  const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
  if (keys.includes(e.key)) {
    e.preventDefault();
  }
}, { passive: false });


let start;
let cont1;
let cont2;
let story1;
let story2;
let story3;
let story4;
let story5;
let story6;
let story7;
let story8;
let story9;
let story10;

let puz1;
let puz2;
let puz3;
let puz4;
let puz5;
let puz6;
let puz7;
let puz8;
let puz9;
let puz10;
let puz11;
let puz12;
let puz13;


let player;
let sceneplay = 0;

let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;

let font;

function preload(){
  img = loadImage('blueiris.png')
  img2 = loadImage('blueirisdark1.png')
  img3 = loadImage('useArrowsToMove.png')
  img4 = loadImage('bubbleClouds.png')
  img5 = loadImage('bubbleCloudsDark.png')
  img6 = loadImage('whiteye.png')
  img7 = loadImage('eyes.png')
  img8 = loadImage('moon.png')
  img9 = loadImage('shuteye.png')
  
  font = loadFont('lucon.ttf')
}

function setup() {
  createCanvas(400, 400);
  
  textFont(font)
  
  start = new Button(300, 90);
  cont1 = new Button(70, 280);
  cont2 = new Button(200, 200);
  story1 = new Button(200, 150);
  story2 = new Button(200, 380);
  story3 = new Button(200, 20);
  story4 = new Button(200, 380);
  story5 = new Button(30, 130);
  story6 = new Button(100, 300);
  story7 = new Button(270, 0);
  story8 = new Button(390, 390);
  story9 = new Button(300, 230);
  story10 = new Button(190, 300);
  
  puz1 = new Button(50, 45);
  puz1.radius = 40;
  puz2 = new Button(150, 67);
  puz2.radius = 40;
  puz3 = new Button(58, 147);
  puz3.radius = 40;
  puz4 = new Button(230, 135);
  puz4.radius = 40;
  puz5 = new Button(255, 42);
  puz5.radius = 40;
  
  puz6 = new Button(350, 130);
  puz6.radius = 40;
  puz7 = new Button(140, 215);
  puz7.radius = 40;
  puz8 = new Button(253, 232);
  puz8.radius = 40;
  
  puz9 = new Button(350, 270);
  puz9.radius = 40;
  puz10 = new Button(142, 340);
  puz10.radius = 40;
  puz11 = new Button(40, 297);
  puz11.radius = 40;
  puz12 = new Button(282, 358);
  puz12.radius = 40;
  
  puz13 = new Button(350, 50)
  
  
  player = new Player(200, 200);
}

function draw() {
  background(0);
  
  scene1();
  
  //test.backChange(0)
  //test.close()
  //test.message('I have no mouth and I must', 240, 370)
  //test2.message('scream', 240, 100)
  //test.show();
  //cont1.show();
  //test3.show();
  //test4.show();
  
  
  
  
  //console.log(test.t)
  
}

/////CUSTOM FUNCTIONS/////

function scene1(){
  let section = 1
  
  if(start.t == 1){
    section = 2;
  }
  if(cont1.t == 1){
    section = 3;
  }
  if(cont2.t == 1){
    section = 4;
  }
  
  
  if(section == 1){
    image(img3, 0, 0, 150, 150)
    start.message('What is this?', 240, 370, 255, 16)
  }else if(section == 2){
    cont1.message('Ah, I see. Another one.', 100, 370, 255, 16)
  }else if(section == 3){
    cont2.message('I wonder how long this one will keep me', 10, 100, 255, 16)
  }else if(section == 4){
    scene2();
  }
  
  
  //console.log(section)
  
  player.show();
  player.moveAndWrap();
}

function scene2(){
  let section2 = 1;
  
  image(img, 0, 0)
  
  if(story1.t == 1){
    section2 = 2;
  }
  if(story2.t == 1){
    section2 = 3;
  }
  if(story3.t == 1){
    section2 = 4;
  }
  if(story4.t == 1){
    section2 = 5;
  }
  
  if(section2 == 1){
    story1.message('I open my eyes into my own reflection', 20, 370, 255, 16)
    story1.message('And I feel as though I am trapped', 40, 390, 255, 16)
  }else if(section2 == 2){
    story2.message('As Above', 170, 20, 0, 16)
  }else if(section2 == 3){
    image(img2, 0, 0)
    story3.message('So Below', 170, 380, 255, 16)
  }else if(section2 == 4){
    image(img, 0, 0)
    story4.message('If I try, maybe I can find a way out of here', 0, 20, 0, 15)
  }else if(section2 == 5){
    scene3();
  }
  
  
  player.size = 25;
}

function scene3(){
  let section3 = 1;
  image(img4, 0, 0)
  
  if(story9.t == 1){
      section3 = 2;
    }
  
  
  if(section3 == 1){
    story5.show();
    story6.show();
    story7.show();
    story8.show();
    
    if(story7.t == 1){
      image(img5, 0, 0)
      story5.t = 1;
      story6.t = 1;
      story7.t = 1;
      story9.show();
      story9.message('Or reality?', 50, 150, 105, 16);
    }
    
    
    if(story5.t == 0){
      story5.message('I often drift in sleep like this', 20, 200, 105, 13)
    }
    if(story6.t == 0){
      story6.message('Wondering all by myself', 250, 260, 105, 13)
    }
    if(story7.t == 0){
      //story7.close();
      story7.message('Is this death?', 200, 80, 105, 16)
    }
    if(story8.t == 0){
      story8.message('Scared, lost, hopeless, restless', 15, 360, 105, 10)
    }
  }else if(section3 == 2){
    scene4();
  }
  
  player.size = 12;
}

function scene4(){
  let section4 = 1;
  background(100)
  
  if(story10.t == 1){
    section4 = 2;
  }
  if(puz13.t == 1){
    section4 = 3;
  }
  if(puz1.t == 1 || puz2.t == 1 || puz3.t == 1 || puz4.t == 1 || puz5.t == 1 || puz6.t == 1 || puz7.t == 1 || puz8.t == 1 || puz9.t == 1 || puz10.t == 1 || puz11.t == 1 || puz12.t == 1){
    section4 = 5;
  }
  
  
  if(section4 == 1){
    textAlign(CENTER);
    fill(255);
    text('I lose track of time', 200, 200);
    image(img6, 160, 250, 100, 100)
    story10.message('Yet time watches me', 200, 230, 255, 16)
  }else if(section4 == 2){
    background(0)
    text('Hide', 200, 200)
    image(img7, 0, 0)
    image(img9, 300, -10, 100, 100)
    puz1.message("No.", 145, 150, 255, 16)
    puz2.message("No.", 145, 150, 255, 16)
    puz3.message("No.", 145, 150, 255, 16)
    puz4.message("No.", 145, 150, 255, 16)
    puz5.message("No.", 145, 150, 255, 16)
    puz6.message("No.", 145, 150, 255, 16)
    puz7.message("No.", 145, 150, 255, 16)
    puz8.message("No.", 145, 150, 255, 16)
    puz9.message("No.", 145, 150, 255, 16)
    puz10.message("No.", 145, 150, 255, 16)
    puz11.message("No.", 145, 150, 255, 16)
    puz12.message("No.", 145, 150, 255, 16)
    
    puz13.message("Good.", 145, 150, 255, 16)
  }else if(section4 == 3){
    scene5();
  }else if(section4 == 5){
    lose();
  }
  
  player.playerSpeed = 3;
  player.size = 6;
}

function scene5(){
  background(255)
  
  fill(0)
  textAlign(CENTER)
  text('Can you ever wake up?', 200, 200)
}


function lose(){
  background(0);
  
  fill(255)
  textAlign(CENTER)
  text('This nightmare', 200, 185)
  text('You cant wake from', 200, 200)
  text('Unless you try once more', 200, 215)
  image(img8, 160, 260, 100, 100)
}

/////CLASSES/////

class Button{
  constructor(x, y){
    this.x = x;
    this.y = y;
    
    this.radius = 25;
    this.t = 0;
  }
  
  close(){
    if(dist(player.x, player.y, this.x, this.y) < this.radius * 5){
      player.playerSpeed = 0.10;
    }else{
      player.playerSpeed = 3;
    }
  }
  
  touch(){
    if(dist(player.x, player.y, this.x, this.y) < this.radius){
      return true;
    }else{
      return false;
    }
  }
  
  show(){
    noStroke();
    if(this.t == 0){
      if(this.touch()){
        fill('grey')
      }else{
        fill(105);
      }
    
      circle(this.x, this.y, this.radius * 2)
    }
    
  }
  
  message(words, x, y, shade, size){
    if(this.touch() && this.t == 0){
      rectMode(CENTER)
      fill(shade)
      textSize(size)
      text(words, x, y)
      player.canMove = false
      if(mouseIsPressed){
        this.t += 1
        player.canMove = true
      }
    }
  }
  
  backChange(colorChoice){
    if(this.touch() && this.t == 0){
      background(colorChoice);
    }
  }
  
}

class Player{
  constructor(x, y){
    this.x = x;
    this.y = y;
    
    this.size = 50
    this.canMove = true
    this.playerSpeed = 3
  }
  
  show(){
    noStroke();
    rectMode(CENTER);
    fill('white');
    rect(this.x, this.y, this.size, this.size);
  }
  
  moveAndWrap(){
    if(this.canMove == true){
      if(keyIsDown(LEFT_ARROW) == true){
          this.x -= this.playerSpeed;
        }
  
      if(keyIsDown(RIGHT_ARROW) == true){
        this.x += this.playerSpeed;
      }
  
      if(keyIsDown(UP_ARROW) == true){
        this.y -= this.playerSpeed;
      }
  
      if(keyIsDown(DOWN_ARROW) == true){
        this.y += this.playerSpeed;
      }
    }
  
    if(this.x > 445){
      this.x = -45
    }else if(this.x < -45){
      this.x = 445
    }
  
    if(this.y > 445){
      this.y = -45
    }else if(this.y < -45){
      this.y = 445
    }
    
  }

  
}