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
  scene: [intro, games]
}

var game = new Phaser.Game(config);
