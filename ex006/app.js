//6. Construa um programa que leia o código de um determinado produto e mostre a sua classificação.
//Código Classificação
//1 - Alimento não-perecível
//2, 3 ou 4 - Alimento perecível
//5 ou 6 - Vestuário
//7 - Higiene pessoal
//8, 9, 10 - Utensílios domésticos
//Qualquer outro código Inválido

function alimento(){

    let ver= document.getElementById("Verificar").value




    cod=0;



    if(ver == 1){



        document.getElementById("mensagem").innerHTML= "Alimento não-perecível"



    }

   

    else if(ver >=2 && ver <=4 ){

        document.getElementById("mensagem").innerHTML= "Alimento perecível"




    }

    else if(ver >=5 && ver <=6){

        document.getElementById("mensagem").innerHTML= "Vestuário"




    }



    else if(ver == 7){

        document.getElementById("mensagem").innerHTML= "Higiene Pessoal"



    }



    else if(ver >= 8 && ver <=10){

        document.getElementById("mensagem").innerHTML= "Utensílios domésticos"



    }



    else{

        document.getElementById("mensagem").innerHTML= "Inválido"



    }

}
    






   
    
    
       

    
