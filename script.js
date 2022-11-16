function getComputerChoice() {
  const rand = Math.floor( Math.random()*3 );
  switch(rand) {
    case 0: return 'Paper';
    case 1: return 'Rock';
    case 2: return 'Scissors';
    default: 'Scissors'; //don't know if rand ===3 is possible 
  }
}

function playRound(player, computer) {
  if( player === computer ) 
    return `${player} vs ${computer}. It's a draw!`;

  let win = true;
  switch( player ) {
    case 'Paper': { 
      win = computer === 'Rock' ? win : !win; 
      break;
    }
    case 'Rock': { 
      win = computer === 'Scissors' ? win : !win; 
      break;
    }
    case 'Scissors': { 
      win = computer === 'Paper' ? win : !win; 
      break;
    }
    default: console.error( player + ' Invalid');
  }

  return win ? `You Win! ${player} beats ${computer}` : `You Loose! ${computer} beats ${player}`;
}

let human = 0;
let computer = 0;

function onPlay( e ) {
  console.log( human );
  const choice = e.target.innerText;
  const result = playRound( choice, getComputerChoice() );

  document.querySelector('#outcome').innerText = result;
  if( result.includes('You Win!') ) {
    human = human+1;
    document.querySelector('#result-human').innerText = human;
  }
  if( result.includes('You Loose!') ) {
    computer = computer+1;
    document.querySelector('#result-computer').innerText = computer;
  }

  if( human === 5 ) {
    setTimeout( () => alert('You Won!'), 0);
    
  }
  if( computer === 5 ) {
    setTimeout( () => alert('You Lost!'), 0 );
  }
}

let buttons = document.querySelectorAll('button');
buttons.forEach( div => div.addEventListener('click', onPlay) );
