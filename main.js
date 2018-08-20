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

var game = new Phaser.Game(config);

function preload (){
  this.load.image('back', './2-31.jpg');
  this.load.image('ran', './frame-2.png');
  // this.load.spritesheet('run', './spritesheet.png', { frameWidth: 64, frameHeight: 48 });
  this.load.image('ground',"./platform.png");

}



function create (){

  this.add.image(300,400,'back');

  platforms = this.physics.add.staticGroup();   


  platforms.create(300, 798, 'ground').setScale(2).refreshBody();
  this.alpha=0,1;

player = this.physics.add.sprite(100, 650, 'ran').setScale(0.4).setInteractive();
player.setBounce(0.2);
player.setCollideWorldBounds(true);


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


}


function update (){
}

// game.load.image('sonic', 'assets/sprites/sonic_havok_sanity.png');
// var sonic = group.create(300, 200, 'sonic');

//     sonic.inputEnabled = true;
//     sonic.input.enableDrag();
//     sonic.events.onDragStart.add(onDragStart, this);
//     sonic.events.onDragStop.add(onDragStop, this);

//     group.onChildInputDown.add(onDown, this);

// }

// function onDown(sprite, pointer) {

//     result = "Down " + sprite.key;

//     console.log('down', sprite.key);

// }

// function onDragStart(sprite, pointer) {

//     result = "Dragging " + sprite.key;

// }

// function onDragStop(sprite, pointer) {

//     result = sprite.key + " dropped at x:" + pointer.x + " y: " + pointer.y;

//     if (pointer.y > 400)
//     {
//         console.log('input disabled on', sprite.key);
//         sprite.input.enabled = false;

//         sprite.sendToBack();
//     }
