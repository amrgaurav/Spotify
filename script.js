// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "On & On-Cartoon, Daniel Levi", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Invincible-DEAF KEV", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Mortals-Warriyo, Laura Brehm", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Shine-Spektrem", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Why We Lose-Cartoon, Coleman Trapp", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Sky High-Elektronomia", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Symbolism-Electro-Light", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Heroes Tonight-Janji, Johnning", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "My Heart-Different Heaven, EH!DE", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Feel Good-Syn Cole", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Aman-Top Haryanvi Hitz; ", filePath: "songs/11.mp3", coverPath: "covers/10.jpg"},
    {songName: "gaurav-gaurav", filePath: "songs/12.mp3", coverPath: "covers/10.jpg"},
    {songName: "none-none", filePath: "songs/13.mp3", coverPath: "covers/4.jpg"},
    {songName: "Aaj Se Teri ", filePath: "songs/14.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Aashiquii Kaa Gum ", filePath: "songs/15.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Are Daulat Ya Shohrat Dua Loge Tum  ", filePath: "songs/16.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Lambiyaan Si Judaiyaan ", filePath: "songs/17.mp3", coverPath: "covers/gks.jpg"},
    {songName: "baby mere birthday pe goli chalegi ", filePath: "songs/18.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Barbaadiyan  ", filePath: "songs/19.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Dil Meri Na Sune Dil Ki Maina Suno  ", filePath: "songs/20.mp3", coverPath: "covers/gks.jpg"},
    {songName: "  KHAIRIYAT (BONUS TRACK) ", filePath: "songs/21.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Gaadi Paache Gaadi", filePath: "songs/22.mp3", coverPath: "covers/gks.jpg"},
    {songName: " Balam Thanedar _ Pranjal Dahiya", filePath: "songs/23.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Heeriye  Jasleen Royal", filePath: "songs/24.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Holi Biraj Ma  Song", filePath: "songs/25.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Hum Teri Mohabbat Main ", filePath: "songs/26.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Humraazi _ New Song", filePath: "songs/27.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Jiske prem me maine ", filePath: "songs/28.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Jogi Shaadi Mein Zaroor Aana", filePath: "songs/29.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Kaash Wo Door Na Jaati  ", filePath: "songs/30.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Kar Lo Tum Kadar Hamari   ", filePath: "songs/31.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Main Hoon Saath Tere  ", filePath: "songs/32.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Main Nikla Gaddi Leke", filePath: "songs/33.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Makhna - Drive_ Sushant Singh ", filePath: "songs/34.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Tera Fitoor _ Arijit Singh _ Himesh", filePath: "songs/35.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Prem Pujari - Drive _ Sushant S", filePath: "songs/36.mp3", coverPath: "covers/gks.jpg"},
    {songName: "RUPOSH - Haroon Kadwani _", filePath: "songs/37.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Ruposh  Haroon inza Hashmi  ", filePath: "songs/38.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Tu Banja Gali Benaras Ki", filePath: "songs/39.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Tujhse Kahan Juda Hoon Main ", filePath: "songs/40.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Terri Yaadonn Se Himesh Ke Dil Se ", filePath: "songs/41.mp3", coverPath: "covers/gks.jpg"},
    {songName: "Mohabbat Ke Kabil  Salman Ali   ", filePath: "songs/42.mp3", coverPath: "covers/gks.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})