const quebraLinha = "\n";

// Desafio 01
// Function

console.log("---Avaliar Sessão---");

function avaliarSessao(nomePaciente, quantidadeSessoes) {

    console.log("Nome Paciente: " + nomePaciente);

    if (quantidadeSessoes >= 10) {
        return true;
    } else {
        return false;
    }

}

const resultado = avaliarSessao("Isa Santos", 20);
console.log(resultado + quebraLinha);

// Desafio 02
// Arrow Function

console.log("---Valor Pedido---");

const calcularValorPedido = (quantidadeBolos, valorUnitario) => {

    let valorTotal = quantidadeBolos * valorUnitario;

    if (quantidadeBolos >= 10) {
        valorTotal = valorTotal - (valorTotal * 0.10);
    }

    return valorTotal;

}

const valorTotalPedido = calcularValorPedido(15, 10);

console.log("Valor Pedido: R$ " + valorTotalPedido.toFixed(2) + quebraLinha);

// Desafio 03
// Function

console.log("---Listar Materiais---");

function listarMateriais(materiais) {

    console.log("Total de Materiais: " + materiais.length);


    const materiaisMaiusculos = materiais.map(function (material) {
        return material.toUpperCase();
    });

    return materiaisMaiusculos;

}

const materiais = [
    "tinta",
    "pincel",
    "tecido"
];

const checar = listarMateriais(materiais);

console.log(checar + quebraLinha);

// Desafio 04
// Function

console.log("---Filtrar Sabores---");

const filtrarSaboresDisponiveis = (sabores, letra) => {
    let saboresFiltrados = sabores.filter(sabor => sabor[0] === letra);

    return saboresFiltrados;
}

const sabores = [
    "Abacaxi",
    "Chocolate",
    "Morango",
    "Maracujá"
];

const filtrarSabor = filtrarSaboresDisponiveis(sabores, "M");

console.log("Sabor Filtrado: " + filtrarSabor + quebraLinha);

// Desafio 05
// JSON

console.log("---Psicólogo---");
console.log("Paciente:" + quebraLinha);

const paciente = `{
    "nome": "Graziele Alves",
    "idade": 42,
    "plano-saude": false,
    "queixas": [
        "Insônia",
        "Irritabilidade"
    ],
    "ultima-sessao": {
        "data": "2026-03-16",
        "humor": 7,
        "prescricao": "Exercício físico diário"
    }
}`;

console.log(paciente + quebraLinha);

// Desafio 06
// JSON

console.log("---Ateliê---");
console.log("Pedido:" + quebraLinha);

const pedido = `{
    "dados-cliente": {
        "nome": "John Santos",
        "telefone": "(11) 97548-0382"
    },
    "tipo-peca": "Camisa",
    "medidas": {
        "busto": "12cm",
        "cintura": "8cm",
        "quadril": "4cm"
    },
    "tecido-escolhido": "Seda",
    "prazo": "4 Dias",
    "status": [
        "Recebido",
        "Em Produção",
        "Pronto",
        "Entregue"
    ]
}`;

console.log(pedido + quebraLinha);

// Desafio 07
// JSON

console.log("---Bolo Pote---");
console.log("Catálogo:" + quebraLinha);

const catalogo = `{
    promocaoAtiva: true ,
    descontoPercentual: 15,
 
    "sabores" : [
    {  
        "nome: " + "Chocolate com Morango",
        "preco: " + 12.00,
        "contemLactose: " + true,
        "ingredientes: " + ["chocolate", "morango", "leite condensado", "creme de leite"]
 
    };
    {  
        "nome: " + "Morango com Coco",
        "preco:"  + 10.50,
        "contemLactose: " + false,
        "ingredientes: " + ["coco ralado", "morango", "leite condensado sem lactose", "creme de leite"]
    };
    {  
        "nome: " : "Doce de Leite com Chocolate",
        "preco: " : 13.00,
        "contemLactose: " : false,
        "ingredientes: " : ["doce de leite", "chocolate", "leite condensado", "creme de leite"]
    };
    ]
 
}`;

console.log(catalogo + quebraLinha);

// Desafio 08
// JSON

console.log("---Confeitaria---");
console.log("Pedido:" + quebraLinha);

const pedidoOnline = `{
    "id": 620010,
    "data-pedido": "2026-03-18",
    "cliente": {
        "nome": "Thomas Santos",
        "email": "thomas.ssouza@gmail.com"
    },
    "itens": [
        {
            "produto": "Bolo Formigueiro",
            "quantidade": 1,
            "observacoes": "Nenhuma"
        },
        {
            "produto": "Brigadeiro e Beijinho",
            "quantidade": 30,
            "observacoes": "Nenhuma"
        }
    ],
    "endereco-entrega": {
        "cep": "04750-000",
        "cidade": "São Paulo",
        "bairro": "Santo Amaro",
        "rua": "Dr. Antônio Bento",
        "numero": 393
    },
    "forma-pagamento": [
        "Cartão de Crédito",
        "Cartão de Débito",
        "Boleto Bancário",
        "PIX"
    ],
    "total-calculado": 150
}`;

console.log(pedidoOnline);