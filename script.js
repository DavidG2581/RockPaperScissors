let choices = ['rock','paper','scissors'];

let rounds = 5;
let pWins = 0;
let cWins = 0;

//PUSH UI CHANGES TO RPS-US BRANCH with "git push origin rps-ui"


//UI stuff
const btns = document.querySelectorAll('.game-btn');
const message = document.createElement('message');
const playerScore = document.querySelector('#playerCount');
const computerScore = document.querySelector('#computerCount');
const options = document.querySelector('#options');
const roundInfo = document.createElement('div');

// for adding images to buttons



//Welcome message
message.classList.add('message');
options.appendChild(message);
message.textContent = 'Select your weapon';

//each click fires a round. External counter instead of using a loop.
btns.forEach((btn) => {btn.addEventListener('click',() => {
    game(btn);
})
});


//button highlight when hovering
btns.forEach((btn) => {btn.addEventListener('mouseover',() => {
    btn.style.border = "thick solid yellow"; 
    btn.style.color = "yellow";
})
});

btns.forEach((btn) => {btn.addEventListener('mouseout',() => {
    btn.style.border = ""; 
    btn.style.color = "";
})
});



//**** VERY IMPORTANT SYNTAX: both forEach() and addEventListener require a callback function or arrow function
//arrayName.forEach(callbackfunction(item))  
//arrayName.forEach((item) => [item.addEventListener('action',callBackFunction/arrow function)]) */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//game functions


//show weapons chosen for the current round
function roundInformation(player, comp){
    roundInfo.classList.add('roundInfo');
    options.appendChild(roundInfo);
    roundInfo.textContent = 'Computer\s '+comp+' vs Player\'s '+player;
}

function computerChoice(choices){
    let x = Math.floor(choices.length * Math.random());
    let choice = choices[x];
    return choice;
}

function gameOver(messageWinner){
    options.removeChild(roundInfo);
    btns.forEach((btn) => {btn.disabled = true;});
    const restart = document.createElement('button');
    restart.classList.add('restart-btn');
    restart.textContent='Restart?';
    restart.addEventListener('click', () => {location = "index.html";});
    options.appendChild(restart)
    message.textContent ='GAME OVER!!!\n'+messageWinner;
}

let i = 0;
function game(playersChoice){    
    if ((pWins<5)||(cWins<5)){
        let comp = computerChoice(choices);
        let player = playersChoice.id;
        roundInformation(player, comp);
        message.textContent='Round '+(i+1);
        if (player == comp){
        }
        else if (player=='rock'){
            if (comp=='paper'){
                cWins++;
            }
            else if (comp=='scissors'){
                pWins++;
            } 
            else{console.log('ERROR');}

        }else if (player =='paper'){
            if (comp=='scissors'){
                cWins++;
            }
            else if (comp=='rock'){
                pWins++;
            } 
            else{console.log('ERROR');}
        }else if (player=='scissors'){
            if (comp=='rock'){
                cWins++;
            }
            else if (comp=='paper'){
                pWins++;
            }
        }else {
            console.log('ERROR');
        }
        i++
        playerScore.textContent='Player: '+pWins;
        computerScore.textContent = 'Computer: '+cWins;
    }
    if((pWins == 5)||(cWins == 5)){
        if (pWins>cWins){
            gameOver('Winner is player!!!');
        }else if (pWins<cWins){
            gameOver('Winner is computer!!!');
        }else if (pWins==cWins){
            gameOver('It\s a tie. Nobody wins...');
        }else{
            gameOver('There is a disturbance in the force');
        }
        //gameOver();
        
    }
}

//game(playersChoice);

// function playerChoice(e){
    

//     // let x=0;
//     // while (x==0){
//     //     let playerSelection = prompt("1 = Paper, 2 = Scissors, 3 = Rock");
//     //     if(playerSelection>=1&&playerSelection<=3){
//     //         //console.log('Player choice is',choices[playerSelection-1])
//     //         return choices[playerSelection-1];
//     //     }else{
//     //         alert('Number must be 1, 2, or 3')
//     //     } ;
//     // }    
    
// }