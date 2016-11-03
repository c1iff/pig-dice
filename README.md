# Pig Dice

#### A Multiplayer Dice Game

#### By Chris Clifford, Daniel Munger

## Descrption

_This is a Multiplayer dice game where each player rolls a die and if the value is greater than 1, that value is added to the current total, otherwise the current is set to zero and the next has a turn.  If the player chooses to hold the current total the value is added to the total score and the next player has a turn. The first player to 100 wins._

## Setup Requirments

* _Load url_
* _Enter player name and click add player_
* _Click start game_
* _The first player can click roll die then hold to add the score_
* _Continue until the a player reaches a score of 100_

## Known Bugs

_None currently known_

### Support and contact

_Contact cclifford82@gmail.com for support_

### Technologies Used

_HTML, CSS, Javascript, Jquery, Bootstrap_

### Specs
* Create player object that stores the name and current score
    example input: player enters name
    example output: displays name
* Create a game object that store the player objects in an array.

* A method that generates random number 1-6 and adds result to player score if greater than 1.
  -click rolls dice button
  -see sore on screen
* A method to add the current score to the player's total score
* A method to find the current player and switch to the next player
* A UI that has buttons to add player, start a game, roll die, and hold.
* A method to determine which player won the game.

MIT License

Copyright (c) 2016 Chris Clifford and Daniel Munger

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
