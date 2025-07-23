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
      <div className="head-container">
        <h1>Tenzies</h1>
        <p>Roll the dice and try to get all 10 dice to show the same number. Click on dice to hold their value, then keep rolling the rest until they all match.</p>
      </div>
      <div className="result-container">
        <div className="results">
          <p className='head'>Rolls</p>
          <p className='score'>0</p>
        </div>
        <div className="results">
          <p className='head'>Time</p>
          <p className='timeInS'>0s</p>
        </div>
        <div className="results">
          <p className='head'>Best Time</p>
          <p className='bestInS'>s</p>
        </div>
      </div>
      <div className="div-container">
        {dice.map(die => (
          <Die key={die.id} value={die.value} isHeld={die.isHeld} />
        ))}
      </div>
      <div className="reset">
        <button onClick={()=>setDice(genAllNewDice())}>Roll Dice</button>
      </div>
    </main>
  )
}

export default App
