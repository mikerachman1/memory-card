import Header from "./Header";
import React, { useState, useEffect } from "react";

function App() {
  const [current, setCurrent] = useState(0);
  const [high, setHigh] = useState(0);
  
  return (
    <div>
      <Header current={current} high={high}/>
    </div>
  );
}

export default App;