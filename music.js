function musicOne() {
    const img = document.getElementById('1');
    const music = document.querySelector('.m-1');
    console.log(music);

    img.addEventListener('mouseover', () => {
        music.play();
    });

    img.addEventListener('mouseout', () => {
        music.pause();
        music.currentTime = 0; // Сбросить время воспроизведения
    });
}