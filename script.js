let alarmTime = null;
let alarmTimeout = null;
const clock = document.getElementById('clock');
const alarmSound = document.getElementById('alarmSound');
const setAlarmBtn = document.getElementById('setAlarmBtn');
const stopAlarmBtn = document.getElementById('stopAlarmBtn');
const snoozeBtn = document.getElementById('snoozeBtn');
const dateDisplay = document.getElementById('date');

// ⏰ Update Clock + Date
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // add blinking effect to seconds
    clock.innerHTML = `${hours}:${minutes}:<span class="seconds">${seconds}</span>`;

    // Show today's date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString('en-US', options);

    // Check alarm
    if (alarmTime === `${hours}:${minutes}` && !alarmTimeout) {
        alarmSound.play();
        alarmTimeout = setInterval(() => alarmSound.play(), 60000); // repeat every min
        alert("⏰ Alarm! Time's up!");
    }
}

// 📌 Set Alarm
function setAlarm() {
    const timeInput = document.getElementById('alarmTime').value;
    if (!timeInput) {
        alert("Please select a time for the alarm!");
        return;
    }
    alarmTime = timeInput;
    alert(`✅ Alarm set for ${alarmTime}`);
}

// 📌 Stop Alarm
function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    clearInterval(alarmTimeout);
    alarmTimeout = null;
    alarmTime = null;
    alert("🛑 Alarm stopped.");
}

// 📌 Snooze (+5 min)
function snoozeAlarm() {
    stopAlarm();
    const now = new Date();
    now.setMinutes(now.getMinutes() + 5);
    const snoozeHours = String(now.getHours()).padStart(2, '0');
    const snoozeMinutes = String(now.getMinutes()).padStart(2, '0');
    alarmTime = `${snoozeHours}:${snoozeMinutes}`;
    alert(`😴 Snoozed! Next alarm at ${alarmTime}`);
}

// 🌙 Theme Toggle
function toggleTheme() {
    document.body.classList.toggle("dark");
}

setAlarmBtn.addEventListener('click', setAlarm);
stopAlarmBtn.addEventListener('click', stopAlarm);
snoozeBtn.addEventListener('click', snoozeAlarm);
setInterval(updateClock, 1000);
