const timeDisplay = document.querySelector('#timeDisplay')
const startBtn = document.querySelector('#startBtn')
const resetBtn = document.querySelector('#resetBtn');
const stopBtn = document.querySelector('#stopBtn');

let startTime = 0;
let elapsedTime= 0;
let currentTime = 0;
let paused = true;
let interValid;
let hrs = 0;
let mins = 0;
let secs= 0;

startBtn.addEventListener("click" , ()=>{
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        interValid = setInterval(updateTime, 1000);
    }
})

resetBtn.addEventListener("click" , ()=>{
    paused = true
    clearInterval(interValid)
    elapsedTime = 0;
    secs=0;
    mins=0;
    hrs=0;
    timeDisplay.textContent = "00:00:00"

})
stopBtn.addEventListener("click" , ()=>{
    if(!paused){
        paused = true
        clearInterval(interValid)
    }
})

function updateTime (){
    elapsedTime = Date.now() - startTime
    secs =Math.floor((elapsedTime/1000)%60);
    mins =Math.floor((elapsedTime/(1000*60))%60);
    hrs =Math.floor((elapsedTime/(1000*60*60))%60);

    timeDisplay.textContent = `${hrs.toString().padStart(2,"0")}:${mins.toString().padStart(2,"0")}:${secs.toString().padStart(2,"0")}`
}