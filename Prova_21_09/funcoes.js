function quest1(){
    let metro = Number(prompt(`Digite a metragem:`))
    let gar = Number(prompt(`Digite o número de garagens:`))
    let andar = Number(prompt(`Digite o andar:`))
    let pos = (prompt(`Posição M-sol da manhã \n T-sol da tarde :`))
    
    let valor_b = 0
    let valor_andar = 0
    let valor_pos = 0
    let valor_total = 0

    if (metro <= 80){
        if (gar==1){
            valor_b = 300000
        }
        else if(gar==2){
            valor_b = 320000
        }
        else if(gar==3){
            valor_b = 340000
        }
        else{
            alert(`Número inválido`)
        }
    }
    if (metro>80 && metro >= 120){
        if (gar==1){
            valor_b= 400000
        }
        else if(gar==2){
            valor_b= 420000
        }
        else if(gar==3){
            valor_b= 440000
        }
        else{
            alert(`Número inválido`)
        }
    }
    if (metro > 120){
        if (gar==1){
            valor_b = 500000
        }
        else if(gar==2){
            valor_b = 520000
        }
        else if(gar==3){
            valor_b = 540000
        }
        else{
            alert(`Número inválido`)
        }
    }

    if(andar==1){
        valor_andar= 10000
    }
    else if(andar==2){
        valor_andar =  20000
    }
    else if(andar==3){
        valor_andar =  30000
    }

    switch(pos){
        case 'M': valor_pos = valor_b * 1.05
            break
        case 'T': valor_pos = valor_b * 1.08
            break
        default: alert(`Opcão inválida`)
    }
    valor_total = valor_b + valor_andar + valor_pos
    alert(`Valor total do apartamento : R$${valor_total}`)
}

function quest2(){
    let opcao = (prompt(`Digite a opcão de entrega de trabalhos : \n 1-Teams; \n 2-papel; \n 3-WhatApp; \n 4-email; \n 5-tanto faz.`))
    let cont_T = 0
    let cont_p = 0
    let cont_W = 0
    let cont_e = 0
    let cont_tf = 0
    let cont_total = 0
    let cont = 0
    do{
        switch(opcao){
            case 1 : cont_T++ ;
            case 2 : cont_p++ ;
            case 3 : cont_W++ ;
            case 4 : cont_e++ ;
            case 5 : cont_tf++ ;
            default : alert(`código inválido`) 

        }
        
    }while(option != 0)
    
    cont_total = cont_T + cont_p + cont_W + cont_e + cont_tf
    alert(`total de votos : Teams = ${cont_T} \n papel = ${cont_p} \n WhatsApp = ${cont_w} \n email${cont_e}\n Tanto faz = ${cont_tf}`)
    alert(`% "Tanto faz" = ${cont_tf / cont_total * 100}`)
}