const nome = "Ana";
const curso = "Análise e Desenvolvimento de Sistemas";
let nota1 = 8.5;
let nota2 = 7.0;
let nota3 = 9.2;
let soma = nota1 + nota2 + nota3;
let media = soma / 3;
let resultado = media >= 7 ? "Aprovada" : "Reprovada";

console.log("RELATÓRIO ACADÊMICO");
console.log(`Aluno: ${nome}`);
console.log(`Curso: ${curso}`);
console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`);
console.log(`Soma das notas: ${soma}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Situação: ${resultado}`);