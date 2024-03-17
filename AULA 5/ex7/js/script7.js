function Evento(){
    var salario = parseFloat(prompt('Qual o salário atual? '))
    console.log(typeof(salario))
    legenda.innerHTML = 'O salário é de ' + salario
    var reajuste = parseFloat(prompt('Qual o será o reajuste? '))
    console.log(typeof(reajuste))
    var aumento = salario * (reajuste / 100)
    console.log(typeof(aumento))
    legenda2.innerHTML = 'A porcentagem aumentada é a de ' + reajuste + '% Assim somando ' + aumento + ' ao salário.'
    var salarioaumentado = salario + aumento
    console.log(typeof(salarioaumentado))
    legenda3.innerHTML = 'O salário reajustado será de ' + salarioaumentado
}