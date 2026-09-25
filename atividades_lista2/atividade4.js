let idade = 29;
let convite = true;

if (idade >= 18 && convite) {
    console.log("Pode entrar na festa!");
}

else if (idade >= 18 && !convite) {
    console.log("Não pode entrar na festa, pois não possui convite!");
}

else if (idade < 18 && convite) {
    console.log("Não pode entrar na festa, pois não possui idade suficiente!");
}

else {
    console.log("Não pode entrar na festa, pois não possui idade suficiente e não possui convite!");
}