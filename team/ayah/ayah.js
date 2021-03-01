'use strict';
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');

const buttonA = document.getElementById('buttonA');
const buttonB = document.getElementById('buttonB');
const buttonC = document.getElementById('buttonC');
const buttonD = document.getElementById('buttonD');

let questions = [
  {
    question:
     'There is four brothers South, North and East, What is the fourth brother name',
    //imgSrc:'img/what.png',
    buttonA:'West',
    buttonB:'what',
    buttonC:'ENSW',
    buttonD:'SouthWest',
    correctButton:'B',
  },
  {
    question:'What is the letter has most water in it ?',
    //imgSrc:'img/sea.png',
    buttonA:'W',
    buttonB:'E',
    buttonC:'L',
    buttonD:'C',
    correctButton:'D',
  },
  {
    question:'Which word is written incorrectly in a dictionary?',
    //imgSrc:'img/incorrectly.png',
    buttonA:' incorrectly',
    buttonB:'dictionary',
    buttonC:' Literally',
    buttonD:'Whom',
    correctButton:'A',
  },
];

let lastLastQ = questions.length -1;
let currentQ = 0;

function renderQ()
{
  let q = questions[currentQ];
  question.innerHTML='<P>' + q.question + '</P>';
  buttonA.innerHTML = q.buttonA;
  buttonB.innerHTML = q.buttonB;
  buttonC.innerHTML = q.buttonC;
  buttonD.innerHTML = q.buttonD;
}

renderQ();


// eslint-disable-next-line no-unused-vars
function checkAnswer(answer){
  if (questions[currentQ].correctButton === answer) {
    console.log('correct');//answerIsCorrect();
  } else {
    console.log('Incorrect');
    //answerIsWrong();
  }
  if (currentQ < lastLastQ ){
    currentQ++;
    renderQ();
  }
}
currentQ++;
