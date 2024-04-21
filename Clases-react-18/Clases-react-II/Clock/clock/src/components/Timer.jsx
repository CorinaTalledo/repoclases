import React from 'react'
import { Container, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import moment from 'moment'


function Timer({timeMode}) {

    const [time, setTime] = useState(timeMode === '24hs' ? moment().format('HH:mm:ss') : moment().format('hh:mm:ss A'))

    useEffect(() => {
        let counter;
        if (timeMode === '24hs'){
            counter = setInterval(() => {
                setTime(moment().format('HH:mm:ss'))
            }, 1000)
        } else {
            counter = setInterval(() => {
                setTime(moment().format('hh:mm:ss A'))
            }, 1000)
        }

        return () =>{
            clearInterval(counter)
        }
    }, [])

    return (
        <Container maxW='container.sm' bg='green.400' color='#262626'>
            <Text fontSize='4xl'>{time}</Text>
        </Container>
    )
}

export default Timer