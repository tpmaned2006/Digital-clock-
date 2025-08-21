let alarmTime = null;
const clock = document.getElementById('clock');
const alarmSound = document.getElementById('alarmSound');
const setAlarmBtn = document.getElementById('setAlarmBtn');

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;

    if (alarmTime === `${hours}:${minutes}`) {
        alarmSound.play();
        alert("⏰ Alarm! Time's up!");
        alarmTime = null; // reset alarm
    }
}

function setAlarm() {
    const timeInput = document.getElementById('alarmTime').value;
    if (!timeInput) {
        alert("Please select a time for the alarm!");
        return;
    }
    alarmTime = timeInput;
    alert(`Alarm set for ${alarmTime}`);
}

setAlarmBtn.addEventListener('click', setAlarm);
setInterval(updateClock, 1000);

