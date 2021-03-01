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

const questionOne = document.getElementById('quiz');
questionOne.addEventListener('click',handleOne);
function handleOne(event){
    if (event.target.id ==='buttonB'){
        const green= document.getElementById(currentQ);
      green.style.backgroundColor='green';
    }
}