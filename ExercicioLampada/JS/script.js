const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const resetar = document.getElementById('resetar')
const lampada = document.getElementById('lamp')

function estaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1
    //retorna True ou False
}
function lampLigada(){
    if (!estaQuebrada()){
        lampada.src = "img/ligada.jpg"
    }
}
function lampDesligada(){
    if (!estaQuebrada()){
        lampada.src = "img/desligada.jpg"
    }
}
function lampQuebrada(){
    lampada.src = "img/quebrada.jpg"
}
function lampResetar(){
        lampada.src = "img/desligada.jpg"
}
ligar.addEventListener('click',lampLigada)
desligar.addEventListener('click',lampDesligada)
resetar.addEventListener('click', lampResetar)

lampada.addEventListener('mouseover',lampLigada)
lampada.addEventListener('mouseleave',lampDesligada)
lampada.addEventListener('dblclick',lampQuebrada)