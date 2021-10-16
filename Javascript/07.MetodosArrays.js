//METODOS DE LOS ARRAYS

const frutas = [
    'platano',
    'manzana',
    'pera',
    'melon',
    'uva',
    'sandia'
]
const verduras = [
    'lechuga',
    'pepino',
    'tomate'
]

const empresa = [{
        id: 0,
        nombre: 'Jose',
        apellidos: 'Landivar Apuri',
        edad: 25
    },
    {
        id: 1,
        nombre: 'Sergio',
        apellidos: 'Landivar Apuri',
        edad: 23
    },
]

//CONCAT: nos une dos arrays o añade elementos al array

console.log(frutas.concat('limon'))

//EVERY: nos obliga a que todos los elementos de array cumplan 
//una determinada condicion

frutas.every(frutas => {
        console.log(frutas == 'sandia')
    }) //en este caso es falso por que no todos los elementos son sandias

//SOME: nos devuelve elemento por elemento si son TRUE o FALSE

frutas.some(frutas => {
    console.log(frutas === 'sandia')
})

//FILTER: nos filtra el array y nos devuelve otro array 
//con las condiciones que le demos

frutas.filter(frutas => {
    if (frutas.length > 5) {
        console.log(`${frutas} tiene mas de 5 caracteres`)
    } else {
        console.log(`${frutas} tiene menos de 5 caracteres`)
    }
})

//FIND: nos busca las coincidencias que le digamos

frutas.find(frutas => {
    if (frutas !== 'melon') {
        console.log(frutas)
    } else {
        console.log(`${frutas} es la unica coincidencia`)
    }
})

//FOREACH=POR CADA: por cada elemento nos recorre array

frutas.forEach(frutas => {
    console.log(frutas)
})

//NCLUDES: nos TRU o FALSE en funcion si existe ese elemento del array

console.log(frutas.includes('manzana'))

//INDEXOF:nos devuelve un numero negativo sino encuentra 
// el elemento en el array y si lo encuentra nos dicela posicion

console.log(frutas.indexOf('uva'))
console.log(frutas.indexOf('manga'))

//JOIN: nos separa los elementos del array segun le indiquemos

console.log(frutas.join('/*/'))

//LASTINDEXOFF: nos da la posicion del ultio elemento buscado

console.log(frutas.lastIndexOf('sandia'))

//LENGTH(propiedad): mide la longitud

console.log(frutas.length)
console.log(verduras.length)

//MAP: nos itera los arrays de objetos y nos 
//devuelve un array

empresa.map(em => {
    document.body.innerHTML += `
    
    <ul>
        <li>
            Id:${em.id}<br>
            Nombres:${em.nombre}<br>
            Apellidos:${em.apellidos}<br>
            Edad:${em.edad}
        
        
        </li>
    </ul>
    `
})


//POP: elimina el ultimo elemento de un array

console.log(frutas.pop())

//PUSH: agrega al final del array el nuevo elemento que le indiquemos

console.log(frutas.push('coco'))
console.log(frutas)

//REDUCE: reduce el array a un solo elemento

frutas.reduce(frutas => {
    console.log(frutas)
})

//REVERSE: nos devuelve el array invertido

console.log(frutas.reverse())

//SLICE: nos devuelve los indices comprendidos entre el 
//primer indice que le indiquemos y el segundo no incluido

console.log(frutas.slice(1, 4))

//SORT: nos ordena el array alfabeticamente

console.log(frutas.sort())

//UNSHIFT: nos agrega al principio del array el elemento que le indiquemos

console.log(frutas.unshift('mani'))
console.log(frutas)

//SHIFT: nos elimina el primer elemento del array

console.log(frutas.shift())
console.log(frutas)

//SPLICE: nos da los lemento entre los dos indices
//ponemos desde dondeo¡ queremos que elimine y despues cuantos elementos elimina

console.log(frutas.splice(0, 4))
console.log(frutas)