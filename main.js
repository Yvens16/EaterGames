var config = {
  type:Phaser.AUTO,
  width: 600,
  height: 800,
  physics: {
    default:'arcade',
    arcade: {
      gravity: {y: 300}
    }
  },
  scene: [intro, games],

};

var player;
var platforms;
var burger;
var burgers= [];
var broco;
var brocos=[];
var score = 0;
var scoreText;

var game = new Phaser.Game(config);
