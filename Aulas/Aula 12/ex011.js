let idade = 17;

if (idade < 16) {
  console.log(`Com ${idade} anos, o voto não é permitido`);
} else if (idade < 18 || idade > 65) {
  console.log(`Com ${idade} anos, o voto é opcional`);
} else {
  console.log(`Com ${idade} anos, o voto é obrigatório `);
}