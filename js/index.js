'use strict';


//

//start game function
const startGame = document.getElementById('button1');
startGame.addEventListener('click', handleStartGame);
function handleStartGame(event){
  console.log(event);
  if(event.target.id === 'button1'){
    window.location = './team/ali/ali.html';
  }
}
