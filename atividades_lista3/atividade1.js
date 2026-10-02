let nome = ["Larissa", "Lucas", "João", "Ingrid", "Mariana", "Tarcisio", "Denilson"], grandes;

function NomesMaiusculos (nome){
    
    let k, tamanho = nome.length, maiusculos = [];

    for(k = 0; k < tamanho; k++){

        maiusculos.push(nome[k].toUpperCase());

    }
    return maiusculos;
}

grandes = NomesMaiusculos(nome);

console.log(`Nomes: ${grandes}`);