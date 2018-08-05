let playerScore = 0;
let compScore = 0;
const playerScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const reset_div = document.getElementById("reset");

function getComputerChoice(){
	const choices = ['rock', 'paper', 'scissors'];
	const randomChoice= Math.floor(Math.random() * 3);
	console.log(randomChoice);
	return choices[randomChoice];
	
};

function win(playerChoice, compChoice) {
	playerScore++;
	playerScore_span.innerHTML = playerScore;
	compScore_span.innerHTML = compScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${playerChoice}${smallUserWord} beats ${compChoice}${smallCompWord} .You Win!`
    document.getElementById(playerChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(playerChoice).classList.remove('green-glow'), 300);
};

function lose(playerChoice, compChoice) {
	 compScore++;
	 playerScore_span.innerHTML = playerScore;
	 compScore_span.innerHTML = compScore;
	 const smallUserWord = "user".fontsize(3).sub();
	 const smallCompWord = "comp".fontsize(3).sub();
	 result_p.innerHTML =  `${compChoice}${smallCompWord} beats ${playerChoice}${smallUserWord} .You lost...`
	 document.getElementById(playerChoice).classList.add('red-glow');
	 setTimeout(()=> document.getElementById(playerChoice).classList.remove('red-glow'), 300);

};

function draw(playerChoice, compChoice) {
	 const smallUserWord = "user".fontsize(3).sub();
	 const smallCompWord = "comp".fontsize(3).sub();
	 result_p.innerHTML =  `${compChoice}${smallCompWord} equals ${playerChoice}${smallUserWord}.It's a draw.`
	 document.getElementById(playerChoice).classList.add('orange-glow');
	 setTimeout(() => document.getElementById(playerChoice).classList.remove('orange-glow'), 300);

};

function game(playerChoice){
	const compChoice = getComputerChoice();
	switch(playerChoice + compChoice) {
		case "rockscissors":
		case "paperock":
		case "scissorspaper":
		win(playerChoice,compChoice);
		break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
		lose(playerChoice,compChoice);
		break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
		draw(playerChoice,compChoice);
		break;
	}


};

function reset(){
	reset_div.addEventListener('click', function(){
    compScore = 0;
    playerScore = 0;
	});
};

function main(){
	rock_div.addEventListener('click', function(){
		game('rock');
	});

	paper_div.addEventListener('click', function(){
		game('paper');

	});

	scissors_div.addEventListener('click', function(){
		game('scissors');

	});
};

main();
