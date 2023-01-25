import React, { useContext } from 'react';
import { UserContext } from '../context/CardContext.js';
import CardList from './CardList';

export default function Player({ player, hand }) {
  const { selectedCard, setSelectedCard, to, setTo } = useContext(UserContext);
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
    </div>
  );
}
