let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");
const genCompChoice =() =>{
    const options=["rock","paper","scissors"];
    const randomID=Math.floor(Math.random()*3);
    return options[randomID];
};

const drawGame =() =>{
    console.log("Game was Draw.");
    msg.innerText=`Game Was Draw.Play Again `;
    msg.style.backgroundColor="black";
};

const showWinner =(userWin , UserChoice, CompChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`you win! ${UserChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose!");
        msg.innerText=`you loss! ${CompChoice} beats ${UserChoice}`;
        msg.style.backgroundColor="red";
    }
};
const PlayGame = (UserChoice) =>{
    console.log("UserChoice=",UserChoice);
    const CompChoice= genCompChoice();
    console.log("CompChoice=",CompChoice);

    if(UserChoice===CompChoice){
        drawGame();
    }else{
        let userWin= true;
        if(UserChoice==="rock"){
            userWin=CompChoice==="paper"?false:true;
        }else if(UserChoice==="paper"){
            userWin=CompChoice==="scissors"?false:true;
        }else{
            (UserChoice==="scissors")
            userWin=CompChoice==="rock"?false:true;
        }
        showWinner(userWin ,UserChoice, CompChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const UserChoice =choice.getAttribute("id");
        PlayGame(UserChoice);
    
    });
});