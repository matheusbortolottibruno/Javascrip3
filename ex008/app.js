//8. Tendo como entrada o total vendido por um funcionário no mês de abril, 
//faça um programa que calcule e mostre a sua comissão e seu salário bruto neste mês, 
//sabendo que o seu salário base é R$1.200,00 e sua comissão é de 10% sobre o total vendido. 
//O funcionário só ganhará comissão se o valor total vendido for maior que R$2.000
function calcular(){

    let venda = document.getElementById("venda").value
    let comissao = 0

    if(venda >2000 ){ 
        comissao = venda * 0.10
        document.getElementById("mensagem").innerHTML = "Sua comissao é" + venda

    }



}