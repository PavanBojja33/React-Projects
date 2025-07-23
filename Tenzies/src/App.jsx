import { useState } from 'react'
import Confetti from 'react-confetti'
import Die from './components/Die.jsx'
import {nanoid} from 'nanoid'
import './App.css'
import { useWindowSize } from '@react-hook/window-size';


function genAllNewDice (){
  return new Array(10)
  .fill(0)
  .map(() =>  ({
    value:Math.floor(Math.random() * 6)+1,
    isHeld:false,
    id:nanoid()
  }))
}

function App() {


  const [dice,setDice]=useState(() => genAllNewDice());
  const [width, height] = useWindowSize();

  const gameWon=dice.every(die => die.isHeld) && dice.every(die => die.value===dice[0].value)
  

  function hold(id){
    setDice( prevDie => 
      prevDie.map(die => 
        die.id===id ?
          {...die,isHeld:!die.isHeld}
          : die
      )
    ); 
  }

  const call = () => {
    if(gameWon){
      setDice(() => genAllNewDice())
    }
    else{
      setDice(prevDie => prevDie.map(die => 
        die.isHeld ? die : {...die,value:Math.floor(Math.random() * 6)+1}
      ))
    }
  }

  const dieElements =  dice.map(die => 
    <Die 
      key={die.id} 
      id={die.id}
      value={die.value} 
      isHeld={die.isHeld} 
      hold={hold}
    /> )

  return (
    <div className='game'>
    
      {gameWon && <Confetti width={width} height={height}  />}
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
        {dieElements}
      </div>
      <div className="reset">
        <button onClick={call}>{gameWon ? "New Game" : "Roll Dice"}</button>
      </div>
    </main>
    </div>
  )
}

export default App
