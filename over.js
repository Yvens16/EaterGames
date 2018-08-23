class over extends Phaser.Scene {
  constructor(){
    super ({key:"over"});
  }
  preload(){
    this.load.audio('audioEnd', './gameOver.mp3');
  }
  create(){
this.text= this.add.text(0,0," Game Over for you looser!", {font:"50px Impact"});
var tween = this.tweens.add({
  targets: this.text,
  x:20,
  y:400,
  duration: 1000,
  ease:"Elastic",
  easeParams:[1.5,0.5],
  delay:1000
}, this);

    this.soundFX = this.sound.add('audioEnd');
    this.soundFX.play();
    
  }

  update(){
 
  }
}