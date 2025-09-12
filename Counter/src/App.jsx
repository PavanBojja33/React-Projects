import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <h2>Counter :</h2>
      <h2>{count}</h2>
      <div className="b1">
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
      </div>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default App
