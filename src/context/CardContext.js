import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ card }) => {
  const [selectedCard, setSelectedCard] = useState();
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);
  return (
    <UserContext.Provider value={{ selectedCard, setSelectedCard, from, setFrom, to, setTo }}>
      {card}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
