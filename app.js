let date = new Date(),
    seconds = 0,
    minute = 0,
    hour = 0;

let snakeDied = false;  

let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    snakeDied = true;

    clearInterval(start);
    alert(`You lasted ${date.getMinutes()} minutes, ${date.getSeconds()} seconds!`);
    window.location.reload();
});

// Trigger this every second.
function countSeconds() {
    seconds += 1000;

    date.setTime(seconds),
    hour = date.getUTCHours(),
    minute = date.getUTCMinutes(),
    sec = date.getSeconds(),
    timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    
    document.querySelector('#time').innerHTML = timeString;
}

let start = setInterval(countSeconds, 1000);
