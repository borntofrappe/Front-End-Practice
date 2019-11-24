// COUNTER && SETINTERVAL
// ! this is not an actual solution, but at an attempt describing the shortcomings on relying on setInterval alone
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


// DATE && SETINTERVAL
// regardless of the frequency of setInterval, whenever the update function is called the instances of the date object provide the correct lapse
// second attempt (and solution): at an interval compare two instances of the date object
const stopwatchInterval = document.querySelector('.stopwatch--interval');
const stopwatchIntervalStart = stopwatchInterval.querySelector('.controls__start');
const stopwatchIntervalStop = stopwatchInterval.querySelector('.controls__stop');

let date;
let interval;

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


// DATE && REQUESTANIMATIONFRAMR
// this is actually an experiment to see how setInterval might actually be substituted with requestAnimationFrame
const stopwatchRequest = document.querySelector('.stopwatch--request');
const stopwatchRequestStart = stopwatchRequest.querySelector('.controls__start');
const stopwatchRequestStop = stopwatchRequest.querySelector('.controls__stop');

let dateRequest;
let request;

function updateRequest() {
    const now = new Date();
    const ms = (now - dateRequest) % 1000;
    const s = Math.floor((now - dateRequest) / 1000) % 60;
    const m = Math.floor((now - dateRequest) / 1000 / 60);

    stopwatchRequest.querySelector('#minutes').textContent = zeroPadded(m, 2);
    stopwatchRequest.querySelector('#seconds').textContent = zeroPadded(s, 2);
    stopwatchRequest.querySelector('#milliseconds').textContent = zeroPadded(ms, 3);

    request = requestAnimationFrame(updateRequest);
}

stopwatchRequestStart.addEventListener('click', () => {
    dateRequest = new Date();
    updateRequest();
})
stopwatchRequestStop.addEventListener('click', () => {
    cancelAnimationFrame(request);
    stopwatchRequest.querySelector('#minutes').textContent = zeroPadded(0, 2);
    stopwatchRequest.querySelector('#seconds').textContent = zeroPadded(0, 2);
    stopwatchRequest.querySelector('#milliseconds').textContent = zeroPadded(0, 3);
})
