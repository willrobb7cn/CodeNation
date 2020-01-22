/*

GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, targetScore;

init();



function onFormSubmit() {
	let targetScoreElement = document.getElementById("targetScore");
	console.log(targetScoreElement.value)
	return targetScoreElement.value;
}



document.querySelector('.btn-roll').addEventListener('click', function () {
	targetScore = onFormSubmit();
	console.log(targetScore);
	if (gamePlaying) {
		//1. Random Number 
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;
		console.log(dice1, dice2)

		// display result 
		document.getElementById('dice-1').style.display = 'block';
		document.getElementById('dice-2').style.display = 'block';
		document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
		document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
	}
	// //update round score if valie was not a 1
	// if (dice1 !== 1 && dice2 !== 1) {
	// 	// console.log(dice1 + dice2)
	// 	roundScore += (dice1 + dice2)
	// 	document.querySelector('#current-' + activePlayer).textContent = roundScore;
	// 	// alert("You rolled a 1, skip a turn")
	// }else{
	// 	//Next player
	// 	nextPlayer()
	// }


	if (dice1 === 6 && dice2 === 6) {
		console.log('Double 6')
		document.querySelector('#current-' + activePlayer).textContent = '0';
		document.querySelector('#score-' + activePlayer).textContent = '0';
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		roundScore = 0
		scores[activePlayer] = 0
		alert('Rolled a double 6 - You lose everything ;)')
		nextPlayer();
	//up tp here
	} else if (dice1 === 1 || dice2 === 1) {
		//add score
		// console.log('Rolled a 1')
		alert('Rolled a 1, skip your turn!')
		nextPlayer();
	} else {
		console.log('add score')
		//FIX
		roundScore += (dice1 + dice2);
		console.log(roundScore)
		document.querySelector('#current-' + activePlayer).textContent = roundScore
	}
	// lastRoll = dice;
})



document.querySelector('.btn-hold').addEventListener('click', function () {

	if (gamePlaying) {
		//add current score to global score 
		scores[activePlayer] += roundScore;
		//Update UI 
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		//Check if player won the game
		console.log(targetScore + " is the targetScore")
		if (scores[activePlayer] >= targetScore) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.getElementById('dice-1').style.display = 'none';
			document.getElementById('dice-2').style.display = 'none';

			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}
	}

})



function nextPlayer() {
	//next player 
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

	console.log('next player: ' + activePlayer)

	roundScore = 0;
	lastRoll = null
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	// document.querySelector('.player-0-panel').classList.remove('active');
	// document.querySelector('.player-1-panel').classList.add('active');

	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);




function init() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}
