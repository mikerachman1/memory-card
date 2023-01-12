import Header from "./Header";
import React, { useState, useEffect } from "react";
import getRandomFlags from "./helpers/flags";
import Card from "./Card";

// have button that toggles dispalying flag names

function App() {
  const [cards, setCards] = useState(getRandomFlags())
  const [current, setCurrent] = useState(0);
  const [high, setHigh] = useState(0);

  return (
    <div>
      <Header current={current} high={high}/>
      <div>
        {cards.map((card) => {
          return <Card src={card.src} name={card.name}/>
        })}
      </div>
    </div>
  );
}

export default App;
