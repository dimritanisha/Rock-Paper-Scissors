let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
let UserScorePara = document.querySelector("#user-score");
let CompScorePara = document.querySelector("#comp-score");

const getCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const index = Math.floor(Math.random()*3);
    return options[index];
}


const playGame=(userChoice)=>{
    console.log(`user has choosed ${userChoice}`);
    //get computer choice
    const CompChoice =getCompChoice();
    console.log(`computer has choosed ${CompChoice}`);
    if(userChoice === CompChoice){
        Draw();
    } 
    else{
        let userWin= true;
        if(userChoice==="rock"){
            //because it can't be draw so computer either choosed paper or scissors
            userWin=CompChoice ==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=CompChoice==="scissors"?false:true;
        }
        else{
            userWin=CompChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,CompChoice );
    }
} 
choices.forEach((choice)=>{
    const userChoice =choice.getAttribute("id")
    choice.addEventListener("click",()=>{
        playGame(userChoice);
    });
});
const Draw=()=>{
    console.log("match is draw");
    msg.innerText ="game draw ! please play again.";
    msg.style.backgroundColor= "yellow";
};
const showWinner=(userWin, userChoice,CompChoice)=>{
    if(userWin){
        userScore++
        UserScorePara.innerText=userScore
        console.log("You win");
        msg.innerText= `You Win! ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        CompScorePara.innerText=compScore
        console.log("You lose")
        msg.innerText =`You lose:( ${CompChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

