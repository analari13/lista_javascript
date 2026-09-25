let vendido = Number(prompt("Digite a quantidade de produtos vendidos no mês:"));
let meta = Number(prompt("Digite a meta de vendas do mês:"));

alert(`Produtos vendidos no mês: ${vendido} | Meta de vendas do mês: ${meta}
Atingiu a meta? ${vendido >= meta}
Superou a meta? ${vendido > meta }
ateu exatamente a meta? ${vendido === meta}
Faltou para atingir a meta: ${vendido - meta}`);