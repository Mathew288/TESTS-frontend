import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Pages/Home'

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
      </Routes>
    </div>
    

  )
}

export default App
