let n = 5;
let result = "";

if (n > 1) {
  for (let index = 0; index < n; index += 1) {
    result += "*";
  }

  for (let index = 0; index < n; index += 1) {
    console.log(result);
  }
}
