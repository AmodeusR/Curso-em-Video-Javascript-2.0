let caixaDeTexto = document.querySelector(".horario");
let imagem = document.querySelector(".imagem");
let horas = new Date().getHours();
let minutos = new Date().getMinutes();
let casaDecimal = minutos < 10 ? "0" : "";
let minutosCorrigidos = casaDecimal + minutos;

if (horas > 4 && horas < 12) {
  caixaDeTexto.innerHTML = `Agora são ${horas}h${minutosCorrigidos}. É manhã!`;
  imagem.src = "./img/manha.jpg";
} else if (horas > 11 && horas < 18) {
  caixaDeTexto.innerHTML = `Agora são ${horas}h${minutosCorrigidos}. É tarde!`;
  imagem.src = "./img/tarde.jpg";
} else {
  caixaDeTexto.innerHTML = `Agora são ${horas}h${minutosCorrigidos}. É noite!`;
  imagem.src = "./img/noite.jpg";
}