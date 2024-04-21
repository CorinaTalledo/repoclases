
// 1) esSubconjunto(subconjunto, conjunto)
// Crear una función esSubconjunto que tome como argumento dos arrays, subconjunto y conjunto, y devuelva true si subconjunto es realmente subconjunto de conjunto, es decir, si todos los valores de subconjunto están en conjunto.

// const esSubconjunto = (subconjunto, conjunto) =>{

//     for (let i=0; i<subconjunto.length; i++){
//         if (!conjunto.includes(subconjunto[i])){
//             return false
//         }
//     }
//     return true
// }

// console.log(esSubconjunto([1], [1, 2, 3]));

// esSubconjunto([1], [1, 2, 3]) // true
// esSubconjunto([1, 2, 3], [1, 2, 3, 4, 5]) // true
// esSubconjunto([27, 49, 54], [54, 27, 8, 27, 49]) // true
// esSubconjunto([1, 2, 3], [1, 2]) // false
// esSubconjunto([1], [2, 3, 4]) // false


// ---------------------------------

// 👾 Monstruo
// Crear un juego de combate contra un monstruo.

// El juego debe contar con las siguientes variables:
// Vida jugadora
// Vida monstruo
// Cantidad de pociones
// Ataque máximo jugadora
// Ataque máximo monstruo
// Curación máxima poción
// Todos los valores anteriores deben ser números enteros (a elecci´ón)

// El juego debe tener las siguientes acciones posibles:
// ATACAR MONSTRUO: genera un número aleatorio entre 1 y Ataque máximo jugadora y lo resta a Vida monstruo
// TOMAR POCION: genera un número aleatorio entre 1 y Curación máxima poción y lo suma a Vida jugadora y resta 1 a Cantidad de pociones
// BUSCAR POCION: genera un número entre 1 y 4, si sale 1 suma una poción, sino no encuentra nada
// SALIR: termina el programa

// En todo momento se debe mostrar un mensaje de lo que está pasando
// Luego de cada acción, el monstruo ataca a la jugadora y le resta a Vida jugadora un número aleatorio entre 1 y Ataque máximo monstruo
// Luego del ataque del monstruo, se debe mostrar la vida de ambos
// El programa termina cuando o la jugadora o el monstruo se quedan con vida igual o menor a 0
// Mostrar un mensaje con el resultado final

// ------------

let vidaJugadora = 100
let vidaMonstruo = 200
let cantidadPociones = 3
const ataqueMaxJugadora = 20
const ataqueMaxMonstruo = 25
const curacionMaxPocion = 5

let random = 0

const atacarMonstruo = () =>{
    let randomDos = Math.floor(Math.random()*ataqueMaxJugadora);
    return random = randomDos
}

// const atacarMonstruo = () =>{
//     vidaMonstruo - Math.floor(Math.random()*ataqueMaxJugadora);
// }

const tomarPocion = () =>{
    (Math.floor(Math.random()*curacionMaxPocion) + vidaJugadora);
    cantidadPociones - 1;
}

const buscarPocion = () =>{
    if(Math.floor(Math.random()*4) === 1){
        cantidadPociones += 1;
    }
}


let mostrarEstado = () =>{
    alert (`Jugadora: Vida=${vidaJugadora} - Pociones=${cantidadPociones}. Monstruo: Vida=${vidaMonstruo-random}`)
}

// const juego = () =>{
//     do{
        let jugada = prompt(`Elige 1 si quieres atacar al monstruo, 2 si quieres tomar una pocion, 3 si quieres buscar una pocion y 4 si quieres salir`)
    
        if (jugada === "1"){
            console.log(Math.floor(Math.random()*ataqueMaxJugadora));
            atacarMonstruo();
            mostrarEstado();

        } else if (jugada === "2"){
            tomarPocion();
            mostrarEstado();

        } else if (jugada === "3"){
            buscarPocion();
            mostrarEstado();

        } else if (jugada === "4"){
            alert(`Saliste del juego, adios, no te quiero ver MAS`)

        } else {
            alert(`Jugada no válida`)
        }    
    // } while(vidaJugadora>0 || vidaMonstruo>0 || jugada === "4");


    if (vidaJugadora === 0){
        alert(`Moriste`)
    } else if (vidaMonstruo === 0){
        alert(`Ganaste`)
    }
// }









// Luego de cada acción, el monstruo ataca a la jugadora y le resta a Vida jugadora un número aleatorio entre 1 y Ataque máximo monstruo
// Luego del ataque del monstruo, se debe mostrar la vida de ambos
// El programa termina cuando o la jugadora o el monstruo se quedan con vida igual o menor a 0
// Mostrar un mensaje con el resultado final










