'use strict';

const aliQuestions = ['1 + 1 =', 'What color is the sun??', 'Why?'];
const aliAnswers = [['2', '-77-', '55', '2'], ['Yellow Hello', 'Some Yellow', 'More Yellow', 'Don\'t Yellow At Me!'], ['because', 'because', 'because', 'because']];
console.log(aliQuestions);
console.log(aliAnswers);

const aliAnswerOne = aliAnswers[0];
const aliAnswerTwo = aliAnswers[1];
const aliAnswerThree = aliAnswers[2];
console.log(aliAnswerOne);


//alert box
const alertBox = document.getElementById('alert');
const alertText = document.getElementById('alert-text');
const alertButton = document.getElementById('alert-button');


//first question
const clickQuestOne = document.getElementById('main');
clickQuestOne.addEventListener('click', handleClickOne);
let counterQuestOne = 0;

function handleClickOne(event) {
  console.log(event.target);
  console.log(event.target.id);
  console.log(event.target.className);
  if(event.target.className === 'button') {
    alertBox.style.visibility = 'visible';
    alertText.textContent = 'Think outside the box, baleez.';
    alertButton.textContent = 'OKIE DOKIE, I WILL THINK OUTSIDE THE BOX';

  }
  if(event.target.id === 'alert-button') {
    alertBox.style.visibility = 'hidden';
  }

  if(event.target.id === 'fig1'){
    const figOne = document.getElementById('fig1');
    figOne.style.opacity = '100%';
    figOne.style.pointerEvents = 'none';
    counterQuestOne++;
    console.log(counterQuestOne);
  } else if(event.target.id === 'fig1-2'){
    const figOneTwo = document.getElementById('fig1-2');
    figOneTwo.style.opacity = '100%';
    figOneTwo.style.pointerEvents = 'none';
    counterQuestOne++;
  } 
  // else if(event.target.className === 'figure') {
  //   alertBox.style.visibility = 'visible';
  //   alertText.textContent = 'You\'re starting to think outside the box!!';
  //   alertButton.textContent = 'LEMME TRY AGAIN, BALEEZ!';
  // }
  if(counterQuestOne === 2){
    alertBox.style.visibility = 'visible';
    alertText.textContent = 'MABROOK!!! these were the only two balls with the same color!';
    alertButton.textContent = 'EASY PEASY LEMON SQUEASY... NEXT QUESTION!'
    console.log('before', counterQuestOne);
    counterQuestOne = 0;
    // score++;
    console.log('after', counterQuestOne);
    clickQuestOne.removeEventListener('click', handleClickOne);
    const clickQuestTwo = document.getElementById('main');
    clickQuestTwo.addEventListener('click', handleClickTwo);
  }
}


//second question
function handleClickTwo(event) {
  const labelEl = document.getElementById('label');
  labelEl.textContent = 'What color is the sun??!';
  const buttonOne = document.getElementById('button1');
  buttonOne.textContent = aliAnswerTwo[0];
  const buttonTwo = document.getElementById('button2');
  buttonTwo.textContent = aliAnswerTwo[1];
  const buttonThree = document.getElementById('button3');
  buttonThree.textContent = aliAnswerTwo[2];
  const buttonFour = document.getElementById('button4');
  buttonFour.textContent = aliAnswerTwo[3];
  
  console.log(event.target);
  console.log(event.target.id);
  console.log(event.target.className);
  if(event.target.className === 'button') {
    alertBox.style.visibility = 'visible';
    alertText.textContent = 'Come ooooon!! Think outside the box, baleez.';
    alertButton.textContent = 'ALRIGHT!';
  }
  if(event.target.id === 'alert-button') {
    alertBox.style.visibility = 'hidden';
  }

  if(event.target.id === 'fig3'){
    const figThree = document.getElementById('fig3');
    figThree.style.opacity = '100%';
    figThree.style.pointerEvents = 'none';
    alertBox.style.visibility = 'visible';
    alertText.textContent = 'YEPPP!!! that was the actual shining burning churning sun!';
    alertButton.textContent = 'TOO EASY... NEXT QUESTION!';
    const clickQuestTwo = document.getElementById('main');
    clickQuestTwo.removeEventListener('click', handleClickTwo);
    const clickQuestThree = document.getElementById('main');
    clickQuestThree.addEventListener('click', handleClickThree);
  } 
  // else if(event.target.className === 'figure') {
  //   alertBox.style.visibility = 'visible';
  //   alertText.textContent = 'Nope!!';
  //   alertButton.textContent = 'LEMME TRY AGAIN, BALEEZ!';
  // }
}

//third question
let figureCounter = 0;
let buttonCounter = 0;
function handleClickThree(event) {
  const labelEl = document.getElementById('label');
  labelEl.textContent = 'Why??';
  const buttonOne = document.getElementById('button1');
  buttonOne.textContent = aliAnswerThree[0];
  const buttonTwo = document.getElementById('button2');
  buttonTwo.textContent = aliAnswerThree[1];
  const buttonThree = document.getElementById('button3');
  buttonThree.textContent = aliAnswerThree[2];
  const buttonFour = document.getElementById('button4');
  buttonFour.textContent = aliAnswerThree[3];

  if(event.target.id === 'alert-button') {
    alertBox.style.visibility = 'hidden';
  }

  if(event.target.className === 'figure'){
    for (let i = 0; i < 10; i++) {
      if(event.target.id === `fig${i}`){
        const fig = document.getElementById(`fig${i}`);
        fig.style.opacity = '100%';
        fig.style.pointerEvents = 'none';
      }
    }
    for (let i = 0; i < 4; i++) {
      if(event.target.id === `fig8-${i}`){
        const fig = document.getElementById(`fig8-${i}`);
        fig.style.opacity = '100%';
        fig.style.pointerEvents = 'none';
        console.log('fig', fig);
      }
    }
    figureCounter++;
    console.log(figureCounter);
  }
  if(event.target.className === 'button' && figureCounter === 8) {
    for (let i = 0; i < 5; i++) {
      if(event.target.id === `button${i}`){
        const buttonEl = document.getElementById(`button${i}`);
        buttonEl.style.transform = 'translateY(3px)';
        buttonEl.style.boxShadow = '0 2px 0 white';
        buttonCounter++;
        console.log(buttonCounter);
      }
    }
  }
}



