class intro extends Phaser.Scene {
  constructor(){
    super ({key:"Intro"});
  }
  preload(){
    this.load.image('Intro','./fat-bobby.png');
  }
  create(){
    this.add.image(600, 800,'Intro');

    this.input.keybord.on('keyup',function(e){
      if(e.key =="13"){
        this.scene.start("Game")
      }
    }, this)
  }
}