var currentAudioIndex = 1; // index de l'audio en cours de lecture

function nextAudio() {
  currentAudioIndex++;
  if (currentAudioIndex > 28) {
    currentAudioIndex = 1;
  }
  // mettre en pause l'audio en cours de lecture
  var currentAudio = document.getElementById("audio" + (currentAudioIndex - 1));
  currentAudio.pause();
  // lire le prochain fichier audio
  var nextAudio = document.getElementById("audio" + currentAudioIndex);
  nextAudio.currentTime = 0;
  nextAudio.play();
}
