let interval;
let selector;

const time = { 
sec: 0,
min: 0,
}

let startButton = document.querySelector(".startbutton")
let resetButton = document.querySelector(".resetbutton")

function updateTime()
{
    time.sec++
    selector = document.querySelector(".time")
    if(time.sec==60)
    {
        time.sec = 0;
        time.min++;
    }
    
    if(time.sec < 10)
    {
        selector.innerHTML = time.min + ":0" + time.sec
    }
    else
    {
        selector.innerHTML = time.min + ":" + time.sec;
    }
}

function startTime()
{
    interval = setInterval(updateTime, 1000) 

}

function resetTime()
{
    clearInterval(interval)
    time.sec = -1
    time.min = 0;
    updateTime();
}

startButton.addEventListener('click', startTime)
resetButton.addEventListener('click', resetTime)