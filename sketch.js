
let start;
let cont1;
let cont2;
let story1;
let story2;
let story3;
let story4;

let player;
let sceneplay = 0;

let img;
let img2;

function preload(){
  img = loadImage('blueiris.png')
  img2 = loadImage('blueirisdark1.png')
}

function setup() {
  createCanvas(400, 400);
  
  start = new Button(300, 90);
  cont1 = new Button(70, 280);
  cont2 = new Button(200, 200);
  story1 = new Button(200, 150);
  story2 = new Button(200, 380);
  story3 = new Button(200, 20);
  story4 = new Button(200, 380);
  
  
  player = new Player(200, 200);
}

function draw() {
  background(120);
  
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
    start.message('What is this?', 240, 370, 0)
  }else if(section == 2){
    cont1.message('Ah, I see. Another one.', 100, 370, 0)
  }else if(section == 3){
    cont2.message('I wonder how long this one will keep me', 60, 100, 0)
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
    story1.message('I open my eyes into my own reflection', 70, 370, 255)
    story1.message('And I feel as though I am trapped', 80, 390, 255)
  }else if(section2 == 2){
    story2.message('As Above', 170, 20, 0)
  }else if(section2 == 3){
    image(img2, 0, 0)
    story3.message('So Below', 170, 380, 255)
  }else if(section2 == 4){
    image(img, 0, 0)
    story4.message('If I try, maybe I can find a way out of here', 70, 20, 0)
  }else if(section2 == 5){
    scene3();
  }
  
  
  player.size = 25;
}

function scene3(){
  let section3 = 1;
  background(0)
  
  fill(255)
  text('3', 200, 200)
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
      player.playerSpeed = 0.15;
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
        fill('red')
      }else{
        fill('blue');
      }
    
      circle(this.x, this.y, this.radius * 2)
    }
    
  }
  
  message(words, x, y, shade){
    if(this.touch() && this.t == 0){
      rectMode(CENTER)
      fill(shade)
      textSize(16)
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