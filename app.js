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
        case "rock" || "paper" || "scissors":
            return "spravně"
        default:
            console.log("špatný výběr. zvolte jinou")
    }
}

console.log(getComputerChoice())
console.log("vybral sis:", getPlayerChoice())