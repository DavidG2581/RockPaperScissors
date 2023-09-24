let choices = ['rock','paper','scissors'];

//PUSH UI CHANGES TO RPS-US BRANCH with "git push origin rps-ui"


//UI stuff


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('.game-button');

// we use the .forEach method to iterate through each button

buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    console.log(button.id);
  });
});

// const buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {button.addEventListener("click", ()=>alert('button clicked') )});




//game functions

function computerChoice(choices){
    let x = Math.floor(choices.length * Math.random());
    //console.log(Math.random())
    //console.log('choice number is ',x)
    let choice = choices[x];
    //console.log('Computer choice is',choice);
    return choice;
    
}

function playerChoice(e){
    console.log(e);

    // let x=0;
    // while (x==0){
    //     let playerSelection = prompt("1 = Paper, 2 = Scissors, 3 = Rock");
    //     if(playerSelection>=1&&playerSelection<=3){
    //         //console.log('Player choice is',choices[playerSelection-1])
    //         return choices[playerSelection-1];
    //     }else{
    //         alert('Number must be 1, 2, or 3')
    //     } ;
    // }    
    
}

function game(){
    let rounds = 20;
    let pWins = 0;
    let cWins = 0;
    for (i = 1; i<=rounds; i++){
        console.log('ROUND',i)
        let comp = computerChoice(choices);
        let player = playerChoice();
        console.log('Computer:',comp,'vs Player:',player);
        if (player == comp){
            console.log('It\'s a tie!')
            continue
        }
        if (player=='rock'){
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
            console.log('ERROR')
            alert('ERROR');
        }


    }
    if (pWins>cWins){
        console.log('Winner is player!!!');
    }else if (pWins<cWins){
        console.log('Winner is computer!!!');
    }else if (pWins==cWins){
        console.log('It\s a tie. Nobody wins...');
    }else{
        console.log('There is a disturbance in the force');
    }
}

//game();


