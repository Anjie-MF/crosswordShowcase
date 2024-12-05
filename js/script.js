function displayDate() {
    const now = new Date();
    const format = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const currentDayDate = now.toLocaleString('en-US', format);
    document.getElementById("date").textContent = currentDayDate;
}
displayDate();


let timerInterval;
let timeElapsed = 0;

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor(seconds % 3600 / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function displayTime() {
    document.getElementById("timer").innerHTML = formatTime(timeElapsed);
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeElapsed++;
        displayTime()
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    pauseTimer();
    timeElapsed = 0;
    displayTime();
}


let gridBoxes = document.querySelectorAll('#grid div');
let radioButtons = document.querySelectorAll('input[type="radio"]');

gridBoxes.forEach((box) => {
    box.addEventListener('click', () => {
      const clueId = box.dataset.clue; 
      const correspondingRadio = document.getElementById(clueId);
  
      if (correspondingRadio) {
        correspondingRadio.checked = true;
      }
    });
  });