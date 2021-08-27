var startTime = 0;
var timer = 0;
var interval = 0;

var stopped = false;

const timerText = document.getElementById("timerText");
const range = document.getElementById("rangeTime");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const rangeText = document.getElementById("rangeText");
const progressBar = document.getElementById("progressBar");
const authButton = document.getElementById("authButton");
const notifButton = document.getElementById("notifButton");

async function StartTimer() {
    stopButton.style.display = "inline-block";
    startButton.innerHTML = "Restart timer...";
    stopped = false;
    startTime = Date.now();
    interval = parseFloat(range.value * 60);

    setInterval(function() {
        if (!stopped) {
            // Update timer variable and round to 1 decimal place
            timer = ((Date.now() - startTime) / 1000).toFixed(1);
            // Check if the timer has exceeded the specified maximum time
            if (timer > interval) {
                PushNotification();
                stopped = true;
                return;
            }

            // Only here for use in DOM
            var minutes = Math.floor(timer / 60);
            var seconds = timer - (minutes * 60);

            // Set the width of progress bar to the percentage of the timer
            progressBar.style.width = `${(timer * 100) / interval}%`;

            // Set the timer text
            timerText.innerText = `Time elapsed: ${minutes}m ${Math.floor(seconds)}s`;
        }
    }, 100); // Update interval
}

startButton.addEventListener("click", function() {
    StartTimer();
});

stopButton.addEventListener("click", function() {
    stopButton.style.display = "none";
    startButton.innerHTML = "I took out my retainers!";
    stopped = true;

    progressBar.style.width = "0%";
    timerText.innerText = "";
});

range.addEventListener("input", function() {
    rangeText.innerHTML = `${range.value} minutes`;
})

function PushNotification() {
    const push = new Notification('Reminder',{
        body: 'Put your retainers back in!'
    });
      
    push.addEventListener('click', function(){
        window.open('../reminder/index.html', 'myWindow')
    });  
}


if(Notification.permission !== 'granted') {
    authButton.addEventListener("click", function() {
        Notification.requestPermission().then(function(result) {
            console.log(result);
            if(result === 'granted') {
                authBanner.style.display = "none";
            }
        });
    })

    authBanner.style.display = "inline-block";
}
