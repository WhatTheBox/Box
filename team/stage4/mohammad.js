'use strict';
let level=JSON.parse(localStorage.getItem('level'));
if (level !== 10){
  level=10;
}
localStorage.setItem('level',JSON.stringify(level));
const levelEl=document.getElementById('level');
levelEl.textContent=level;

function Box (label,emoji,buttonOne,buttonTwo,buttonThree,buttonFour){
  this.label= label;
  this.emoji= emoji;
  this.buttonOne= buttonOne;
  this.buttonTwo=buttonTwo;
  this.buttonThree=buttonThree;
  this.buttonFour=buttonFour;
  Box.all.push(this);
}
Box.all=[];

Box.prototype.render=function(){
  const values = Object.values(this);
  for (let i = 0; i < values.length; i++) {
    if (i===0){
      const labelEl=document.getElementById('label');
      labelEl.textContent=this.label;
    } else if (i===1){
      const emojiEl=document.getElementById('emoji');
      emojiEl.textContent=this.emoji;
    } else {
      const buttonEl=document.getElementById(`button${i-1}`);
      buttonEl.textContent=values[i];
    }

  }
};

const qOne=new Box('Jordan locations Emoji Guessing Game','Ya \uD83D\uDC1B','Yadodeh','Yajoz','Yarga','Yasmeen');
const qTwo=new Box('Jordan locations Emoji guessing Game','Ta \uD83D\uDC18','Tafileh','Tabarbour','Tamam','place not in Jordan');
const qThree=new Box('Jordan locations Emoji guessing Game','Ta \uD83D\uDE2A','Table','Tamer','Tabarbour','Tafileh');
const qFour=new Box('Jordan locations Emoji guessing Game','\u26F0\uFE0F \u270C\uFE0F','Jabal Al Qala\'ah','Jabal Al-Naser','Jabal Al-Taj','Jabal Amman');
const qFive=new Box('Jordan locations Emoji guessing Game','\uD83C\uDDEF\uD83C\uDDF4 \uD83D\uDEE3\uFE0F','Jordan First','Jordan=KSA Highway','Jordan Street','Jordan Flag');
const qSix=new Box('Jordan locations Emoji guessing Game','\uD83E\uDDD5 \uD83D\uDCA1','Um Tieneh','Um Zwaiteneh','Um Lamba','Um Nuara');
const qSeven=new Box('Jordan locations Emoji guessing Game','Al- \uD83D\uDCAA smeh','Al Taj','Al Muagar','Al-Yarmook','Al-Quaismeh');

console.table(Box.all);

qOne.render();
const clickOne=document.getElementById('form');
clickOne.addEventListener('click',handleOne);

function handleOne(event){
  if (event.target.id==='button1'){
    clickOne.removeEventListener('click',handleOne);
    const clickTwo= document.getElementById('form');
    clickTwo.addEventListener('click',handleTwo);
    qTwo.render();
    level++;
    localStorage.setItem('level',JSON.stringify(level));
    levelEl.textContent=level;
  }
}

function handleTwo(event){
  if (event.target.id==='button1'){
    const clickTwo=document.getElementById('form');
    clickTwo.removeEventListener('click',handleTwo);
    const clickThree= document.getElementById('form');
    clickThree.addEventListener('click',handleThree);
    qThree.render();
    level++;
    localStorage.setItem('level',JSON.stringify(level));
    levelEl.textContent=level;
  }
}

function handleThree(event){
  if (event.target.id==='button3'){
    const clickThree=document.getElementById('form');
    clickThree.removeEventListener('click',handleThree);
    const clickFour= document.getElementById('form');
    clickFour.addEventListener('click',handleFour);
    qFour.render();
    level++;
    localStorage.setItem('level',JSON.stringify(level));
    levelEl.textContent=level;
  }
}

function handleFour(event){
  if (event.target.id==='button2'){
    const clickFour=document.getElementById('form');
    clickFour.removeEventListener('click',handleFour);
    const clickFive= document.getElementById('form');
    clickFive.addEventListener('click',handleFive);
    qFive.render();
    level++;
    localStorage.setItem('level',JSON.stringify(level));
    levelEl.textContent=level;
  }
}

function handleFive(event){
  if (event.target.id==='button3'){
    const clickFive=document.getElementById('form');
    clickFive.removeEventListener('click',handleFive);
    const clickSix= document.getElementById('form');
    clickSix.addEventListener('click',handleSix);
    qSix.render();
    level++;
    localStorage.setItem('level',JSON.stringify(level));
    levelEl.textContent=level;
  }
}

function handleSix(event){
  if (event.target.id==='button4'){
    const clickSix=document.getElementById('form');
    clickSix.removeEventListener('click',handleSix);
    const clickSeven= document.getElementById('form');
    clickSeven.addEventListener('click',handleSeven);
    qSeven.render();
    level++;
    localStorage.setItem('level',JSON.stringify(level));
    levelEl.textContent=level;
  }
}

function handleSeven(event){
  if (event.target.id==='button4'){
    const clickSeven=document.getElementById('form');
    clickSeven.removeEventListener('click',handleSeven);
    window.location= '../stage5/stage5.html';
  }
}


