// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornSelect = document.getElementById("horn-select");
  let hornImage = document.querySelector("[alt='No image selected']");
  let audio = document.getElementsByClassName("hidden")[0];
  let volumeSlider = document.getElementById("volume");
  let volumeImage = document.querySelector("[alt='Volume level 2']");
  let playButton = document.getElementsByTagName("button")[0];
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', function() {
    if (hornSelect.value == "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      hornImage.alt = "Air horn";
      audio.src = "assets/audio/air-horn.mp3";
    } else if (hornSelect.value == "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      hornImage.alt = "Car horn";
      audio.src = "assets/audio/car-horn.mp3";
    } else {
      hornImage.src = "assets/images/party-horn.svg";
      hornImage.alt = "Party horn";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  volumeSlider.addEventListener('change', function() {
    if (volumeSlider.value == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
      volumeImage.alt = "Volume level 0";
    } else if (volumeSlider.value < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
      volumeImage.alt = "Volume level 1";
    } else if (volumeSlider.value < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
      volumeImage.alt = "Volume level 2";
    } else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
      volumeImage.alt = "Volume level 3";
    }
    audio.volume = volumeSlider.value / 100;
  });

  playButton.addEventListener('click', function() {
    audio.play();
    if (hornSelect.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}
