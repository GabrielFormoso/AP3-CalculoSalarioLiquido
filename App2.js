//Desenvolva um aplicativo que pergunte quanto você ganha por hora e o 
//número de horas trabalhadas no mês. Calcule e mostre o total do seu salário 
//no referido mês, sabendo-se que são descontados 11% para o Imposto de 
//Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê: 
//• salário bruto. 
//• quanto pagou ao INSS. 
//• quanto pagou ao sindicato. 
//• o salário líquido. 
//• calcule os descontos e o salário líquido, conforme a tabela abaixo: 
//o IR (11%) : R$ 
//o INSS (8%) : R$ 
//o Sindicato ( 5%) : R$ 
//o Salário Líquido : R$ 
//Obs: Salário Bruto - Descontos = Salário Líquido.


function calcularDesconto() {
    const SalarioHr = document.getElementById('SalarioHr').value;
    const QtdHr = document.getElementById('QtdHr').value;
    if(SalarioHr !== '' & QtdHr !== ''){
    
    const bruto = QtdHr * SalarioHr
    const renda = bruto * 0.11;
    const Inss = bruto *0.08;
    const Sindicato = bruto * 0.05;
    const Liquido = bruto - renda- Inss- Sindicato;

    SalarioBruto.value = bruto.toFixed(2)
    IR.value = renda.toFixed(2)
    InSS.value = Inss.toFixed(2)
    Sindicat.value = Sindicato.toFixed(2)
    SalarioLiquido.value = Liquido.toFixed(2)
    }
    else{
        alert("Preencha com o valor do seu salário bruto!")
    }
};

calcular.addEventListener('click', calcularDesconto);