
// filter(array, callback)
// Crear una función filter que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// si dicho callback devuelve true, pushea el elemento a un nuevo array
// devuelva el array final con los elementos que pasaron el "filtro".

// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0

//1)
// const filter = (array, callback) =>{
//     const nuevoArray = []

//     for (let element of array){
//         if (callback(element)){
//             nuevoArray.push(element)
//         }
//     }
//     return nuevoArray
// };
// console.log(filter(numeros, multiploDe10));


//2)
// const filter = (array, callback) => {
//     return array.filter(callback)
// }

// console.log(filter(numeros, multiploDe10));

// filter(numeros, multiploDe10) // [10, 40, 50]

// --------------------------


// some(array, callback)
// Crear una función some que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva true si al menos una de las llamadas al callback devolvió true


// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// const esPositivo = (x) => x >= 0

//1)
// const some = (array, callback) =>{
//     for (let element of array){
//         if (callback(element)){
//             return true
//         }
//     }
// };


//2)
// const some = (array, callback) =>{
//     return array.some(callback)
// }

// console.log(some(numeros, multiploDe10));

// some(numeros, multiploDe10) // true
// some(numeros, esPositivo) // true


//---------------------------------

// find(array, callback)
// Crear una función find que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva el elemento pasado como argumento del primer callback que devuelva true
// si ningún callback devuelve true, devuelva undefined


// const numeros = [8, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0

//1)
// const find = (array, callback) =>{
//     for (let element of array){
//         if (callback(element)){
//             return element
//         }
//     }
//     return `undefined`
// };


//2)
// const find = (array, callback) =>{
//     return array.find(callback)
// };

// console.log(find(numeros, multiploDe10));

// find(numeros, multiploDe10) // 40













