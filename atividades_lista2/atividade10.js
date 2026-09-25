let n = 5, k, pares = 0, impares = 0;

for(k = 1; k <= n; k++){

    if (k % 2 === 0){
        console.log(`${k} - par`);
        pares++;
    }
    else{
        console.log(`${k} - impar`);
        impares++;
    }
}
console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);