import React, { useContext } from 'react';
import { UserContext } from '../context/CardContext.js';
import Card from './Card';

export default function ExecutePassButton({ passCard }) {
  const { selectedCard, setSelectedCard, from, to } = useContext(UserContext);
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} /> from {from} to {to}
    </div>
  );
}
