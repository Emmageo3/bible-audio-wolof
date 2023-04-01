// définir une variable pour suivre l'audio en cours de lecture
var currentAudio = null;

// récupérer tous les éléments audio dans la page
var allAudio = document.querySelectorAll('audio');

// ajouter un événement ended à chaque élément audio
allAudio.forEach(function(audio) {
audio.addEventListener('ended', function() {
    // trouver l'élément audio suivant dans la liste
    var nextAudio = audio.parentElement.parentElement.nextElementSibling;
    if (nextAudio) { // si un prochain élément audio existe
    var nextAudioPlayer = nextAudio.querySelector('audio');
    currentAudio = nextAudioPlayer; // affecter le prochain audio à la variable de lecture en cours
    nextAudioPlayer.play(); // déclencher la lecture du prochain fichier audio
    } else { // si aucun élément audio suivant n'existe, réinitialiser la variable de lecture en cours
    currentAudio = null;
    }
});
});

// ajouter un événement play à chaque élément audio
allAudio.forEach(function(audio) {
audio.addEventListener('play', function() {
    // mettre en pause l'audio en cours de lecture s'il existe
    if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    }
    // affecter l'audio actuellement en lecture à la variable de lecture en cours
    currentAudio = audio;
});
});