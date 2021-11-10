function preencheVetor(X){
    for(i=0;i<6;i++){
        let objeto = {
           numero: Number(prompt(`Digite um número:`))
        }
    }
    numero = X[i]
}
function separaVetor(X){
    

    for(i=0; i<=X.length; i++)
    {
        if(X[i] % 2 == 0){
            par = true
        }
        
    }
    if(par){
        A.push(objeto)
    }else if(!par){    
        B.push(objeto) 
    } 
}

function exe1(X,A,B){
    let X = []
    let A = []
    let B = []
    preencheVetor(X)
    separaVetor(X)
    alert(`vetor X: ${X[i].numero} \n vetor A :${A[i].numero} \n vetor B:${B[i].numero} `)
}
function contparX(vetX){
    cont = 0
    for(i=0;i<15; i++){
        if(vetX[i] % 2==0){
            cont++
        }
    }
    alert(`Quantidade de numeros pares: ${cont}`)
}
function exe2(vetX){
    let vetX = []

    for(i=0; i<15; i++){
        vetX[i] = Number(prompt(`Digite um número:`))
    }
    console.log(vetX)
}
function exe3(){
    let vet20 = []
    for(i=0; i<20; i++){
        vet20[i] = Number(prompt(`Digite um número:`))
    }
    let total = 0
    somar(vet20)
    console.log()
}
function somar(vet20){
    for(let i=0;i<vet20.length;i++){
        total = total + vet20[i] 
    }
}

function exe4(vetorA){
    let vetorA = []
    for(i=0; i<25; i++){
        vet20[i] = Number(prompt(`Digite um número:`))
    }
    console.log(negativoPzero(vetorA))
}
function negativoPzero(vetorA){
    for(i=0; i<25; i++){
        if (vetorA[i]>0){
            vetorA[i] = 0
        }
    }
}

function numPrimos(Primos){
    
    for(i=0; i<10; i++){
        for(j=0; j<100; i++){
            if((Primos[j] / Primos[j] == 1 ) && (Primos[j] / 1 == Primos[j])){
                Primos.push(objeto)
            }
        }
    }
}
function exe5(Primos){
    Primos = []
    alert(`Números primos :${primos[i]}`)
    console.log(numPrimos(Primos))
}

function interseccao(vet1,vet2){
    for(i=0; i<10; i++){
        if(vet1[i]==vet2[i]){
            inter[i]=vet[i]
        }
    }
}
function exe6(vet1, vet2){
    vet1 = []
    vet2 = []
    inter = []
    for(i=0; i<10; i++){
        vet1[i] = Number(prompt(`${i}º número para vetor1:`))
        vet2[i] = Number(prompt(`${i}º número para vetor2:`))
    }
    console.log(interseccao(vet1,vet2))
}
function coletar_dados(dados){
    objeto = {
        salario: Number(prompt(`Digite o salário:`)),
        filhos: Number(prompt(`Digite o número de filhos:`)),
    }
    cont_sal++
    cont_filhos++   
}
function resultados(dados){
    mediaSal = dados[i].salario / cont_sal
    mediaFilhos = dados[i].filhos / cont_filhos

    if(dados[i].salario <= 350){
        per_sal = (dados[i].salario * cont_sal) / 100
    }
    if(dados[i].salario>maior_sal){
        maior_sal = dados[i].salario
    }
    alert(`Média de salário: ${mediaSal} \n Média de filhos: ${mediaFilhos} \n salário até $350,00: ${per_sal}% \n maior salário: ${maior_sal} `)
 
}
function exe7(){
    let dados = []
    let opcao
    let mediaSal = 0
    let mediaFilhos = 0
    let cont_sal = 0
    let cont_filhos = 0
    per_sal = 0
    maior_sal = 0

   
    do{
        let opcao = Number(prompt(`Digite : 1 para coletar dados\n 2- resultados \n 0 -para sair` ))
        switch(opcao){
            case 1:coletar_dados()
                
            break 
            case 2: resultados()  
        }      
    }while (opcao != 0)
}