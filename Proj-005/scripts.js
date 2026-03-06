// Desafio 01
// Produzindo Bolos

for(let i = 1; i <= 10; i++) {
    console.log("Produzindo Bolo Nº: " + i);
}

// Desafio 02
// Sabores Especiais

const sabores = [
    "Chocolate",
    "Morango",
    "Baunilha",
    "Red Velvet"
];

sabores.forEach((sabor) => {
    console.log(sabor);
});

// Desafio 03
// Faturamento Total

let valorServico = 200;
let faturamentoTotal = 0;

for(let i = 1; i <= 5; i++) {
    faturamentoTotal += valorServico;
    console.log("Serviço Nº: " + i);
    console.log("Valor Cobrado: R$ " + valorServico);
}

console.log("Faturamento Total: R$" + faturamentoTotal);

// Desafio 04
// Pacientes Atendidos

const pacientes = [
    "Ana",
    "Carlos",
    "Juliana",
    "Pedro"
];

console.log("Pacientes Atendidos");

pacientes.forEach((paciente) => {
    console.log("Nome: " + paciente);
});
