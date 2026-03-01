// Desafio 01
// Meta de Vendas

let bolosVendidos = 35;
let metaDiaria = 30;

if (bolosVendidos > metaDiaria) {
    console.log("Bolos Vendidos: " + bolosVendidos);
    console.log("Meta Diária: " + metaDiaria);
    console.log ("A Meta Foi Superada! \n");
} else if (bolosVendidos === metaDiaria) {
    console.log("Bolos Vendidos: " + bolosVendidos);
    console.log("Meta Diária: " + metaDiaria);
    console.log ("Meta Atingida. \n");
} else {
    console.log("Bolos Vendidos: " + bolosVendidos);
    console.log("Meta Diária: " + metaDiaria);
    console.log ("Meta Não Atingida. \n");
}

// Desafio 02
// Frete Grátis

let valorPedido = 180;
const clienteVip = true;

if (valorPedido > 200 || 
        clienteVip){
    console.log("O cliente tem direito ao frete grátis! \n");
} else {
    console.log ("O cliente não tem direito ao frete grátis. \n");
}

// Desafio 03
// Desconto Especial

let valorServico = 500;
const desconto = 10;
const clienteAntigo = true;

let valorFinal = null;

if(valorServico >= 500 &&
    clienteAntigo) {

    const calculoDesconto = (valorServico * desconto) / 100;
    valorFinal = valorServico - calculoDesconto;

    console.log("Desconto Especial");
    console.log("Valor Serviço: R$ " + valorServico);
    console.log("Desconto: " + desconto + "%");
    console.log("Total a Pagar: R$ " + valorFinal);
    console.log("Agradecemos a Preferência! \n");

} else {

    valorFinal = valorServico;

    console.log("Valor Serviço: R$ " + valorFinal);
    console.log("Obrigado e Volte Sempre! \n");
}

// Desafio 04
// Horário Disponível

const horarioDisponivel = true;
const pacienteCadastrado = false;

if(horarioDisponivel && 
    pacienteCadastrado) {
    
    console.log("Agendar Consulta");
    console.log("Por favor, selecione uma data para agendamento da consulta. \n");

} else if(horarioDisponivel === false &&
            pacienteCadastrado) {

    console.log("Agendar Consulta");
    console.log("Sem Horário Disponível no Momento. \n");

} else {

    console.log("Agendar Consulta");
    console.log("Paciente Não Cadastrado. \n");
}
