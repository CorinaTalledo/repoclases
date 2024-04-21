
import { Card, CardBody } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'


export default function ({ fullName, title, family, image, imageUrl }) {
  return (
      <Card maxW="sm">
        <CardBody>
          <Image
            src={imageUrl}
            alt={image}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{fullName}</Heading>
            <Badge>
              {title}
            </Badge>
            <Text>
              {family}
            </Text>
          </Stack>
        </CardBody>
      </Card>
  );
}
