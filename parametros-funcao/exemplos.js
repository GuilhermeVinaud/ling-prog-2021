function potencia(x,y){
    console.log(Math.pow(x,y))
}
function potencia2(x,y){
    console.log(x*y)
    console.log(potencia2(2,3))
}
function soma10(a){
    a = a+10
}
let x = 50
soma10(x)
console.log(x) // qual o valor de x?

let a = 50
soma10(a)
console.log(a)

function soma10vetores(a){
    for(let i=0;i<a.length;i++){
        a[i]= a[i] + 10
    }
}
let vetor = [1,2,3,4,5]
soma10vetores(vetor) //recebe uma referencia de vetor
// o que for alterado em a, na verdade, será alterado em vetor
console.log(vetor) //11,12,13,14,15

function cadastraVendedor(vetVendedores){
    let objeto = {
        codigo: prompt(`Informe o código do vendedor:`),
        nome: prompt(`Informe o nome do vendedor`)
    }

    let achou = false 
    for(let i=0; i<vetVendedores.length; i++){
        if(vetVendedores[i].codigo == objeto.codigo){
            achou = true
        }
    }
    if(achou){
        alert(`Já existe um vendedor com este código`)
    }else{
        vetVendedores.push(objeto)
        alert(`Vendedor cadastrado com sucesso`)
    }

}
function cadastrarVenda(vetVendedores,vetVendas){
    let objeto = { 
        vendedor: Number(prompt(`Informe o código  do vendedor:`)),
        mes: Number(prompt(`Informe o mês da venda:`)),
        valor: Number(prompt(`Informe o valor da venda:`))
    }
    let achou22 = false
    for(let i=0; i>vetVendedores.length; i++){
        if(vetVendedores[i].codigo == objeto.vendedor){
            achou22 = true
        }
        if(!achou22){
            alert(`Vendedor não existe`)
        }
    }  
    vetVendas.push(objeto)
    let achou = false
    for(let i=0; i<vetVendas.length; i++){
        if(vetVendas[i].vendedor == objeto.vendedor){
            achou = true
        }
        if(achou){
            alert(`Já existe uma venda deste vendedor neste mês`)
        }else{
            vetVendas.push(objeto)
        alert(`Venda cadastrada com sucesso`)
        }
    }
}
function mostraVenda(vetVendas,codigoInteresse,mesInteresse){
    
    for(let i=0; vetVendas.length; i++){
        if((vetVendas[i].vendedor == codigoInteresse)){
            alert(`O valor das vendas mo mês${mesInteresse} do funcionário ${codigoInteresse} é de  ${vetVendas[i].valor}`)
            achou = true
        }
    }
    if(!achou){
        alert(`Não foi encontrada venda para o vendedor ${codigoInteresse} no mês ${mesInteresse}`)
    }
}      
function consultarVendaVendedor(vetVendas,codInteresse){
    let achou = false
    let soma = 0 
    for(let i=0;i<vetVendas.length; i++){
        if((vetVendas[i].vendedor == codInteresse)){
                soma = soma + vetVendas[i].valor
                achou = true
        }
    }
    alert(`Total de vendas = ${vetor[i].totalVendas} `) 
                
}
function maiorVendedor(vetVendas,mesInteresse){
    
    let maiorVenda = 0
    let quemVendeu = ""
    for(let i=0; i<vetVendas.length; i++){
        if(vetVendas[i].valor> maiorVenda){
            maiorVenda = vetVendas[i].valor
            quemVendeu = vetVendas[i].vendedor
        }
    }
    if(achou){
        alert(`A maior venda no mês ${mesInteresse} foi de ${quemVendeu} no valor de ${maiorVenda}`)
    }else{
        alert(`Não existe venda no mês informado`)
    }
        
}

function vendaMaiorMes(vetVendas){
    let vendasMes = [0,0,0,0,0,0,0,0,0,0,0,0]
    for(let i=0; i<vetVendas.length; i++){
        let posicao = vetVendas[i].mes - 1
        vendasMes[posicao] = vendasMes[posicao] + vetVendas[i].valor
    }
    // procurar o mês com maior venda
    let maiorVenda2 = 0
    for(let i=0; i<vendasMes.length; i++){
        if(vendasMes[i] > maiorVenda2){
            maiorVenda2 = vendasMes
            maiorMes = i + 1
            }
        }
    alert(`O mês ${maiorMes} teve a maior venda de ${maiorVenda}`)
}

function exe1(){
    let opcao
    let vetVendedores = []
    let vetVendas = []
    

    do{ 
        let opcao = Number(prompt(`Digite a opção desejada: \n 1-Cadastrar vendedor; \n 2-Cadastrar venda; \n 3-Mostra vendas a partir de um vendedor e mês; \n 4-Consultar o total das vendas de determinado vendedor; \n 5-Mostrar o número do vendedor que mais vendeu em determinado mês; \n 6- Mês com maior venda; \n 7-Finalizar programa.`))
        
        switch(opcao){
            case 1:cadastraVendedor(vetVendedores)    
                break
            case 2:cadastrarVenda(vetVendedores,vetVendas)
                break
            case 3: let codigoInteresse = Number(prompt(`Informe o código do vendedor:`))
                    let mesInteresse = Number(prompt(`Informe o mês:`))
                    mostraVenda(vetVendas,codigoInteresse,mesInteresse)    
                break   
            case 4: let codInteresse = Number(prompt(`Informe o código do vendedor:`))
                    consultarVendaVendedor(vetVendas,codInteresse)
                break
            case 5:let mesInteresse = Number(prompt(`Informe o mês de interesse`))
                   maiorVendedor(vetVendas)
                break
            case 6: vendaMaiorMes(vetVendas)
                break
            case 7: alert(`Finalizando o programa`)
                break
            default:
                alert(`Opção Inválida`)
        }
    
    }while(opcao!=7)       
}