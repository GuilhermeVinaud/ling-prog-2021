function cancelar(){
    
}

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
    let a,b,c,d,x //para troca
    for(let cont2=1 ; cont2<=5; cont2++){
        a = (prompt(`Digite o valor de A:`))
        if(a.length == 0){ //conteúdo vazio
            return 0
        }
    
    let a = Number(a)
    let b = Number(prompt(`Digite o valor de B:`))
    let c = Number(prompt(`Digite o valor de C:`))
    let d = Number(prompt(`Digite o valor de D:`))
   
    
        for(let cont=1 ; cont <=3; cont++){
            if(a>b){
                x=a
                a=b
                b=x
            }else if (b>c){
                x=b
                b=c
                c=x

            }else if (c<d){
                x=c
                c=d
                d=x
            }
        }
    
    alert(`A ordem crescente é :${a},${b},${c},${d} `)
    alert(`A ordem crescente é :${d},${c},${b},${a} `)
    }

}

function exe2(){

    let valor = Number(prompt(`Digite o valor do ingresso:`))
    let quant = 120
    let lucro 
    let saida = ""
    let maiorlucro = 0
    let maiorqtde = 0
    let maiorpreco = 0

    for(valor = 5.0; valor <= 5 && valor > 0; valor = valor - 0.50){
        lucro = (valor * qtde)-200 
        
        

        if(lucro > maiorlucro){
            maiorlucro = lucro 
            maiorpreco = valor
            maiorquant = quant
        }
        saida = saida + (` Preço: R$ ${(valor).toFixed(2)} Ingressos: ${quant}Despesa: R$200,00 Lucro R$${lucro}`) + "\n" 
        quant = quant + 26
    }
     alert(`${saida}`) 
     alert(`Maior lucro será de :R$${maiorlucro} ${maiorquant}ingressos a R$${maiorpreco} `)  
     
    
       
        
   
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

function exe8(){
    let idade = Number(prompt(`Digite a idade:`))
    let peso = Number(prompt(`Digite o peso:`))
    let altura = Number(prompt(`Digite a altura:`))
    let olhos = String(prompt(`Insira a cor dos olhos A-azul; \n P-preto; \n V-verde; \n C-castanho :`))
    let cabelo = String(prompt(`Insira a cor dos cabelos P-preto \n C-castanho \n L-louro \n R-ruivo: `))

    if (idade>50 && peso < 60){
        idade++
        peso++
    }
    if (altura<1.50){
        altura++
    }
}

function exe21(){
    let opcao
    let cand1 = 0
    let cand2 = 0
    let cand3 = 0
    let cand4 = 0
    let nulo = 0

    do{
        opcao = Number(prompt(`Informe \n1-Cand1\n 2-Cand2\n 3-Cand3 \n 4-Cand4 \n 5-Nulo \n 0-Sair`))
        let qtde = 0
        switch(opcao){
            case 1 :
                cand1 ++
                qtde++
                 break
            case 2 : 
                cand2++
               qtde++
                break

            case 3 :
                cand3++
                qtde++
                break
            case 4 :
                cand4++
                qtde++
                 break
            case 5 : 
                nulo++
                qtde++
                break
            case 6 : 
                branco++
                qtde++
                break
            case 0 :
                alert(`Encerrando votações`)
                break
            default : alert(`Opção Inválida`)
            
        }
    }while(opcao!=0)
    let total = qtde
    alert(`Cand1:${cand1}\n Cand 2:${cand2}\n Cand3:${cand3}\n Cand4:${cand4}`)
    alert(`% branco: ${branco/qtde*100} %Nulo:${nulo/qtde*100}`)

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