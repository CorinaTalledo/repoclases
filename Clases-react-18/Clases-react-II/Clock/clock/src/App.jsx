import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import Timer from './components/Timer'
import SetTimer from './components/SetTimer'


function App() {

  const [showTimer, setshowTimer] = useState(false)

  const [timeMode, setTimeMode] = useState('24hs')

  return (
    <>
      <Button colorScheme='blue' onClick={() => setshowTimer(false)}>Configuracion</Button>
      <Button colorScheme='blue' onClick={() => setshowTimer(true)}>Timer</Button>
      { showTimer ? <Timer timeMode={timeMode} /> : <SetTimer timeMode={timeMode} setTimeMode={setTimeMode} />}
    </>
  )
}

export default App
