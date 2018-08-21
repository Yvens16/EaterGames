class intro extends Phaser.Scene {
  constructor(){
    super ({key:"Intro"});
  }
  preload(){
    this.load.image('Intro','./fat-bobby.png');
  }
  create(){
    this.add.image(300,400,'Intro');

    this.input.keyboard.on('keyup',function(e){
      if(e.key =="Enter"){
        this.scene.start("games")
      }
    }, this)
  }
}