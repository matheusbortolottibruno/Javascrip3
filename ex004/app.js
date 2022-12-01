//4. A empresa XKW concedeu um bônus de 20% do valor do salário a todos 
//os funcionários com tempo de trabalho na empresa igual ou superior a 5 anos e de 10% aos demais. 
//Faça um programa que receba o salário e o tempo de serviço de um funcionário, calcule e mostre o valor do bônus recebido por ele.
function verificarsalario(){

    let s1 = document.getElementById("salario1").value 
   let bonus = parseFloat(s1)*0.20;
   let bonus2 = parseFloat(s1)*0.10;
   let tdt = document.getElementById("tdt1").value

    if(tdt >=5){
        document.getElementById("resultado"). innerHTML=parseFloat(bonus)
    }
    else if(tdt <=4){
        document.getElementById("resultado"). innerHTML=parseFloat(bonus2)
    }



}