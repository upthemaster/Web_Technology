const $ = id => document.getElementById(id);

const timerEl = $("timer");
const modeEl = $("mode");
const countEl = $("count");
const body = document.body;

let focus = 1500;
let breakTime = 300;
let timeLeft = focus;
let running = false;
let isFocus = true;
let interval;
let sessions = +localStorage.getItem("sessions") || 0;

countEl.textContent = sessions;

const format = s =>
    `${String(Math.floor(s / 60)).padStart(2,"0")}:${String(s % 60).padStart(2,"0")}`;

function update() {
    timerEl.textContent = format(timeLeft);
}

function switchMode() {
    if (isFocus) {
        sessions++;
        localStorage.setItem("sessions", sessions);
        countEl.textContent = sessions;
    }
    isFocus = !isFocus;
    modeEl.textContent = isFocus ? "Focus 🍅" : "Break ☕";
    timeLeft = isFocus ? focus : breakTime;
    new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg").play();
}

function tick() {
    if (timeLeft > 0) {
        timeLeft--;
        update();
    } else {
        switchMode();
    }
}

$("start").onclick = () => {
    if (!running) {
        running = true;
        interval = setInterval(tick, 1000);
    }
};

$("pause").onclick = () => {
    running = false;
    clearInterval(interval);
};

$("reset").onclick = () => {
    clearInterval(interval);
    running = false;
    timeLeft = isFocus ? focus : breakTime;
    update();
};

$("theme").onclick = () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
};

const savedTheme = localStorage.getItem("theme");
if (savedTheme) body.className = savedTheme;

update();