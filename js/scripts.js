//
var currentGame = new Game();

function Player(username) {
  this.username = username;
  this.currentTurn = 0;
  this.totalScore = 0;
  this.isCurrentPlayer = false;
};

function Game() {
  this.players = [];
};

Player.prototype.rollDie = function() {
  var die = Math.floor(Math.random()*6 + 1);
    if (die > 1) {
      this.currentTurn += die;
    } else {
      this.currentTurn = 0;
      currentGame.players.forEach(function(player){
        if (player.isCurrentPlayer === true ) {
          player.isCurrentPlayer = false;
        } else if (player.isCurrentPlayer === false) {
          player.isCurrentPlayer = true;
        }
      });
    };
    console.log(currentGame);
};

Player.prototype.hold = function() {
  this.totalScore += this.currentTurn;
  this.currentTurn = 0;
  currentGame.players.forEach(function(player){
    if (player.isCurrentPlayer === true ) {
      player.isCurrentPlayer = false;
    } else if (player.isCurrentPlayer === false) {
      player.isCurrentPlayer = true;
    }
  });
  console.log(currentGame);
};

// User Logic
$(document).ready(function() {

  $("#player-profile").submit(function(event) {
    event.preventDefault();
    var playerName = $("#player-name").val();
    var newPlayer = new Player(playerName);
    currentGame.players.push(newPlayer);
    currentGame.players[0].isCurrentPlayer = true;
  });

  $("#roll-die").submit(function(event) {
    event.preventDefault();
    currentGame.players[0].rollDie();
    $("#current-output").text(currentGame.players[0].currentTurn);
  });

  $("#hold").submit(function(event) {
    event.preventDefault();
    currentGame.players[0].hold();
    $("#score-output").text(currentGame.players[0].totalScore);
    $("#current-output").text(currentGame.players[0].currentTurn);
  });


});
