/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
//titulo.textContent = 'Aula 09 Manipular CSS'
titulo.innerHTML = 'Aula Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/cuieio.gif')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "white";
titulo.style.color = "white";
titulo.style.backgroundColor = "orange";
titulo.style.borderBottom = "2px solid green";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let btnPink = document.querySelector('#btpink')

let btnYellow = document.querySelector('#btyellow')

let btnBlue = document.querySelector('#btblue')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnPink.addEventListener('click', modoPink)
btnYellow.addEventListener('click', modoYellow)
btnBlue.addEventListener('click', modoBlue)

function modoDark() {
    //event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("pink");
    tela.classList.remove("light");
    tela.classList.remove("yellow");
    tela.classList.remove("blue");
}

function modoLight() {
    //event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.remove("pink");
    tela.classList.remove("yellow");
    tela.classList.remove("blue");
    tela.classList.add("light");
}

function modoPink() {
    console.log('modo pink')
    tela.classList.remove('dark')
    tela.classList.remove('light')
    tela.classList.remove('yellow')
    tela.classList.remove('blue');
    tela.classList.add('pink')
}

function modoYellow() {
    console.log('modo pink')
    tela.classList.remove('dark')
    tela.classList.remove('light')
    tela.classList.remove('pink');
    tela.classList.remove('blue');
    tela.classList.add('yellow')
}
function modoBlue() {
    console.log('modo pink')
    tela.classList.remove('dark')
    tela.classList.remove('light')
    tela.classList.remove('pink');
    tela.classList.remove('yellow');
    tela.classList.add('blue')
}
/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/
