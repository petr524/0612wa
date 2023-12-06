function updateHexClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const hexColor = `#${hours}${minutes}${seconds}`;

    document.getElementById('hex-clock').style.backgroundColor = hexColor;
    document.getElementById('clock-text').innerText = `${hours}:${minutes}:${seconds}`;
}

function showTimerSettings() {
    document.getElementById('timer-settings').style.display = 'flex';
}

function setTimer() {
    const seconds = document.querySelector('#timer-input').value;
    if (seconds > 0) {
        const countdownTime = new Date().getTime() + seconds * 1000;

        const countdownInterval = setInterval(function () {
            const now = new Date().getTime();
            const remainingTime = countdownTime - now;

            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                updateHexClock();
                document.getElementById('timer-settings').style.display = 'none';
            }
        }, 1000);
    }
}

function cancelTimer() {
    document.getElementById('timer-settings').style.display = 'none';
}