'use strict';


//

//start game function
const startGame = document.getElementById('button1');
startGame.addEventListener('click', handleStartGame);
function handleStartGame(event){
  console.log(event);
  if(event.target.id === 'button1'){
    window.location = './team/stage1/stage1.html';
  }
}

let level = JSON.parse(localStorage.getItem('level'));
// level = 19;
if (level === 19){
  const labelOne = document.getElementById('label1');
  labelOne.textContent = 'Congrats!! You passed all the levels!';
  const labelTwo = document.getElementById('label2');
  labelTwo.textContent = 'But something is telling us that...';
  const labelThree = document.getElementById('label3');
  labelThree.textContent = 'You really wanna do this once more!';
  const button = document.getElementById('button1');
  button.textContent = 'PLAY AGAIN';
}
