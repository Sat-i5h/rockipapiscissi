let humanScore=0;
let computerScore=0;
let roundNumber=0

function getComputerChoice(){
 randomNumber= Math.floor(Math.random()*3)
 if (randomNumber==0){
    //console.log("paper")
    return "paper";
 }
 else if (randomNumber==1){
    //console.log("scissors")
    return "scissors";
 }
 else {
    //console.log("rock")
    return "rock";
 }
} 



const rock=document.querySelector("#btn_rock")
rock.addEventListener("click", ()=>{
   let humanChoice="rock";
   playRound(humanChoice,getComputerChoice());
});

const paper=document.querySelector("#btn_paper")
paper.addEventListener("click", ()=>{
   let humanChoice="paper";
   playRound(humanChoice,getComputerChoice());
});

const scissors=document.querySelector("#btn_scissors")
scissors.addEventListener("click", ()=>{
   let humanChoice="scissors";
   playRound(humanChoice,getComputerChoice());
});

const round=document.querySelector("#round");
const pScore=document.querySelector("#pScore");
const cScore=document.querySelector("#cScore");




function playRound(humanChoice,computerChoice){
 let cChoice=getComputerChoice()
 if(roundNumber<5){
 if (humanChoice=='rock' || humanChoice=='paper' || humanChoice=='scissors'){
 if (humanChoice==cChoice){
    roundNumber++;
    round.textContent=`RoundNumber: ${roundNumber}`;
 }
 else if(humanChoice=="rock" && cChoice=="paper"){
    computerScore++
    roundNumber++;
    round.textContent=`RoundNumber: ${roundNumber}`;
    cScore.textContent=`ComputerScore: ${computerScore}`;
 }
 else{
    humanScore++
    roundNumber++;
    round.textContent=`RoundNumber: ${roundNumber}`;
    pScore.textContent=`PlayerScore: ${humanScore}`;
 }
}
}
else if(roundNumber==5){
   round.textContent=`RoundNumber Reached ${roundNumber} GAME OVER!!!`;
   if(humanScore>computerScore){
      pScore.textContent=`PlayerScore Won with Score ${humanScore}`;
   }
   else if(computerScore>humanScore){
      cScore.textContent=`Computer Won with Score ${computerScore}`;
   }
   else{
      pScore.textContent=`It's a Draw!!!!`
      cScore.textContent="It's a Draw!!!!"
   }
}
}
