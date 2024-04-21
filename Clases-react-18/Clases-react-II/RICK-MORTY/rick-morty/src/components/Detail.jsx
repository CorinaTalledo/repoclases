import { Heading, Text, Box, Image } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import RingLoader from "react-spinners/RingLoader";
import { useParams } from 'react-router-dom';


function Detail() {

    const [character, setCharacter] = useState({})
    const [loading, setLoading] = useState(true)

    const params = useParams();

    useEffect(() => {
        async function characterDetail(){
            const response = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
            const data = await response.json()
            setTimeout(() =>{
                setCharacter(data)
                setLoading(false)
            }, 2000)
        }
        characterDetail()
    }, [])
    

    return (
        <>
            <RingLoader
                    loading={loading}                        
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
            />
                    <Heading as='h2' size='2xl'>
                        DETALLES
                    </Heading>

                    <Heading as='h3' size='2xl'>
                        {character?.name}
                    </Heading>
                    <Box boxSize='sm'>
                        <Image src={character?.image} alt={character?.name} />
                    </Box>
                    <Text fontSize='lg'>{character?.species}</Text>
                    <Text fontSize='lg'>Origin: {character.origin?.name}</Text>
                    <Text fontSize='lg'>Location: {character.location?.name}</Text>
        </>
                )}

export default Detail