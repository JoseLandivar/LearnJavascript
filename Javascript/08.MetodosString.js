let frase = "Mi perro es un pastor aleman y es bueno";
let frase2 = ", y es muy inteligente";

//ANCHOR: nos devuelve el texto envuelto en un enlace a

console.log(frase.anchor())

//BIG: nos devuelve el texto en un formato mas grande

document.write(frase.big())
document.write(frase)

//BOLD:nos devuelve el texto en negrita

document.write(frase.bold())

//CHARAT: nos da el caracter que coincida con el numero
//que le pasemos por el argumanrto

document.write(frase.charAt(7))

//CHARDCODEAT:nos devuelve el unicode
//que coincida con el numero que le pasemos por el argumanto

document.write(frase.charCodeAt(3))

//CONCAT: nos concatena o une un string con otro

document.write(frase.concat(' y es muy inteligente'))

//ENDSWIDTH:nos dice si el string acab en el conjunto
//de caracteres que le indiquemos

document.write(frase.endsWith('hola'))
document.write(frase.endsWith('aleman'))

//FONTCOLOR:nos cambia el color de texto del string

document.write(frase.fontcolor('red'))

//FONTSIZE: nos cambia el tamaño del texto pasandole un numero por el argumento

document.write(frase.fontsize(7))

//INCLUDES: nos da TRUE o FALSE en funcion si el carater  conjunto de
//caracteres que le indiquemos esta incluido en el texto

document.write(frase.includes('perro'))

//INDEXOFF: si existe el indice que le especifiquemos
//en el argumento nos da su posicion y si no nos da un -1

document.write(frase.indexOf('prima'))
document.write(frase.indexOf('perro'))

//ITALICS: nos convierte el texto en cursiva

document.write(frase.italics())

//LASTINDEXOF: NOS DARA LA POSICION DEL CARACTER O CONJUNTO 
//DE CARACTERES QUE LE PASEMOS POR EL ARGUMENTO

document.write(frase.lastIndexOf('es'))

//LENGTH: nos dara la longitud de un string 

document.write(frase.length)

//LINK: nos devuelve un enlace y le da el atributo por defecto href

document.write(frase.link('https://www.youtube.com/'))

//MATCH: nos devuelve la coincidencia si existiera o null

document.write(frase.match('prime'))
document.write(frase.match('perro'))

//REPEAT: nos devuelve el string repatido las veces que le ndiquemos

document.write(frase.repeat(3))

//REPLACE: nos permite reemplazar un a parte del string por otro
//pasandole por el primer argumento lo que queremos cambiar y 
//por el segundo la parte nueva

document.write(frase.replace('pastor aleman', 'boxer'))

//SLICE: nos devuelve una porcion de 
//cadena que indiquemos entre dos numeros

document.write(frase.slice(2, 8))

//SMALL: hace que el string se vea pequeño

document.write(frase.small())

//SPLIT: nos divide el string en sud string mas peuqeños
//que podemos desidir en cuantas porciones dividimos el string

document.write(frase.split(' ', 10))

//STARWIDTH: nos da TRU o FLASE en funcion si el primer caracter
//empieza por la letra que le pasemos distiguen mayus y minus

document.write(frase.startsWith('M'))

//SUB: nos da el string como si fuera un subtitulo

document.write(frase.sub())

//SUBSTRING: nos devuelve una porcion de cadena 
//entre dos numeros que pasemos como argumentos

document.write(frase.substring(4, 9))

//TOLOCALELOWERCASE: convierte los caracteres en minuscula
//dentro del entorno local

document.write(frase.toLocaleLowerCase())

//TOLOCALEUPPERCASE: convierte en mayuscula toda la strin

document.write(frase.toLocaleUpperCase())

//TOLOWERCASE: convierte la cadena a minuscula

document.write(frase.toLowerCase())

//TOUPPERCASE: convierte la cadena en mayuscula

document.write(frase.toUpperCase())