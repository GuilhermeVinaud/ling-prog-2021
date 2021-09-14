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

function exe2(){
    let valor = Number(prompt(`Digite o valor do ingresso:`))
    let despesas = 200
    let ingressos = 94
    let lucro 

    for(valor = 5.0; valor <= 5 && valor > 0; valor = valor - 0.50){
        ingressos = ingressos + 26
        lucro = ( ingressos * valor - despesas) / ingressos  
        alert(`O lucro será ${(lucro).toFixed(2)} para ingressos no valor de ${(valor).toFixed(2)}\n`)   
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

function exe4(){

    let numero = Number(prompt(`Digite um número:`))
    let produto
    

    for(n = 1; n>0 && n<=10; n++){
        produto = numero * n
    alert(`${numero} x ${n}= ${produto}\n`)
   
    }
    
}

function exe6(){
    let contador = 1
    let valor
    let opcao
    let totalVista = 0
    let totalPrazo = 0
    while(contador<=15){
        valor = Number(prompt(`Informe o valor do produto${contador}`))
        opcao = prompt(`Informe o tipo de transação \nV-à vista \nP-a prazo:`).toUpperCase()
        switch(opcao){
            case 'V':totalVista += valor
                break
            case 'P':totalPrazo+= valor
                break
            default: alert(`Forma de Pagamento Inválida`)
        }
        contador++
    }
    alert(`Total à vista R$${totalVista.toFixed(2)} Total à prazo R$${totalPrazo.toFixed(2)} Total geral R$${(totalVista + totalPrazo).toFixed(2)}`)
    alert(`Primeira parcela do valor total à vista R$${(totalPrazo/3).toFixed(2)}`)
}

function exe23()
{
    let opcao
    let salario
    do{
        
        opcao = Number(prompt(`Digite \n1.Novo Salário \n2.Férias \n3.Décimo terceiro \n4.Sair`))
        switch(opcao){
            case 1: salario = Number(prompt(`Informe o salário`))
                    let novoSalario = salario
                    if(salario < 210){
                    novoSalario = salario + (15*salario)/100
                    }else if(salario<=600){
                    novoSalario = salario + (10 * salario)/100
                    }else{
                    novoSalario = salario + (5*salario/100)   
                    }
                    alert(`O novo salário é de R$${novoSalario.toFixed(2)}`)
                    break

            case 2: salario = Number(prompt(`Informe o salário`))
                    alert(`As férias serão R$${(salario2 + salario2/3).toFixed(2)}`)
                    break
            case 3:  salario = Number(prompt(`Informe o salário`))
                    let meses = Number(prompt(`Informe quantos meses foram trabalhados`))
                    alert(`Décimo terceiro R$${(salario3 * meses/12).toFixed(2)}`)
                    break
            case 4: alert(`O programa será encerrado`)
            default: alert(`Opção inválida`)
           
        }
    }while(opcao!=4)
}