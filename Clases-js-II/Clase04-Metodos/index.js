

// obtenerIndice(valor, array)
// Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera array y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.

// const obtenerIndice = (valor, array) =>{
//     for (let i=0; i<array.length ; i++){
//         if (array[i] === valor){
//             return i
//         }
//     } 
//     return -1
// };

// console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]));

// obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 2
// obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1


//-------------------------------------------

// Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces.

// const repetir = (valor, cantidad) =>{
//     const nuevoArray = []

//     for (let i=0; i<cantidad; i++){
//         nuevoArray.push(valor)
//     } return nuevoArray
// };

// console.log(repetir('lovelace', 3));
// console.log(repetir('a', 5));
// console.log(repetir('html', 0));

// repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
// repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
// repetir('html', 0) // []


//-------------------------------------------

// Crear una función sumarImparesHasta que tome como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

//1) 
// const sumarImparesHasta = numero =>{
//     let suma = 0

//     for (let i=0; i<=numero; i++){
//         if (i % 2 !== 0){
//             suma = suma+i
//         }
//     }
//     return suma
// }


// const sumarImparesHasta2 = numero =>{
//     let suma = 0

//     for (let i=1; i<=numero; i+=2){
//         suma = suma+i
//     }
//     return suma
// }

// console.log(sumarImparesHasta2(47));

// sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
// sumarImparesHasta(13) // 49
// sumarImparesHasta(47) // 576

//-------------------------------------------


// crearCuentaRegresiva(numeroInicial)
// Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.


// const crearCuentaRegresiva = numeroInicial =>{
//     let numero = []

//     for (let i=numeroInicial; i>=0; i--) {
//         numero.push(i)
//     }
//     return numero
// }

// const crearCuentaRegresiva2 = numeroInicial =>{
//     let numero = []

//     for (let i=0; i<=numeroInicial; i++) {
//         numero.push(i)
//     }
//     return numero.reverse()
// }

// console.log(crearCuentaRegresiva2(8));

// crearCuentaRegresiva(3) // [3, 2, 1, 0]
// crearCuentaRegresiva(5) // [5, 4, 3, 2, 1, 0]





