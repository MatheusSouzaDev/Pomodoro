let button = document.querySelectorAll('.play')

if (button != " ") {
    initialTime()
}

function initialTime() {
    const initialCont = 60*25
    let clock = initialCont

    let minutes = Math.floor(clock / 60)
    let seconds = clock % 60

    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0')
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0')
    
    let interval = setInterval(function(){

        play(clock)
        clock--

    }, 1000); 

    setTimeout(function(){
        clearInterval(interval)
        //alert('Tempo acabou!!!')
    }, 1500000);
       
}

function play(setSecondsAmount) {
    
    secondsAmount = setSecondsAmount - 1
    let minutes = Math.floor(secondsAmount / 60)
    let seconds = secondsAmount % 60

    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0')
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0')    
    return secondsAmount;
}