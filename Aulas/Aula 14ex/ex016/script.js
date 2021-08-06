document.querySelector(".botão").addEventListener("click", contar);
let resultado = document.querySelector(".resultado");
function contar() {
  let início = document.querySelector("#inicio").value;
  let fim =   document.querySelector("#fim").value;
  let passo = document.querySelector("#passo").value;

  if (início.length == 0 || fim.length == 0) {
    resultado.innerHTML = "Impossível contar!";
  } else if (passo == 0) {
    alert("Passo inválido! Considerando passo 1");
    passo = 1;
  } else {
    let inícioN = Number(início);
    let fimN = Number(fim);
    let passoN = Number(passo);

    resultado.innerHTML = `${inícioN} 👉 `;
    while(inícioN < fimN) {
      inícioN += passoN;
      if(inícioN < fimN) {
      resultado.innerHTML += `${inícioN} 👉 `;
      } else {
        resultado.innerHTML += `${inícioN} 🏁 `;
      }
    }
  }
}