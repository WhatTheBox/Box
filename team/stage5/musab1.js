'use strict';


let level=JSON.parse(localStorage.getItem('level'));
if (level !== 18){
  level=18;
}
localStorage.setItem('level',JSON.stringify(level));
const levelEl=document.getElementById('level');
levelEl.textContent=level;

// let solution= document.getElementById('solution');

// solution.onclick = function (){

// };


// let btns = document.querySelectorAll('button');

// let wrongAlert=0 ;
// for (wrongAlert of btns) {
//   if (onclick.getElementById==='solution'){
//     alert('that was the Right answer');
//   }
//   wrongAlert.addEventListener('click', function() {
//     alert('wrong answer');
//   });
// }


const numberSection = document.getElementById('calculator-grid');
numberSection.addEventListener('click', handleNumber);
function handleNumber(event) {
  if (event.target.id === 'solution') {
    document.getElementById('alert').style.visibility = 'visible';
    document.getElementById('alert-text').innerHTML = 'i swear if you solve it from the first or the second time you should go to Japan, you are genies';
    tryAgain.onclick = function () {

      level++;
      localStorage.setItem('level',JSON.stringify(level));
      window.location = './stage5c.html';
    };
  }
  else {
    document.getElementById('alert').style.visibility = 'visible';
    document.getElementById('alert-text').innerHTML = 'this is an easy one <br> this is a calculator <br> thats was your final hint';

  }
}





let tryAgain = document.getElementById('alert-button');

tryAgain.onclick = function () {
  document.getElementById('alert').style.visibility = 'hidden';
};
