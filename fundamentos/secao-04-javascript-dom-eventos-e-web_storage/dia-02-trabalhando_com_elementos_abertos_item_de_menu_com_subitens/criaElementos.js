const pai = document.getElementById("pai");
const filho = document.getElementById("elementoOndeVoceEsta");
const filhoDofilho = document.getElementById("primeiroFilhoDoFilho");

let section = document.createElement("section");
let sectionFilho = document.createElement("section");
let sectionFilhoDoFilho = document.createElement("section");

pai.appendChild(section).id = "irmaoOndeEsta";

filho.appendChild(sectionFilho).id = "filhoOndeEsta";

filhoDofilho.appendChild(sectionFilhoDoFilho).id = "filhoDoFilhoDoFilho";

const filhoDoFilhoDoFilho = document.getElementById("filhoDoFilhoDoFilho");

console.log(filhoDoFilhoDoFilho.parentElement.parentElement.nextElementSibling);
