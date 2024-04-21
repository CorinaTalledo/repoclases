import React from 'react'
import { FormControl, RadioGroup, HStack, Radio } from '@chakra-ui/react'


function SetTimer({ timeMode, setTimeMode }) {

    return (
        <FormControl as='fieldset'>
            <RadioGroup defaultValue='Itachi' onChange={setTimeMode} value={timeMode}>
                <HStack spacing='24px'>
                    <Radio value='12hs'>AM/PM</Radio>
                    <Radio value='24hs'>00:00</Radio>
                </HStack>
            </RadioGroup>
        </FormControl>
    )
}

export default SetTimer