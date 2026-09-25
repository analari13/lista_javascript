let distancia = Number(prompt("Qual a distancia da viagem em Km?"));
let consumo = Number(prompt("Qual o consumo médio do veiculo?"));
let preco = Number(prompt("Qual o preço médio do combustível?"));

let combustível = consumo * distancia;
let custo = preco * combustível;

alert(`Com o combustível custando ${preco}, e a viagem durando ${distancia}Km, a viagem está custando ${custo}R$`);