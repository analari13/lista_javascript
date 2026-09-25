let compra = 20;

console.log(`compra de R$${compra} -
${compra >= 150 ? 'Você tem frete gratis!' : 'O frete custará R$ 20,00'} `);

console.log(`teste de limite:
    R$150    -> gratis
    R$149,99 -> R$20,00`)