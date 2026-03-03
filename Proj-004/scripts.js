// Desafio 01
// Sabores de Bolos

const saborEscolhido = 2;

switch (saborEscolhido) {
    case 1:
        console.log("Sabor Escolhido");
        console.log("Chocolate \n");
            break;
    case 2:
        console.log("Sabor Escolhido");
        console.log("Morango \n");
            break;
    case 3:
        console.log("Sabor Escolhido");
        console.log("Leite Ninho \n");
            break;
    default:
        console.log("Escolha Inválida. \n");
}

// Desafio 02
// Produção de Bolos

let quantidade = 1;

while (quantidade <= 5) {
    console.log("Produzindo Bolo " + quantidade);
    quantidade++;
}

console.log("Todos os bolos foram produzidos! \n");

// Desafio 03
// Tipo de Serviço

const servicoEscolhido = 3;

switch (servicoEscolhido) {
    case 1:
        console.log("Serviço Escolhido:");
        console.log("Ajuste de Barra \n");
            break;
    case 2:
        console.log("Serviço Escolhido:");
        console.log("Reforma de Vestido \n");
            break;
    case 3:
        console.log("Serviço Escolhido:");
        console.log("Confecção Sob Medida \n");
            break;
    default:
        console.log("Escolha Inválida. \n");
}

// Desafio 04
// Sessões Realizadas

let sessoesDiarias = 1;

while (sessoesDiarias <= 4) {
    console.log("Sessão: " + sessoesDiarias);
    console.log("Status: Realizada! \n");
    sessoesDiarias++;
}