let choices = ['rock','paper','scissors'];

function computerChoice(choices){
    let choice = Math.floor(choices.length * Math.random());
    console.log('Computer choice is',choices[choice]);
}

computerChoice(choices);