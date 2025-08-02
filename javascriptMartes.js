console.log("los valores no pueden ser negativos");
function calcular(base, altura){
    area = (base * altura)/ 2
    return area
}

let base = parseFloat(prompt("ingrese el valor de la base"))
let altura = parseFloat(prompt("ingrese el altura"))
let resultado = calcular(base, altura)
console.log(`el area del triangulo es: ${resultado}`);
