let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user");
const compScore = document.querySelector("#comp");

const genCompChoice = () => {
    let option = ["rock", "paper", "scissor"];
    let ind = Math.floor(Math.random()*3);
    return option[ind];
}

const showWinner = (userWin) => {
    if(userWin) {
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
        user++;
        userScore.innerText = user;
    }
    else {
        msg.innerText = "Computer Win";
        msg.style.backgroundColor = "red";
        comp++;
        compScore.innerText = comp;
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else { //scissor
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

drawGame = () => {
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "grey";

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});