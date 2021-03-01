'use strict';

function Form(label, buttonOne, buttonTwo, buttonThree, buttonFour) {
  this.label = label;
  this.buttonOne = buttonOne;
  this.buttonTwo = buttonTwo;
  this.buttonThree = buttonThree;
  this.buttonFour = buttonFour;
  Form.all.push(this);
}
Form.all = [];

Form.prototype.render = function () {
  const labelEl = document.getElementById('label');
  labelEl.textContent = this.label;
  const buttonOne = document.getElementById('button1');
  buttonOne.textContent = this.buttonOne;
  const buttonTwo = document.getElementById('button2');
  buttonTwo.textContent = this.buttonTwo;
  const buttonThree = document.getElementById('button3');
  buttonThree.textContent = this.buttonThree;
  const buttonFour = document.getElementById('button4');
  buttonFour.textContent = this.buttonFour;
};

const qOne = new Form('1 + 1 =', '2', '-77', '55', '2');
const qTwo = new Form('What color is the sun??!', 'Yellow Hello', 'Some Yellow', 'More Yellow', 'Don\'t Yellow At Me!');
const qThree = new Form('Why????!!!!', 'because', 'because', 'because', 'because');

console.log('Form', Form);
console.log('Form.all', Form.all);


//level
let level = 1;
const levelEl = document.getElementById('level');
levelEl.textContent = level;
localStorage.setItem('level', JSON.stringify(level));

//alert box
const alertBox = document.getElementById('alert');
const alertText = document.getElementById('alert-text');
const alertButton = document.getElementById('alert-button');


//first question
const clickQuestOne = document.getElementById('main');
clickQuestOne.addEventListener('click', handleClickOne);
let counterQuestOne = 0;
qOne.render();

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
  if(counterQuestOne === 2){
    alertBox.style.visibility = 'visible';
    alertText.textContent = 'CONGRATS!!! these were the only two balls with the same color!';
    alertButton.textContent = 'EASY PEASY LEMON SQUEASY... NEXT QUESTION!';
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
  
  level = 2;
  levelEl.textContent = level;
  localStorage.setItem('level', JSON.stringify(level));
  qTwo.render();

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
}

//third question
let figureCounter = 0;
let buttonCounter = 0;
function handleClickThree(event) {
  
  level = 3;
  levelEl.textContent = level;
  localStorage.setItem('level', JSON.stringify(level));
  qThree.render();
  
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
  if(buttonCounter === 4){
    alertBox.style.visibility = 'visible';
    alertText.textContent = 'Some questions in life have answers... some don\'t... but if you don\'t try... you\'ll never know!!';
    alertButton.textContent = 'WHAT\'S NEXT?';
    if(event.target.id === 'alert-button'){
      window.location = '../ayah/ayah.html';
    }
  }
}



