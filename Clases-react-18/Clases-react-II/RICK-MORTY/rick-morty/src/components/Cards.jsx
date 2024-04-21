import { Card, CardBody, Image, Stack, Heading, Badge, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function Cards({id, image, name, species, status, gender}) {

    const navigate = useNavigate();

    return (
        <Card w='400px' boxShadow='2xl' p='6' rounded='md' bg='white' border='1px' borderColor='gray.200' m={4} direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline" key={id} onClick={() => navigate(`/detail/${id}`)}>
            <Image objectFit="cover" maxW={{ base: "100%", sm: "200px" }} src={image} alt={name} />

            <Stack>
                <CardBody>
                    <Heading size="md">{name}</Heading>

                    <Flex direction='column' >
                        <Badge py="1" my="2" variant='outline' colorScheme='green'>
                            {species}
                        </Badge>

                        <Badge py="1" my="2" variant='outline' colorScheme='green'>
                            {status}
                        </Badge>

                        <Badge py="1" my="2" variant='outline' colorScheme='green'>
                            {gender}
                        </Badge>
                    </Flex>
                </CardBody>
            </Stack>
        </Card>
    )
}
