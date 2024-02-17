let playerChoice, pcChoice

function getComputerChoice () {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            pcChoice = "Paper"
            return pcChoice
        case 1:
            pcChoice = "Rock"
            return pcChoice
        case 2:
            pcChoice = "Scissors"
            return pcChoice
    }
}

function getPlayerChoice() {
    switch(prompt("Choose between:\nRock | Paper | Scissors").toLowerCase()) {
        case "rock":
            playerChoice = "rock"
            return playerChoice
        case "paper":
            playerChoice = "paper"
            return playerChoice
        case "scissors":
            playerChoice = "scissors"
            return playerChoice
        default:
            return "špatně"
    }
}

function round(playerChoice, pcChoice) {
    plCh = getPlayerChoice()
    pcCh = getComputerChoice()
}

console.log(getComputerChoice())
console.log("vybral sis:", getPlayerChoice())