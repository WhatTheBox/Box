'use strict';
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');

const button1 = document.getElementById('buttonA');
const button2 = document.getElementById('buttonB');
const button3 = document.getElementById('buttonC');
const button4 = document.getElementById('buttonD');



function Quiz(label , button1, button2, button3, button4){
  this.label = label;
  this.button1 = button1;
  this.button2 = button2;
  this.button3 = button3;
  this.button4 = button4;

}

const qOne =new Quiz('There is four brothers South, North and East, What is the fourth brother name','West', 'what','ENSW','SouthWest' );
const qTwo = new Quiz('What is the letter has most water in it ?','W','E','L','C');
const qThree = new Quiz('Which word is written incorrectly in a dictionary?','incorrectly','dictionary','Literally','Whom');
console.log(qOne);


//let lastLastQ = questions.length -1;
//let currentQ = 0;



Quiz.prototype.render = function(){
  const label = document.getElementById('label');
  label.textContent = this.label;
  // for (let i = 1; i < this.length; i++) {
  //   const buttonEl = document.getElementById(`button${i+1}`);
  //   buttonEl.textContent = [i];
  // }
  const buttonEl1= document.getElementById('button1');
  buttonEl1.textContent = this.button1;

  const buttonEl2= document.getElementById('button2');
  buttonEl2.textContent = this.button2;

  const buttonEl3= document.getElementById('button3');
  buttonEl3.textContent = this.button3;

  const buttonEl4= document.getElementById('button4');
  buttonEl4.textContent = this.button4;
};

qOne.render();

let color=0;
const questionOne = document.getElementById('quiz');
questionOne.addEventListener('click',handleOne);
function handleOne(event){
  if (event.target.id ==='button2'){
    const green= document.getElementById('button2');
    green.style.backgroundColor='green';
    questionOne.removeEventListener('click',handleOne);
    const questionTwo = document.getElementById('quiz');
    questionTwo.addEventListener('click' ,handleTwo);
    qTwo.render();
    if(color === 0){
      color++;
      for (let i = 1; i < 5; i++) {
        const white = document.getElementById(`button${i}`);
        white.style.backgroundColor ='white';
      }
    }
  } else if(event.target.className === 'button'){
    for (let i = 0; i < 5; i++) {
      if(event.target.id === `button${i}`){
        const red = document.getElementById(`button${i}`);
        red.style.backgroundColor ='red';
      }
    }

  }
  console.log(event.target.id);
}

let colorB = 0;
function handleTwo(event){
  //qTwo.render();
  console.log('handelTwo', color);
  
  if (event.target.id ==='button4'){
    const green= document.getElementById('button4');
    green.style.backgroundColor='green';
    const questionTwo = document.getElementById('quiz');
    questionTwo.removeEventListener('click',handleTwo);
    const questionThree = document.getElementById('quiz');
    questionThree.addEventListener('click' ,handleThree);
    qThree.render();
  if(colorB === 0){
    colorB++;
    for (let i = 1; i < 5; i++) {
      const white = document.getElementById(`button${i}`);
      white.style.backgroundColor ='white';
    }
  }
  } else if(event.target.className === 'button'){
    for (let i = 0; i < 5; i++) {
      if(event.target.id === `button${i}`){
        const red = document.getElementById(`button${i}`);
        red.style.backgroundColor ='red';
      }
    }

  }
//console.log(color);
}


function handleThree(event){
  
  if (event.target.id ==='button1'){
    const green= document.getElementById('button1');
    green.style.backgroundColor='green';
    const questionThree = document.getElementById('quiz');
    questionThree.removeEventListener('click',handleThree);
    window.location = '../dalia/dalia.html';
  } else if(event.target.className === 'button'){
    for (let i = 0; i < 5; i++) {
      if(event.target.id === `button${i}`){
        const red = document.getElementById(`button${i}`);
        red.style.backgroundColor ='red';
      }
    }

  }
//console.log(color);
}
