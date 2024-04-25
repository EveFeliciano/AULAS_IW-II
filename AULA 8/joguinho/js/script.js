const frisk = document.querySelector('.frisk');


const jump = () => {
    frisk.classList.add('jump');

    setTimeout(() => (
        
        frisk.classList.remove('jump')

    ), 500);
}

document.addEventListener('keydown' , jump); 