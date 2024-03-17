function Evento(){
    var produt = prompt('Qual o produto que deseja comprar?')
    console.log(typeof(produt))
    var preco = prompt('Qual o preço desse produto?')
    console.log(typeof(preco))
    var valor = prompt('Informe o valor recebido')
    console.log(typeof(valor))
    var troco = valor - preco
    legenda.innerHTML = 'Você comprará um(a): ' + produt
    legenda2.innerHTML = 'O preço deste produto é de ' + preco
    legenda3.innerHTML = 'O seu troco será de ' + troco
}