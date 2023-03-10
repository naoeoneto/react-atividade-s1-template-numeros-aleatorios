import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)

  function randomNumber(){
    setNumber(Math.floor(Math.random() * 100) + 1)
  }

  return (
    <div className="App">
      <h1>Número = {number}</h1>
      <button onClick={randomNumber}>Criar novo número</button>
    </div>
  )
}

export default App
