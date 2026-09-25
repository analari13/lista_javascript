let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

if (num1 == num2) {

    alert("Os números são iguais.");

    if(num1 === num2) {

        alert("e do mesmo tipo.");
    }
    else{

        alert("mas de tipos diferentes.");

    }
}

else if (num1 > num2) {

    alert(`O maior número é: ${num1}`);
}

else {

    alert(`O maior número é: ${num2}`);
}