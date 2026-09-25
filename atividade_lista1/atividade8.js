let salario = Number(prompt("Digite o valor do seu salário: "));
let porcetagem = Number(prompt("Digite a porcentagem de aumento: "));

let aumento = salario * (porcetagem / 100);
let total = salario + aumento;

alert(`O valor do aumento é de ${aumento}R$, o salario antigo é de ${salario}R$ e o valor total do salário é de ${total}R$`);