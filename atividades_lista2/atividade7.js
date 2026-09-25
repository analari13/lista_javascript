let turno = 4;

switch(turno) {
    case 1:
        console.log("turno: manhã");
        console.log(`teste de também:
    2 -> tarde
    3 -> noite
    4 -> inválido`);
        break;
    case 2:
        console.log("turno: tarde");
        console.log(`teste de também:
    1 -> manhã
    3 -> noite
    4 -> inválido`);
        break;
    case 3:
        console.log("turno: noite");
        console.log(`teste de também:
    1 -> manhã
    2 -> tarde
    4 -> inválido`);
        break;
    default:
        console.log("turno inválido");
        console.log(`teste de também:
    1 -> manhã
    2 -> tarde
    3 -> noite`);
}
