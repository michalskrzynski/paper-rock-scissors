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

function game() {

  for(let i=0; i<5; i++) {
    console.log( playRound( getComputerChoice(), getComputerChoice()) );
  }
}

game();
