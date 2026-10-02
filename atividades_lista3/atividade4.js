let palavra = "palermiou"

function ContarVogais(palavra){

    let cont = 0, k, tamanho = palavra.length;
    palavra = palavra.toLowerCase();
    for (k = 0; k < tamanho; k++){

        if("aeiou".includes(palavra[k])){
            cont ++;

        }
    }

    return cont;
}

let quantidade = ContarVogais(palavra);

console.log(`A palavra ${palavra}, tem ${quantidade} vogais`);