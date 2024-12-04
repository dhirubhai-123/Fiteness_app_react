import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { favExercisesContext } from './context/context'


// import Home from "./Pages/Home"
// import Navbar from "./Components/Navbar"
// import Footer from "./Components/Footer"
// import ExerciseDetails from "./Pages/ExerciseDetails"

function App() {
  const [count, setCount] = useState(0)
  const [favExercises, updateFavExercises] = useState([])
  

  return (
    <>
      <favExercisesContext.Provider value={{ favExercises, updateFavExercises }}>
        <Navbar />
        <Home />
        <Footer />
      </ favExercisesContext.Provider >
    </>
  )
}

export default App
