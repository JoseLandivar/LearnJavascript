//Ambito superglobal
//tenemos acceso desde cualquier archivo

//Ambito global 
//Es el contexto que engloba un mismo archivo

//VAR
var perro = "oddie"
console.log(perro)

//LET
let pez = "tiburon"
console.log(pez)

//Ambito local
//Es el contexto que engloba a una funcion

//VAR (su hambito es local)
function saltar(){
    var gato = "felino"
}
saltar()
//console.log(gato)

//Ambito de bloque
//Es el contexto que esta englobado dentro de un bucle o un condicional un if

//VAR
//VAR SE SALE DEL AMBITO DE BLOQUE NO RECOMENDAO SU USO
let nombre = "Maria"

if(nombre === "Maria"){
    var apellido = "gonzales"
    let mascota = "gato"
}

console.log(apellido)