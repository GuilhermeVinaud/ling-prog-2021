function exe0()
{

    let vetor = []
    for (let i=0; i<10 ;i++){
        vetor[i] = Number(prompt(`Informe a nota${i+1}`))
    }
    
    let soma = 0
    for(let i=0; i<10; i++){
        soma = soma + vetor[i]
    }
    alert(`Média ${soma/10}`)
}
function exe1()
{

    let vetor = []
    let pares=[]
    let impares=[]
    for(let i=0 ;i<6;i++){
        vetor[i] = Number(prompt(`Informe um número${i+1}:`))
    }
    for(let i=0 ;i<6;i++){
        if(vetor [i] % 2==0){
        pares.push(vetor[i])
        }else {
            impares.push(vetor[i])
        }
        console.log(`Elementos pares: ${pares} e quantidade:${pares.length}`)
        console.log(`Elementos pares ${impares}e quantidade:${impares.length}`)
    }
   
}

function exe2()
{

    let vetor=[]
    let mult2=[]
    let mult3=[]
    let mult2_3=[]

    for(let i=0 ;i<7;i++){
        vetor[i] = Number(prompt(`Informe um número${i+1}`))
    }

    for(let i=0 ;i<7;i++){
        if(vetor [i] % 2==0){
            mult2.push(vetor[i])
        }
        if(vetor [i] % 3==0){
            mult3.push(vetor[i])
        }
        if((vetor [i] % 2==0) && (vetor [i] % 3==0)){
            mult2_3.push(vetor[i])
        }
    }    
        console.log(`Multiplos de 2: ${mult2} e quantidade:${mult2.length}`)
        console.log(`Multiplos de 3: ${mult3} e quantidade:${mult3.length}`)
        console.log(`Multiplos de 2 e 3: ${mult2_3} e quantidade:${mult2_3.length}`)
        alert(`Multiplos de 2 e 3: ${mult2} e quantidade:${mult2.length}`)
        alert(`Multiplos de 2 e 3: ${mult3} e quantidade:${mult3.length}`)
        alert(`Multiplos de 2 e 3: ${mult2_3} e quantidade:${mult2_3.length}`)  
}

function exe3()
{
  
    let cod=[]
    let qtde=[]
    let qtde_pedido
    for(let i=0; i<10; i++){
        cod[i]=Number(prompt(`Digite o código do produto${i+1}:`))
        qtde[i] =Number(prompt(`Digite a quantidade do produto${i+1}:`))
    }
    
    do{
        let opcao=Number(prompt(`Digite o código de um produto ou 0 para sair:`))
        
        if(opcao==cod[i]){
            qtde_pedido = Number(prompt(`Informe a quantidade:`))
            if(qtde_pedido<=qtde[i]){
                alert(`Pedido atendido. \n Obrigado , volte sempre!`)
                qtde[i]=qtde[i] - qtde_pedido
            }else{
                alert(`Não temos estoque suficiente dessa mercadoria`)
            }
        }else{
            alert(`Código inexistente`)
        }
    }while(opcao=!0)
    for(let i=0; i<10; i++){
        alert(`Códido do produto:${cod} e quantidade: ${quant}`)
    }
    
}
