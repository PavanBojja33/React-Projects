import React from 'react';
import cardsData from '../components/Cards';
import Content from '../components/Content';

export default function Menu() {
  const cards = cardsData.map((card, index) => (
    <Content key={index} image={card.image} name={card.name} rate={card.rate} />
  ));

  return (
    <div className="content-body">
      <div className="inner-content">
        <h1>Our Menu</h1>
        <div className="card-container">{cards}</div>
      </div>
    </div>
  );
}
