// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let faceImage = document.querySelector("[alt='Smiling face']");
  let textArea = document.getElementById("text-to-speak");
  let voiceSelect = document.getElementById("voice-select");
  let button = document.getElementsByTagName("button")[0];
  const synth = window.speechSynthesis;
  let voices;

  setTimeout(() => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement("option");
      option.text = voices[i].name;
      voiceSelect.appendChild(option);
    }
  }, 10);

  button.addEventListener('click', function() {
    if (synth.speaking) {
      synth.cancel();
    }
    let utterance = new SpeechSynthesisUtterance(textArea.value);
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name == voiceSelect.value) {
        utterance.voice = voices[i];
        break;
      }
    }
    synth.speak(utterance);
    faceImage.src = "assets/images/smiling-open.png";
    let checkSpeaking = setInterval(() => {
      if (!synth.speaking) {
        faceImage.src = "assets/images/smiling.png";
        clearInterval(checkSpeaking);
      }
    });
  });
}
