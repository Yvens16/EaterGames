class games extends Phaser.Scene {
  constructor(){
    super ({key:"games"});
  }
  preload(){
  this.load.image('back', './2-31.jpg');
  this.load.image('ran', './frame-2.png');
  this.load.image('burger', './burger.png');
  this.load.image('broco', './Broccoli.png');
  this.load.image('ground',"./platform.png");
  }
  


  
 create(){
    //-------BACKGROUND----------
    this.add.image(300,400,'back');
    //-------BACKGROUND----------

    // createBurgers();

    // platforms = this.physics.add.staticGroup();   
  
  
    // platforms.create(300, 798, 'ground').setScale(2).refreshBody().alpha=0;;
    // this.alpha=0,1;
  
  player = this.physics.add.image(100, 650, 'ran').setScale(0.3).setBounceY().setInteractive();
  player.body.setGravityY(10000);
  player.setBounce(0);
  player.setCollideWorldBounds(true);
  
  
  this.physics.add.collider(player, platforms);


  
  //------------- DRAGGABLE IMAGE ----------------------
  this.input.setDraggable(player);
  
  
  this.input.dragDistanceThreshold = 10;
  
  this.input.on('dragstart', function (pointer, gameObject){
  });
  
  this.input.on('drag', function(pointer, gameObject, dragX, dragY){
    gameObject.x = dragX;
    // gameObject.y = dragY;
  });
  
  this.input.on('dragend', function (pointer, gameObject){
    gameObject.clearTint();
  });
  //------------- DRAGGABLE IMAGE ----------------------
  
  
  //------------- FALLING BURGER OBJ----------------------

  var game = this;
  setInterval(function () {
    var x = Math.floor(Math.random() * 601);
    burger = game.physics.add.image(x,0,'burger').setScale(0.1,0.1).setInteractive();
    game.physics.add.overlap(player, burger, collectBurger, null,game);
  }, 1000);

  broco = this.physics.add.image(150,0,'broco').setScale(0.1,0.1).setInteractive();
  burger = this.physics.add.image(100,0,'burger').setScale(0.1,0.1).setInteractive();
  
  
  this.physics.add.overlap(player, burger, collectBurger, null,this);
  
  function collectBurger(player, burger){
    burger.disableBody(true, true);
    score +=10;
    scoreText.setText('Score: ' + score);
  }

  
  //------------- FALLING BURGER OBJ----------------------
  
  //------------- FALLING Brocolli OBJ----------------------
  var game = this;
  setInterval(function () {
    var x = Math.floor(Math.random() * 601);
    broco = game.physics.add.image(x,0,'broco').setScale(0.1,0.1).setInteractive();
    game.physics.add.collider(broco, player, hitBroco);

  }, 1000);

  
  
  //-----------------
  //-------------
  this.physics.add.collider(broco, player, hitBroco);
  
  function hitBroco (player, broco){
   broco.body.bounce.setTo(1,1);
    player.body.setVelocity(-300);
    score -=10;
    scoreText.setText('score: ' +score);
  }

  //------------- FALLING Brocolli OBJ----------------------
  
  scoreText = this.add.text(16,16, 'score:0', {fontSize: '32px', fill: 'red'});



   //------ LOOP FOR FALLING OBJECT----------

 //------ LOOP FOR FALLING OBJECT----------

 }
  //--------UPDATE FUNCTION----------

 update (){

  }



}

  //--------UPDATE FUNCTION----------





  






