var config = {
  type: Phaser.AUTO,
  width: 600,
  height: 800,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

var player;
var platforms;
var burger;
var score = 0;
var scoreText;

var burgers = [];
var speed = 5;





var game = new Phaser.Game(config);

function preload (){
  this.load.image('back', './2-31.jpg');
  this.load.image('ran', './frame-2.png');
  this.load.image('burger', './burger.png');
  this.load.image('broco', './Broccoli.png');
  // this.load.spritesheet('run', './spritesheet.png', { frameWidth: 64, frameHeight: 48 });
  this.load.image('ground',"./platform.png");

}



function create (){

  this.add.image(300,400,'back');

  platforms = this.physics.add.staticGroup();   


  platforms.create(300, 798, 'ground').setScale(2).refreshBody();
  this.alpha=0,1;

player = this.physics.add.sprite(100, 650, 'ran').setScale(0.3).setInteractive();
player.setBounce(0.2);
player.setCollideWorldBounds();


this.physics.add.collider(player, platforms);

//------------- DRAGGABLE IMAGE ----------------------
// var player=this.add.sprite(200,300,'ran').setInteractive();
this.input.setDraggable(player);


this.input.dragDistanceThreshold = 10;

this.input.on('dragstart', function (pointer, gameObject){
});

this.input.on('drag', function(pointer, gameObject, dragX, dragY){
  gameObject.x = dragX;
  gameObject.y = dragY;
});

this.input.on('dragend', function (pointer, gameObject){
  gameObject.clearTint();
});
//------------- DRAGGABLE IMAGE ----------------------


//------------- FALLING BURGER OBJ----------------------
burger = this.physics.add.group({
  key:'burger',
  repeat:4,
  setXY: {x:80, y:0, stepX: 120 },
  setScale: { x: 0.1, y: 0.1, stepY: 0 }
});

burger.children.iterate(function (child){
  child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
});

this.physics.add.overlap(player, burger, collectBurger, null,this);

function collectBurger(player, burger){
  burger.disableBody(true, true);
  score +=10;
  scoreText.setText('Score: ' + score);
}
//------------- FALLING BURGER OBJ----------------------

//------------- FALLING Brocolli OBJ----------------------
broco = this.physics.add.group({
  key:'broco',
  repeat:4,
  setXY: {x:80, y:0, stepX: 120 },
  setScale: { x: 0.1, y: 0.1, stepY: 0},
});

broco.children.iterate(function (child){
  child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.7));

});
//-----------------

//-------------
this.physics.add.collider(broco, player, hitBroco);

function hitBroco (player, broco){
  broco.body.bounce.setTo(2,2);
  // player.body.bounce.setTo(1,1);
  // bomb.setCollideWorldBounds(true);
  // broco.setVelocity(Phaser.Math.Between(-900,-900), 0);
  broco.setVelocity(-200);
  score -=10;
  scoreText.setText('score: ' +score);
}
//------------- FALLING Brocolli OBJ----------------------

scoreText = this.add.text(16,16, 'score:0', {fontSize: '32px', fill: 'red'});

}


function update (){
}

