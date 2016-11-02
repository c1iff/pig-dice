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
  var dieOne = Math.floor(Math.random()*6 + 1);
  console.log(dieOne);
  var dieTwo = Math.floor(Math.random()*6 + 1);
  console.log(dieTwo);
  if (dieOne > 1  && dieTwo > 1) {
    this.currentTurn += (dieOne + dieTwo);
  } else if(dieOne ===1 && dieTwo === 1){
    this.totalScore =0;
    this.currentTurn = 0;
    nextPlayer();
  }
  else {
    this.currentTurn = 0;
      nextPlayer();
  };
  return dieOne, dieTwo;
};

var nextPlayer = function(){
  var current = currentGame.getCurrentPlayer();
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
  if (this.totalScore >= 100) {
    currentGame.resetGame();
  }
  this.currentTurn = 0;
  nextPlayer();


};

Game.prototype.getCurrentTurn = function() {
  currentGame.players.forEach(function(player){
    if (player.isCurrentPlayer === true ) {
      return player.currentTurn;

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

Game.prototype.resetGame = function() {
    var current = currentGame.getCurrentPlayer();
    var winner = currentGame.players[current].username
    currentGame.players = [];
    $(".add-player").show();
    $(".gameplay").hide();
    $('#winning-user').text(winner)
    $(".winner").show();

}



var currentGame = new Game();
var playerNumber = 0;

// User Interface Logic
$(document).ready(function() {
  $("#player-profile").submit(function(event) {
    event.preventDefault();
    var playerName = $("#player-name").val();
    var newPlayer = new Player(playerName);
    currentGame.players.push(newPlayer);
    currentGame.players[0].isCurrentPlayer = true;
    $(".total-score").append('<h3>' + newPlayer.username + '\'s Score: <span id="score-output-' + playerNumber +'"></span></h3>')
    playerNumber += 1;
    $(".player-display ul").append('<li>Player ' + playerNumber + ': ' + playerName + '          </li>')

  });

  $("#roll-die").submit(function(event) {
    event.preventDefault();
    var current = currentGame.getCurrentPlayer();
    var die = currentGame.players[current].rollDie();
    var current = currentGame.getCurrentPlayer();
    $("#current-player").text(currentGame.players[current].username);
    $("#current-output").text(currentGame.players[current].currentTurn);
    $("#die").remove();
    $(".current-total").append('<img src="img/die'+ die + '.png" alt="die" id="die"/>' );

    console.log(currentGame);
  });

  $("#hold").submit(function(event) {
    event.preventDefault();
    var current = currentGame.getCurrentPlayer();
    currentGame.players[current].hold();
    $("#score-output-" + current + "").text(currentGame.players[current].totalScore);
    var current = currentGame.getCurrentPlayer();
    $("#current-output").text(currentGame.players[current].currentTurn);
    $("#current-player").text(currentGame.players[current].username);
    console.log(currentGame);
  });


  $("#start-game").click(function() {
    $(".add-player").hide();
    $(".gameplay").show();
    $("#current-player").text(currentGame.players[0].username);
    $("input#player-name").val("");
    $(".player-display ul").text("");
    $(".winner").hide();
  });

});
