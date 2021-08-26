function exe1(){

    // recuperar entrada de dados
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)

    // calcular a média
    let media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 7){
        document.getElementById("resultado").innerHTML = `A média é ${media} está aprovado`
    }
    else {
        document.getElementById("resultado").innerHTML = `A média é ${media} está reprovado`
    }
}

function exe2(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)

    let media = (nota1 + nota2) / 2

    if ((media >=0) && (media < 3)){
        resultado = `Aluno aprovado com média ${media}`
    }else if((media>= 3)(media < 7)){
        resultado = `Aluno em exame  com média ${media}`
    }else if ((media >=7)&&(media <=10)){
        resultado = `Aluno reprovado com média ${media}`
    }else {
        resultado = `Notas informadas são inválidas`
    }
    // mostra resultado
    document.getElementById("resultado").innerHTML = resultado
}
function exe3(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    if (num1>num2){
        document.getElementById("resultado").innerHTML = `o menor número é ${num2}`
    }
    else if(num1<num2){
        document.getElementById("resultado").innerHTML = `o menor número é ${num1}`
    }
    else {
        document.getElementById("resultado").innerHTML = `Não existe número menor, ambos são iguais`
    }
}
function exe4(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let num3 = Number(document.getElementById("num2").value)

    if((num1==num2) && (num2==num3)){
        document.getElementById("resultado").innerHTML = `Todos os números são iguais`
    }
    else if ((num1>num2) && (num1>num3)){
        document.getElementById("resultado").innerHTML = `O maior número é ${num1}`
    }
    else if (num2>num3){
        document.getElementById("resultado").innerHTML = `O maior número é ${num2}`
        
    }else {
        document.getElementById("resultado").innerHTML = `O maior número é ${num3}`
    }
}

function exe5(){
    let num1 = Number(document.getElementById("num1").value)
    let num1 = Number(document.getElementById("num1").value)
    let opcao = Number(document.getElementById("opcao").value)

    let resultado
    switch(opcao){
        case 1: resultado = (num1 + num2) / 2
            break
        case 2: if (num1>= num2){
            resultado = num1 - num2
        }else {
            resultado = num2 - num1
        }
            break
        case 3: resultado = (num1 * num2)
            break 
        case 4: if (num2!= 0){
                    resultado = num1 /num2
                }
                else {
                    resultado = "Divisão por zero"
        }
            break
        default: resultado = "Opção inválida"
    }
    document.getElementById("resultado").innerHTML = resultado
}
function exe6(){
    let num1 = Number(document.getElementById("num1").value)
    let num1 = Number(document.getElementById("num1").value)
    let opcao  = (document.getElementById("opcao").value)

    let resultado
    switch(opcao){
        case 'a': resultado = `O resultado da exponenciação é${Math.pow(num1,num2)}`
                    break
        case 'b': resultado = `O resultado das raízes quadradas são: ${Math.sqrt(num1)} e ${Math.sqrt(num2)}` 
            break
        case 'c': resultado = `O resultado das raízes cúbicas são: ${Math.cbrt(num1)} e ${Math.cbrt(num2)}`
            break     
        default: resultado = `Valor inválido`
    }
    document.getElementById("resultado").innerHTML = resultado
}
function exe7(){
    let salario = Number(document.getElementById("salario").value)
    let aumento = 0
    
    if(sal<500){
        aumento = (salario * 30) / 100
    }
    
    if(aumento==0){
        document.getElementById("resultado").innerHTML = `Não houve aumento`
    }
    else{
        document.getElementById("resultado").innerHTML = `Aumento ${aumento} e salário reajustado:${salario + aumento} `
    }
}   

function exe8(){
    let sal = Number(document.getElementById("sal").value)

    if(sal<=300){
    resultado= sal + (sal * 0.35)
    document.getElementById("resultado").innerHTML = `O novo salário será ${resultado}`
    }
    else {
    resultado = sal + (sal * 0.15)
    document.getElementById("resultado").innerHTML  = `O novo salário será ${resultado}`
    }
}
function exe9(){
    let saldo = Number(document.getElementById("saldo").value)

    if (saldo>400){
        resultado = saldo + (saldo * 0.3)
        document.getElementById("resultado").innerHTML = `O saldo médio é R$${saldo} e o crédito será de R$${resultado}`
    }
    else if((saldo<=400) && (saldo>300)){
        resultado = saldo + (saldo * 0.25)
        document.getElementById("resultado").innerHTML = `O saldo médio é R$${saldo} e o crédito será de R$${resultado}`
    }
    else if((saldo<=300) && (saldo>200)){
        resultado = saldo + (saldo * 0.20)
        document.getElementById("resultado").innerHTML = `O saldo médio é R$${saldo} e o crédito será de R$${resultado}`
    }
    else if(saldo<=200){
        resultado = saldo + (saldo * 0.10)
        document.getElementById("resultado").innerHTML = `O saldo médio é R$${saldo} e o crédito será de R$${resultado}`
    }
}
function exe10(){
    let custo_fab = Number(document.getElementById("custo_fab").value)

    if (custo_fab<=12000){
        resultado = custo_fab + (custo_fab * 0.05)
        document.getElementById("resultado").innerHTML = `O custo para o consumidor será de R$${resultado}`
    }
    else if((custo_fab>12000) && (custo_fab>25000)){
        resultado = custo_fab + (custo_fab * 0.10) + (custo_fab * 0.15)
        document.getElementById("resultado").innerHTML = `O custo para o consumidor será de R$${resultado}`
    }
    else if(custo_fab>25000){
        resultado = custo_fab + (custo_fab * 0.15) + (custo_fab * 0.20)
        document.getElementById("resultado").innerHTML = `O custo para o consumidor será de R$${resultado}`
    }
}
function exe11(){
    let sal = Number(document.getElementById("sal").value)

    if (sal<=300){
        resultado = sal + (sal * 0.15)
        document.getElementById("resultado").innerHTML = `O novo salário será de R$${resultado}`
    }
    else if((sal>300) && (sal>600)){
        resultado = sal + (sal * 0.10) 
        document.getElementById("resultado").innerHTML = `O novo salário será de R$${resultado}`
    }
    else if((sal>=600)&&(sal<=900)){
        resultado = custo_fab + (sal * 0.05) 
        document.getElementById("resultado").innerHTML = `O novo salário será de R$${resultado}`
    }
    else{
        document.getElementById("resultado").innerHTML = `O salário atual não terá reajuste`
    }
}
function exe12(){
    let sal = Number(document.getElementById("sal").value)

    if (sal<=350){
        resultado = sal - (sal * 0.07) + 100
        document.getElementById("resultado").innerHTML = `Salário a receber = R$${resultado}`
    }
    else if((sal>350) && (sal>600)){
        resultado = sal - (sal * 0.07) + 75
        document.getElementById("resultado").innerHTML = `Salário a receber = R$${resultado}`
    }
    else if((sal>=600)&&(sal<=900)){
        resultado = sal - (sal * 0.07) + 50
        document.getElementById("resultado").innerHTML = `Salário a receber = R$${resultado}`
    }
    else{
        resultado = sal - (sal * 0.07) + 35
        document.getElementById("resultado").innerHTML = `Salário a receber = R$${resultado}`
    }
}
function exe13(){
    let preco = Number(document.getElementById("preco").value)

    if(preco<=50){
       novo_preco = preco * 1.05
        document.getElementById("novo_preco").innerHTML = `Novo preço = R$${resultado}`
    }
    else if((preco>50)&&(preco>=100)){
        novo_preco = preco * 1.1
        document.getElementById("novo_preco").innerHTML = `Novo preço = R$${resultado}`
    }
    else {
        novo_preco = preco * 1.15
        document.getElementById("novo_preco").innerHTML = `Novo preço = R$${resultado}`
    }

    if(novo_preco<=80){
        document.getElementById("class").innerHTML = `Barato`
    }
    else if((novo_preco>80)&&(novo_preco<=120)){
        document.getElementById("class").innerHTML = `Normal`
    }
    else if((novo_preco>120)&&(novo_preco<=200)){
        document.getElementById("class").innerHTML = `Caro`
    }
    else {
        document.getElementById("class").innerHTML = `Muito Caro`
    }
}