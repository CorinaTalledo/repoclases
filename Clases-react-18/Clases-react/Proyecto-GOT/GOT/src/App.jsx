import { useState } from 'react'
import charactersGOT from "./data.js"
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx'
import ContainCard from './components/ContainCard.jsx'
import AddCharacter from './components/AddCharacter.jsx'
import Footer from './components/Footer.jsx'


function App() {

  JSON.parse(localStorage.getItem('characters'))

  const [characters, setCharacters] = useState(JSON.parse(localStorage.getItem('characters')) || []);
  
  // useState(charactersGOT);
  // console.log(characters);

  return (
    <div>
      <Header />
      <Banner />
      <AddCharacter />
      <ContainCard personajes={characters} />
      <Footer />
    </div>
  )
}


export default App

// []
