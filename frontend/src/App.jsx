import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateToDo } from './Components/CreateToDo'
import { ToDos } from './Components/ToDos'

function App() {
  const [todos, setTodos] = useState([]);
  // useEffect(async ()=>{
  //   const fetchTodos = await fetch('http://localhost:3000/todos');
  //   const todos = await fetchTodos.json();
  //   setTodos(todos);
  // },[todos])
  async function fetchtodo () {
    const fetchTodos = await fetch('http://localhost:3000/todos');
    const todos = await fetchTodos.json();
    setTodos(todos);
  }
  return (
    <>
      <CreateToDo />
      <br></br>
      <button onClick={()=>fetchtodo()} >Fetch to do</button>
      <br></br>
      <ToDos todos={todos}>
        </ToDos>
    </>
  )
}

export default App
