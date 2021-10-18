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
    let opcao=Number(prompt(`Digite o código de um produto ou 0 para sair:`))
    do{
        let codCompra = Number(prompt(`Informe o código do produto para compra:`))
        let achou = false
        for(let i=0; i<10; i++){
            if(codCompra == vetCod[i]){
                achou = true
                let qtdeCompra = Number(prompt(`Informe a quantidade da compra:`))
                if(vetStok[i]-qtdeCompra >= 0){
                    vetStok[i] = vetStok[i] - qtdeCompra
      
                alert(`Pedido atendido. \n Obrigado , volte sempre!`)
                }else{
                    alert(`Quantidade em estoque insulficiente`)
                }
            }
        }
        if(!achou){
            alert(`Produto não comprado para a venda`)
        }
        cliente = Number(prompt(`Informe o novo código do cliente ou digite 0 para encerrar:`))
        
    }while(opcao=!0)
    
    for(let i=0; i<10; i++){
        alert(`Códido do produto:${cod} e quantidade: ${quant}`)
    }
    
}
function exe4(){
    let vetCod = []
    let vetStok = []

    for(let i=0; i<10; i++){
        vetCod[i] = Number(prompt(`Informe o código do produto`))
    }
}
function exe4(){
    let vet = new Array(15)
    let vetorR =[]

    for (let i=0; i<15; i++){
        vet[i] = Number(prompt(`Informe o valor do elemento ${i+1}`))
    }
    for (let i=0; i<15; i++){
        if(vet[i]==30){
            vetorR.push(i) // adicionamos a posição
        }
        alert(`As posições contendo elementos igual a 30 é ${vetorR}`)
    }
}
function exe5(){

    let vetLogica = new Array(15)
    let vetLp = new Array(10)
    let interseccao = []

    // entrada de dados
    for(let i=0;i<15;i++){
        vetLogica[i] = Number(prompt(`Informe código de matrícula do aluno que faz Lógica`))
    }
     // entrada de dados
     for(let i=0;i<10;i++){
        vetLp[i] = Number(prompt(`Informe código de matrícula do aluno que faz Linguagem de Programação`))
    }

    // intersecção
    for(let i=0;i<15;i++){ // percorre o vetor de lógica
        for(let j=0;j<10;j++){// percorre o vetor de linguagem de programação
            if (vetLogica[i] == vetLp[j]){
                interseccao.push(vetLogica[i])
            }
        } 
    }
    alert(`Alunos que fazem ambas as disciplinas ${interseccao}`)
}

function exe6()
{
    let vetNomes = new Array(10)
    let vendas = new Array(10)
    let comissao = new Array(10)

    for(let i=0; i<10; i++){
        vetNomes[i] = prompt(`Informe o nome do vendedor${i+1}:`)
        vendas[i] = Number(prompt(`Informe o total de vendas ${i+1}:`))
        comissao[i] = Number(prompt(`Informe a porcentagem da comissão ${i+1}:`))
    }
    let totalVendas = 0
    let maior = 0
    let nomeMaior = 0
    let menor = 100000
    let nomeMenor = "" 

    for(let i=0; i<10; i++){
        let receber = (vendas[i]* comissao[i])/100
      if(receber>maior){
            maior=receber
            nomeMaior = vetNomes[i]
        }
        if(receber < menor){
            menor = receber
            nomeMenor = vetNomes[i]
        }
        alert(`O vendedor  ${vetNomes} vai receber ${receber} vendas`)
       totalVendas = totalVendas + vendas[i]
    }
    alert(`O total de vendas foi de ${totalVendas}`)
    alert(`O maior valor a receber é ${maior} do vendedor ${nomeMaior}`)
    alert(`O menor valor a receber é ${menor} do vendedor ${nomeMenor}`)   
}

function exe7()
{
    let vetNum = new Array(10)
    let cont_neg = 0
    let soma_pos = 0
    

    for(i=0; i<10; i++){
        vetNum[i] = prompt(`Informe um número:`)
    }
    for(i=0; i<10; i++){
        if(vetNum[i]<0){
            cont_neg++
        }else if(vetNum[i]>0){
            soma_pos = soma_pos + parseInt(vetNum[i])
        }
    }
    alert(`Números digitados:${vetNum}\n Números negativos:${cont_neg} \n Soma dos números positivos:${soma_pos}`)
}

function exe8(){
    let vetNomes = new Array(7)
    let vetMedia = new Array(7)
    let md_maior = 0
    let md_menor = 12
    let nomeMenor = ""
    let nomeMaior = ""


    for(i=0; i<7; i++){
        vetNomes[i] = prompt(`Informe o nome do aluno(a)${i+1}: `)
        vetMedia[i] = Number(prompt(`Informe a média final do aluno(a)${i+1}:`))
    }

    for(i=0; i<7; i++){
      
        if(vetMedia[i] > md_maior){
            md_maior = vetMedia[i]
            nomeMaior = vetNomes[i]
        }else if(vetMedia[i] < md_menor){
            md_menor = vetMedia[i]
            nomeMenor = vetNomes[i]
        }

        if(vetMedia[i] < 7){
            alert(`Para o aluno ${vetNomes[i]} ser aprovado, precisa tirar ${10 - vetMedia[i]}`)

        }
    }
    alert(`Aluno com a maior média: ${nomeMaior} ( ${md_maior})`)

}
function exe9(){

    let produto = new Array(10)
    let codigo = new Array(10)
    let preco = new Array(10)
    let novo_preco = new Array(10)
    let resultado = new Array(10)
    for(i=0; i<10; i++){
        produto[i] = prompt(`Insira o nome do produto ${i+1}:`)
        codigo[i] = Number(prompt(`Insira o código ${i+1}:`))
        preco[i] = Number(prompt(`Insira o valor do produto ${i+1}:`))
        
        if ((codigo[i] % 2 == 0) && ( preco[i]>1000)){
            novo_preco[i] = preco[i] * 1.2
        }else if (codigo[i] % 2 == 0){
            novo_preco[i] = preco[i] * 1.15
        }else if(preco[i]>1000){
            novo_preco[i] = preco[i] * 1.1
        }else{
            novo_preco[i] = preco[i]
          
        }

         resultado[i] = String(`Produto: ${produto[i]} `+` código: ${codigo[i]}`+` preço: ${preco[i]}`+` novo preço: ${novo_preco[i]}\n`)
    }
    alert(`${resultado}`)
}