import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateToDo } from './Components/CreateToDo'
import { ToDos } from './Components/ToDos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateToDo />
      <ToDos />
    </>
  )
}

export default App
