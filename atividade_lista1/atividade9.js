const estudande = {
    nome: "john",
    idade: 18,
    curso: "Analise e desenvolvimento de sistemas",
    nota1: 8,
    nota2: 9,
    nota3: 10,
    nota4: 5,
}
let media = (estudande.nota1 + estudande.nota2 + estudande.nota3 + estudande.nota4) / 4;
let resultado = media >= 7 ? "aprovado" : "reprovado";

    console.log(`DADOS DOS ESTUDADNTE`);
    console.log(`Nome: ${estudande.nome}`);
    console.log(`Idade: ${estudande.idade}`);
    console.log(`Curso: ${estudande.curso}`);
    console.log(`Média: ${media}`);
    console.log(`Resultado: ${resultado}`);