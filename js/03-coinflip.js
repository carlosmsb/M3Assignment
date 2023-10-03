let randomNum = Math.round(Math.random());
let choice = prompt("Choose Heads or Tails");

if (randomNum === 0) {
    if (choice.toLowerCase() === "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was heads but you chose tails...you lose!");
    } 
} else {
    if (choice.toLowerCase() === "tails") {
        alert("The flip was tails and you chose tails...you win!");
    } else {
    alert("The flip was tails but you chose heads...you lose!");
    }
}
