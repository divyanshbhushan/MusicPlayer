// Variables
let songIndex = 0
let audioElement= new Audio('Music/1.mp3')
let masterPlay = document.getElementById('play-pause')
let progressBar = document.getElementById('bar')
let songItem = Array.from(document.getElementsByClassName('songItem'))
let songItemPlay = Array.from(document.getElementsByClassName('play'))
let nextSong = document.getElementById('nextSong')
let previousSong = document.getElementById('previousSong')
let currentSongName = document.getElementById('currentSongName')
// Songs

let songs = [
    {songName : "Kun Faya Kun", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/1.mp3"},
    {songName : "Khali Salam Dua", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/2.mp3"},
    {songName : "Masakali", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/3.mp3"},
    {songName : "Wavin' Flag", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/4.mp3"},
    {songName : "Sooiyan - Guddu Rangeela", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/5.mp3"},
    {songName : "Zaalima - Raees", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/6.mp3"},
    {songName : "Aasan Nahi Yahan", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/7.mp3"},
    {songName : "Chahun Main Ya Naa", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/8.mp3"},
    {songName : "Kesariya", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/9.mp3"},
    {songName : "Khariyat - Bonus Track", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/10.mp3"},
    {songName : "Main Hoon Dewana Tera", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/11.mp3"},
    {songName : "Manwa Laage", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/12.mp3"},
    {songName : "Sukoon Mila", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/13.mp3"},
    {songName : "Tere Hoke Rehengay", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/14.mp3"},
    {songName : "Tose Naine (Mickey Virus)", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/15.mp3"},
    {songName : "Khamoshiyan", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/16.mp3"},
    {songName : "Ijazat", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/17.mp3"},
    {songName : "Itni si Baat Hai", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/18.mp3"},
    {songName : "Apna Bana Le", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/19.mp3"},
    {songName : "Mast Magan", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/20.mp3"},
    {songName : "Phir Mohabbat - Murder 2", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/21.mp3"},
    {songName : "Dhoka Dhadi", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/22.mp3"},
    {songName : "Janam Janam", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/23.mp3"},
    {songName : "Phir Kabhi", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/24.mp3"},
    {songName : "Raabta", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/25.mp3"},
    {songName : "SaudeBaazi", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/26.mp3"},
    {songName : "Shayad", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/27.mp3"},
    {songName : "Ann Bann - Zero", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/28.mp3"},
    {songName : "Bebasi Dard ka Aalam", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/29.mp3"},
    {songName : "Beshuba", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/30.mp3"},
    {songName : "Bheegey Hont", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/31.mp3"},
    {songName : "Bolo Tum Bolo", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/32.mp3"},
    {songName : "Channa Vey", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/33.mp3"},
    {songName : "Dil Keh Raha Hai", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/34.mp3"},
    {songName : "Dil me jo Baat - Sonu Nigam", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/35.mp3"},
    {songName : "Jadugari", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/36.mp3"},
    {songName : "Nana Chi Taang", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/37.mp3"},
    {songName : "Raat Bhar", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/38.mp3"},
    {songName : "Salam Namaste", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/39.mp3"},
    {songName : "Salaame", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/40.mp3"},
    {songName : "Shukran Allah", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/41.mp3"},
    {songName : "So Jaon Mein", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/42.mp3"},
    {songName : "So Right", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/43.mp3"},
    {songName : "Tauba Tauba", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/44.mp3"},
    {songName : "Tere Bin - Reprise", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/45.mp3"},
    {songName : "Tere Bin", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/46.mp3"},
    {songName : "Tere Liye", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/47.mp3"},
    {songName : "Tu Hi Toh Hai", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/48.mp3"},
    {songName : "Tu Jahan Bhi Jayegi", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/49.mp3"},
    {songName : "Tumhis Se (Unplugged)", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/50.mp3"},
    {songName : "Tumse Yu Milenge", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/51.mp3"},
    {songName : "You Are My Love - All The Best", filePath: "https://divyanshbhushan.github.io/MusicPlayer/Music/52.mp3"},
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
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
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
    if (songIndex >=52 ){
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