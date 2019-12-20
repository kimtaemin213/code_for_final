
let canvasWidth =1280;
let canvasHeight=800;
let character,obj;
let character_posX,character_posY;
let obj_posX,obj_posY;
let energy;
let energy_max = 200;
let push = false;
let purpose;
let purpose_posx,purpose_posy,purpose_sizex,purpose_sizey;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  character_posX =random(300,900);
  character_posY =random(0,height/2);
  obj_posX = 120;
  obj_posY = random(0,800);
  sprite_x  = 20;
  purpose_posx=random(0,1280);
  purpose_posy =random(0,800);
  purpose_sizex = 200;
  purpose_sizey = 200;

  show();


}

function draw() {
  background(255);
  HP();
  drawSprites();
  reset();
  lift();
  fill(0,0,0);
  textSize(50);
  textAlign(CENTER);
  text("YOUR ENERGY",width/2,height - 85);
  rectMode(CORNER);
  energy = rect(width/2-100,height-50,energy_max,30);

  if (keyIsDown(UP_ARROW)) {
    character.position.y -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    character.position.y += 3;

  }
  if (keyIsDown(LEFT_ARROW)) {
    character.position.x -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    character.position.x += 3;
  }

}

function show() {
  character =createSprite(character_posX,character_posY,50,50);
  character.shapeColor="black";
  obj =createSprite(obj_posX,obj_posY,50,50);
  purpose = createSprite(purpose_posx,purpose_posy,purpose_sizex,purpose_sizey);

}

function HP() {
  if(keyIsDown(32)) {
    push = true;
    energy_max --;

    if(energy_max < 1) {
      noLoop();
      energy_max == 1;
      fill(255,50,0);
      textAlign(CENTER);
      textSize(200);
      text("GAME OVER",width/2,height/2);

    }
  }

  else {
    push = false;
  }

  if(energy_max > 200 ) {
    energy_max = 200;
  }

  if(push == false) {
    energy_max = energy_max+0.5;
  }

}

function lift() {
  if(character.overlap(obj)&&keyIsDown(32)) {

    obj.position.x = character.position.x -10;
    obj.position.y = character.position.y;
  }


  }
  function reset()
  {
    if(purpose.overlap(obj) && !keyIsDown(32)) {
      text("level up",width/2,height+100);
      textSize(40);

    }


}








