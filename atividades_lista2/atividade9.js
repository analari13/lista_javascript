let senha, cont = 0 , correta = "123456";
do {
    senha = prompt("Digite a senha: ");
    cont ++;
    if (senha === correta) {
        alert(`Senha correta! Você acertou na ${cont}ª tentativa.`);
    }
}
while (senha !== correta);

///do...while é mais indicado para essa situação, pois tem que tem que testar se a senha está correta pelo menos uma vez, apenas se não fosse obrigatorio o while seria mais indicado.
