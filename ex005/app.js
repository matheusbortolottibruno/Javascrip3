//5. Implemente um código para aprovar empréstimo bancário.
// O código deve pedir 3 informações: valor do empréstimo, número de parcelas e salário do solicitante.
// Aprovar empréstimo caso o valor das parcelas representem no máximo 30% do salário do solicitante.

function aprovaremprestimo() {


    let valoremprestimo = document.getElementById('valoremprestimo')
    let numeroparcelas = document.getElementById('numeroparcelas')
    let salario = document.getElementById('salario')

    let trintaporcento = parseFloat(salario) * 0.30;
    let valorparcelas = valoremprestimo / numeroparcelas

    if(valorparcelas <=trintaporcento){
        document.getElementById("resultado"). innerHTML=parseFloat( emprestimo)
    }else {
        emprestio
    }
}