import React, { useState } from 'react';
import "../App.css";

function Counter() {

    const [count, setCount] = useState(0);
    
    const handleCount = (value,dub) => {
        
        setCount((count + value)*dub);

    }

    return (
      <div className="container">
        <h1>Counter: {count}</h1>
        <div className="btnContainer">
          <button 
            onClick={() => {
              handleCount(1, 1);
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              handleCount(-1, 1);
            }}
          >
            Sub
          </button>
          <button
            onClick={() => {
              handleCount(0, 2);
            }}
          >
            Double
          </button>
        </div>
      </div>
    );


}

export default Counter;