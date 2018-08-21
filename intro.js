class intro extends Phaser.Scene {
  constructor(){
    super ({key:"Intro"});
  }
  preload(){
    this.load.image('Intro','./fat-bobby.png');
    this.load.audio('audioIntro', './Mario.mp3');
  }
  create(){
    this.add.image(300,400,'Intro');

    this.soundFX = this.sound.add('audioIntro',{ loop:"true" });
    this.soundFX.play();

    this.input.keyboard.on("keydown_P", function(e){
      if (this.soundFX.isPlaying) this.soundFX.pause();
      else this.soundFX.resume();
    },this);

    this.input.keyboard.on('keyup',function(e){
      if(e.key =="Enter"){
        this.scene.start("games")
      }
    }, this)
  }
}