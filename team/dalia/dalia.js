'use strict';

let level =JSON.parse(localStorage.getItem('level'));
if (level !== 7){
  level =7;
}
const levelEl = document.getElementById('level');
levelEl.textContent = level;


let question = document.getElementById('label');
let option1 = document.getElementById('button1');
let option2 = document.getElementById('button2');
let option3 = document.getElementById('button3');
let option4 = document.getElementById('button4');

const alertBox = document.getElementById('alert');
const alertButton = document.getElementById('alert-button');
alertButton.addEventListener('click', alertButtonAction);

const alertCorrectBox = document.getElementById('alertCorrect');
const alertCorrectButton = document.getElementById('alertCorrect-button');
alertCorrectButton.addEventListener('click', alertCorrectButtonAction);

option1.addEventListener('click', clickedButtonFunction);
option2.addEventListener('click', clickedButtonFunction);
option3.addEventListener('click', clickedButtonFunction);
option4.addEventListener('click', clickedButtonFunction);

function clickedButtonFunction (event){
  let selectedAnswer =event.target.textContent;
  questions [currentQ].checkAnswer (selectedAnswer);
}

function alertButtonAction (){
  alertBox.style.visibility = 'hidden';
}

function alertCorrectButtonAction (){
  loadQuestion();
  alertCorrectBox.style.visibility='hidden';
}

Quiz.prototype.checkAnswer = function (selectedAnswer) {
  if ( selectedAnswer === this.correctAnswer) {
    level++;
    currentQ++;
    alertCorrectBox.style.visibility='visible';
    const levelEl = document.getElementById('level');
    levelEl.textContent = level;
    localStorage.setItem('level',JSON.stringify(level));
  }
  else {
    alertBox.style.visibility = 'visible';
  }
};


function Quiz(question,option1,option2,option3,option4,correctAnswer) {
  this.question = question;
  this.option1 = option1;
  this.option2 = option2;
  this.option3 = option3;
  this.option4 = option4;
  this.correctAnswer = correctAnswer;
}

Quiz.prototype.render = function () {
  question.innerText = this.question;
  option1.textContent=this.option1;
  option2.textContent=this.option2;
  option3.textContent=this.option3;
  option4.textContent=this.option4;
};


const question1 = new Quiz('What is 3/7 chicken, 2/3 cat and 2/4 goat?','Childbirth','Chiffon','Chicago','Chipmunk','Chicago');
const question2 = new Quiz('Don not be fooled, it is not thunder. Staying put would be a blunder.', 'Stampede','Horses','Earthquake','Arrows','Stampede');
const question3 = new Quiz('Need a hand, well you just wait. We will lend a hand, we each have eight.', 'Octopuses','Spiders','Ants','Roaches','Spiders');


const questions = [question1, question2, question3];
let currentQ = 0;
loadQuestion();

function loadQuestion() {
  if(currentQ < questions.length){
    questions[currentQ].render();
  }else{
    ///TODO move to next page
    window.location ='../mohammad/mohammad.html';
  }
}

