const frisk = document.querySelector('.frisk');


const jump = () => {
    frisk.classList.add('jump');
}

document.addEventListener('keydown' , jump);