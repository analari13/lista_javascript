let temperatura = 16;

if (temperatura < 15){
    console.log(`${temperatura} graus - clima: frio`);
}
else if(temperatura >= 15 && temperatura <= 25){
    console.log(`${temperatura} graus - clima: ameno`);
}

else{
    console.log(`${temperatura} graus - clima: quente`);
}

console.log(`teste de limite:
    10 -> frio
    15 -> ameno
    25 -> ameno
    25 -> quente`);