let humanScore=0;
let computerScore=0;

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
//console.log(getComputerChoice());

function getHumanChoice(){
    let humanPrompt=prompt("Please enter either Rock, Paper or Scissiors");
    humanChoice=humanPrompt.toLowerCase()
    //console.log(humanChoice);
    return humanChoice;
}


function playRound(humanChoice,computerChoice){
 let hChoice=getHumanChoice()
 let cChoice=getComputerChoice()
 if (hChoice=='rock' || hChoice=='paper' || hChoice=='scissors'){
 if (hChoice==cChoice){
    console.log("It's a draw!")
    console.log(cChoice)
 }
 else if(hChoice=="rock" && cChoice=="paper"){
    console.log("Computer wins!")
    console.log(cChoice)
    computerScore++
    console.log("computer score "+ computerScore)
 }
 else{
    console.log("Human wins!")
    console.log(cChoice)
    humanScore++
    console.log("human score "+ humanScore)
 }
}
else{
    console.log("PLEASE ENTER VALID INPUT")
}
}


function playGame(){

    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    console.log("final human score= "+humanScore)
    console.log("final computer score= "+computerScore)
}
playGame()