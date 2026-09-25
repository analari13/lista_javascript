let preco = Number(prompt("digite o preço do produto: "));
let percentual = Number(prompt("Digite o percentual de desconto em cima do produto: "));
let quantidade = Number(prompt("Digite a quantidade de produtos que irá solicitar: "));

let subtotal = preco * quantidade;
let desconto = subtotal * (percentual/100);
let total = subtotal - desconto;

alert(`O preço do produto é ${preco}, com a quantidade que está compando (${quantidade}) e o desconto de ${percentual}%, o preço fica ${total}`);