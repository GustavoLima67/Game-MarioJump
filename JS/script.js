let mario = document.querySelector('.mario');
let pipe = document.querySelector('.pipe');

let jump = () => { 
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600);
}

let loop = setInterval(() => {

    let pipePosition = pipe.offsetLeft;
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if(pipePosition <= 50 && pipePosition > 0 &&  marioPosition < 31) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.scr = '../assets/img/game-over.png';
        mario.style.width = '60px';
        mario.style.marginLeft = '40px';

        clearInterval(loop);
    }

},10);

document.addEventListener('keydown', jump);