document.getElementById("btn-verificar").addEventListener("click", verificarDesconto);

function verificarDesconto() {

    const descontoEspecial = 10;

    const clienteAntigo = document.getElementById("cliente-antigo");
    const inputValor = document.getElementById("valor-servico").value;
    const valorServico = Number(inputValor);
    
    const calculoDesconto = (valorServico * descontoEspecial) / 100;
    const valorFinal = valorServico - calculoDesconto;

    const resultado = document.getElementById("resultado");
    resultado.style.display = "block";

    if(valorServico <= 0) {
            resultado.style.display = "block";
        resultado.innerHTML ="Por favor, insira o valor do serviço!";

    } else if(clienteAntigo.checked &&
                valorServico >= 500) {

        resultado.innerHTML =
        `
            Desconto Especial <br>
            Valor Serviço: R$ ${valorServico} <br>
            Desconto: ${descontoEspecial}% <br>
            Total a Pagar: R$ ${valorFinal} <br>
            Agradecemos a Preferência!
        `;

    } else {    

        resultado.innerHTML =
        `
            Valor Serviço: R$ ${valorServico} <br>
            Obrigado e Volte Sempre!
        `;
        
    }

}