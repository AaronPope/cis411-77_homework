$(document).ready(function()
{
	updateActivePlayer();
	$('#replay').hide();

	$('td').mouseenter(function()
	{
		if(spaces[this.id] === 0)
		{
			$(this).css("background-color","#BCBDB5");
		}
	})
	
	$('td').mouseleave(function()
	{
		$(this).css("background-color","white");
	})
	
	$('td').click(function()
	{	
		updateActivePlayer();
		if(spaces[this.id] === 0)
		{
			$(this).append(players[activePlayer]);
			spaces[this.id] = players[activePlayer];
		
		
			/*Win Conditions*/
			//Check Rows
			//Row 1
			if((spaces[0] === players[activePlayer]) && (spaces[1] === players[activePlayer]&& spaces[2] === players[activePlayer]))
				notifyWinner();
			//Row 2
			if((spaces[3] === players[activePlayer]) && (spaces[4] === players[activePlayer]&& spaces[5] === players[activePlayer]))
				notifyWinner();
			//Row 3
			if((spaces[6] === players[activePlayer]) && (spaces[7] === players[activePlayer]&& spaces[8] === players[activePlayer]))
				notifyWinner();
			//Column 1
			if((spaces[0] === players[activePlayer]) && (spaces[3] === players[activePlayer]&& spaces[6] === players[activePlayer]))
				notifyWinner();
			//Column 2
			if((spaces[1] === players[activePlayer]) && (spaces[4] === players[activePlayer]&& spaces[7] === players[activePlayer]))
				notifyWinner();
			//Column 3
			if((spaces[2] === players[activePlayer]) && (spaces[5] === players[activePlayer]&& spaces[8] === players[activePlayer]))
				notifyWinner();
			//Diagonal '\'
			if((spaces[0] === players[activePlayer]) && (spaces[4] === players[activePlayer]&& spaces[8] === players[activePlayer]))
				notifyWinner();
			//Diagonal '/'
			if((spaces[2] === players[activePlayer]) && (spaces[4] === players[activePlayer]&& spaces[6] === players[activePlayer]))
				notifyWinner();
			
			if(!gameOver)
			{
				++turn;			
				if(turn === 9)
				{
					alert("It's a cat game.  The game will now reset.");
					resetGame();
				}
			}	
			updateActivePlayer();
		}
	})
});

function updateActivePlayer()
{
	activePlayer = turn % 2;
	$('#status').text("Active Player: " + players[activePlayer]);
}
function notifyWinner()
{
	gameOver = true;
	//I have no idea why this line won't trigger
	$('#status').text("WINNER: " + players[activePlayer]);
	$('#status').css("color", "red");
	
	//makes all spaces unable to proceed with code in click action
	for(var count = 0; count < spaces.length; ++count)
		spaces[count] = 1;
	$('#replay').show();
}

function resetGame()
{
	//empty board
	$('.boardElement').empty();
	
	//reset tracking array
	for(var count = 0; count < spaces.length; ++count)
		spaces[count] = 0;
	
	//reset variables
	gameOver = false;
	turn = 0;
	
	//update player status
	$('#status').css("color", "black");
	updateActivePlayer();
	
	//hide Replay Button
	$('#replay').hide();
}
/*
function evalWinCondition
{
	//Check Rows
	//Row1
	if(spaces[0] === spaces[1] === spaces[2])
		alert(activeplayer + "wins!");
}*/

var gameOver = false;
var playerX = "X";
var playerO = "O";
var players = [playerX, playerO];
var spaces = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var turn = 0;
var activePlayer;