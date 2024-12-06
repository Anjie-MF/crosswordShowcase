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


const clueText = document.getElementById("current-clue");
const innerSlider = document.querySelector(".inner");
const visibleBoxes = document.querySelectorAll("#grid .visible");
const clues = [
    "Clue for 11 Across",
    "Clue for 22 Across",
    "Clue for 32 Across",
    "Clue for 3 Down",
    "Clue for 25 Down"
];

let currentClueIndex = 0;

function updateClue(index) {
    if (index >= 0 && index < clues.length) {
        currentClueIndex = index;
        clueText.textContent = clues[currentClueIndex];
        innerSlider.style.transform = `translateX(-${currentClueIndex * 20}%)`
    }
}

visibleBoxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        updateClue(index);
    });
});

document.getElementById("prev").addEventListener("click", () => {
    if (currentClueIndex > 0) {
        updateClue(currentClueIndex - 1);
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentClueIndex < clues.length - 1) {
        updateClue(currentClueIndex + 1);
    }
});

updateClue(0);