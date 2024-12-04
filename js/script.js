// JS for Date---------------------------------------------------------
function displayDate() {
    const now = new Date();
    const format = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const currentDayDate = now.toLocaleString('en-US', format);
    // console.log(currentDayDate);    
    document.getElementById("date").textContent = currentDayDate;
}
displayDate();


// JS for Timer--------------------------------------------------------
var timerInterval;// for starting and pausing the timer
var timeElapsed = 0; //time in seconds

//function to format time as HH:MM:SS
function formatTime(seconds) {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor(seconds % 3600 / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

//function to display the timer
function displayTime() {
    document.getElementById("timer").innerHTML = formatTime(timeElapsed);
}

//function to start the timer 
function startTimer() {
    timerInterval = setInterval(() => {
        timeElapsed++; //increment time elapsed
        displayTime(); //update the displayed time
    }, 1000);
}

//function to pause the timer
function pauseTimer() {
    clearInterval(timerInterval);
}

//function to reset the timer
function resetTimer() {
    pauseTimer(); //stop the timer
    timeElapsed = 0; //reset elapsed timer
    displayTime(); //update the displayed time to 0
}

