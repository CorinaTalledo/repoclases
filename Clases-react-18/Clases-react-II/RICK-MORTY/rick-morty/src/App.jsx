  import Header from './components/Header.jsx';
  import ContainCard from './components/ContainCard.jsx'
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
  import Detail from './components/Detail.jsx';
  import NotFound from './components/NotFound.jsx';

  function App() {

    return (
      <>
        <BrowserRouter>

          {/* El header va adentro del ruteo porque aparece siempre, en todas las rutas. */}
          <Header /> 

          <Routes>
            <Route path='/' element={<ContainCard />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }

  export default App