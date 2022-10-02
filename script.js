const minuteDomId = document.getElementById('minute');
const secondDomId = document.getElementById('second');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const form = document.getElementById('form');
const minVal = document.getElementById('minVal');
const secVal = document.getElementById('secVal');
const sound = document.getElementById('sound');
const mainDiv = document.getElementById('mainDiv');

let interval;

startBtn.addEventListener('click', () => {
  clearInterval(interval);
  if (minVal.value == '' && secVal.value == '') {
    alert('Please Enter Minute or second');
    return;
  }

  let minutes = +minVal.value * 60;
  let seconds = +secVal.value;
  let time = minutes + seconds;
  if (time < 0) {
    alert('Invalid Input');
    return;
  }

  console.log(time);
  interval = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    time--;
    if (min < 10 && sec < 10) {
      minuteDomId.innerText = '0' + min;
      secondDomId.innerText = '0' + sec;
    } else {
      minuteDomId.innerText = min;
      secondDomId.innerText = sec;
    }
    if (min == 0 && sec == 0) {
      sound.play();
      mainDiv.classList.add('pump');
      clearInterval(interval);
    }
    console.log(min, sec);
  }, 1000);
  minVal.value = '';
  secVal.value = '';
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  mainDiv.classList.remove('pump');
  sound.pause();
  minuteDomId.innerText = '00';
  secondDomId.innerText = '00';
});
