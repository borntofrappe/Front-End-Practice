// first attempt (non-solution): increment a counter variable
const stopwatchCounter = document.querySelector('.stopwatch--counter');
const stopwatchCounterStart = stopwatchCounter.querySelector('.controls__start');
const stopwatchCounterStop = stopwatchCounter.querySelector('.controls__stop');
let counter = 0;
let counterInterval;

function zeroPadded(number, length) {
    return `${number}`.padStart(length, '0');
}
function updateCounter() {
    counter += 1;
    const ms = counter % 1000;
    const s = Math.floor(counter / 1000) % 60;
    const m = Math.floor(counter / 1000 / 60);
    stopwatchCounter.querySelector('#minutes').textContent = zeroPadded(m, 2);
    stopwatchCounter.querySelector('#seconds').textContent = zeroPadded(s, 2);
    stopwatchCounter.querySelector('#milliseconds').textContent = zeroPadded(ms, 3);
}

stopwatchCounterStart.addEventListener('click', () => {
    intervalCounter = setInterval(updateCounter, 1);
})
stopwatchCounterStop.addEventListener('click', () => {
    clearInterval(intervalCounter);
    counter = 0;
    stopwatchCounter.querySelector('#minutes').textContent = zeroPadded(0, 2);
    stopwatchCounter.querySelector('#seconds').textContent = zeroPadded(0, 2);
    stopwatchCounter.querySelector('#milliseconds').textContent = zeroPadded(0, 3);
})

// second attempt (and solution): at an interval compare two instances of the date object

// first solution: increment a counter variable
const stopwatchInterval = document.querySelector('.stopwatch--interval');
const stopwatchIntervalStart = stopwatchInterval.querySelector('.controls__start');
const stopwatchIntervalStop = stopwatchInterval.querySelector('.controls__stop');

let date;
let interval;

function zeroPadded(number, length) {
    return `${number}`.padStart(length, '0');
}

function updateInterval() {
    const now = new Date();
    const ms = (now - date) % 1000;
    const s = Math.floor((now - date) / 1000) % 60;
    const m = Math.floor((now - date) / 1000 / 60);

    stopwatchInterval.querySelector('#minutes').textContent = zeroPadded(m, 2);
    stopwatchInterval.querySelector('#seconds').textContent = zeroPadded(s, 2);
    stopwatchInterval.querySelector('#milliseconds').textContent = zeroPadded(ms, 3);
}

stopwatchIntervalStart.addEventListener('click', () => {
    date = new Date();
    interval = setInterval(updateInterval, 1);
})
stopwatchIntervalStop.addEventListener('click', () => {
    clearInterval(interval);
    stopwatchInterval.querySelector('#minutes').textContent = zeroPadded(0, 2);
    stopwatchInterval.querySelector('#seconds').textContent = zeroPadded(0, 2);
    stopwatchInterval.querySelector('#milliseconds').textContent = zeroPadded(0, 3);
})
