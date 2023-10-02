function playall(songNumber) {
  var audioElement = document.getElementById("song");
  var playBtn = document.getElementById("play-pause");
  var songFileName = "songs/" + songNumber + ".mp3";
  var currsong = document.getElementById("song" + songNumber);

  if (
    audioElement.getAttribute("src") == songFileName &&
    !audioElement.paused
  ) {
    audioElement.pause();
    playBtn.innerHTML = '<img src="images/pause-button.png">';
    /*currsong.classList.remove("highlight");*/
  } else {
    audioElement.setAttribute("src", songFileName);
    audioElement.play();
    playBtn.innerHTML = '<img src="images/play-button.jpg">';
    /*currsong.classList.add("highlight");*/
  }
}

function playaudio() {
  var audio = document.getElementById("song");
  var playBtn = document.getElementById("play-pause");
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '<img src="images/play-button.jpg">';
  } else {
    audio.pause();
    playBtn.innerHTML = '<img src="images/pause-button.png">';
  }
}
