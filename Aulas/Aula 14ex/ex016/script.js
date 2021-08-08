document.querySelector(".botão").addEventListener("click", contar);
let resultado = document.querySelector(".resultado");

function contar() {
  let início = document.querySelector("#inicio").value;
  let fim =   document.querySelector("#fim").value;
  let passo = document.querySelector("#passo").value;

  if (início.length == 0 || fim.length == 0 || passo.length == 0) {
    resultado.innerHTML = "Impossível contar! Cheque os campos.";
    return 0;
  } else if (passo <= 0) {
    alert("Passo inválido! Considerando passo 1");
    passo = 1;
  } 
  
  let inícioN = Number(início);
  let fimN = Number(fim);
  let passoN = Number(passo);

  resultado.innerHTML = `${inícioN} 👉 `;

    if (inícioN < fimN) {
      while(inícioN + passoN <= fimN) {
        inícioN += passoN;

        if(inícioN + passoN <= fimN) {
          resultado.innerHTML += `${inícioN} 👉 `;
        } else {
          resultado.innerHTML += `${inícioN} 🏁`;
        }
      }
    } else {
      while(inícioN - passoN >= fimN) {
        inícioN -= passoN;
        
        if (inícioN - passoN >= fimN) {
          resultado.innerHTML += `${inícioN} 👉 `;
        } else {
          resultado.innerHTML += `${inícioN} 🏁`;
        }
      }
    
  }
}