
// let canvasWidth =1280;
// let canvasHeight=800;
// let character,obj;
// let character_posX,character_posY;
// let obj_posX,obj_posY;
// let energy;
// let energy_max = 200;
// let push = false;


// function setup() {
//   canvas = createCanvas(canvasWidth, canvasHeight);
//   canvas.position(windowWidth/2 - canvasWidth/2, 20);
//   character_posX =random(300,900);
//   character_posY =random(0,height/2);
//   obj_posX = 120;
//   obj_posY = random(0,800);
//   sprite_x  = 20;
//   show();

// }

// function draw() {
//   background(255);
//   HP();
//   drawSprites();
//   lift();
//   fill(0,0,0);
//   textSize(50);
//   textAlign(CENTER);
//   text("YOUR ENERGY",width/2,height - 85);
//   rectMode(CORNER);
//   energy = rect(width/2-100,height-50,energy_max,30);

//   if (keyIsDown(UP_ARROW)) {
//     character.position.y -= 3;
//   }
//   if (keyIsDown(DOWN_ARROW)) {
//     character.position.y += 3;

//   }
//   if (keyIsDown(LEFT_ARROW)) {
//     character.position.x -= 3;
//   }
//   if (keyIsDown(RIGHT_ARROW)) {
//     character.position.x += 3;
//   }

// }

// function show() {
//   character =createSprite(character_posX,character_posY,50,50);
//   character.shapeColor="black";
//   obj =createSprite(obj_posX,obj_posY,50,50);
// }

// function HP() {
//   if(keyIsDown(32)) {
//     push = true;
//     energy_max --;

//     if(energy_max < 1) {
//       noLoop();
//       energy_max == 1;
//       fill(255,50,0);
//       textAlign(CENTER);
//       textSize(200);
//       text("GAME OVER",width/2,height/2);

//     }
//   }

//   else {
//     push = false;
//   }

//   if(energy_max > 200 ) {
//     energy_max = 200;
//   }

//   if(push == false) {
//     energy_max = energy_max+0.5;
//   }

// }

// function lift() {
//   if(character.overlap(obj)&&keyIsDown(32)) {

//     obj.position.x = character.position.x -10;
//     obj.position.y = character.position.y;
//   }

// }

//  function goal() {



//  }






let canvasWidth = 800;
let canvasHeight = 400;
let value = false;
let player;
let player_x = 30;
let player_y = 60;


function setup() {
  createCanvas(800, 400);
}



function draw() {

  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);

  background(255, 255, 255);
  fill(0);
  if(value === false ) {
   textAlign(CENTER);
   text('Game Start', width/2, height/2);
 }

 if(value === true) {
  show();
  var s = createSprite(width/2, height/2, 5, 5);
  s.velocity.x = random(-1, 1);
  s.velocity.y = random(-1, 1);
}


drawSprites();
}

function mousePressed() {
  value = true;

}

function show() {
  player = createSprite(mouseX, mouseY, player_x, player_y);
   var s = createSprite(width/2, height/2, 5, 5);
  player.shapeColor = "black";
  if(player.overlap(s)){
    player_x = player_x+1;
    player_y = player_y+1;
  }
}














