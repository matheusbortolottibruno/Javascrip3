//9.  Construa um programa que determine quanto será gasto para encher o tanque de um carro (VG), 
//sabendo-se que o preço da gasolina é de R$ 6,80 e o preço do álcool é de R$ 4,00. 
//O usuário fornecerá os seguintes dados: Tipo de carro (TC) (G – gasolina ou A – álcool) e Capacidade do tanque (CT), 
//em litros

function Tanque(){



    let carro = document.getElementById('TC').value

    console.log(carro)

    let capacidade = document.getElementById('capacidade').value



    let litros = 0;
    if (carro == "G") {

        document.getElementById("resultado").innerHTML = parseFloat(capacidade) * 6.80
    }
    else {
        document.getElementById("resultado").innerHTML = parseFloat(capacidade) * 4.00
    }

}


