// Desafio 01
// Sistemas de Pedidos

console.log("Sistema de Pedidos");

const sabores = [
    "Chocolate",
    "Morango",
    "Baunilha",
    "Leite Ninho",
];

console.log("Sabores Disponíveis: ");
console.log(sabores);
 
sabores.push("Red Velvet");
sabores.pop();

console.log("Quantidade Disponível: " + sabores.length);

// Desafio 02
// Controle de Clientes

console.log("Controle de Clientes");

const clientes = [
    "Carlos",
    "João",
    "Luiz",
    "Maria",
    "Samuel",
];

console.log("Primeiro Cliente: " + clientes[0]);
console.log("Último Cliente: " + clientes[clientes.length - 1]);

console.log("Carlos Se Encontra na Lista? " + (clientes.includes("Carlos") ? "Sim" : "Não"));
console.log("Posição de Maria: " + clientes.indexOf("Maria"));

// Desafio 03
// Lista de Encomendas

console.log("Lista de Encomendas");

const pedidosManha = [
    "Bolo de Chocolate",
    "Bolo de Morango",
    "Bolo de Amendoim",
];

const pedidosTarde = [
    "Bolo de Milho",
    "Bolo de Morango",
    "Bolo de Abacaxi",
];

const encomendas = [];
const totalPedidos = encomendas.concat(pedidosManha, pedidosTarde);

console.log(totalPedidos);

// Desafio 04
// Controle de Serviços

console.log("Controle de Serviços");

const servicos = [
    "Ajuste de Vestido",
    "Barra de Calça",
    "Reforma de Camisa",
];

servicos.unshift("Abotoamento de Roupa");
servicos.splice(1, 1);

console.log(servicos);

// Desafio 05
// Agenda de Pacientes

console.log("Agenda de Pacientes");

const pacientes = [
    "Alfredo",
    "Lucas",
    "Maria",
    "Victor",
];

for(let i = 0; i < pacientes.length; i++) {
    console.log(`Índice: ${i} | Nome: ${pacientes[i]}`);
}

// Desafio 06
// Horários de Atendimento

console.log("Agenda de Atendimento");

const agenda = [
    ["10:00", "13:00", "16:00"],
    ["10:30", "13:30", "16:30"],
];

for(let dias = 0; dias < agenda.length; dias++) {
    console.log("---Dia---");
    for(let horarios = 0; horarios < agenda[dias].length; horarios++) {
        console.log("Horário");
        console.log("[" + dias + "] [" + horarios + "] = " + agenda[dias][horarios]);
    }
}
