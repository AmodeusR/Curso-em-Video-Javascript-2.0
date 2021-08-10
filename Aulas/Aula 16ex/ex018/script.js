document.querySelector(".botão").addEventListener("click", adicionarNúmero);
document.querySelector(".finalizar").addEventListener("click", finalizar);
document.querySelector(".limpar").addEventListener("click", limpar);
let resultado = document.querySelector(".resultado");
let exibir = document.querySelector("#exibir");

let vetor = [];

function adicionarNúmero() {
  let caixaDeTexto = document.querySelector("#numerosUsuario");
  let n = caixaDeTexto.value

    // Validação
  if (n < 1 || n > 100 || n.length == 0 || vetor.includes(Number(n)) == true) {
    alert("Valor inválido ou já encontrado na lista");
    return 0;
  }
  if (resultado.innerHTML != 0) {
    resultado.innerHTML = "";
  }

  // Implementação dos números inseridos pelo usuário num vetor para uso posterior

  n = Number(n);
  vetor.push(n);
  exibir.innerHTML += `<option>Número ${n} foi adicionado</option>`;
  caixaDeTexto.value = "";
}

function finalizar() {
  vetor.sort(function(a,b){return a - b;});
  let soma = 0;
  for(let i = 0; i < vetor.length; i++){
    soma += vetor[i];  
  }
  resultado.innerHTML = `
  <p>Ao todo, temos ${vetor.length} números cadastrados.</p>
  <p>O maior valor informado foi ${vetor[vetor.length - 1]}.</p>
  <p>O menor valor informado foi ${vetor[0]}.</p>
  <p>somando todos os valores, temos ${soma}</p>
  <p>A média dos valores digitados é ${(soma/vetor.length).toFixed(1).toString().replace(".", ",")}</p>
  
  
  `;
}

function limpar() {
  let resposta = confirm("Você quer mesmo limpar a lista?");

  if (resposta == true) {
    resultado.innerHTML = "";
    exibir.innerHTML = "";
    vetor = [];
  } else {
    return 0;
  }
}