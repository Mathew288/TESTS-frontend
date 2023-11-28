import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Pages/Home'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
      </Routes>
      <Footer />
    </>
    

  )
}

export default App
