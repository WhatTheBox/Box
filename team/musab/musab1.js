
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
numberSection.addEventListener('click',handleNumber);
function handleNumber(event){
  if(event.target.id==='solution'){
    alert('that was the Right answer');
    window.location='./musab3.html';
  }
  else{
    alert('wrong answer');

  }
  console.log(event.target.id);
}
