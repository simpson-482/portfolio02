const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const restartBtn = document.querySelector('#restart');
const nextBtn = document.querySelector('#pause');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');



function playSong() {
    musicContainer.classList.add('play')
}

function pauseSong() {

}





// Event Listeners
playBtn.addEventListener('click', () =>{
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})