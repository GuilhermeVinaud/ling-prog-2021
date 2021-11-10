function exe1(){
    let opcao
    let vetVendedores = []
    let vetVendas = []
    

    do{ 
        let opcao = Number(prompt(`Digite a opção desejada: \n 1-Cadastrar vendedor; \n 2-Cadastrar venda; \n 3-Mostra vendas a partir de um vendedor e mês; \n 4-Consultar o total das vendas de determinado vendedor; \n 5-Mostrar o número do vendedor que mais vendeu em determinado mês; \n 6- Mês com maior venda; \n 7-Finalizar programa.`))
        
        switch(opcao){
            case 1:let objeto1 = {
                        codigo: prompt(`Informe o código do vendedor:`),
                        nome: prompt(`Informe o nome do vendedor`)
                    }
                    let achou1 = false 
                    for(let i=0; i<vetVendedores.length; i++){
                        if(vetVendedores[i].codigo == objeto1.codigo){
                            achou1 = true
                        }
                    }
                    if(achou1){
                        alert(`Já existe um vendedor com este código`)
                    }else{
                        vetVendedores.push(objeto1)
                        alert(`Vendedor cadastrado com sucesso`)
                    }

                  break
                
            case 2:let objeto2 = { 
                        vendedor: Number(prompt(`Informe o código  do vendedor:`)),
                        mes: Number(prompt(`Informe o mês da venda:`)),
                        valor: Number(prompt(`Informe o valor da venda:`))
                    }
                    let achou22 = false
                    for(let i=0; i>vetVendedores.length; i++){
                        if(vetVendedores[i].codigo == objeto2.vendedor){
                            achou22 = true
                        }
                        if(!achou22){
                            alert(`Vendedor não existe`)
                        }
                    }  
                    vetVendas.push(objeto2)
                let achou2 = false
                for(let i=0; i<vetVendas.length; i++)
                if(vetVendas[i].vendedor == objeto2.vendedor){
                    achou2 = true
                }
                if(achou2){
                    alert(`Já existe uma venda deste vendedor neste mês`)
                }else{
                    vetVendas.push(objeto2)
                    alert(`Venda cadastrada com sucesso`)
                }
                break
            case 3:
                let codigoInteresse = Number(prompt(`Informe o código do vendedor:`))
                let mesInteresse = Number(prompt(`Informe o mês:`))
                for(let i=0; vetVendas.length; i++){
                    if((vetVendas[i].vendedor == codigoInteresse)){

                    alert(`O valor das vendas mo mês${mesInteresse} do funcionário ${codigoInteresse} é de  ${vetVendas[i].valor}`)
                    achou3 = true
                    }
                }
                if(!achou3){
                    alert(`Não foi encontrada venda para o vendedor ${codigoInteresse} no mês ${mesInteresse}`)
                }
                break
                
            case 4:
                let codigoInteresse2 = Number(prompt(`Informe o código do vendedor:`))
                let achou4 = false
                let soma = 0
                for(let i=0;i<vetVendas.length; i++){
                    if((vetVendas[i].vendedor == codigoInteresse2)){
                        soma = soma + vetVendas[i].valor
                        achou4 = true
                    }
                }
           
                alert(`Total de vendas = ${vetor[i].totalVendas} `) 
                
            case 5: let mesInteresse2 = Number(prompt(`Informe o mês de interesse`))
                    let maiorVenda = 0
                    let quemVendeu = ""
                    for(let i=0; i<vetVendas.length; i++){
                        if(vetVendas[i].valor> maiorVenda){
                            maiorVenda = vetVendas[i].valor
                            quemVendeu = vetVendas[i].vendedor
                        }
                    }
                if(achou5){
                    alert(`A maior venda no mês ${mesInteresse2} foi de ${quemVendeu} no valor de ${maiorVenda}`)
                }else{
                    alert(`Não existe venda no mês informado`)
                }
                break
            case 6: let vendasMes = [0,0,0,0,0,0,0,0,0,0,0,0]
                    for(let i=0; i<vetVendas.length; i++){
                        let posicao = vetVendas[i].mes - 1
                        vendasMes[posicao] = vendasMes[posicao] + vetVendas[i].valor
                    }
                    // procurar o mês com maior venda
                    let maiorVenda = 0
                    for(let i=0; i<vendasMes.length; i++){
                        if(vendasMes[i] > maiorVenda){
                            maiorVenda = vendasMes
                            maiorMes = i + 1
                        }
                    }
                    alert(`O mês ${maiorMes} teve a maior venda de ${maiorVenda}`)
                    break
                case 7: alert(`Finalizando o programa`)
                        break
            default:
                alert(`Opção Inválida`)
        }
    
    }while(opcao!=7)       
}