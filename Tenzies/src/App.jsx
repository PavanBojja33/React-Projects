import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Die from './components/Die.jsx'
import {nanoid} from 'nanoid'
import './App.css'

function App() {

  
  function genAllNewDice (){
    return new Array(10)
              .fill(0)
              .map(() =>  ({
                value:Math.floor(Math.random() * 6)+1,
                isHeld:false,
                id:nanoid()
              }))
  }
const [dice,setDice]=useState(genAllNewDice());

  return (
    <main>
      <div className="div-container">
        {dice.map(die => (
          <Die key={die.id} value={die.value} isHeld={die.isHeld} />
        ))}
      </div>
      <div className="reset">
        <button onClick={()=>setDice(genAllNewDice())}>Roll</button>
      </div>
    </main>
  )
}

export default App
