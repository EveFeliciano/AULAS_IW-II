const frisk = document.querySelector('.frisk')
const flowey = document.querySelector('.flowey')
const flores = document.querySelector('.flores')

const jump = () => {
    frisk.classList.add('jump')

    setTimeout(() => {
        frisk.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {

    const floweyPosicao = flowey.offsetLeft
    const friskPosicao = +window.getComputedStyle(frisk).bottom.replace('px', '')
    const floresPosicao = flores.offsetLeft

    console.log(friskPosicao)

    if (floweyPosicao <= 120 && floweyPosicao > 0 && friskPosicao < 80){
        flowey.style.animation = 'none'
        flowey.style.left = `${floweyPosicao}px`

        frisk.style.animation = 'none'
        frisk.style.bottom = `${friskPosicao}px`

        frisk.src = './img/chara.webp'
        frisk.style.width = '75px'
        frisk.style.marginLeft = '47px'

        flores.style.animation = 'none'
        flores.style.left = `${floresPosicao}px`

        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump)