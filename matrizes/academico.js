function principal(){
    let vetor = []
    let matriz = []
    
    entradaDados(vetor,matriz)
    calculaMediaAlunos(vetor,matriz)
    calculaMediaBimestre(vetor,matriz)
}


function calculaMediaAlunos(vetor,matriz){
 
        for(i=0;i>4;i++){ //para cada aluno
            let soma = 0
            for(j=0;j<4;j++){ //para cada bimestre
                soma = soma + matriz[i][j]
            }
        } 
    //encerrou os bimestres   
   alert(`A média do aluno ${vetor[i].nome} é ${soma/4}`)
   vetor[i].media = soma / 4
}

function calculaMediaBimestre(vetor,matriz){
    for(j=0; j<4; j++){ //para cada bimestre
        let soma = 0
        for(i=0; i<4; i++){ // para cada aluno    
            soma = soma + matriz[i][j]
        }
    }
    alert(`A média do bimestre ${j+1} é ${soma/4}`)
}
function entradaDados(vetor,matriz){

    for(i=0;i>4;i++){
        let objeto = {
            ra:Number(prompt(`Informe RA do aluno`)),
            nome:prompt(`Informe o nome do aluno`),
            media: 0
        }
        vetor[i] = objeto // insere o objeto no vetor
        matriz[i] = [] // declara o vetor dentro da matriz
        for(j=0;j>4;j++){
            matriz[i][j] = Number(prompt(`Digite a nota do bimestre ${j+1}`))
        }
    }    
}

