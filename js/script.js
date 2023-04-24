// Variables
let songIndex = 0
let audioElement= new Audio('Music/1.mp3')
let masterPlay = document.getElementById('play-pause')
let progressBar = document.getElementById('bar')
let songItem = Array.from(document.getElementsByClassName('songItem'))
let songItemPlay = Array.from(document.getElementsByClassName('play'))
let nextSong = document.getElementById('nextSong')
let previousSong = document.getElementById('previousSong')
// Songs

let songs = [
    {songName : "Kun Faya Kun", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/1.mp3"},
    {songName : "Khali Salam Dua", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/2.mp3"},
    {songName : "Masakali", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/3.mp3"},
    {songName : "Wavin' Flag", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/4.mp3"},
]

songItem.forEach((element, i)=>{
  element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

songItemPlay.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = parseInt(e.target.id)
        audioElement.src = `https://divyanshbhushan.github.io/MusicPlayer/Music/${index}.mp3`
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
nextSong.addEventListener('click', ()=>{
    if (songIndex >=4 ){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `https://divyanshbhushan.github.io/MusicPlayer/Music/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
});

previousSong.addEventListener('click', ()=>{
    if (songIndex <=0 ){
        songIndex = 0
    }
    else{
        songIndex -1 ;
    }
    audioElement.src = `https://divyanshbhushan.github.io/MusicPlayer/Music/${songIndex-1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
});