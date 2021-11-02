let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let time = document.getElementById("time");
let masterSongName = document.getElementById("masterSongName");
let masterArtist = document.getElementById("masterArtist");
let coverImg = document.getElementById('coverImg');
let songNames = Array.from(document.getElementsByClassName("songName"));
let songIndex = 0;

let songs = [
  {
    songName: "faded",
    filePath: "1.mp3",
    Artist: "Alan Walker",
    coverPath: "1.jpg",
  },
  {
    songName: "Where are You",
    filePath: "2.mp3",
    Artist: "Alan Walker",
    coverPath: "2.jpg",
  },
  {
    songName: "Play Date",
    filePath: "3.mp3",
    Artist: "Melanie Martinez",
    coverPath: "3.jpg",
  },
  {
    songName: "Copines",
    filePath: "4.mp3",
    Artist: "Aya Nakamura",
    coverPath: "4.jpg",
  },
  {
    songName: "Let Me Love You",
    filePath: "5.mp3",
    Artist: "Alec Benjamin",
    coverPath: "5.jpg",
  },
];
// song names functions
songNames.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("title")[0].innerText = songs[i].songName;
  element.getElementsByClassName("artist")[0].innerText = songs[i].Artist;
});

// masterPlay buttons functions
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-play");
    masterPlay.classList.remove("fa-pause");
  }
});

// myProgressBar functions
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      masterSongName.innerText = songs[songIndex].songName;
      masterArtist.innerText = songs[songIndex].Artist;
      coverImg.src = songs[songIndex].coverPath;
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
      audioElement.src = `${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
    });
  }
);
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterArtist.innerText = songs[songIndex].Artist;
    coverImg.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterArtist.innerText = songs[songIndex].Artist;
    coverImg.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
