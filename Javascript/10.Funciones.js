//Funciones declaradas

function saludo(cadena){
    document.write(cadena)
}

saludo('Hola ')

function name(nombre,apellido){
    document.write(nombre,apellido)
    console.log(nombre,apellido)
}

name('Jose','Landivar')


//Funciones Expresadas

const saltar = function(){
    console.log('saltando')
}

saltar()