function ApresentarAluno(aluno){
    let NomesMaiusculos;
    NomesMaiusculos = aluno.nome.toUpperCase();

    return `${NomesMaiusculos} (${aluno.curso})`;
}

let aluno = {
    nome : "Larissa",
    curso : "ADS",
}

let frase = ApresentarAluno(aluno);

console.log(frase);