import Header from "./Header";
import React, { useState, useEffect } from "react";
import getRandomFlags from "./helpers/flags";
import Card from "./Card";

// have button that toggles dispalying flag names

function App() {
  const [cards, setCards] = useState(getRandomFlags());
  const [clicked, setClicked] = useState([]);
  const [current, setCurrent] = useState(0);
  const [high, setHigh] = useState(0);

  const resetGame = () => {
    setCurrent(0);
    setClicked([]);
    setCards(getRandomFlags());
  }

  const handleClick = (flagId) => {
    if (clicked.includes(flagId)) {
      return resetGame();
    }
    setClicked(clicked.concat(flagId));
    setCards(getRandomFlags());
    setCurrent(current + 1);
    if (current >= high) { setHigh(high + 1) }
  }

  //(ON UPDATE) if new high score write to local storage
  useEffect(() => {
    if (high === 0) {return}
    localStorage.setItem('High', high);
  }, [high]);

  //(ON MOUNT) get high score from storage if exists
  useEffect(() => {
    const savedHighScore = parseInt(localStorage.getItem('High'));
    if (savedHighScore) { setHigh(savedHighScore) }
  }, []);

  return (
    <div>
      <Header current={current} high={high}/>
      <div className="card-container">
        {cards.map((card) => {
          return <Card 
                  key={card.id}
                  id ={card.id}
                  src={card.src}
                  handleClick={handleClick}
                  />
        })}
      </div>
    </div>
  );
}

export default App;
