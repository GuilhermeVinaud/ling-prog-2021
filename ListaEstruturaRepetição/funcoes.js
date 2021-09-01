function exe0(){

    let contador = 1
    let preco
    let soma = 0
    while (contador <= 10) {
        preco = Number(prompt(`Informe o preço do produto ${contador}`))
        soma = soma + preco	
        contador++
    }
    alert(`A média de preço dos produto é ${soma/10}`)
}
function exe1(){
    let vetor= new int[4]
    let vetor1=new int[4]
    let contador = 4

   for(int=0;int<5;int++){
        let numero = Number(prompt(`Informe um número :`))
        vetor[int]=numero
    }

    for(int=0;int<5;int++){
        vetor1[int]=vetor[contador] ; contador --
    }

    for(int=0;int<5;int++){
        alert(`Ordem crescente:${vetor[int]},`)
    }
    for(int=0;int<5;int++){
        alert(`Ordem decrescente:${vetor[int]},`)
    }

}

function exe3()
{
    let contador = 1
    let idade
    let f1 = 0; let f2=0;let f3 =0;let f=0; let f5 = 0;
    while(contador<=0)
    {
        idade = Number(prompt(`Informe a idade${contador}`))
        if (idade<= 15){
            f1++
        }
        else if (idade<=30){
            f2++
        }
        else if(idade<=45){
            f3++
        }
        else if (idade < 60){
            f4++
        }
        else {
            f5++
        }
        contador++
    }

    alert(`Faixa 1: ${f1} Faixa 2: ${f2} Faixa 3: ${f3} Faixa 4: ${f4} Faixa 5: ${f5}`)
    alert(`Percentual da faixa 1 ${f1/8*100} Percentual da faixa 5 ${f5/8*100}`)
}

function exe6(){
    let contador = 1
    let valor
    let opcao
    let totalVista = 0
    let totalPrazo = 0
    while(contador<=15){
        valor = Number(prompt(`Informe o valor do produto${contador}`))
        opcao = prompt(`Informe o tipo de transação v-à vista p-a prazo:`).toUpperCase()
        switch(opcao){
            case 'V':totalVista += valor
            case 'P':totalPrazo+= valor
            default: alert(`Forma de Pagamento Inválida`)
        }
        contador++
    }
    alert(`Total á vista${totalVista.toFixed(2)} Total à prazo${totalPrazo.toFixed(2)} Toral geral ${(totalVista + totalPrazo).toFixed(2)}`)
    alert(`Primeira parcela do valor total à vista${(totalPrazo/3).toFixed(2)}`)
}

function exe23()
{
    let opcao
    do{
        
        opcao = Number(prompt(`Digite \n1.Novo Salário \n2.Férias \n3.Décimo terceiro \n4.Sair`))
        switch(opcao){
            case 1:let salario = Number(prompt(`Informe o salário`))
                    let novoSalario = salario
                    if(salario < 210){
                    novoSalario = salario + (15*salario)/100
                    }else if(salario<=600){
                    novoSalario = salario + (10 * salario)/100
                    }else{
                    novoSalario = salario + (5*salario/100)   
                    }
                    alert(`O novo salário é de ${novoSalario}`)
                    break

            case 2:let salario1 = Number(prompt(`Informe o salário`))
                    alert(`As férias serão ${salario1 + salario1/3}`)
                    break
            case 3:let salario2 = Number(prompt(`Informe o salário`))
                    let meses = Number(prompt(`Informe quantos meses foram trabalhados`))
                    alert(`Décimo terceiro${salario2 * meses/12}`)
                    break
            case 4: alert(`O programa será encerrado`)
            default: alert(`Opção inválida`)
           
        }
    }while(opcao!=4)
}