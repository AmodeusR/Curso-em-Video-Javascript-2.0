document.querySelector(".botão").addEventListener("click", criarTabuada);
let resultado = document.querySelector("#tabuada");


function criarTabuada() {
  let númeroFamiliar = document.querySelector("#multiplicador").value;

  if (númeroFamiliar.length == 0) {
    alert("Por favor, digite um número!")
    return 0;
  }

  númeroFamiliar = Number(númeroFamiliar);
  resultado.innerHTML = "";
  
  for(let i = 0; i < 10; i++) {
    resultado.innerHTML += `<option>${númeroFamiliar} x  ${i + 1} = ${númeroFamiliar * (i + 1)}</option>`;
  }

}