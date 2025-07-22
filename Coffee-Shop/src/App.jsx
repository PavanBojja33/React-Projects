import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cardsData from './components/Cards'
import Header from './components/Header'
import Content from './components/Content'

export default function App(){

  const cards = cardsData.map((card,index) => {
    return <Content key={index} image={card.image} name={card.name} rate={card.rate} />
  })
  
  return (
    <>
      <Header/>
      <div className="content-body">
        <div className='inner-content'>
          <h1>Our Menu</h1>
          <div className="card-container">  
                {cards}
          </div>
        </div>    
      </div>
    </>
  )
}
