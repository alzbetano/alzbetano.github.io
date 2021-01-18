const audio = new Audio('release.mp3');
const button = document.getElementById("playStop")
const legend = document.getElementById("legend")
const controls = document.getElementById("controls")
let playing = false

if (localStorage.getItem('value') ) {
    value = parseFloat(localStorage['value'])
    console.log(audio.duration)
    controls.value = localStorage['value']
}

function playStop() {
    if (!playing) {
        audio.play()
        playing = true
        legend.textContent = "stop"
    }
    else {
        audio.pause()
        playing = false
        legend.textContent = "play"
    }
}

controls.onchange = (e) => {
    time = e.target.value * audio.duration * 0.01
    audio.currentTime = time
}



const observer = window.setInterval(timelineCallback, 1000)
function timelineCallback() {
    if (playing) {
        controls.value = audio.currentTime/audio.duration*100
        localStorage['value'] = controls.value
        console.log(controls.value)
    }
}