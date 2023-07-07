let n = 5;
let result = "";
let position = n - 1;

if (n > 1) {
  for (let index = 0; index < n; index += 1) {
    for (let indexColumn = 0; indexColumn < n; indexColumn += 1) {
      if (indexColumn < position) {
        result += " ";
      } else {
        result += "*";
      }
    }
    console.log(result);
    result = "";
    position -= 1;
  }
}
