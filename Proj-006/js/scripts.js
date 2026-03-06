const resultado = document.getElementById("resultado");
const botao = document.getElementById("produzir");

botao.addEventListener("click", () => {

    resultado.innerHTML = "";

    const inputQuantidade = document.getElementById("quantidade").value;
    let quantidade = Number(inputQuantidade);

    while(quantidade > 0) {
        resultado.innerHTML += '<strong class="font-semibold"> Produzindo Bolo Nº </strong>: ' + quantidade + '<br>';
        quantidade--;
    }

});