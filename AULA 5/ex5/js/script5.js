function Evento(){
    var produt = prompt('Qual o produto que deseja comprar?')
    console.log(typeof(produt))
    var preco = prompt('Qual o valor que está este produto?')
    console.log(typeof(preco))
    legenda.innerHTML = 'Você irá comprar ' + produt + ' por: ' + preco
}
