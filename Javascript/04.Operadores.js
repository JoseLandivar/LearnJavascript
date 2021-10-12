//Operadores de comparacion

//1º < menor que
//2º > mayor que
//3º >= mayor o igual que
//4º <= menor igual que
//5º == igual que
//6º === estrictamente igual que
//7º != diferente que
//8º !== estrictamente diferente que

console.log(5 < 3)

console.log(5 == "5")

console.log(5 === "5")

//Operadores Aritmeticos

console.log(3 + 5) //Suma
console.log(3 - 5) //Resta
console.log(3 * 5) //Multiplicacion
console.log(3 / 5) //Operador de division
console.log(3 % 5) //Operador de modulo o resto (1 o 0)

//Operadores Logicos

// ! operador de negacion
// && operador de and o y
// || operador or o ò

let nombre = "Maria";
let nombreMascota = "Oddie";
if (!nombreMascota) {
    console.log('La mascota no tiene nombre')
} else {
    console.log('La mascota tiene nombre y es ${nombreMascota}')
}