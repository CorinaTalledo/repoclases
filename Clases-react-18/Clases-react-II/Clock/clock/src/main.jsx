import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import "./reset.css";
import "./normalize.css";
// import Fonts from './fonts'
// import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider /*theme={theme}*/>
      {/* <Fonts /> */}
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
