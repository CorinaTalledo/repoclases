
import { useEffect/* , useState */ } from "react"


export default function Montaje() {

    // const [data, useData] = useState([])

    useEffect(() => {console.log("Hola")}, [])

    // El "Hola" se va a ver apenas se visualice el componente.


  return (
    <div>Montaje</div>
  )
}


// []