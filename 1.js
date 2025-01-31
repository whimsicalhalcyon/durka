let button = document.querySelector('#btn');
    let random = (min, max) => {
        let rand = min + Math.random() * (max - min + 1);
        return Math.floor(rand)
    }
    document.addEventListener('mouseover', () => {
        btn.style.left = `${random(0,90)}%`;
        btn.style.top = `${random(0,90)}%`;

});