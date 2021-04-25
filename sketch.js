var game,form,datatabase
var gameState = 0;
var playerCount;
var player;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);

game = new Game();
game.getState();
game.Start();


}

function draw(){
  background("white");

  if(playerCount === 4){

    game.update(1);


  }

  if(gameState === 1){
    
    game.Play();
  }
  
}