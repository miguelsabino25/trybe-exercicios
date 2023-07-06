const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Exercício 1
let sum = 0;
let cont = 0;
let higherNumber = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
  sum += numbers[index];
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
  if (numbers[index] % 2 != 0) {
    cont += 1;
  } else if ((numbers[index] % 2 == 0) == 0) {
    console.log("Nenhum valor ímpar encontrado");
  }
}

console.log(`
Esse é o resultado da soma de todos os valores contidos no meu array - ${sum}`);
let mediaAritmetica = sum / numbers.length;
console.log(
  `
Essa é a média aritmética do meu array numbers - ${mediaAritmetica}`
);

if (mediaAritmetica > 20) {
  console.log("O valor da média aritmética é maior que 20");
} else {
  console.log("O valor da média aritmética é menor que 20");
}

console.log(`
${higherNumber}`);

console.log(`
${cont}`);
