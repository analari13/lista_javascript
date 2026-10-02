let lista = [], nomebuscado = "joa", resultado;

function BuscaAluno(lista, nomebuscado){
    
    let k, tamanho = lista.length, minusculolista, minusculobuscado;
    
    
    minusculobuscado = nomebuscado.toLowerCase();

    for(k = 0; k < tamanho; k++){
        minusculolista = lista[k].nome.toLowerCase();
        if(minusculolista == minusculobuscado){
            return lista[k];
        }
    }
            return "null";
}

lista = [
    {nome : "Larissa", idade : 18},
    {nome: "joao", idade : 19},
    {nome: "Leandro", idade : 40},
]

resultado = BuscaAluno(lista, nomebuscado);

console.log(resultado);