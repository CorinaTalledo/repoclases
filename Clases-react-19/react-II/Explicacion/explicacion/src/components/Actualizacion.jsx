
import { useState, useEffect } from "react"

export default function Actualizacion() {

    const [count, setCount] = useState(1)
    
    useEffect(() => {
        console.log("Hola");
    }, [])

    // Usando solo el useState, como antes haciendo que se muestre lo que tiene el componente en el montaje con el useEffect, el console log se va a ver una sola vez aunque el boton se apriete muchas veces, no se va a volver a leer el console log.

    useEffect(() => {
        console.log("Hola con actualizacion");
    }, [count])

    // Aca le estoy diciendo che, actualizame el console log DEPENDIENDO del estado de count. Entonces, cada vez que count se ejecute o se actualice, se va a ejecutar el console log.

  return (
    <div>
        <button onClick={() =>setCount(count+1)}>
            <h1> {count} </h1>
        </button>
    </div>
  )
}



// []
