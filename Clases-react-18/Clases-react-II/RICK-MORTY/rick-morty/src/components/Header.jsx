import { Box, Image, Heading } from "@chakra-ui/react";

function Header() {
    return (
        <Box w='100%' h="50vh">
            <Image h="100%" w="100%" objectFit='cover' src='\bg2.jpg' alt='Rick & Morty' />
            <Heading>I'm a Heading</Heading>
        </Box>
    );
}

export default Header;
