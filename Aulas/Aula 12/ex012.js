let horas = new Date().getHours();

console.log(`Agora são ${horas} Horas`);

if (horas < 12) {
  console.log("É manhã");
} else if (horas < 18) {
  console.log("É tarde");
} else {
  console.log("É noite");
}