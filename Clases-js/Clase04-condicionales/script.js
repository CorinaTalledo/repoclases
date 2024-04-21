
// REPASO

// OPERADOR MODULO: El modulo es el resto de una division. Este operador lo que hace es dividir al numero de la funcion por el numero que pongamos despues del % y devuelve lo que sobre ya que solo entiende numeros enteros.


// Ejercicio: esImpar(numero)
// Crear una función esImpar que tome como argumento un número y devuelva true si dicho números es impar o false si no lo es

// TIP: un número es impar si divido por 2 el resto (o módulo) de esa operación no es 0

// ARMAMOS LA FUNCION:
// const esImpar = (numero) =>{
//     console.log(numero);
// };

// - esImpar: Es el nombre de la funcion.
// - (numero): Es el parametro. Le estamos diciendo a la funcion que lo que vamos a poner adentro es un numero.
// - console.log(numero): Es para poder ver el resultado en la consola.


// ACTIVAMOS LA FUNCION PARA QUE ARRANQUE

// esImpar(2);

// - esImpar: Es el nombre de la funcion y la estamos llamando para que la computadora sepa que funcion tiene que leer y activar.
// - (2): Como en la funcion dijimos que entre parentesis tenia que tener un numero, le estamos diciendo CUAL numero.


// OTRA MANERA DE HACERLO: 

// const esImpar = (numero) =>{
//     return numero % 2;
// };

// console.log(numero);


// Recuerda que return se utiliza para devolver un valor desde una función, mientras que console.log se utiliza para imprimir mensajes o valores en la consola para propósitos de visualización o depuración.

// Puedes elegir usar return, console.log o ambos según tus necesidades en cada función flecha que escribas.


// -------------------------------


// OPERADORES DE IGUALDAD


// - Dos iguales (==): Compara valores.
// - Tres iguales (===): Comprar valor Y TIPO de dato. Por buenas practicas, conviene usar este triple igual

    // console.log(1 == '1');
        // Va a decir que es verdadero porque 1 es igual a 1 aunque el segundo sea un string.

    // console.log(1 === '1');
        // Va a decir que es falso porque aunque los dos sean un 1, el primero es un numero pero el segundo es un string.



// CONDICIONALES


// Ejercicio: puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

const puedeVerPelicula = (edad, tieneAutorizacion) => {
    if(edad >= 15) {
        console.log('se cumple la condicion y el usuario es mayor de edad')
        return true;
    } else if(tieneAutorizacion) {
        console.log('no es mayor de edad pero si se cumple la condicion de tener autorizacion')
        return true;
    } else {
        console.log('no se cumple ninguna condicion, el usuario no puede ver la pelicula')
        return false;
    }    
}


// puedeVerPelicula(12, false) // false
// puedeVerPelicula(12, true)  // true
// puedeVerPelicula(16, false) // true
// puedeVerPelicula(18, true)  // true












