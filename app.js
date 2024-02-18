let playerChoice
let playerWin = 0
let computerWin = 0

function getComputerChoice () {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "scissors";
    }
}

function getPlayerChoice() {
    switch(prompt("Choose between:\nRock | Paper | Scissors").toLowerCase()) {
        case "rock":
            return "rock"
        case "paper":
            return "paper"
        case "scissors":
            return "scissors"
        default:
            return getPlayerChoice()
        }
}

function getRound(computerValue = getComputerChoice(), playerValue = getPlayerChoice()) {
    switch(computerValue) {
        case "paper":
            switch(playerValue) {
                case "paper":
                    return "tie"
                case "rock":
                    return "computer"
                case "scissors":
                    return "player"
            }
        case "rock":
            switch(playerValue) {
                case "paper":
                    return "player"
                case "rock":
                    return "tie"
                case "scissors":
                    return "computer"
            }
        case "scissors":
            switch(playerValue) {
                case "paper":
                    return "computer"
                case "rock" :
                    return "player"
                case "scissors":
                    return "tie"
            }
    }
}

function roundCounter(value = getRound()) {
    if (value == "computer") {
        computerWin++
    }
    else if(value == "player") {
        playerWin++
    }
    else {
        return 0
    }
}

for(let i = 0; i < 5; i++) {
    roundCounter()
    if(i == 4) {
        if(computerWin > playerWin) {
            console.log("Computer Won by ", computerWin, "/", playerWin)
        }
        else if(computerWin < playerWin) {
            console.log("Player won by ", playerWin, "/", computerWin)
        }
        else {
            console.log("Tie")
        }
    }
    else {
        continue
    }
}