let stats = document.querySelector('.stats').innerHTML;
document.querySelector('.stats').innerHTML = '';
let results = {
    wins: 0,
    losses: 0,
    ties: 0
};
results = JSON.parse(localStorage.getItem('score'));
if (results === null) {
    results = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
document.querySelector('.score').innerText = `Wins: ${results.wins}, Losses: ${results.losses}, Ties: ${results.ties}`;
function computerMove() {
    let move = Math.random();
    if (move < 1 / 3) {
        move = "Rock"
    }
    else if (move < 2 / 3) {
        move = "Paper"
    }
    else if (move < 1) {
        move = "Scissors"
    }
    return move;
}


function game(myMove) {
    document.querySelector('.stats').innerHTML = stats;
    let result = "";
    let move = computerMove();
    if (myMove === "Rock") {
        if (myMove === move) {
            result = "It is a tie";
        }
        else if (move === 'Paper') {
            result = "You lose"
        }
        else if (move === 'Scissors') {
            result = "You win"
        }
    }
    if (myMove === "Paper") {
        if (myMove === move) {
            result = "It is a tie";
        }
        else if (move === 'Rock') {
            result = "You win"
        }
        else if (move === 'Scissors') {
            result = "You lose"
        }
    }
    if (myMove === "Scissors") {
        if (myMove === move) {
            result = "It is a tie";
        }
        else if (move === 'Paper') {
            result = "You win"
        }
        else if (move === 'Rock') {
            result = "You lose"
        }
    }
    if (result === "You win") {
        results.wins += 1;
    }
    else if (result === "You lose") {
        results.losses += 1;
    }
    else if (result === "It is a tie") {
        results.ties += 1;
    }
    let yourMove = document.querySelector('.yourMove');
    if (myMove === "Rock") {
        yourMove.src = 'images/rock-emoji.png';
    }
    else if (myMove === "Paper") {
        yourMove.src = 'images/paper-emoji.png';
    }
    else if (myMove === "Scissors") {
        yourMove.src = 'images/scissors-emoji.png';
    }
    let computerMoveimg = document.querySelector('.computerMove');
    if (move === "Rock") {
        computerMoveimg.src = 'images/rock-emoji.png';
    }
    else if (move === "Paper") {
        computerMoveimg.src = 'images/paper-emoji.png';
    }
    else if (move === "Scissors") {
        computerMoveimg.src = 'images/scissors-emoji.png';
    }
    localStorage.setItem('score', JSON.stringify(results));
    document.querySelector('.status').innerText = result;
    document.querySelector('.score').innerText = `Wins: ${results.wins}, Losses: ${results.losses}, Ties: ${results.ties}`;

}
function reset() {
    results.wins = 0;
    results.losses = 0;
    results.ties = 0;
    localStorage.removeItem('score');
    document.querySelector('.score').innerText = `Wins: ${results.wins}, Losses: ${results.losses}, Ties: ${results.ties}`;
}
