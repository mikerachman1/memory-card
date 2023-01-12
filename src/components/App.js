import Header from "./Header";
import React, { useState, useEffect } from "react";

const flagsArray = [
  {id: 1, src: "/flags/brazil.jpg", name: "Brazil"},
  {id: 2, src: "/flags/cameroon.jpg", name: "Cameroon"},
  {id: 3, src: "/flags/china.jpg", name: "China"},
  {id: 4, src: "/flags/el-salvador.jpg", name: "El Salvador"},
  {id: 5, src: "/flags/france.jpg", name: "France"},
  {id: 6, src: "/flags/germany.jpg", name: "Germany"},
  {id: 7, src: "/flags/greece.jpg", name: "Greece"},
  {id: 8, src: "/flags/guatemala.jpg", name: "Guatemala"},
  {id: 9, src: "/flags/honduras.jpg", name: "Honduras"},
  {id: 10, src: "/flags/india.jpg", name: "India"},
  {id: 11, src: "/flags/ireland.jpg", name: "Ireland"},
  {id: 12, src: "/flags/italy.jpg", name: "Italy"},
  {id: 13, src: "/flags/kenya.jpg", name: "Kenya"},
  {id: 14, src: "/flags/mali.jpg", name: "Mali"},
  {id: 15, src: "/flags/mexico.jpg", name: "Mexico"},
  {id: 16, src: "/flags/morocco.jpg", name: "Morocco"},
  {id: 17, src: "/flags/netherlands.jpg", name: "Netherlands"},
  {id: 18, src: "/flags/niger.jpg", name: "Niger"},
  {id: 19, src: "/flags/palestine.jpg", name: "Palestine"},
  {id: 20, src: "/flags/peru.jpg", name: "Peru"},
  {id: 21, src: "/flags/russia.jpg", name: "Russia"},
  {id: 22, src: "/flags/saudi-arabia.jpg", name: "Saudi Arabia"},
  {id: 23, src: "/flags/south-africa.jpg", name: "South Africa"},
  {id: 24, src: "/flags/turkey.jpg", name: "Turkey"},
  {id: 25, src: "/flags/united-kingdom.jpg", name: "United Kingdom"},
  {id: 26, src: "/flags/united-states.jpg", name: "United States"}
];

function App() {
  const [current, setCurrent] = useState(0);
  const [high, setHigh] = useState(0);

  const getRandomIndex = () => Math.floor(Math.random() * 26);

  const shuffle = () => {
    const flagsToDisplay = [];
    for (let i = 0; i < 12; i += 1) {
      flagsToDisplay.push(flagsArray[getRandomIndex()])
    }
    console.log(flagsToDisplay)
    return flagsToDisplay
  };

  return (
    <div>
      <Header current={current} high={high}/>
      <button onClick={shuffle}>Shuffle</button>
    </div>
  );
}

export default App;
