// Variables
let songIndex = 0
let audioElement= new Audio('Music/1.mp3')
let masterPlay = document.getElementById('play-pause')
let progressBar = document.getElementById('bar')
let songItem = Array.from(document.getElementsByClassName('songItem'))
let songItemPlay = Array.from(document.getElementsByClassName('play'))
// Songs

let songs = [
    {songName : "Kun Faya Kun", filePath: "Music/1.mp3"},
    {songName : "Khali Salam Dua", filePath: "Music/2.mp3"},
    {songName : "Masakali", filePath: "Music/3.mp3"},
    {songName : "Wavin' Flag", filePath: "Music/4.mp3"},
]

songItem.forEach((element, i)=>{
  element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

songItemPlay.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = parseInt(e.target.id)
        audioElement.src = `Music/${index}.mp3`
        audioElement.play()
        audioElement.currentTime = 0;
    })
})
// Play pause

masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime == 0){
        audioElement.play()
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause')
        masterPlay.classList.add('fa-play')
    }
})

// Listen to events

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressBar.value = progress
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
})