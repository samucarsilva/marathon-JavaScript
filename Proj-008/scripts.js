// Desafio 01
// Cadastro de Cliente

console.log("Cadastro de Cliente");

const cliente = {
    nome: "Alexia Altman",
    tel: "(11) 97827-6420",
    favorito: "Bolo de Morango",
};

console.log("Nome: " + cliente.nome);

cliente["cidade"] = "Curitiba";

delete cliente.tel;

console.log(cliente);

// Desafio 02
// Cadastro de Produto

console.log("Cadastro de Produto");

const bolo = {
    sabor: "Baunilha",
    preco: "R$ 29,99",
};

const ingredientes = {
    massa: "Massa Branca",
    recheio: "Flocos",
};

const produtoFinal = {};

Object.assign(
    produtoFinal,
    bolo,
    ingredientes,
);

console.log(produtoFinal);

// Desafio 03
// Cadastro de Serviço

console.log("Cadastro de Serviço");

const servico = {
    tipo: "Abotoamento de Roupa",
    preco: "R$ 19,99",
};

servico.preco = "R$ 24,99";

servico["prazoEntrega"] = "Até 3 Dias";

console.log(servico);

// Desafio 04
// Ficha de Paciente

console.log("Ficha de Paciente");

const paciente = {
    nome: "Amora Lima",
    idade: 28,
    problema: "Ansiedade",
};

let propiedades = Object.keys(paciente);

console.log("Campos de Preenchimento: ");
console.log(propiedades);

// Desafio 05
// Cadastro de Costureira

console.log("Cadastro de Costureira");

const costureira = {
    nome: "Luciana Ferreira",
    experiencia: 5,
    especialidade: "Vestidos Sob Medida",
};

costureira.experiencia += 1;

console.log(costureira);

// Desafio 06
// Cadastro de Terapeuta

console.log("Cadastro de Terapeuta");

const terapeuta = {
    nome: "Juliano Chaves",
    especialidade: "Psicologia Clínica",
    cidade: "Belo Horizonte",
};

const [
    nome,
    especialidade,
    cidade,
] = Object.values(terapeuta);

console.log("Dados do Terapeuta: ");
console.log("Nome: " + nome);
console.log("Especialidade: " + especialidade);
console.log("Cidade: " + cidade);
