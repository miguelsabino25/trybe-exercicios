let num1 = 10;
let num2 = 20;
let num3 = 15;

//Exercício 1

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

//Exercício 2

if (num1 > num2) {
  console.log(`${num1} é maior que ${num2}`);
} else {
  console.log(`${num2} é maior que ${num1}`);
}

//Exercício 3

if (num1 > num2 && num1 > num3) {
  console.log(`${num1} é maior que ${num2} e maior que ${num3}`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`${num2} é maior que ${num1} e maior que ${num3}`);
} else {
  console.log(`${num3} é maior que ${num1} e maior que ${num2}`);
}

//Exercício 4

if (num1 + num2 + num3 == 180) {
  console.log("Triângulo válido");
} else if (num1 < 0 && num2 < 0 && num3 < 0) {
  console.log("Os ângulos do triângulo devem ser positivos");
} else {
  console.log("Triângulo inválido");
}

//Exercício 5

let pecaXadrez = "peão";
switch (pecaXadrez) {
  case "PEÃO".toLowerCase():
    console.log(
      "Essa peça faz movimentos para os lados, para cima e para baixo"
    );
    break;
  default:
    console.log("Peça inválida");
}

//Exercício 6

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 3 == 0) {
  console.log(true);
} else {
  console.log(false);
}

//Exercício 7

let salarioBruto = 3000;
let aliquotaInss = null;
let aliquotaIr = null;
let salarioDeduzidoInss = null;
let salarioDeduzidoIr;
let salarioLiquido = null;
let salarioPorcenAliquiotaInss = null;
let salarioPorcenAliquiotaIr = null;

if (salarioBruto <= 1556.94) {
  aliquotaInss = 0.08;
  salarioPorcenAliquiotaInss = salarioBruto * aliquotaInss;
  salarioLiquido = salarioBruto - salarioPorcenAliquiotaInss;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  aliquotaInss = 0.09;
  salarioPorcenAliquiotaInss = salarioBruto * aliquotaInss;
  salarioDeduzidoInss = salarioBruto - salarioPorcenAliquiotaInss;
  if (salarioDeduzidoInss > 1903.98 && salarioDeduzidoInss <= 2826.65) {
    aliquotaIr = 0.075;
    salarioPorcenAliquiotaInss = salarioDeduzidoInss * aliquotaIr;
    salarioDeduzidoIr = salarioPorcenAliquiotaInss - 142.8;
    salarioLiquido = salarioDeduzidoInss - salarioDeduzidoIr;
  }
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  aliquotaInss = 0.11;
  salarioPorcenAliquiotaInss = salarioBruto * aliquotaInss;
  salarioDeduzidoInss = salarioBruto - salarioPorcenAliquiotaInss;
  if (salarioDeduzidoInss > 1903.98 && salarioDeduzidoInss <= 2826.65) {
    aliquotaIr = 0.075;
    salarioPorcenAliquiotaInss = salarioDeduzidoInss * aliquotaIr;
    salarioDeduzidoIr = salarioPorcenAliquiotaInss - 142.8;
    salarioLiquido = salarioDeduzidoInss - salarioDeduzidoIr;
  } else if (salarioDeduzidoInss >= 2826.66 && salarioDeduzidoInss <= 3751.05) {
    aliquotaIr = 0.15;
    salarioPorcenAliquiotaInss = salarioDeduzidoInss * aliquotaIr;
    salarioDeduzidoIr = salarioPorcenAliquiotaInss - 354.8;
    salarioLiquido = salarioDeduzidoInss - salarioDeduzidoIr;
  } else if (salarioDeduzidoInss >= 3751.06 && salarioDeduzidoInss <= 4664.68) {
    aliquotaIr = 0.225;
    salarioPorcenAliquiotaInss = salarioDeduzidoInss * aliquotaIr;
    salarioDeduzidoIr = salarioPorcenAliquiotaInss - 636.13;
    salarioLiquido = salarioDeduzidoInss - salarioDeduzidoIr;
  } else {
    aliquotaIr = 0.275;
    salarioPorcenAliquiotaInss = salarioDeduzidoInss * aliquotaIr;
    salarioDeduzidoIr = salarioPorcenAliquiotaInss - 869.36;
    salarioLiquido = salarioDeduzidoInss - salarioDeduzidoIr;
  }
} else {
  aliquotaInss = 570.88;
  salarioDeduzidoInss = salarioBruto - aliquotaInss;
  if (salarioDeduzidoInss <= 4664.68) {
    aliquotaIr = 0.225;
    salarioPorcenAliquiotaInss = salarioDeduzidoInss * aliquotaIr;
    salarioDeduzidoIr = salarioPorcenAliquiotaInss - 636.13;
    salarioLiquido = salarioDeduzidoInss - salarioDeduzidoIr;
  } else {
    aliquotaIr = 0.275;
    salarioPorcenAliquiotaInss = salarioDeduzidoInss * aliquotaIr;
    salarioDeduzidoIr = salarioPorcenAliquiotaInss - 869.36;
    salarioLiquido = salarioDeduzidoInss - salarioDeduzidoIr;
  }
}

console.log(salarioLiquido);
