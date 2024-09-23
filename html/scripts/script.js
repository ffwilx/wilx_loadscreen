const loadingAudio = new Audio("assets/music.mp3"); 
let loadingMusic = false;

window.onload = () => {
    loadingAudio.volume = 0.2;
    loadingAudio.play();
};

window.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        if (!loadingMusic) {
            loadingAudio.pause();
            loadingMusic = true;
        } else {
            loadingAudio.play();
            loadingMusic = false;
        }
    }
});
