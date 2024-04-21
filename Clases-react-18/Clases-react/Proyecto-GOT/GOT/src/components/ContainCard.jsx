
import Card from "./Card"
import { SimpleGrid } from '@chakra-ui/react'


export default function ContainCard({ personajes }) {
  return (
    <div> 
      <SimpleGrid minChildWidth='300px' columns={[2, null, 3]} spacing='40px'>
        {/* El map "copia" y recorre el array de personajes y hace el "for" para crear cada una de las tarjetas */}
        { personajes.map((personaje, index) =>{
          return(
          
            <Card 
              key = {index}
              fullName = {personaje.fullName}
              title = {personaje.title}
              family = {personaje.family}
              image = {personaje.image}
              imageUrl = {personaje.imageUrl}
            />
          
          );
        })}
      </SimpleGrid>
    </div>
  );
}
