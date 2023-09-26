let choices = ['rock','paper','scissors'];

//PUSH UI CHANGES TO RPS-US BRANCH with "git push origin rps-ui"


//UI stuff
const btns = document.querySelectorAll('.game-btn');
const message = document.createElement('message');
message.classList.add('message');
const options = document.querySelector('#options');
options.appendChild(message);
message.textContent = 'Select your choice';


btns.forEach((btn) => {btn.addEventListener('click',() => {
    //console.log(btn.textContent);
    game(btn);
})
});

//**** VERY IMPORTANT SYNTAX: both forEach() and addEventListener require a callback function or arrow function
//arrayName.forEach(callbackfunction(item))  
//arrayName.forEach((item) => [item.addEventListener('action',callBackFunction/arrow function)]) */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//game functions

function computerChoice(choices){
    let x = Math.floor(choices.length * Math.random());
    //console.log(Math.random())
    //console.log('choice number is ',x)
    let choice = choices[x];
    //console.log('Computer choice is',choice);
    return choice;
    
}

function gameOver(){
    alert('GAME OVER')
    console
    btns.forEach((btn) => {btn.disabled = true;});

    const restart = document.createElement('button');
    restart.classList.add('restart-btn');
    restart.textContent='Restart?';
    restart.addEventListener('click', () => {location = "index.html";});
    options.appendChild(restart)
}

let i = 0;
function game(playersChoice){

    let rounds = 5;
    let pWins = 0;
    let cWins = 0;
    
    if (i<rounds){
        console.log('ROUND',i+1)
        let comp = computerChoice(choices);
        let player = playersChoice.id;
        console.log('Computer:',comp,'vs Player:',player);
        if (player == comp){
            console.log('It\'s a tie!')
            //continue
        }
        else if (player=='rock'){
            if (comp=='paper'){
                cWins++;
                console.log('Computer wins');
            }
            else if (comp=='scissors'){
                pWins++;
                console.log('Player wins');
            } 
            else{console.log('ERROR');}

        }else if (player =='paper'){
            if (comp=='scissors'){
                cWins++;
                console.log('Computer wins');
            }
            else if (comp=='rock'){
                pWins++;
                console.log('Player wins');
            } 
            else{console.log('ERROR');}
        }else if (player=='scissors'){
            if (comp=='rock'){
                cWins++;
                console.log('Computer wins');
            }
            else if (comp=='paper'){
                pWins++;
                console.log('Player wins');
            }
        }else {
            console.log('ERROR');
        }
        i++
    }
    if(i == rounds){
        if (pWins>cWins){
            console.log('Winner is player!!!');
        }else if (pWins<cWins){
            console.log('Winner is computer!!!');
        }else if (pWins==cWins){
            console.log('It\s a tie. Nobody wins...');
        }else{
            console.log('There is a disturbance in the force');
        }
        gameOver();
        
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