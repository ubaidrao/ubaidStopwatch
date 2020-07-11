var min=0
var sec=0
var milsec=0

var minHead = document.getElementById('min')
var secHead = document.getElementById('sec')
var milsecHead = document.getElementById('milsec')
var interval

function timer(){
    milsec++
    milsecHead.innerHTML = milsec
    if(milsec > 100){
        sec++
        secHead.innerHTML = sec
        milsec = 0
    }
    else if(sec > 60){
        min++
        minHead.innerHTML = min 
        sec = 0
    }
}
function start(){
    interval = setInterval(timer,10)
    document.getElementById("startbtn").disabled = true;
}
function pause(){
    clearInterval(interval)
    document.getElementById("startbtn").disabled = false;
}
function reset(){
    milsecHead.innerHTML = 0
    minHead.innerHTML = 0
    secHead.innerHTML = 0 
    pause()
    document.getElementById("startbtn").disabled = false;
}