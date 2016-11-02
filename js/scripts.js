// Buisness Logic


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
  console.log(die);
  if (die > 1) {
    this.currentTurn += die;
  } else {
    this.currentTurn = 0;

      nextPlayer();
    //  currentGame.players.forEach(function(player){
    //   if (player.isCurrentPlayer === true ) {
    //     player.isCurrentPlayer = false;
    //   } else if (player.isCurrentPlayer === false) {
    //     player.isCurrentPlayer = true;
    //   }
     //});
  };
};
var nextPlayer = function(){
  var current = currentGame.getCurrentPlayer();
  console.log(current);
  currentGame.players[current].isCurrentPlayer = false;
  if(current === currentGame.players.length - 1) {
    currentGame.players[0].isCurrentPlayer = true;
  } else{
    current += 1;
    currentGame.players[current].isCurrentPlayer = true;
  }
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
};

Game.prototype.getCurrentTurn = function() {
  currentGame.players.forEach(function(player){
    if (player.isCurrentPlayer === true ) {
      return player.currentTurn;
      //console.log(player.isCurrentPlayer)
    }
  });
}

Game.prototype.getCurrentPlayer = function() {
  for (var i = 0; i < currentGame.players.length; i++) {
    if (currentGame.players[i].isCurrentPlayer === true){
      return i;
    }
  }
}

var currentGame = new Game();

// User Interface Logic
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
    var current = currentGame.getCurrentPlayer();
    currentGame.players[current].rollDie();
    $("#current-output").text(currentGame.players[current].currentTurn);
    //currentGame.getCurrentPlayer()
    console.log(currentGame);
  });

  $("#hold").submit(function(event) {
    event.preventDefault();
    var current = currentGame.getCurrentPlayer();
    currentGame.players[current].hold();
    $("#score-output").text(currentGame.players[current].totalScore);
    $("#current-output").text(currentGame.players[current].currentTurn);
    console.log(currentGame);
  });


});
