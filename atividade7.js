const nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");
let curso = prompt("Digite seu curso: ");

let confirmacao = confirm("Tem certeza que seus dados estão certos?");

if (confirmacao) {

	alert(`Obrigada pela colaboração`);

}

else {

	alert(`Mais atenção na proxima`);

}