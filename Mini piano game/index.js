// JavaScript for handling key presses and audio playback
document.querySelectorAll('.key').forEach(function(key) {
  key.addEventListener('click', function() {
    const note = this.getAttribute('data-note'); // Get the note from the data attribute
    const audio = document.querySelector(`audio[data-note="${note}"]`); // Find the audio element by its data-note

    if (audio) {
      audio.currentTime = 0; // Reset audio to start
      audio.play(); // Play the audio
    }
  });
});
