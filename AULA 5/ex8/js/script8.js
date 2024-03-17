function Evento(){
    var a = prompt('Qual o valor de a?')
    console.log(typeof(a))
    var b = prompt('Qual o valor de b?')
    console.log(typeof(b))
    var c = prompt('Qual o valor de c?')
    console.log(typeof(c))
    var delta = (b * b) - 4 * a * c
    console.log(typeof(delta))
    legenda.innerHTML = 'sua equação de segundo grau é: ' + a + 'x²' + '+' + b + 'x' + '+' + c + '=0'
    legenda2.innerHTML = 'o cálculo realizado será ' + 'Δ=' + b +'²' + '-4.' + a + '.' + c + '=0'
    legenda3.innerHTML = 'o seu resultado é de ' + 'Δ=' + delta
}