const startBtn = document.getElementById("startBtn");
const timerDisplay = document.getElementById("timer");
const minutesInput = document.getElementById("minutes");

let countdown;

startBtn.addEventListener("click", () => {
    let time = parseInt(minutesInput.value) * 60; // convert minutes to seconds
    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid number of minutes.");
        return;
    }
    clearInterval(countdown); // clear any existing timer
    updateTimerDisplay(time);
    countdown = setInterval(() => {
        time--;
        updateTimerDisplay(time);
        if (time <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
        }
    }, 1000);
});

function updateTimerDisplay(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.textContent = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}
