'use strict';

let image = document.getElementById('image');
let question = document.getElementById('questionText');
let answer = document.getElementById('input');
let message = document.getElementById('message');


function Quiz(question, answers, image,background) {
  this.question = question;
  this.answers = answers;
  this.image = image;
  this.background =background;
}

Quiz.prototype.render = function () {
  image.src = this.image;
  question.innerText = this.question;
  document.body.style.backgroundImage = 'url('+this.background+')';
  message.innerText = '';
  answer.value = '';
};

Quiz.prototype.checkAnswer = function () {
  for (let i = 0; i < this.answers.length; i++) {
    if ( answer.value.toLowerCase().trim() === this.answers[i]) {
      message.innerHTML = 'Correct';
      currentQ++;
      loadQuestion();
      break;
    }
    else {
      message.innerHTML = 'Try again';
    }
  }
};


const question1 = new Quiz('What is the number of the parking spot covered by the car?', ['87'], 'dalia.img/q1.PNG','https://media3.giphy.com/media/18BKYnQ5Kc2re/giphy.gif');
const question2 = new Quiz('In a two-sides street there are six houses red, blue ,white, green, yellow and pink . Three are in a row at each side. The red house is right of the middle and opposite to the green house. The blue house is left of the middle and opposite to the pink house.The green house is next to the yellow house. Where is the White House?'
  , ['in washington dc','washington', 'USA', 'united states'],'dalia.img/background2.gif' ,'dalia.img/background2.jpg');
const question3 = new Quiz('In which direction the car is moving?', ['car is not moving, it has no wheels','car is not moving', 'not moving', 'stopped', 'no wheels'], 'dalia.img/q3.PNG','https://www.pwc.ie/images/2019/opposite-arrows-icon.gif');

const questions = [question1, question2, question3];
let currentQ = 0;
loadQuestion();

let submit = document.getElementById('submitAnswer');
submit.onclick = function () {
  questions[currentQ].checkAnswer();
};

function loadQuestion() {
  if(currentQ < questions.length){
    questions[currentQ].render();
  }else{
    ///TODO move to next page
    window.location ='./dalia.html';
  }
}

function showAnswer() {
  let ans = questions[currentQ].answers[0];
  answer.value=ans;
}

let button = document.getElementById('showAnswerBtn');
button.onclick = showAnswer;
