
const startBtn = document.querySelector('button[data-start]')
// console.log(startBtn)
const stopBtn = document.querySelector('button[data-stop]')
// console.log(stopBtn)
const body = document.querySelector('body');
// console.log(body)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 
let timerForColor = [];

startBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
   timerForColor = setInterval(() => {
       body.style.background = getRandomHexColor();
   }, 1000);
}
// console.log(onChangeColor);

