//user needs to choose r p or s
//opponent needs to choose r p or s
//the outcome

//conditions winlose or tie

//if
//win condition 
//If user chooses R and opponent chooses S 
//If user chooses P and pc R
//If user chooses S and pc P

//else if
//lose conditions
//user S pc R
//user R pc P
//user P pc S

//else tie

//if win
//winscore ++

//if loss
//lose score ++

//if tie
//tie score ++

//display score

//show how many times the user has selecte R P or S

//confirm to play again
document.querySelector('#play').addEventListener("click",runGame);

let userWin = 0
let userRock = 0
let userPaper = 0
let userScissors = 0
let userLoss = 0
let userTie = 0

function checkResults(userChoice, computerChoice){
    if(userChoice === "R" && computerChoice === "S"){
        alert("Win");
        userWin++
        userRock++                                  
    } else if (userChoice === "P" && computerChoice === "R"){
        alert("Win");
        userWin++
        userPaper++
    } else if (userChoice === "S" && computerChoice === "P"){
        alert("Win");
        userWin++
        userScissors++
        
    } else if (userChoice === "S" && computerChoice === "R"){
        alert("Loss");
        userLoss++
        userScissors++
        
    } else if (userChoice === "P" && computerChoice === "S"){
        alert("Loss");
        userLoss++
        userPaper++
    } else if (userChoice === "R" && computerChoice === "P"){
        alert("Loss");
        userLoss++
        userRock ++
    } else {
        alert("Draw");
        userTie++
        
    }
}

function userEntry(){
    const userPick = prompt("Type R, P, S").toLocaleUpperCase();
    return userPick
}

function computerEntry(){
    const options = ["R","P", "S"];
    const randomIndex = Math.floor(Math.random() *3)
    const randomSelection = options[randomIndex]
    return randomSelection
}

function runGame (){
    do{
        const userPick = userEntry();
        const computerPick = computerEntry();
        checkResults(userPick, computerPick);
        alert(`You have chosen rock ${userRock} times, papers ${userPaper} times, and scissors ${userScissors} times. You have won ${userWin} times, lost ${userLoss} times, it has been a draw ${userTie} times.`);
    } while (confirm("Would you like to play again?"));
    }
    
