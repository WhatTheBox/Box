/* eslint-disable no-unused-vars */
// var seconds = 0;



// function incrementSeconds() {
//   for (let i = 0; i < seconds; i++) {
//     seconds += 1;
//     el.innerText = 'You have been here for ' + seconds + ' seconds.';
//     if (i === 10) {
//       alert('you did it ');
//       break;
//     }
//     else
//       el.addEventListener('click', function handleEvent(event) {
//         if (event.target.id === 'dontClick') {
//           i = 0;

//         }

//       });
//   }
// }
// console.log(seconds);
// let cancel = setInterval(incrementSeconds, 1000);

// console.log(cancel);

// // function handleEvent(event) {
// //   if (event.target.id === 'dontClick') {
// //     i=0;

// //   }

// // }
// 1







// the hour

let myVar = setInterval(myTimer, 1000);
console.log(myVar);
function myTimer() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  document.getElementById('demo').innerHTML = t;
}





// the flasher
let myColer = setInterval(setColor, 300);
function setColor() {
  let y = document.getElementById('demo');
  y.style.backgroundColor = y.style.backgroundColor === 'red' ? 'white' : 'red';
}

let myNoler = setInterval(newNolor, 150);
function newNolor() {
  let y = document.getElementById('heder1');
  y.style.color = y.style.color === 'red' ? 'white' : 'red';
}
let myFoler = setInterval(newFolor, 30);
function newFolor() {
  let y = document.getElementById('footer');
  y.style.color = y.style.color === 'red' ? 'white' : 'red';
}

let myYoler = setInterval(newYolor, 150);
function newYolor() {
  let y = document.getElementById('app');
  y.style.color = y.style.color === 'red' ? 'white' : 'red';
}













const TIME_LIMIT = 1200;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = 0;


document.getElementById('app').innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle id="death" class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label"></span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(timerExp, 1000);
}

function timerExp() {
  timePassed = timePassed + 1;
  timeLeft = TIME_LIMIT - timePassed;
  document.getElementById('base-timer-label').innerHTML = formatTime(
    timeLeft
  );

  if (timeLeft === 0) {
    onTimesUp();
  } else if (timeLeft===1190) {

    window.location = './musab.html';}
}

let body = document.querySelector('body');

body.addEventListener('click', function resetTimer() {
  timePassed = 0;
});




function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}






// const TIME_LIMIT = 120;
// let timePassed = 0;
// let timeLeft = TIME_LIMIT;
// let timerInterval = null;


// document.getElementById('app').innerHTML = `
// <div class="base-timer">
//   <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//     <g class="base-timer__circle">
//       <circle id="death" class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
//     </g>
//   </svg>
//   <span id="base-timer-label" class="base-timer__label">${formatTime(timeLeft)}</span>
// </div>
// `;

// startTimer();

// function onTimesUp() {
//   clearInterval(timerInterval);
// }

// function startTimer() {
//   timerInterval = setInterval(() => {
//     timePassed = timePassed += 1;
//     timeLeft = TIME_LIMIT - timePassed;
//     document.getElementById('base-timer-label').innerHTML = formatTime(
//       timeLeft
//     );

//     if (timeLeft === 0) {
//       onTimesUp();
//       // window.location = './musab.html';
//     }
//   }, 1000);
// }

// let body = document.querySelector('body');

// body.addEventListener('click', function resetTimer() {
//   timePassed = 0;
// });

// function formatTime(time) {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   if (seconds < 10) {
//     seconds = `0${seconds}`;
//   }

//   return `${minutes}:${seconds}`;
