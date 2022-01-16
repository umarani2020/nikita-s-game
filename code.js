var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d7261397-5ad9-4d5e-8f82-509e7154afbc","8f281ca1-8477-44f0-8b90-bec6253938db","8bc1d94e-23e1-4d6a-a7db-8fc85d01a12b"],"propsByKey":{"d7261397-5ad9-4d5e-8f82-509e7154afbc":{"name":"rabbit","sourceUrl":"assets/api/v1/animation-library/gamelab/BaBhTMgCAJP8j1hdaqVVhT6JJs4Wmmva/category_animals/cuteanimals_bunny.png","frameSize":{"x":344,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"BaBhTMgCAJP8j1hdaqVVhT6JJs4Wmmva","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":344,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BaBhTMgCAJP8j1hdaqVVhT6JJs4Wmmva/category_animals/cuteanimals_bunny.png"},"8f281ca1-8477-44f0-8b90-bec6253938db":{"name":"carrot","sourceUrl":null,"frameSize":{"x":78,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"zsOeguRAURWFoP0MQk91SCPjQNKn_u24","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":70},"rootRelativePath":"assets/8f281ca1-8477-44f0-8b90-bec6253938db.png"},"8bc1d94e-23e1-4d6a-a7db-8fc85d01a12b":{"name":"carrot Field","sourceUrl":"assets/v3/animations/2VJbvN1Q-rwfmqi_bHYsb0ajN03mASV-oDc8n5vPYvI/8bc1d94e-23e1-4d6a-a7db-8fc85d01a12b.png","frameSize":{"x":800,"y":800},"frameCount":1,"looping":true,"frameDelay":4,"version":"zk7erDvbx_iA7BQD9PeamXhQwhJ6LfkY","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/v3/animations/2VJbvN1Q-rwfmqi_bHYsb0ajN03mASV-oDc8n5vPYvI/8bc1d94e-23e1-4d6a-a7db-8fc85d01a12b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var rabbit = createSprite(30,25,30,30)
rabbit.setAnimation("rabbit")
rabbit.height=40
rabbit.width=30

var wall1 = createSprite(60,10,20,110 );
wall1.shapeColor="brown"
var wall2 = createSprite(10,130,130,20 );
wall2.shapeColor="brown"
var wall3 = createSprite(130,110,20,110 );
wall3.shapeColor="brown";
var wall4 = createSprite(60,10,20,110 );
wall4.shapeColor="brown";
var wall5 = createSprite(180, 40, 20, 200 );
wall5.shapeColor="brown";
var wall6 = createSprite(10, 230, 20, 110 );
wall6.shapeColor="brown";
var wall7 = createSprite(30, 230,110,20 );
wall7.shapeColor="brown"
var wall8 = createSprite(180,180,110,20 );
wall8.shapeColor="brown"
var wall9 = createSprite(380, 30, 120, 20);
wall9.shapeColor = "brown";
var wall10 = createSprite(280, 100, 110, 20);
wall10.shapeColor = "brown";
var wall11 = createSprite(350, 100, 20, 110);
wall11.shapeColor = "brown";
var wall12 = createSprite(220, 260, 20, 110);
wall12.shapeColor = "brown";
var wall13 = createSprite(400, 250, 230, 20);
wall13.shapeColor = "brown";
var wall14 = createSprite(100, 278, 100, 20);
wall14.shapeColor = "brown";
var wall15 = createSprite(255, 310, 20, 100);
wall15.shapeColor = "brown";
var wall16 = createSprite(25, 348, 100, 20);
wall16.shapeColor = "brown";
var wall17 = createSprite(100, 400, 200, 40);
wall17.shapeColor = "brown";
var wall18 = createSprite(300, 400, 20, 150);
wall18.shapeColor = "brown";
var laser1 = createSprite(100,100,10,200)
laser1.shapeColor = "red"
var laser2 = createSprite(300,300,10,200)
laser2.shapeColor = "red"
var laser3 = createSprite(200,200,200,10)
laser3.shapeColor = "red"
var laser5 = createSprite(100,350,200,10)
laser5.shapeColor = "red"


laser1.velocityY=3
laser2.velocityY=-3
laser3.velocityX=-3
laser5.velocityX=3


var carrot = createSprite(370,360,20,20)
carrot.setAnimation("carrot")
carrot.height=50
carrot.width=50

createEdgeSprites()

function draw() {
 background("#7AEF27 ")
 drawSprites()
 
 rabbit.bounceOff(edges);
  rabbit.bounceOff(wall1);
  rabbit.bounceOff(wall2);
 rabbit.bounceOff(wall3);
  rabbit.bounceOff(wall4);
  rabbit.bounceOff(wall5);
  rabbit.bounceOff(wall6);
  rabbit.bounceOff(wall7);
  rabbit.bounceOff(wall8);
  rabbit.bounceOff(wall9);
  rabbit.bounceOff(wall10);
  rabbit.bounceOff(wall11);
  rabbit.bounceOff(wall12);
  rabbit.bounceOff(wall13);
 rabbit.bounceOff(wall14);
  rabbit.bounceOff(wall15);
  rabbit.bounceOff(wall16);
  rabbit.bounceOff(wall17);
  rabbit.bounceOff(wall18);
  laser1.bounceOff(edges)
  laser2.bounceOff(edges)
  laser3.bounceOff(edges)
  laser5.bounceOff(edges)
  
  if (keyDown("up")) {
    rabbit.y = rabbit.y-10
  }
  
  if (keyDown("down")) {
    rabbit.y = rabbit.y+10
  }
  
  if (keyDown("left")) {
    rabbit.x = rabbit.x-10
  }
  
  if (keyDown("right")) {
    rabbit.x = rabbit.x+10
  }
   
  if (rabbit.isTouching(carrot)) {
    textSize(30)
    text("You Won",150,250)
    playSound("assets/category_achievements/puzzle_game_achievement_02.mp3", false);
    "You Won".setVelocity(0,0)
  rabbit.setVelocity(0,0)
  }
  rabbit.bounceOff(carrot)
  if (rabbit.isTouching(laser1) || rabbit.isTouching(laser2)) {
    textSize(30)
    text("Rabbit is caught",150,250)
    playSound("assets/category_alerts/playful_quirky_negative_game_cue_2.mp3", false);
    "Rabbit is caught".setVelocity(0,0);
  rabbit.setVelocity(0,0)
}
  if (rabbit.isTouching(laser3)) {
    textSize(30)
    text("Rabbit is caught",150,250)
    playSound("assets/category_alerts/playful_quirky_negative_game_cue_2.mp3", false);
    "Rabbit is caught".setVelocity(0,0)
  rabbit.setVelocity(0,0)
  }
    if (rabbit.isTouching(laser5)) {
    textSize(30)
    text("Rabbit is caught",150,250)
    playSound("assets/category_alerts/playful_quirky_negative_game_cue_2.mp3", false);
    "Rabbit is caught".setVelocity(0,0)
  rabbit.setVelocity(0,0)
  }
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
