const audio = new Audio('release.mp3');
const button = document.getElementById("playStop")
const legend = document.getElementById("legend")
const controls = document.getElementById("controls")
let playing = false
let dragged = false


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

audio.loop = true

audio.onloadedmetadata = () => {
    const duration = audio.duration
    window.setInterval(timelineCallback, 512)
    function timelineCallback() {
        if (playing && !dragged) {
            value = (audio.currentTime/duration*100)%100
            controls.value = value
        }
    }
    controls.onchange = (e) => {
        value = e.target.value % 100
        time = value * duration * 0.01
        audio.currentTime = time
    }
    
    controls.onmousedown = () => {
        dragged = true
    }
    controls.ontouchstart = () => {
        dragged = false
    }

    controls.ontouchend = () => {
        dragged = false
    }
    controls.onmouseup = () => {
        dragged = false
    }
}