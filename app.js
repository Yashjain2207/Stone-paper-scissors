let userScore = 0;
let sysScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreP = document.querySelector("#user-score");
const sysScoreP = document.querySelector("#sys-score");


const systemChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}
const drawGame = ()=>{
    msg.innerText = "Game was Draw";
}
const showWinner = (userWin,userChoice,sysChoice)=>{
    if(userWin){
        userScore++;
        userScoreP.innerHTML = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${sysChoice}`;
    }else{
        sysScore++;
        sysScoreP.innerText = sysScore;
        msg.innerText = `System Wins. ${sysChoice} beats ${userChoice}`;
    }

}

const playGame = (userChoice)=>{
    const sysChoice = systemChoice();
    if(userChoice===sysChoice){
        drawGame();
    }else{
        let userWin=true;

        if(userChoice==="rock"){
            userWin = sysChoice === "paper"?false:true;
        }else if(userChoice==="paper"){
            userWin = sysChoice === "scissors"?false:true;
        }else{
            userWin = sysChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,sysChoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})