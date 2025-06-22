// music.js
if (!window.audioInitialized) {
  const audio = document.createElement("audio");
  audio.src = "capybara.mp3";
  audio.loop = true;
  audio.autoplay = true;
  audio.hidden = true;

  document.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
    }
  });

  document.body.appendChild(audio);
  window.audioInitialized = true;
}
