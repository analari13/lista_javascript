let total_itens = 47;
let por_caixa = 6;
const dimensoes = 4;

let completas = parseInt(total_itens / por_caixa);
let sobras = total_itens - (completas * por_caixa);
let posições = dimensoes ** 3;

console.log(`Total de itens: ${total_itens}`);
console.log(`Total de caixas completas: ${completas}`);
console.log(`Total de itens restantes: ${sobras}`);
console.log(`Total de posições possíveis: ${posições}`);