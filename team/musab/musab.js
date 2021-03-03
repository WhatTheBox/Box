'use strict';

let level=JSON.parse(localStorage.getItem('level'));
if (level !== 17){
  level=17;
}
localStorage.setItem('level',JSON.stringify(level));
const levelEl=document.getElementById('level');
levelEl.textContent=level;

let box5 = document.getElementById('box5');
let tryAgain = document.getElementById('alert-button');



box5.onclick = function () {
  document.getElementById('alert').style.visibility = 'visible';
  document.getElementById('alert-text').innerHTML = 'Did you get the idea ? <br> the box is empty <br> thats was your final hint';
};




let box2 = document.getElementById('divo');


box2.onclick = function () {
  document.getElementById('alert').style.visibility = 'visible';
  document.getElementById('alert-text').innerHTML = 'you have done the impossible, you should be proud of your self';
  tryAgain.onclick = function () {
    document.getElementById('alert').style.visibility = 'hidden';
    level++;
    localStorage.setItem('level',JSON.stringify(level));
    window.location = './musab1.html';
  };

};

tryAgain.onclick = function () {
  document.getElementById('alert').style.visibility = 'hidden';
};







































// let paragraph= document.createElement('p');
// let box5 = document.getElementById('box5');
// box5.appendChild(paragraph);

// box5.textContent='you are in the plane and accidentally you enter the pilot room.the pilot tells you \'don\'t click on any thing \' . you imagine that the plan is on fire what should you do ';



// let secondQuestion=function(){
// };
// paragraph.textContent='sadjjsadjksahdhasdhaskjdhasjdhasghasj hsd jgsadh g jhasg usa dghjsagd 9qwuihas j usa gdas gqwyg asdhgfd sag fjy';

// for (let i = 0; i <=3 ; i++) {
//   paragraph.textContent=`Question ${i}`;

// }












// finally questions
// let answers = document.getElementById('answers');

// let firstQuestion = function () {
//   let bottomArray = ['first', 'second', 'third', 'forth'];
//   for (let i = 0; i < bottomArray.length; i++) {

//     let bottom = document.createElement('button');
//     answers.appendChild(bottom);
//     bottom.textContent = bottomArray[i];
//   }

// };
// answers.remove();
// firstQuestion();


