document.querySelector(".confirmar").addEventListener("click", verificarIdade);
const anoAtual = new Date().getFullYear();
const resultado = document.querySelector(".resultado");
resultado.style.textAlign = "center";

function verificarIdade() {
  let anoDeNascimento = document.querySelector("#data-de-nascimento").value;
  let sexo = document.getElementsByName("sexo");
  let idade = anoAtual - anoDeNascimento;
  let gênero = "";
  let img = document.createElement("img");

  if(anoDeNascimento > anoAtual || anoDeNascimento == 0 || anoDeNascimento < 1920) {
    alert("Ano inválido!");
  } else {

    if (sexo[0].checked) {
      gênero = "um homem";

      if (idade < 10) {
        img.setAttribute("src", "./img/foto-bebe-m.png");
      } else if (idade < 18) {
        img.setAttribute("src", "./img/foto-jovem-m.png");
      } else if (idade < 50) {
        img.setAttribute("src", "./img/foto-adulto-m.png");
      } else {
        img.setAttribute("src", "./img/foto-idoso-m.png");
      }
    } else {
      gênero = "uma mulher";
      
      if (idade < 10) {
        img.setAttribute("src", "./img/foto-bebe-f.png");
      } else if (idade < 18) {
        img.setAttribute("src", "./img/foto-jovem-f.png");
      } else if (idade < 50) {
        img.setAttribute("src", "./img/foto-adulto-f.png");
      } else {
        img.setAttribute("src", "./img/foto-idoso-f.png");
      }
    }
    resultado.innerHTML = `<p>Detectamos ${gênero} de ${idade} anos</p>`;
  }
  resultado.appendChild(img);
}