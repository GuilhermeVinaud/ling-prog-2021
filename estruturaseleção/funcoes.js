function exe1(){

    
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)

    let media = (nota1 + nota2 + nota3 + nota4 ) / 4

    if (media >= 7){
        document.getElementById("resultado").innerHTML = `A média é ${media} está aprovada`
    }
    else{
        document.getElementById("resultado").innerHTML = `A média é ${media} está reprovada`
    }

}

function exe2(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)

    let media = (nota1 + nota2) / 2

    if ((media >=0)&& (media < 3)){
        resultado = `Aluno aprovado com média ${media}`
    }else if((media>= 3)(media < 7)){
        resultado = `Aluno em exame  com média ${media}`
    }else if ((media >=7)&&(media <=10)){
        resultado = `Aluno reprovado com média${media}`
    }else {
        resultado = `Notas informadas são inválidas`
    }

    document.getElementById("resultado").innerHTML = resultado
}
function exe3(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    if (num1>num2)
    {
        document.getElementById("resultado").innerHTML = `o menor número é ${num2}`
    }
    else if(num1<num2)
    {
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