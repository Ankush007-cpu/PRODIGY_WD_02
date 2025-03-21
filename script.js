let minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let running = false;

const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapList = document.getElementById('laps');
const container = document.querySelector('.container');

startPauseBtn.addEventListener('click', () => {
    if (running) {
        clearInterval(timer);
        startPauseBtn.textContent = "START";
        container.classList.remove('animated');
    } else {
        timer = setInterval(updateTime, 10);
        startPauseBtn.textContent = "PAUSE";
        container.classList.add('animated');
    }
    running = !running;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    minutes = seconds = milliseconds = 0;
    document.getElementById('timer').textContent = "00:00:00";
    startPauseBtn.textContent = "START";
    running = false;
    lapList.innerHTML = "";
});

lapBtn.addEventListener('click', () => {
    if (running) {
        let lapTime = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
        let lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    }
});

function updateTime() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    document.getElementById('timer').textContent = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(num) {
    return num < 10 ? "0" + num : num;
}
