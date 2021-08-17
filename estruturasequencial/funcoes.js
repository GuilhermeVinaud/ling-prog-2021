function exe1(){
    //recupera os dados do usuário
    //vamos converter o que o usuário digita
    let n1=Number(document.getElementById("n1").value)
    let n2=Number(document.getElementById("n2").value)
    //processamento
    let resultado= n1 - n2
    //mostrar resultado
    document.getElementById("resultado").innerHTML = resultado

}
function exe2(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    //processamento
    let resultado = n1 *n2 *n3
    //resultado
    document.getElementById("resultado").innerHTML = resultado
}
function exe3(){
    //entrada
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    if (n2==0){
        document.getElementById("resultado").innerHTML = "Impossível dividir por zero"
    }
    else{
        let resultado = n1 / n2
        document.getElementById("resultado").innerHTML = resultado
    }   
}

function exe4(){
let nota1 = Number(document.getElementById("nota1").value)
let nota2 = Number (document.getElementById("nota2").value)

let resultado = (nota1 * 2 + nota2 * 3) / 5
document.getElementById("resultado").innerHTML = `A média ponderada é :${resultado}`
}

function exe5(){
    let preco = Number(document.getElementById("preco").value)
    let resultado = preco - (preco * 10 / 100)
    document.getElementById("resultado").innerHTML = `O novo preço com desconto é : ${resultado}`
}

function exe6() {
    let sal_base = Number(document.getElementById("sal_base").value)
    let comissao = sal_base * 0.04
    let sal_final = sal_base + comissao

    document.getElementById("comissao").innerHTML = `O valor da comissão = R$ ${comissao}`
    document.getElementById("sal_final").innerHTML = `O salário final = R$${sal_final}`
}

function exe7(){
    let peso = Number(document.getElementById("peso").value)
    let peso15plus = peso + (peso * 0.15)
    let peso20less = peso - (peso * 0.2)

    document.getElementById("peso15plus").innerHTML = `Se ganhar 15% peso = ${peso15plus}kg`
    document.getElementById("peso20less").innerHTML = `Se perder 20% peso = ${peso15plus}kg`
}
function exe20(){
    let angulo = Number(document.getElementById("angulo").value)
    let distancia = Number(document.getElementById("distancia").value)
    //processamento
    let hipotenusa = distancia / Math.cos(angulo)
    //saida
    document.getElementById("resultado").innerHTML = `${hipotenusa.toFixed(2)}`
}

function exe15(){
    let salario = Number(document.getElementById("Salario").value)
    let conta1 = Number(document.getElementById("conta1").value)
    let conta2 = Number(document.getElementById("conta2").value)
}