import Cards from "./Cards.jsx";
import { useEffect, useState } from "react";
import { Container, Flex } from '@chakra-ui/react'


function ContainCard() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function getCharacters() {
            try{
                const response = await fetch('https://rickandmortyapi.com/api/character')
                const data = await response.json()
                setCharacters(data.results)
            } catch (error){
                console.log(error);
            }
        }
        getCharacters()
    }, [])
    

    return (
        <>
        <Container maxW='95%' my={8}>
            <Flex direction="row" flexWrap="wrap" justifyContent="center">
                {characters && characters.map((character) =>
                    <Cards key={character.id} image={character.image} name={character.name} species={character.species} status={character.status} gender={character.gender} />
                )}
            </Flex>
        </Container>
        </>
    )
}

export default ContainCard