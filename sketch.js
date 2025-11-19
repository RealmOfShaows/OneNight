
let test;
let test2;
let test3;
let test4;

let player;

function setup() {
  createCanvas(400, 400);
  
  test = new Button(150, 130);
  test2 = new Button(130, 300);
  test3 = new Button(50, 70);
  test4 = new Button(60, 240);
  
  
  player = new Player(300, 200);
}

function draw() {
  background(120);
  
  test.backChange(0)
  test.close()
  test.message('I have no mouth and I must', 240, 370)
  test2.message('scream', 240, 100)
  test.show();
  test2.show();
  test3.show();
  test4.show();
  
  player.show();
  player.moveAndWrap();
  
  
  console.log(test.t)
  
}

/////CUSTOM FUNCTIONS/////



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
    
    if(this.touch()){
      fill('red')
    }else{
      fill('blue');
    }
    
    circle(this.x, this.y, this.radius * 2)
  }
  
  message(words, x, y){
    if(this.touch() && this.t == 0){
      rectMode(CENTER)
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
    rectMode(CENTER);
    fill('white');
    rect(this.x, this.y, 50, 50);
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