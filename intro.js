class intro extends Phaser.Scene {
  constructor(){
    super ({key:"Intro"});
  }
  preload(){
    this.load.image('Intro','./fat-bobby2.png');
    this.load.audio('audioIntro', './Mario.mp3');
  }
  create(){
    this.add.image(300,400,'Intro');

    this.soundFX = this.sound.add('audioIntro',{ loop:"true" });
    this.soundFX.play();

    this.input.keyboard.on("keydown_P", function(e){
      if (this.soundFX.isPlaying) this.soundFX.pause(e);
      else this.soundFX.resume();
    },this);

    this.input.keyboard.on('keyup',function(e){
      if(e.key =="Enter"){
        this.scene.start("games")
      }
    }, this)
  }
}





// // // get a refrence to the canvas and its context
// // var canvas = document.getElementById("canvas");
// // var ctx = canvas.getContext("2d");

// // // newly spawned objects start at Y=25
// // var spawnLineY = 25;

// // // spawn a new object every 1500ms
// // var spawnRate = 1500;

// // // set how fast the objects will fall
// // var spawnRateOfDescent = 0.50;

// // // when was the last object spawned
// // var lastSpawn = -1;

// // // this array holds all spawned object
// // var objects = [];

// // // save the starting time (used to calc elapsed time)
// // var startTime = Date.now();

// // // start animating
// // animate();


// function spawnRandomObject() {

//     // select a random type for this new object
//     var t;

//     // About Math.random()
//     // Math.random() generates a semi-random number
//     // between 0-1. So to randomly decide if the next object
//     // will be A or B, we say if the random# is 0-.49 we
//     // create A and if the random# is .50-1.00 we create B

//     if (Math.random() < 0.50) {
//         t = "red";
//     } else {
//         t = "blue";
//     }

//     // create the new object
//     var object = {
//         // set this objects type
//         type: t,
//         // set x randomly but at least 15px off the canvas edges
//         x: Math.random() * (canvas.width - 30) + 15,
//         // set y to start on the line where objects are spawned
//         y: spawnLineY,
//     }

//     // add the new object to the objects[] array
//     objects.push(object);
// }



// // function animate() {

// //     // get the elapsed time
// //     var time = Date.now();

// //     // see if its time to spawn a new object
// //     if (time > (lastSpawn + spawnRate)) {
// //         lastSpawn = time;
// //         spawnRandomObject();
// //     }

// //     // request another animation frame
// //     requestAnimationFrame(animate);

// //     // clear the canvas so all objects can be 
// //     // redrawn in new positions
// //     ctx.clearRect(0, 0, canvas.width, canvas.height);

// //     // draw the line where new objects are spawned
// //     ctx.beginPath();
// //     ctx.moveTo(0, spawnLineY);
// //     ctx.lineTo(canvas.width, spawnLineY);
// //     ctx.stroke();

// //     // move each object down the canvas
// //     for (var i = 0; i < objects.length; i++) {
// //         var object = objects[i];
// //         object.y += spawnRateOfDescent;
// //         ctx.beginPath();
// //         ctx.arc(object.x, object.y, 8, 0, Math.PI * 2);
// //         ctx.closePath();
// //         ctx.fillStyle = object.type;
// //         ctx.fill();
// //     }

// // }