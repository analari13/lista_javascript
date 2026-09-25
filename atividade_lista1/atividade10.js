const nome = prompt("Digite seu nome: ");
let nascimento = Number(prompt("Digite o ano do seu nascimento: "));
let anotual = Number(prompt("Digite o ano atual: "));

let idade = anotual - nascimento;

let confirmacao = confirm(`Sua idade é ${idade}, está correto?`);

if (confirmacao) {

    alert(`Seu nome é ${nome}, você nasceu em ${nascimento} e tem ${idade} anos. Obrigada pela colaboração`);

}
else {

    let idadeCorreta = Number(prompt("Qual sua idade correta?"));

    alert(`Seu nome é ${nome}, você nasceu em ${nascimento} e tem ${idadeCorreta} anos. Obrigada pela colaboração`);

}