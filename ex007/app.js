//7. Faça um programa que receba um número inteiro qualquer e mostre se ele é par ou impar.
function ParouImpar(){



    let int = document.getElementById("parimpar").value



   



    if(int % 2 ==0){



        document.getElementById("mensagem").innerHTML = "Par"



    }



    else{

        document.getElementById("mensagem").innerHTML = "Impar"



    }




}