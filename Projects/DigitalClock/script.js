const clockElement = document.getElementById("clock");
const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

// Update Clock Function
function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "AM";

    // Convert to 12-hour format
    if (hours >= 12) {
        ampm = "PM";
    }

    hours = hours % 12;
    hours = hours ? hours : 12;

    // Add leading zeros
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Add smooth animation
    clockElement.classList.add("animate");

    setTimeout(() => {
        clockElement.textContent = timeString;
        clockElement.classList.remove("animate");
    }, 150);
}

// Run every second
setInterval(updateClock, 1000);
updateClock();

// Dark / Light Mode Toggle
toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        toggleBtn.textContent = "Switch to Dark Mode";
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        toggleBtn.textContent = "Switch to Light Mode";
    }
});