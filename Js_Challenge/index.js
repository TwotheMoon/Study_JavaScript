const playBtn = document.getElementById("playBtn");
const genNum = document.getElementById("genNum");
const guessNum = document.getElementById("guessNum");

const playerChose = document.querySelector(".answerBox span:first-child");
const machineChose = document.querySelector(".answerBox span:last-child");

function clickPlayBtn() {
    const machineNum = Math.floor(Math.random() * genNum.value) + 1;
    const playerNum = parseInt(guessNum.value);
    
    if(machineNum != playerNum){
        playerChose.innerText = `You chose: ${playerNum},  the machine chose: ${machineNum}.`;
        machineChose.innerText = "You lost!"; 
        machineChose.style.fontWeight = "bold";
        machineChose.style.fontSize = "20px";

    } else if (machineNum === playerNum){
        playerChose.innerText = `You chose: ${playerNum},  the machine chose: ${machineNum}.`;
        machineChose.innerText = "You won!";
        machineChose.style.fontWeight = "bold";  
        machineChose.style.fontSize = "100px";
    }

}

playBtn.addEventListener("click", clickPlayBtn);
