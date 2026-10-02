let lista = [], nome = "caderno", preco = 15;

function cadastrar_produto (lista, nome, preco){

    let produtos = {
        nome,
        preco
    }

    lista.push(produtos);

    return lista.length;
}

let listado = cadastrar_produto(lista, nome, preco);

console.log(`A quantidade de itens listados foi: ${listado}`);

console.log(`Lista: `, lista);

