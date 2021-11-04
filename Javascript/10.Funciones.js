//Funciones Moderna Anonima Autoejecutable

(()=>{
    console.log('Buenos Dias,Noches')
})()

//Funcion Clasica Anonima Autoejecutable

(function(){  
    console.log('Buenos Madrugadas')
})()

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

//Funiones Flecha 
//Mmas modernas

const suma = (num1,num2) =>{
    console.log(num1+num2)
}

suma(5,5)

const resta = (num1,num2) => console.log(num1-num2)

resta(5,3)

//Funciones Autoejecutables y 
//Funciones Anonimas Autoejecuttables

//Funciones Autoejecutables

const saludos2 = (function(){
    console.log('Buenas Noches')
})()

//Funcion Clasica Autoejecutable

const saludos3 = (()=>{
    console.log('Buenos Dias')
})()
